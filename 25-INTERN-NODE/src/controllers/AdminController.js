const Admin = require("../models/AdminModel");

const getAllAdmins = async (req, res) => {
    const admins = await Admin.find();
    res.json({ message: "Admins retrieved", data: admins });
};

const createAdmin = async (req, res) => {
    const admin = await Admin.create(req.body);
    res.json({ message: "Admin created", data: admin });
};

module.exports = { getAllAdmins, createAdmin };

