import React from "react";
import "../Styles/Services.css"; // Ensure path is correct

function Services() {
  const services = [
    {
      title: "🩺 Online Doctor Appointments",
      description:
        "Book appointments with verified doctors from the comfort of your home.",
    },
    {
      title: "📅 Appointment Scheduling",
      description:
        "Choose your doctor and preferred time with an easy calendar interface.",
    },
    {
      title: "🔍 Search by Specialty",
      description:
        "Find doctors by category, name, or location quickly and easily.",
    },
    {
      title: "📲 Notifications & Reminders",
      description:
        "Get timely reminders for your upcoming appointments via SMS/email.",
    },
    {
      title: "🔒 Secure Health Records",
      description:
        "Your medical data is safe, encrypted, and accessible only by you.",
    },
    {
      title: "🏥 Doctor Panel (Optional)",
      description:
        "For clinics/doctors: manage appointments and schedules with ease.",
    },
    {
      title: "💳 Online Payments",
      description:
        "Pay consultation fees securely through integrated payment gateways.",
    },
    {
      title: "📄 E-Prescriptions",
      description:
        "Receive digital prescriptions directly after online consultations.",
    },
    {
      title: "🧾 Consultation History",
      description:
        "Track your past visits, doctor notes, and diagnoses in one place.",
    },
  ];

  return (
    <div>
      <section className="services-section">
        <h1>Our Services</h1>
        <p className="intro-text">
          MediTrust offers reliable, fast, and secure services to make your
          healthcare journey smoother.
        </p>

        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
