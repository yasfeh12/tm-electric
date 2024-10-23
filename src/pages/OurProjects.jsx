import React from "react";
import { Helmet } from "react-helmet"; // Add Helmet for SEO
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import OurServices from "./components/OurServices";

function OurProjects() {
  const projects = [
    {
      title: "Office Building Wiring - Leeds",
      description:
        "We completed a full electrical system installation for a 10-story office building in Leeds. The project involved wiring, lighting installation, fire alarm system setup, and the installation of energy-efficient electrical systems.",
      duration: "6 months",
      services:
        "Complete wiring, modern lighting fixtures, security systems, energy-efficient solutions",
      client: "XYZ Corporation",
      completionDate: "April 2024",
      imageUrl:
        "https://hotwire-electric.com/wp-content/uploads/2017/02/commercial_3.jpg",
    },
    {
      title: "Residential Rewiring - Morley",
      description:
        "A full rewire of a century-old home in Morley. This project involved replacing outdated electrical systems, installing modern safety features, and setting up a smart home automation system.",
      duration: "4 weeks",
      services: "Complete rewiring, socket upgrades, smart home integration",
      client: "Jane Doe",
      completionDate: "June 2024",
      imageUrl:
        "https://www.electrician2hire.co.uk/wp-content/uploads/2023/09/IMG_0776-scaled.jpg",
    },
    {
      title: "Commercial Kitchen Installation - Wakefield",
      description:
        "We designed and installed an electrical system for a new commercial kitchen in a busy Wakefield restaurant. The system was built to accommodate high energy demands and ensure safety during peak hours.",
      duration: "3 weeks",
      services:
        "Electrical design, circuit installation, kitchen appliance setup",
      client: "Gourmet Bites Restaurant",
      completionDate: "February 2024",
      imageUrl:
        "https://eurotecfm.co.uk/wp-content/uploads/2022/08/Giorik-Commercial-Oven-1024x768.jpg",
    },
    {
      title: "Industrial Factory Lighting - Bradford",
      description:
        "Installation of energy-efficient LED lighting in a large factory space, ensuring maximum visibility and safety for workers. The project involved replacing old lighting fixtures with modern LED systems to reduce energy costs.",
      duration: "2 months",
      services: "LED lighting installation, safety inspections",
      client: "Bradford Steelworks",
      completionDate: "March 2024",
      imageUrl:
        "https://greenbusinesslight.com/assets/images/nav/t5-lighting-services-nav.jpg",
    },
    {
      title: "Security Camera Installation - Huddersfield",
      description:
        "Upgraded a modern smart home with advanced security automation features, including lighting control, climate control systems, and cameras.",
      duration: "2 weeks",
      services:
        "Smart security home wiring, lighting control, installation of automation systems",
      client: "John Smith",
      completionDate: "July 2024",
      imageUrl:
        "https://media.angi.com/s3fs-public/Person-installing-security-camera.jpg",
    },
    {
      title: "Emergency Electrical Repair - Sheffield",
      description:
        "We provided urgent repairs for a malfunctioning electrical system in a commercial space, preventing significant downtime for the business.",
      duration: "1 day",
      services: "Electrical fault diagnosis, repair, and safety checks",
      client: "Sheffield Retail Outlet",
      completionDate: "January 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=612x612&w=0&k=20&c=3_WYnt8wYvyIAxCXJdbvt50llvAwmU_M_1gw4cwUr9o=",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Projects - Electrician Services</title>
        <meta
          name="description"
          content="Explore our completed electrical projects, from commercial installations to residential rewiring, in Leeds, Morley, Wakefield, and beyond."
        />
        <meta
          name="keywords"
          content="electrician projects, residential rewiring, commercial electrical installation, energy-efficient lighting"
        />
      </Helmet>

      <Container className="my-5">
        <h1
          className="text-center mb-4"
          style={{ color: "#0d6efd", fontSize: "3rem" }}
        >
          Our Projects
        </h1>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={12} key={index} className="mb-4">
              <Card
                className="h-100 project-card shadow-sm"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  padding: "15px",
                  animation: `fadeInUp 0.8s ease ${index * 0.1}s both`,
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-primary mb-3"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <hr />
                  <p>
                    <strong>Duration:</strong> {project.duration}
                  </p>
                  <p>
                    <strong>Services Provided:</strong> {project.services}
                  </p>
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Completion Date:</strong> {project.completionDate}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <OurServices />

      {/* Hover Effect for Projects */}
      <style>{`
        .project-card:hover {
          transform: scale(1.2); /* Grow on hover by 20% */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Larger shadow on hover */
        }

        .service-card:hover {
          transform: scale(1.2); /* Grow on hover by 20% */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Larger shadow on hover */
        }

        /* Ensure hover effect works on touch devices */
        @media (hover: none) {
          .project-card:active,
          .service-card:active {
            transform: scale(1.2); /* Grow on tap for mobile */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
    </>
  );
}

export default OurProjects;
