import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function LedLightingSection() {
  return (
    <Container fluid className="my-5 led-lighting-section">
      <Row className="align-items-center">
        {/* Left side content */}
        <Col
          md={6}
          className="text-light p-5"
          style={{ backgroundColor: "#ff6a00" }}
        >
          <h2
            style={{ fontWeight: "bold", fontSize: "2.5rem", color: "white" }}
          >
            LED Lighting & Down Lights
          </h2>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            Add some LED lighting to your home to save money and increase energy
            efficiency while saving on your electricity bill. Or install some
            down lights to create a new look and feel.
          </p>
          <Button
            variant="dark"
            className="mt-3"
            href="tel:+1234567890" // Replace with your phone number
            style={{ fontSize: "1.2rem" }}
            aria-label="Call now to inquire about LED lighting and down light installation"
          >
            Call Now &nbsp;
            <i className="fas fa-phone" aria-hidden="true"></i>{" "}
            {/* Font Awesome icon for phone */}
          </Button>
        </Col>

        {/* Right side image */}
        <Col md={6} className="p-0">
          <img
            src="https://www.litewave.co.uk/thumbnails/News/LED%20Strip%20in%20the%20Ceiling%20with%20Plaster-in%20Profiles__________wi800he600moletterboxbgwhite.jpg"
            alt="LED lighting installed in a modern home"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LedLightingSection;
