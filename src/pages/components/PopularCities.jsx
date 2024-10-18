import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ContactModal from "./ContactModal"; // Import the modal

const PopularCities = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const cities = [
    {
      name: "London",
      image:
        "https://www.fodors.com/wp-content/uploads/2022/08/shutterstock_457198984.jpg",
      search: "Find an electrician in London",
    },
    {
      name: "Leeds",
      image:
        "https://youmedia-cdn.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/02/28110212/leeds-skyline_402434702-as.jpg",
      search: "Find an electrician in Leeds",
    },
    {
      name: "York",
      image:
        "https://www.yorkshire.com/wp-content/uploads/2023/09/shambles-christmas-york-yorkshire-1024x683.jpg",
      search: "Find an electrician in York",
    },
    {
      name: "Liverpool",
      image:
        "https://homefinderuk.org/sites/default/files/2023-06/liverpool.jpg",
      search: "Find an electrician in Liverpool",
    },
    {
      name: "Manchester",
      image:
        "https://www.complete-ltd.com/wp-content/uploads/2023/06/iStock-1421131724-1.webp",
      search: "Find an electrician in Manchester",
    },
    {
      name: "Birmingham",
      image:
        "https://auctusmg.co.uk/wp-content/uploads/2019/12/Birmingham-City-Centre-Tram-Extension-Opens-To-Passengers-Ahead-of-Schedule.jpg",
      search: "Find an electrician in Birmingham",
    },
  ];

  return (
    <Container className="my-5">
      {/* Main Title for SEO */}
      <h2 className="text-center">Popular Cities</h2>
      <p>
        We work on projects both commercially and domestically across the whole
        country. No job is too big or too small.
      </p>

      {/* City Cards with images and alt text for SEO */}
      <Row className="justify-content-center">
        {cities.map((city, index) => (
          <Col xs={12} md={4} className="mb-4" key={index}>
            <Card className="text-center h-100">
              <Card.Img
                variant="top"
                src={city.image}
                alt={`View of ${city.name}`} // Added alt text for SEO
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  aria-label={`Find an electrician in ${city.name}`} // Descriptive aria-label for accessibility
                >
                  {city.search}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Contact Modal */}
      <ContactModal show={showModal} handleClose={handleClose} />
    </Container>
  );
};

export default PopularCities;
