const Appointment = require("../models/Appointment");

const bookAppointment = async(req, res) => {
    try {
        const { doctor, date, time, name, email, contact, gender, symptoms } = req.body;

        // Validation
        if (!doctor || !date || !time || !name || !email || !contact || !gender || !symptoms) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const appointment = new Appointment(req.body);
        await appointment.save();

        res.status(201).json({ message: "Appointment booked", appointment });
    } catch (error) {
        res.status(500).json({ message: "Error booking appointment", error: error.message });
    }
};

const cancelAppointment = async(req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Appointment.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json({ message: "Appointment cancelled successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error cancelling appointment", error: error.message });
    }
};

module.exports = {
    bookAppointment,
    cancelAppointment,
};