import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Reviews from "./ReviewCard";

const MorePage = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/our-projects");
  };

  return (
    <Container className="my-3">
      {" "}
      {/* Reduced margin-top and bottom */}
      {/* Hero Section */}
      <section
        className="text-center p-3"
        style={{
          background:
            "url('https://source.unsplash.com/1600x900/?city,buildings') center/cover no-repeat",
          color: "white",
          borderRadius: "10px", // Reduced border-radius slightly
        }}
        aria-label="Our Future Expansion Plans"
      >
        <h2
          className="display-4"
          style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "2.5rem" }} // Reduced font-size slightly
        >
          Our Future Expansion Plans
        </h2>
        <p className="lead">
          We're growing our services to match more cities with state-of-the-art
          electrical solutions. In the coming years, we plan to recruit more
          skilled electricians, enabling us to serve a broader range of
          customers across the UK. Our goal is to expand operations nationwide,
          establishing new service bases in key cities, ensuring that more
          customers can access our high-quality electrical services at a fair
          and competitive price. With each expansion, we’ll continue to
          prioritize delivering safe, efficient, and modern electrical solutions
          for both commercial and residential properties.
        </p>
      </section>
      {/* Google Reviews */}
      <section className="my-3" aria-label="Google Reviews">
        {" "}
        {/* Reduced margin-top and bottom */}
        <h2 style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "2rem" }}>
          Google Reviews
        </h2>
        <Reviews />
      </section>
      {/* What's Next for Us */}
      <section
        className="text-center p-3 mb-4" // Reduced padding and margin-bottom
        style={{ backgroundColor: "#f0f8ff", borderRadius: "10px" }}
        aria-label="What's Next for Us?"
      >
        <h2 style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "2rem" }}>
          What's Next for Us?
        </h2>
        <p className="lead">
          We have several exciting new projects on the horizon that are set to
          revolutionize how we deliver electrical services. From smart home
          solutions that integrate seamlessly with the latest technologies to EV
          charging stations designed to support the growing demand for electric
          vehicles, our upcoming ventures aim to create a more connected,
          energy-efficient future. In addition, we’re exploring renewable energy
          solutions to help our customers reduce their carbon footprint. Whether
          it’s solar panel installations, battery storage systems, or
          energy-efficient lighting, we’re committed to staying at the forefront
          of the electrical industry’s advancements. Stay tuned for more
          developments as we continue to innovate and expand our services to
          meet the evolving needs of homes and businesses across the UK.
        </p>
      </section>
      {/* Social Media Links */}
      <section className="text-center my-4" aria-label="Connect With Us">
        {" "}
        {/* Reduced margin */}
        <h3
          style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "1.8rem" }}
        >
          Connect With Us
        </h3>
        <p>
          Follow us on our social media platforms to stay updated on our latest
          news and projects.
        </p>
        <div className="d-flex justify-content-center mt-2">
          {/* Social Media Buttons */}
          <Button
            href="https://facebook.com"
            className="mx-1"
            aria-label="Follow us on Facebook"
            style={{
              backgroundColor: "#3b5998",
              borderColor: "#3b5998",
              color: "white",
              borderRadius: "50%",
              width: "40px", // Reduced size
              height: "40px",
            }}
          >
            <FaFacebook size={20} />
          </Button>
          <Button
            href="https://instagram.com"
            className="mx-1"
            aria-label="Follow us on Instagram"
            style={{
              backgroundColor: "#E1306C",
              borderColor: "#E1306C",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          >
            <FaInstagram size={20} />
          </Button>
          <Button
            href="https://twitter.com"
            className="mx-1"
            aria-label="Follow us on Twitter"
            style={{
              backgroundColor: "#1DA1F2",
              borderColor: "#1DA1F2",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          >
            <FaTwitter size={20} />
          </Button>
          <Button
            href="https://linkedin.com"
            className="mx-1"
            aria-label="Follow us on LinkedIn"
            style={{
              backgroundColor: "#0077b5",
              borderColor: "#0077b5",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          >
            <FaLinkedin size={20} />
          </Button>
        </div>
      </section>
      {/* Additional Projects Section */}
      <section
        className="text-center p-3" // Reduced padding
        style={{ backgroundColor: "#e6f2ff", borderRadius: "10px" }} // Reduced border-radius
        aria-label="Our Latest Projects"
      >
        <h3 style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "2rem" }}>
          Our Latest Projects
        </h3>
        <p className="lead">
          Discover the projects we've recently completed, from residential
          rewiring to commercial installations.
        </p>
        <Button
          onClick={handleViewProjects}
          variant="primary"
          className="mt-3"
          style={{
            fontSize: "16px", // Reduced font size
            padding: "8px 16px", // Reduced padding
            borderRadius: "6px",
          }}
        >
          View Our Projects
        </Button>
      </section>
    </Container>
  );
};

export default MorePage;
