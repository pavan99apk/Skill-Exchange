import { useState, useEffect } from "react";
import axios from "axios";

const ManageSkill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/skills/skills") // Adjust endpoint if needed
      .then((res) => {
        setSkills(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      axios
        .delete(`http://localhost:3000/api/skills/${id}`)
        .then(() => {
          setSkills(skills.filter((skill) => skill._id !== id));
        })
        .catch((err) => alert("Error deleting skill: " + err.message));
    }
  };

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Skills</h2>
      
      {/* Add Skill Button
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Add Skill
      </button> */}

      {/* Add Skill Modal */}
      {/* {showModal && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Skill</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddSkill}>
                  <div className="mb-2">
                    <label>Skill Name:</label>
                    <input
                      type="text"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label>Description:</label>
                    <textarea
                      value={newSkill.description}
                      onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label>Category:</label>
                    <input
                      type="text"
                      value={newSkill.category}
                      onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                      className="form-control"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Add Skill</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )} */}


      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
          
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <tr key={skill._id}>
                <td>{index + 1}</td>
                <td>{skill.name}</td>
                <td>{skill.description}</td>
                <td>{skill.category}</td>
                
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(skill._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No skills found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSkill;
