import { useState, useEffect } from "react";
import axios from "axios";

const ManageSession = () => {
  const [sessions, setSessions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    skillId: "",
    studentId: "",
    schedule: "",
  });

  useEffect(() => {
    fetchSessions();
    fetchSkills();
    fetchUsers();
  }, []);

  const fetchSessions = () => {
    axios
      .get("http://localhost:3000/api/sessions/session")
      .then((res) => {
        setSessions(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const fetchSkills = () => {
    axios
      .get("http://localhost:3000/api/skills/skills")
      .then((res) => setSkills(res.data.data))
      .catch((err) => console.error("Skills fetch error:", err));
  };

  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/api/users/all")
      .then((res) => {
        const list = res.data.users || res.data.data || [];
        setUsers(list.filter((u) => u.role === "user"));
      })
      .catch((err) => console.error("Users fetch error:", err));
  };

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { skillId, studentId, schedule } = formData;
  
    if (!skillId || !studentId || !schedule) {
      setMessage("Please fill all fields.");
      return;
    }
  
    console.log("Submitting:", formData);
  
    try {
      const res = await axios.post("http://localhost:3000/api/sessions", formData);
      console.log("Response:", res.data);
  
      if (res.data.success) {
        setSessions((prev) => [...prev, res.data.data]);
        setMessage("Session created successfully!");
        setShowModal(false);
        setFormData({ skillId: "", studentId: "", schedule: "" });
      } else {
        setMessage(res.data.message || "Unknown error");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setMessage("Error creating session: " + (err.response?.data?.message || err.message));
    }
  };
  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this session?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/sessions/session/${id}`);
      setSessions((prev) => prev.filter((s) => s._id !== id));
      setMessage("Session deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("Error deleting session.");
    }
  };

  if (loading) return <p>Loading sessions…</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Sessions</h2>

      {message && <p className="text-success">{message}</p>}

      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setMessage("");
          setShowModal(true);
        }}
      >
        New Session
      </button>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Session</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Skill</label>
                    <select
                      name="skillId"
                      className="form-control"
                      value={formData.skillId}
                      onChange={handleChange}
                    >
                      <option value="">-- select skill --</option>
                      {skills.map((skill) => (
                        <option key={skill._id} value={skill._id}>
                          {skill.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Student</label>
                    <select
                      name="studentId"
                      className="form-control"
                      value={formData.studentId}
                      onChange={handleChange}
                    >
                      <option value="">-- select student --</option>
                      {users.map((u) => (
                        <option key={u._id} value={u._id}>
                          {u.firstName} {u.lastName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Schedule</label>
                    <input
                      type="datetime-local"
                      name="schedule"
                      className="form-control"
                      value={formData.schedule}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Skill</th>
            <th>Faculty</th>
            <th>Schedule</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.length > 0 ? (
            sessions.map((session, idx) => (
              <tr key={session._id || idx}>
                <td>{idx + 1}</td>
                <td>{session.skillId?.name ?? "N/A"}</td>
                <td>
                  {session.facultyId
                    ? `${session.facultyId.firstName} ${session.facultyId.lastName || ""}`
                    : "N/A"}
                </td>
                <td>
                  {session.schedule
                    ? new Date(session.schedule).toLocaleString()
                    : "N/A"}
                </td>
                <td>{session.status ?? "Pending"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(session._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No sessions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSession;
