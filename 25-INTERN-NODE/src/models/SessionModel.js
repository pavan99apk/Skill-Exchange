const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    skillId: { type: Schema.Types.ObjectId, ref: "skills", required: true },
    facultyId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    // studentId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    schedule: { type: Date, required: true },
    status: { type: String, default: "Pending" },
    rating: { type: Number, default: 0 }
});
module.exports = mongoose.model("sessions", sessionSchema);
