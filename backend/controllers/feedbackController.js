const Feedback = require('../models/feedback.js');



exports.submitFeedback = async(req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const newFeedback = new Feedback({ name, email, phone, message });
        await newFeedback.save();
        console.log("📝 Feedback saved:", newFeedback);
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (err) {
        console.error("❌ Error saving feedback:", err.message);
        res.status(500).json({ message: "Server error. Try again later." });
    }
};