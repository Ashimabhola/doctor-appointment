const Doctor = require("../models/doctors");

// GET all doctors
const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch doctors" });
    }
};

// POST a new doctor
const addDoctor = async(req, res) => {
    try {
        const {
            name,
            img,
            speciality,
            location,
            rating,
            available,
            fee,
            experience,
        } = req.body;

        if (!name || !img || !speciality || !location || !rating || !available || !fee || !experience) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const docData = await Doctor.create({
            name,
            img,
            speciality,
            location,
            rating,
            available,
            fee,
            experience,
        });

        return res.status(201).json({
            message: "Doctor registered successfully",
            data: docData
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE a doctor
const deleteDoctor = async(req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Doctor deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete doctor" });
    }
};

module.exports = {
    getAllDoctors,
    addDoctor,
    deleteDoctor,
};