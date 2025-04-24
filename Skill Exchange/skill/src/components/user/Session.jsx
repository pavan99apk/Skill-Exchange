import React, { useState, useEffect } from "react";
import axios from "axios";

// ⭐ Star Rating Component
const StarRating = ({ rating, onChange }) => {
  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            style={{
              color: value <= rating ? "#ffc107" : "#e4e5e9",
              fontSize: "1.5rem",
            }}
            onClick={() => onChange(value)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

const Session = () => {
  const [formData, setFormData] = useState({
    skillId: "",
    facultyId: "",
    schedule: "",
    status: "Pending",
    rating: 0,
  });

  const [message, setMessage] = useState("");
  const [skills, setSkills] = useState([]);
  const [faculties, setFaculties] = useState([]);

  const fetchData = async () => {
    try {
      const facultiesRes = await axios.get("/api/users/all");
      setFaculties(facultiesRes.data.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const getAllSkills = async () => {
    try {
      const skillsRes = await axios.get("/api/skills/skills");
      setSkills(skillsRes.data.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchData();
    getAllSkills();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/sessions/session", formData);
      console.log("Session Created:", response.data);
      setMessage("✅ Session created successfully!");
      setFormData({
        skillId: "",
        facultyId: "",
        schedule: "",
        status: "Pending",
        rating: 0,
      });
    } catch (error) {
      console.error("❌ Error creating session:", error);
      setMessage("❌ Error creating session. Check console for details.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Create New Session</h2>
      <form onSubmit={handleSubmit}>
        {/* Skill Dropdown */}
        <div>
          <label>Skill:</label>
          <select
            name="skillId"
            value={formData.skillId}
            onChange={handleChange}
            required
            disabled={!skills.length}
          >
            <option value="">Select Skill</option>
            {skills.map((skill) => (
              <option key={skill._id} value={skill._id}>
                {skill.name}
              </option>
            ))}
          </select>
        </div>

        {/* Faculty Dropdown */}
        <div>
          <label>Faculty:</label>
          <select
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            required
          >
            <option value="">Select Faculty</option>
            {faculties.length > 0 ? (
              faculties.map((faculty) => (
                <option key={faculty._id} value={faculty._id}>
                  {faculty.firstName}
                </option>
              ))
            ) : (
              <option disabled>Loading faculties...</option>
            )}
          </select>
        </div>

        {/* Schedule */}
        <div>
          <label>Schedule:</label>
          <input
            type="datetime-local"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            required
          />
        </div>

        {/* Status */}
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Star Rating */}
        <div>
          <label>Rating:</label>
          <StarRating
            rating={formData.rating}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, rating: value }))
            }
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Create Session
        </button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default Session;
