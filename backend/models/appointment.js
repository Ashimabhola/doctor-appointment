const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    doctor: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    gender: { type: String, required: true },
    symptoms: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Appointment", feedbackSchema);