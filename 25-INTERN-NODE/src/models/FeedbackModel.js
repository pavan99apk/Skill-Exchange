// const mongoose = require("mongoose")
// const Schema = mongoose.Schema;

// const feedbackSchema = new Schema({
//     sessionId: { type: Schema.Types.ObjectId, ref: "sessions", required: true },
//     fromUserId: { type: Schema.Types.ObjectId, ref: "users", required: true },
//     toUserId: { type: Schema.Types.ObjectId, ref: "users", required: true },
//     rating: { type: Number, required: true },
//     comments: { type: String }
// });
// module.exports = mongoose.model("feedbacks", feedbackSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comments: { type: String }
});

module.exports = mongoose.model("feedbacks", feedbackSchema);
