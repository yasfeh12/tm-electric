import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center">
          <Row className="mb-3">
            <Col>
              <Button
                href="mailto:example@example.com"
                className="contact-button"
                aria-label="Send us an email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#0d6efd",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  transition: "all 0.3s ease",
                }}
              >
                <FaEnvelope
                  style={{ marginRight: "10px", color: "white" }}
                  aria-hidden="true"
                />
                Email
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button
                href="tel:+123456789"
                className="contact-button"
                aria-label="Call us by phone"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#28a745",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  transition: "all 0.3s ease",
                }}
              >
                <FaPhone
                  style={{ marginRight: "10px", color: "white" }}
                  aria-hidden="true"
                />
                Phone
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
                aria-label="Contact us via WhatsApp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#25D366",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  transition: "all 0.3s ease",
                }}
              >
                <FaWhatsapp
                  style={{ marginRight: "10px", color: "white" }}
                  aria-hidden="true"
                />
                WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
