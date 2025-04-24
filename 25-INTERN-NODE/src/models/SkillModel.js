
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const skillSchema = new Schema({
name: { type: String, required: true },
category: { type: String, required: true },
description: { type: String },
// usersOffering: [{ type: Schema.Types.ObjectId, ref: "users" }],
// usersSeeking: [{ type: Schema.Types.ObjectId, ref: "users" }]
usersOffering: [{ type: String, ref: "users" }],  // ✅ changed from ObjectId to String
usersSeeking: [{ type: String, ref: "users" }]  
});
module.exports = mongoose.model("skills", skillSchema);