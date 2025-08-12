const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Temporary store for refresh tokens (production mein DB ya Redis use karo)
let refreshTokens = [];

exports.registeruser = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err.message,
        });
    }
};

exports.loginuser = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }
        const ispasscorrect = await bcrypt.compare(password, user.password);
        if (!ispasscorrect) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        // Access token (short expiry)
        const accessToken = jwt.sign({ id: user._id, email: user.email },
            process.env.JWT_SECRET || "hello", { expiresIn: "1m" }
        );

        // Refresh token (long expiry)
        const refreshToken = jwt.sign({ id: user._id, email: user.email },
            process.env.JWT_REFRESH_SECRET || "refreshsecret", { expiresIn: "7d" }
        );

        // Store refresh token temporarily
        refreshTokens.push(refreshToken);

        // Client ko user info + tokens bhejo
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            accessToken,
            refreshToken,
        });
    } catch (errmessage) {
        res.status(500).json({ message: "Server error", error: errmessage.message });
    }
};

// Refresh token ka function bhi add kar dete hain
exports.refreshToken = (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: "Refresh token required" });

    if (!refreshTokens.includes(token)) {
        return res.status(403).json({ message: "Invalid refresh token" });
    }

    jwt.verify(token, process.env.JWT_REFRESH_SECRET || "refreshsecret", (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid refresh token" });

        const accessToken = jwt.sign({ id: user.id, email: user.email },
            process.env.JWT_SECRET || "hello", { expiresIn: "1m" }
        );

        res.json({ accessToken });
    });
};