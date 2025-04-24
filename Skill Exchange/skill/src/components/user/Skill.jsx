import { useState, useEffect } from "react";
import axios from "axios";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: ""
  });

  // Dropdown options based on your platform
  const skillNames = ["JavaScript", "Python", "React", "Node.js", "UI/UX", "Data Science"];
  const categories = ["Technology", "Art", "Language", "Science", "Business"];
  const descriptions = [
    "Learn to build modern web apps.",
    "Master data analysis and automation.",
    "Design beautiful user interfaces.",
    "Understand backend development.",
    "Explore business and entrepreneurship."
  ];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/skills/skills");
      setSkills(response.data.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/skills/skill", formData);
      console.log("Skill added:", response.data);
      fetchSkills();
      setFormData({ name: "", category: "", description: "" });
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this skill?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/skills/${id}`);
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-screen-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Skill</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Skill Name</label>
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            >
              <option value="">Select Skill</option>
              {skillNames.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <select
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            >
              <option value="">Select Description</option>
              {descriptions.map((desc, idx) => (
                <option key={idx} value={desc}>{desc}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Add Skill
          </button>
        </form>

        <h3 className="mt-8 text-xl font-semibold text-center">Skill List</h3>
        <ul className="mt-4 space-y-3">
          {skills.map(skill => (
            <li key={skill._id} className="border p-4 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <strong>{skill.name}</strong> – {skill.category}
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
              <button
                onClick={() => handleDelete(skill._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
