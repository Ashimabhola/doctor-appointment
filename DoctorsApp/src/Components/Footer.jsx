import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-section">
            <h4>MediTrust</h4>
            <p>
              We are dedicated to providing quality healthcare services with a
              personal touch. Trust and compassion guide our every step.
            </p>
          </div>

          {/* Center Section */}
          <div className="footer-section center">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer-section contact-right">
            <h4 className="head2">Contact</h4>
            <p>📍 123 Wellness Street, Healthy City, 45678</p>
            <p>📞+1 (800) 123-4567</p>
            <p>📧support@meditrust.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 MediTrust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
