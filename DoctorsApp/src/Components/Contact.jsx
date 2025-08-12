import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !phone || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    const data = { name, phone, email, message };

    try {
      const res = await axios.post("http://localhost:5000/api/feedback", data);
      if (res.status === 200 || res.status === 201) {
        alert("✅ Feedback sent successfully!");
        setSuccess("✅ Feedback sent successfully!");
        navigate("/");
        window.scrollTo(0, 0);
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.message || "❌ Failed to send feedback.";
      setError(errMsg);
    }
  };

  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <p>We're here to help. Reach out to us anytime.</p>
      </header>

      <div className="contact-container">
        <div className="card">
          <h2>Contact Information</h2>
          <div className="info">
            <p>
              <strong>📞 Phone:</strong> +1 234 567 8901
            </p>
            <p>
              <strong>📧 Email:</strong> support@meditrust.com
            </p>
            <p>
              <strong>🏥 Address:</strong> 123 Health St, New York, NY
            </p>
            <p>
              <strong>🕘 Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM
            </p>
            <p>
              <strong>🚨 Emergency:</strong> +1 800 911 0000
            </p>
            <p>
              <strong>👩‍⚕️ General OPD:</strong> Mon–Sat, 9AM–5PM
            </p>
            <p>
              <strong>🦷 Dental Clinic:</strong> Mon–Fri, 10AM–4PM
            </p>
            <p>
              <strong>📢 Feedback / Complaints:</strong> feedback@meditrust.com
            </p>
            <p>
              <strong>🌐 Website:</strong>{" "}
              <a
                href="https://www.meditrust.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.meditrust.com
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />

            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              required
            ></textarea>

            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
