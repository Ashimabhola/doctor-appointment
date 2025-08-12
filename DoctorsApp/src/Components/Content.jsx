import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Content.css";

import DoctorA from "../image/DoctorA.png";
import DoctorB from "../image/DoctorB.png";
import DoctorC from "../image/DoctorC.png";
import DoctorD from "../image/DoctorD.png";
import PriyaM from "../image/priyaM.png";
import AnilS from "../image/anilS.png";
import SanaR from "../image/sanaR.png";
import image from "../image/image.png";

import {
  FaSearch,
  FaCalendarCheck,
  FaUserMd,
  FaCalendarAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

function Content() {
  const navigate = useNavigate();

  const HandleBookclick = () => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (!loggeduser) {
      alert("Please Login Before Book an Appointment!");
      return;
    } else {
      navigate("/Booknow");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-content">
          <h1>
            Book Your <span>Doctor's Appointment</span> Today
          </h1>
          <p>
            Find trusted medical professionals near you and schedule
            appointments instantly with ease and convenience.
          </p>
          <button className="hero-btn">
            <a onClick={() => HandleBookclick()}>Book Now</a>
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="how-steps">
          <div className="step">
            <FaSearch size="2em" color="Navy" />
            <h4>Search</h4>
            <p>
              Find a doctor or specialist near you by specialty or location.
            </p>
          </div>
          <div className="step">
            <FaCalendarCheck size="2em" color="Navy" />
            <h4>Book</h4>
            <p>Select a convenient date and time from the doctor’s calendar.</p>
          </div>
          <div className="step">
            <FaUserMd size="2em" color="Navy" />
            <h4>Consult</h4>
            <p>Visit the clinic or connect via video for your consultation.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h3>Our Services</h3>
        <div className="service-items">
          <div className="service">
            <h4>
              <FaCalendarAlt
                size="1.5em"
                color="Navy"
                style={{ marginRight: "8px" }}
              />
              Online Booking
            </h4>
            <p>
              Schedule appointments anytime, anywhere with our easy-to-use
              platform.
            </p>
          </div>
          <div className="service">
            <h4>
              <FaUserMd
                size="1.5em"
                color="Navy"
                style={{ marginRight: "8px" }}
              />
              Qualified Doctors
            </h4>
            <p>
              Connect with certified medical professionals across various
              specialties.
            </p>
          </div>
          <div className="service">
            <h4>
              <FaHeadset
                size="1.5em"
                color="Navy"
                style={{ marginRight: "8px" }}
              />
              24/7 Support
            </h4>
            <p>
              Our support team is always available to help with your health
              queries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="doctors">
        <h3>Featured Doctors</h3>
        <div className="doctor-cards">
          <div className="doctor">
            <img src={DoctorA} alt="Doctor A" />
            <h4>Dr. Alice Smith</h4>
            <p>Cardiologist, 10+ years experience</p>
          </div>
          <div className="doctor">
            <img src={DoctorB} alt="Doctor B" />
            <h4>Dr. Bob Lee</h4>
            <p>Pediatrician, 8+ years experience</p>
          </div>
          <div className="doctor">
            <img src={DoctorC} alt="Doctor C" />
            <h4>Dr. Clara Doe</h4>
            <p>Dermatologist, 5+ years experience</p>
          </div>
          <div className="doctor">
            <img src={DoctorD} alt="Doctor D" />
            <h4>Dr. David Khan</h4>
            <p>Neurologist, 12+ years experience</p>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="appointment">
        <h3>Ready to Book Your Appointment?</h3>
        <button>
          <a onClick={() => HandleBookclick()}>Book Now</a>
        </button>
      </section>

      {/* Testimonials */}
      <section className="Testimonial">
        <h3>What Our Patients Say</h3>
        <div className="testimonial-cards">
          <div className="testimonial">
            <img src={PriyaM} alt="Priya M." className="avatar" />
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>"Booking was super easy and the consultation went great!"</p>
            <span>- Priya M.</span>
          </div>

          <div className="testimonial">
            <img src={AnilS} alt="Anil S." className="avatar" />
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              "I found a specialist for my child in seconds. Great platform!"
            </p>
            <span>- Anil S.</span>
          </div>

          <div className="testimonial">
            <img src={SanaR} alt="Sana R." className="avatar" />
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>"Fast, simple, and helpful. Highly recommended."</p>
            <span>- Sana R.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
