import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUserShield,
  FaHandshake,
  FaTools,
  FaHardHat,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Container className="my-5">
      {/* Main heading for the section */}
      <h2 className="text-center mb-4" style={{ color: "#0d6efd" }}>
        Why Choose Us
      </h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              {/* Icon with title attribute for accessibility */}
              <FaUserShield
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="Experienced and Qualified Electricians"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                Experienced & Qualified Electricians
              </Card.Title>
              <Card.Text>
                Our electricians are registered, licensed, and have years of
                experience in handling both commercial and domestic electrical
                projects. We ensure all work is done to the highest safety
                standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              <FaHandshake
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="Affordable, Transparent Pricing"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                Affordable, Transparent Pricing
              </Card.Title>
              <Card.Text>
                We offer super fair and competitive pricing for all our
                services. No hidden fees or surprises, just quality work at an
                affordable price.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              <FaTools
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="High-Quality Work and Customer Satisfaction"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                High-Quality Work & Customer Satisfaction
              </Card.Title>
              <Card.Text>
                We take pride in delivering top-notch electrical services that
                meet your needs. Our work is guaranteed, and our customers
                always come first.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              <FaHardHat
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="Available for Commercial and Domestic Projects"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                Available for Both Commercial & Domestic Projects
              </Card.Title>
              <Card.Text>
                Whether it's a small home installation or a large commercial
                rewiring project, we have the expertise and resources to handle
                all kinds of jobs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              <FaShieldAlt
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="Safety Comes First"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                Safety Comes First
              </Card.Title>
              <Card.Text>
                We adhere strictly to safety regulations and standards to ensure
                that your property and our workers are always protected. Your
                peace of mind is our priority.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card
            className="h-100 text-center shadow"
            style={{ borderColor: "#0d6efd" }}
          >
            <Card.Body>
              <FaCalendarCheck
                size={50}
                color="#0d6efd"
                className="mb-3"
                title="Limited Availability - Book Early!"
              />
              <Card.Title
                as="h3"
                style={{ color: "#0d6efd", fontWeight: "bold" }}
              >
                Limited Availability – Book Early!
              </Card.Title>
              <Card.Text>
                Due to our commitment to providing detailed and personalized
                service, we offer limited availability. Contact us early to
                secure your spot for high-quality electrical work.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
