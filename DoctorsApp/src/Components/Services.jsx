import React from "react";
import "../Styles/Services.css";

function Services() {
  return (
    <div>
      <section className="services-section">
        <h1>Our Services</h1>
        <p className="intro-text">
          MediTrust offers reliable, fast, and secure services to make your
          healthcare journey smoother.
        </p>

        <div className="services-container">
          <div className="service-box">
            <h2>🩺 Online Doctor Appointments</h2>
            <p>
              Book appointments with verified doctors from the comfort of your
              home.
            </p>
          </div>

          <div className="service-box">
            <h2>📅 Appointment Scheduling</h2>
            <p>
              Choose your doctor and preferred time with an easy calendar
              interface.
            </p>
          </div>

          <div className="service-box">
            <h2>🔍 Search by Specialty</h2>
            <p>
              Find doctors by category, name, or location quickly and easily.
            </p>
          </div>

          <div className="service-box">
            <h2>📲 Notifications & Reminders</h2>
            <p>
              Get timely reminders for your upcoming appointments via SMS/email.
            </p>
          </div>

          <div className="service-box">
            <h2>🔒 Secure Health Records</h2>
            <p>
              Your medical data is safe, encrypted, and accessible only by you.
            </p>
          </div>

          <div className="service-box">
            <h2>🏥 Doctor Panel (Optional)</h2>
            <p>
              For clinics/doctors: manage appointments and schedules with ease.
            </p>
          </div>

          <div className="service-box">
            <h2>💳 Online Payments</h2>
            <p>
              Pay consultation fees securely through integrated payment gateways.
            </p>
          </div>

          <div className="service-box">
            <h2>📄 E-Prescriptions</h2>
            <p>
              Receive digital prescriptions directly after online consultations.
            </p>
          </div>

          <div className="service-box">
            <h2>🧾 Consultation History</h2>
            <p>
              Track your past visits, doctor notes, and diagnoses in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
