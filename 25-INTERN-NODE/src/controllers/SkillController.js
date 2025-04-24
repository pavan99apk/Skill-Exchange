const Skill = require("../models/SkillModel");
const mongoose = require("mongoose");
const userModel= require('../models/UserModel')
// Get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
     
        res.json({ message: "Skills retrieved successfully", data: skills});
        console.log(skills)
    } catch (error) {
        console.error("Error fetching skills:", error);
        res.status(500).json({ message: "Error fetching skills", error });
    }
};

// Add a new skill
const addSkill = async (req, res) => {
    try {
        console.log("Incoming Data:", req.body);


        const newSkill = await Skill.create(req.body);
        res.json({ message: "Skill added successfully", data: newSkill });
    } catch (error) {
        console.error("Error adding skill:", error);
        res.status(400).json({ message: "Error adding skill", error });
    }
};

// Delete a skill
const deleteSkill = async (req, res) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        if (!deletedSkill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        res.json({ message: "Skill deleted successfully", data: deletedSkill });
    } catch (error) {
        console.error("Error deleting skill:", error);
        res.status(500).json({ message: "Error deleting skill", error });
    }
};

module.exports = { getAllSkills, addSkill, deleteSkill };
