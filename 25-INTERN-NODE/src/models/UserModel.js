const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
    skillsOffered: [{ type: Schema.Types.ObjectId, ref: "skills" }],
    skillsWanted: [{ type: Schema.Types.ObjectId, ref: "skills" }],
    rating: { type: Number, default: 0 },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date }
  }, { timestamps: true });
  
module.exports = mongoose.model("users", userSchema);
