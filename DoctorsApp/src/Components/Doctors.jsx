import React, { useEffect, useState } from "react";
import "../Styles/Doctors.css";
import { useNavigate } from "react-router-dom";

function Doctors() {
  const [Finddoctors, setFinddoctors] = useState("");
  const [Speciality, setSpeciality] = useState("All Speciality");
  const [Location, setLocation] = useState("All Location");
  const [FilteredData, setFilteredData] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const HandleBookAppointment = () => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (!loggeduser) {
      alert("Please Login Before Book an Appointment!");
      return;
    } else {
      navigate("/Booknow");
    }
  };

  // Fetch doctors from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/doctors/doctors"
        );
        // backend route
        const data = await response.json();
        setAllDoctors(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Filter doctors when search or filters change
  useEffect(() => {
    let filtered = allDoctors;

    if (Finddoctors.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(Finddoctors.toLowerCase())
      );
    }

    if (Speciality !== "All Speciality") {
      filtered = filtered.filter((item) => item.speciality === Speciality);
    }

    if (Location !== "All Location") {
      filtered = filtered.filter((item) => item.location === Location);
    }

    setFilteredData(filtered);
  }, [Finddoctors, Speciality, Location, allDoctors]);

  return (
    <div className="all-content">
      <div className="Content">
        <div className="Main-content">
          <h1>Find & Book Your Doctors</h1>
          <p>
            Connect with experienced healthcare professionals and book
            appointments instantly. Your health is our priority.
          </p>
        </div>

        <div className="find-doctor">
          <h2>Find Your Doctors</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Find Doctors</label>
              <label htmlFor="specialist">Speciality</label>
              <label htmlFor="location">Location</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="name"
                value={Finddoctors}
                onChange={(e) => setFinddoctors(e.target.value)}
                placeholder="Enter Doctor’s Name"
              />

              <select
                id="specialist"
                value={Speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option value="All Speciality">All Speciality</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Psychiatry">Psychiatry</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Gynecologist">Gynecologist</option>
              </select>

              <select
                id="location"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="All Location">All Location</option>
                <option value="Downtown Medical Center">
                  Downtown Medical Center
                </option>
                <option value="Northside Clinic">Northside Clinic</option>
                <option value="West End Hospital">West End Hospital</option>
                <option value="Eastside Medical Plaza">
                  Eastside Medical Plaza
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="doctor-cards">
        {loading ? (
          <p>Loading doctors...</p>
        ) : FilteredData.length > 0 ? (
          FilteredData.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
              <div className="doctor-header">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="doctor-img"
                />
                <h3>{doctor.name}</h3>
                <span className="speciality">{doctor.speciality}</span>
              </div>
              <ul className="doctor-info">
                <li>📍 Location:{doctor.location}</li>
                <li>⭐ Rating:{doctor.rating}</li>
                <li>📅 Available: {doctor.available}</li>
                <li>💰 Consultation: {doctor.fee}</li>
                <li>🎓Experience: {doctor.experience}</li>
              </ul>
              <button
                className="appointment-btn"
                onClick={() => HandleBookAppointment()}
              >
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <p>No doctors found matching the criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
