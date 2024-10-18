import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import Home from "./pages/home";
import OurProjects from "./pages/OurProjects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import More from "./pages/More";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Electrician Services. All Rights
          Reserved.
        </p>
        <div>
          <Link to="/" className="text-light me-3">
            Home
          </Link>
          <Link to="/our-projects" className="text-light me-3">
            Our Projects
          </Link>
          <Link to="/about-us" className="text-light me-3">
            About Us
          </Link>
          <Link to="/contact-us" className="text-light me-3">
            Contact Us
          </Link>
          <Link to="/more" className="text-light">
            More
          </Link>
        </div>
        <p className="mt-2">Follow us on:</p>
        <div>
          <a href="#" className="text-light me-2">
            Facebook
          </a>
          <a href="#" className="text-light me-2">
            Twitter
          </a>
          <a
            href="https://www.instagram.com/plugged_inelectrical"
            className="text-light"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div
        className="container-fluid d-flex flex-column min-vh-100"
        style={{ backgroundColor: "#f8f9fa", width: "100%", padding: 0 }}
      >
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Electrician Services
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/our-projects">
                    Our Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/more">
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Meta Tags and Titles for SEO */}
        <Helmet>
          <title>Electrician Services - Home</title>
          <meta
            name="description"
            content="Professional electrical services for residential and commercial clients. Contact us today!"
          />
          <meta
            name="keywords"
            content="electrician, electrical services, residential electrician, commercial electrician"
          />
        </Helmet>

        {/* Routes */}
        <div className="container mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
