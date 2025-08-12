import React, { useState } from "react";
import "../Styles/Booknow.css";
import Doctordata from "../Data/Doctordata.js";

function Booknow() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [appointmentId, setAppointmentId] = useState(null);
  const [message, setMessage] = useState("");

  const handleBook = async (e) => {
    e.preventDefault();

    const formData = {
      doctor,
      date,
      time,
      name,
      email,
      contact,
      gender,
      symptoms,
    };

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setAppointmentId(data.appointment._id);

        const now = new Date();
        const currentTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        alert(
          `✅ ${name}, your appointment was booked successfully at ${currentTime}.`
        );
        setMessage("✅ Appointment booked successfully.");
      } else {
        setMessage("❌ Failed to book appointment.");
        console.error("Booking error:", data);
      }
    } catch (error) {
      console.error("Booking fetch error:", error);
      setMessage("❌ Server error while booking appointment.");
    }
  };

  const handleCancel = async () => {
    if (!appointmentId) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments/${appointmentId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setMessage("❌ Appointment cancelled successfully.");
        setAppointmentId(null);
        resetForm();
      } else {
        setMessage("❌ Failed to cancel appointment.");
        console.error("Cancel failed");
      }
    } catch (error) {
      console.error("Cancel error:", error);
      setMessage("❌ Server error while cancelling appointment.");
    }
  };

  const resetForm = () => {
    setDoctor("");
    setDate("");
    setTime("");
    setName("");
    setEmail("");
    setContact("");
    setGender("");
    setSymptoms("");
  };

  return (
    <div className="book-now-container">
      <div className="book-form-wrapper">
        <h1 className="book-form-heading">Book Your Doctor's Appointment</h1>

        <form className="book-form" onSubmit={handleBook}>
          <div className="book-form-group">
            <label htmlFor="doctor">Select Doctor:</label>
            <select
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >
              <option value="">-- Select Doctor --</option>
              {Doctordata.map((doc, index) => (
                <option key={index} value={doc.name}>
                  {doc.name} – {doc.speciality}
                </option>
              ))}
            </select>
          </div>

          <div className="book-form-group">
            <label htmlFor="date">Choose Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="book-form-group">
            <label htmlFor="time">Choose Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="book-form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="book-form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="book-form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="book-form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="book-form-group">
            <label htmlFor="symptoms">Symptoms / Reason for Visit:</label>
            <textarea
              id="symptoms"
              rows="4"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Describe your symptoms..."
              required
            ></textarea>
          </div>

          {message && <p className="message-text">{message}</p>}

          <button type="submit" className="book-form-btn">
            Confirm Appointment
          </button>
        </form>

        {appointmentId && (
          <button className="book-form-btn cancel-btn" onClick={handleCancel}>
            Cancel Appointment
          </button>
        )}
      </div>
    </div>
  );
}

export default Booknow;
