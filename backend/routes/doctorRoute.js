const express = require('express');
const router = express.Router();
const { getAllDoctors, addDoctor } = require('../controllers/doctorController.js');

// GET all doctors
router.get('/doctors', getAllDoctors);

// POST a new doctor
router.post('/doctors', addDoctor);

module.exports = router;