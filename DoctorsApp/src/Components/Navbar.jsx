import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import {
  FaClinicMedical,
  FaHome,
  FaStethoscope,
  FaUserMd,
  FaComments,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid JSON in localStorage for 'user':", error);
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    navigate("/");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav>
        <div className="nav-logo">
          <a onClick={() => navigate("/")}>
            <FaClinicMedical size="1.5em" style={{ marginRight: "6px" }} />
            MediTrust
          </a>
        </div>

        <div className="nav-links">
          <a
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            <FaHome size="1.4em" style={{ marginRight: "5px" }} />
            Home
          </a>
          <a
            onClick={() => navigate("/doctors")}
            className={location.pathname === "/doctors" ? "active" : ""}
          >
            <FaStethoscope size="1.2em" style={{ marginRight: "5px" }} />
            Doctors
          </a>
          <a
            onClick={() => navigate("/services")}
            className={location.pathname === "/services" ? "active" : ""}
          >
            <FaUserMd size="1.2em" style={{ marginRight: "5px" }} />
            Services
          </a>
          <a
            onClick={() => navigate("/testimonials")}
            className={location.pathname === "/testimonials" ? "active" : ""}
          >
            <FaComments size="1.2em" style={{ marginRight: "5px" }} />
            Testimonials
          </a>
          <a
            onClick={() => navigate("/contact")}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            <FaPhoneAlt size="1.2em" style={{ marginRight: "5px" }} />
            Contact
          </a>
          <a
            onClick={() => navigate("/about")}
            className={location.pathname === "/about" ? "active" : ""}
          >
            <FaInfoCircle size="1.2em" style={{ marginRight: "5px" }} />
            About
          </a>
        </div>

        <div className={`nav-auth ${showDropdown ? "show-dropdown" : ""}`}>
          {user ? (
            <>
              <div className="nav-user-info" onClick={toggleDropdown}>
                <span className="nav-user-name">{user.name}</span>
                <div className="nav-user-icon">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="nav-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <button className="nav-button" onClick={() => navigate("/signup")}>
              Signup
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
