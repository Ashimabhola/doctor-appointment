// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const {
    bookAppointment,
    cancelAppointment,
} = require("../controllers/appointmentController");

// POST /api/appointments
router.post("/", bookAppointment);

// DELETE /api/appointments/:id
router.delete("/:id", cancelAppointment);

module.exports = router;