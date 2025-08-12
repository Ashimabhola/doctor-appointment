const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const feedbackRoute = require("./feedbackRoute");
const appointmentRoute = require("./appointmentRoute");
const doctorRoute = require("./doctorRoute");

router.use("/auth", authRoute);
router.use("/feedback", feedbackRoute);
router.use("/appointments", appointmentRoute);
router.use("/doctors", doctorRoute);

module.exports = router;