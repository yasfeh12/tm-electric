import React from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

// ReviewCard Component with reduced padding and SEO improvements
const ReviewCard = ({ name, date, review, stars, profilePic }) => {
  return (
    <Card
      className="p-3 shadow-sm review-card" // Adjust the padding here
      style={{ fontSize: "1.1rem", position: "relative" }}
    >
      {/* Google logo positioned at the top right with alt text for SEO */}
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <img
          src="https://webautomation.io/static/images/domain_images/g-reviews-icon.png" // Replace with actual Google logo URL
          alt="Google Reviews Logo" // Alt text for SEO
          style={{ width: "50px", height: "30px" }} // Adjust size as needed
        />
      </div>

      <Row>
        <Col xs={3} className="d-flex align-items-center">
          <img
            src={profilePic}
            alt={`Profile picture of ${name}`} // Alt text for SEO and accessibility
            className="rounded-circle"
            style={{ width: "70px", height: "70px", border: "2px solid #ddd" }}
          />
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Title
              className="mb-0"
              style={{ fontSize: "1.4rem", fontWeight: "600" }}
            >
              {name}{" "}
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                {date}
              </span>
            </Card.Title>
            <Card.Text className="text-warning" style={{ fontSize: "1.2rem" }}>
              {[...Array(stars)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </Card.Text>
            <Card.Text>{review}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

// Reviews Component with enhanced carousel
const Reviews = () => {
  const reviews = [
    {
      name: "Betty Brigham",
      date: "08/01/2023",
      review:
        "Amazing electrician and very reasonably priced. I highly recommend for any jobs big or small.",
      stars: 5,
      profilePic:
        "https://lh3.googleusercontent.com/a/AGNmyxY-qr85oAPqmr6RdUpwwyfp7Pj-c86XpMW_lfqh=s120-c-c-rp-w64-h64-mo-br100",
    },
    {
      name: "Kieran Batsey",
      date: "27/03/2024",
      review: "Nice lad, good work, fair price!",
      stars: 5,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s",
    },
    {
      name: "Jamie Spink",
      date: "21/05/2024",
      review: "Very pleasant job well done.",
      stars: 5,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s",
    },
    {
      name: "Frank Johnson",
      date: "04/06/2024",
      review:
        "Professional service, easy communications, prompt attendance and completed the job we wanted quickly. Happy to recommend their services.",
      stars: 5,
      profilePic:
        "https://lh3.googleusercontent.com/a/AGNmyxb-jBnNK4ploHIKCgkHt8xTnFAOdKhku8g27_5u=s120-c-c-rp-w64-h64-mo-br100",
    },
    {
      name: "Pat Smith",
      date: "17/09/2024",
      review:
        "Arrived on time, good communication skills and fair quote. Happy with the service provided.",
      stars: 4,
      profilePic:
        "https://lh3.googleusercontent.com/a/AGNmyxbcWI-9nQ8F-yx5cD1Vk109bqf0sPsNmWHTz-80=s120-c-c-rp-w64-h64-mo-br100",
    },
  ];

  return (
    <Container className="my-5">
      {/* Carousel with reviews */}
      <Carousel interval={null}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index} className="p-3">
            {/* Reduced padding */}
            <ReviewCard
              name={review.name}
              date={review.date}
              review={review.review}
              stars={review.stars}
              profilePic={review.profilePic}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Reviews;
