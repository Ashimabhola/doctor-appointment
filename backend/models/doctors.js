const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String },
    speciality: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: String },
    available: { type: String },
    fee: { type: String },
    experience: { type: String },
});

module.exports = mongoose.model("Doctor", doctorSchema);