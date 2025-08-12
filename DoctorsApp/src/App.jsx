import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Doctors from "./Components/Doctors";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Booknow from "./Components/Booknow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Content />
              <Footer />
            </>
          }
        />
        <Route
          path="/doctors"
          element={
            <>
              <Navbar />
              <Doctors />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Navbar />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Booknow" element={<Booknow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
