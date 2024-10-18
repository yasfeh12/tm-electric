import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import QuoteSheet from "./components/QuoteSheet";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/ReviewCard";
import OurServices from "./components/OurServices";
import "../styles.css";

function Home() {
  useEffect(() => {
    if (window.bootstrap) {
      const carouselElement = document.querySelector("#electricianCarousel");
      window.bootstrap.Carousel.getOrCreateInstance(carouselElement);
    }
  }, []);

  return (
    <div className="text-center my-5">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Electrician Services - Home</title>
        <meta
          name="description"
          content="Welcome to our home page. Learn about our professional electrical services, including installations, repairs, and emergency services."
        />
        <meta
          name="keywords"
          content="electrician services, electrical installations, emergency electrician, fuse box installation"
        />
      </Helmet>

      <h1 className="display-4" style={{ color: "#0d6efd" }}>
        Welcome to Our Home Page
      </h1>
      <p className="lead" style={{ color: "#6c757d" }}>
        This is the main page where you can learn about our electrical services.
      </p>

      <h2 style={{ color: "#0d6efd" }}>How much does an Electrician cost?</h2>
      <p>
        Whether you need a job done by the hour, a flat fee, or a day rate will
        affect the cost of hiring one. For emergency callouts, the figure could
        be higher. The scope of the job will also impact the price, especially
        if a full rewiring is required. We offer incredibly fair prices and you
        can use our price estimate tools to help you figure out the budget.
      </p>

      {/* Add the quote sheet modal here */}
      <div className="mt-5">
        <QuoteSheet />
      </div>

      {/* Bootstrap Carousel */}
      <div
        id="electricianCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="https://cdn.prod.website-files.com/602a97fb7ff89c083c49cc06/6290914c219ac3813bcfac97_Screenshot%202022-05-27%20at%2009.50.22-p-1080.png"
              className="d-block w-100"
              alt="Electrician performing 24/7 emergency service" // Alt attribute for SEO
            />
            <div
              className="carousel-caption position-absolute top-50 start-50 translate-middle text-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly transparent background
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#ffffff", // White text for better visibility
                }}
              >
                24/7 Emergency Service
              </h2>
              <p style={{ fontSize: "1.5rem", color: "#ffffff" }}>
                We are available for emergency electrical repairs anytime.
              </p>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img
              src="https://www.goconstruct.org/media/tvlb1bpa/electrician-using-screwdriver.jpg?anchor=center&mode=crop&width=940&height=610&rnd=133555885248670000"
              className="d-block w-100"
              alt="Electrician performing electrical installations" // Alt attribute for SEO
            />
            <div
              className="carousel-caption position-absolute top-50 start-50 translate-middle text-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly transparent background
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#ffffff", // White text for better visibility
                }}
              >
                Electrical Installations
              </h2>
              <p style={{ fontSize: "1.5rem", color: "#ffffff" }}>
                Our team provides top-tier electrical installation services for
                all properties.
              </p>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img
              src="https://www.activate-training.co.uk/wp-content/uploads/2022/07/apartment-fusebox-installation-by-electrician-1024x683.jpg"
              className="d-block w-100"
              alt="Electrician installing a fuse box" // Alt attribute for SEO
            />
            <div
              className="carousel-caption position-absolute top-50 start-50 translate-middle text-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly transparent background
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#ffffff", // White text for better visibility
                }}
              >
                Fuse Box Installations
              </h2>
              <p style={{ fontSize: "1.5rem", color: "#ffffff" }}>
                Professional installation and repairs for fuse boxes and
                circuits.
              </p>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#electricianCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#electricianCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      <OurServices />

      {/* Contact Us Section */}
      <div className="d-flex justify-content-center mt-4">
        <div className="mx-3">
          <a
            href="mailto:example@example.com"
            className="btn btn-outline-primary"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email icon"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Email
          </a>
        </div>
        <div className="mx-3">
          <a href="tel:+123456789" className="btn btn-outline-success">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Phone icon"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Phone
          </a>
        </div>
        <div className="mx-3">
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp icon"
              style={{ width: "30px", marginRight: "10px" }}
            />
            WhatsApp
          </a>
        </div>
      </div>

      <Reviews />
    </div>
  );
}

export default Home;
