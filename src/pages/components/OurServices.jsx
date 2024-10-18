import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBolt,
  FaLightbulb,
  FaFan,
  FaNetworkWired,
  FaVideo,
  FaToolbox,
  FaWater,
  FaBell,
  FaExclamation,
  FaPlug,
} from "react-icons/fa";

function OurServices() {
  const services = [
    {
      title: "Electrical Maintenance",
      icon: <FaBolt aria-label="Electrical Maintenance" />,
    },
    {
      title: "Indoor Outdoor Lighting",
      icon: <FaLightbulb aria-label="Indoor Outdoor Lighting" />,
    },
    { title: "CCTV Security", icon: <FaVideo aria-label="CCTV Security" /> },
    {
      title: "Fan Installation",
      icon: <FaFan aria-label="Fan Installation" />,
    },
    {
      title: "Network Data Ports",
      icon: <FaNetworkWired aria-label="Network Data Ports" />,
    },
    { title: "Fault Finding", icon: <FaToolbox aria-label="Fault Finding" /> },
    {
      title: "Hot Water Installation",
      icon: <FaWater aria-label="Hot Water Installation" />,
    },
    {
      title: "Smoke Alarm Installation",
      icon: <FaBell aria-label="Smoke Alarm Installation" />,
    },
    {
      title: "Emergency 24/7",
      icon: <FaExclamation aria-label="Emergency 24/7" />,
    },
    { title: "Switchboards", icon: <FaToolbox aria-label="Switchboards" /> },
    {
      title: "Safety Switches",
      icon: <FaToolbox aria-label="Safety Switches" />,
    },
    { title: "Power Points", icon: <FaPlug aria-label="Power Points" /> },
  ];

  return (
    <Container className="my-5">
      {/* Main Heading */}
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col xs={6} md={3} className="text-center mb-4" key={index}>
            <div
              className="service-card p-4"
              style={{
                border: "2px solid #f57c00",
                borderRadius: "50%",
                width: "150px", // Increased circle size
                height: "150px", // Increased circle size
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem", // Increased icon size
                animationDelay: `${index * 0.1}s`, // Delay animation for each item
              }}
              aria-label={service.title} // Added aria-label for accessibility
            >
              {service.icon}
            </div>
            <h5 className="mt-3" style={{ cursor: "default" }}>
              {service.title}
            </h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OurServices;
