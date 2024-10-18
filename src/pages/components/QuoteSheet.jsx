import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ContactModal from "./ContactModal"; // Import the ContactModal component

const QuoteSheet = () => {
  const [show, setShow] = useState(false);
  const [contactModalShow, setContactModalShow] = useState(false); // State for ContactModal visibility
  const [situation, setSituation] = useState("");
  const [workType, setWorkType] = useState("");
  const [schedule, setSchedule] = useState("");
  const [postcode, setPostcode] = useState("");
  const [estimate, setEstimate] = useState(null);

  // Open and close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle form submit and calculate rough estimate
  const handleSubmit = (e) => {
    e.preventDefault();

    let cost = 100; // base cost
    if (workType === "Re-wiring") cost += 2000;
    if (workType === "Lighting install") cost += 100;
    if (workType === "Fuse box or circuit breaker work") cost += 400;
    if (workType === "Switch or outlet install") cost += 75;
    if (workType === "Switch or outlet repair") cost += 75;

    setEstimate(`Estimated cost: £${cost} - £${cost + 200}`);
  };

  const openContactModal = () => {
    handleClose(); // Close the quote modal first
    setContactModalShow(true); // Then show the contact modal
  };

  return (
    <>
      {/* Button to open the Quote Modal */}
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          marginBottom: "10px",
          fontSize: "21px",
          fontWeight: "600",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Get a Quote Today!
      </Button>

      {/* Quote Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "24px", fontWeight: "bold" }}>
            Get a Rough Estimate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px" }}>
          <Form onSubmit={handleSubmit}>
            {/* Question 1 - Situation */}
            <Form.Group className="mb-4">
              <Form.Label
                htmlFor="situation"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                Which of these best describes your situation?
              </Form.Label>
              <div className="d-flex flex-column" id="situation">
                <Form.Check
                  type="radio"
                  label="I own the property"
                  name="situation"
                  value="own"
                  onChange={(e) => setSituation(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  label="I am buying the property"
                  name="situation"
                  value="buying"
                  onChange={(e) => setSituation(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  label="I am renting the property"
                  name="situation"
                  value="renting"
                  onChange={(e) => setSituation(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="situation"
                  value="other"
                  onChange={(e) => setSituation(e.target.value)}
                  className="mb-2"
                />
              </div>
            </Form.Group>

            {/* Question 2 - Work Type */}
            <Form.Group className="mb-4">
              <Form.Label
                htmlFor="workType"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                What kind of work do you need doing?
              </Form.Label>
              <Form.Control
                as="select"
                value={workType}
                id="workType"
                onChange={(e) => setWorkType(e.target.value)}
                style={{ height: "45px", borderRadius: "8px" }}
              >
                <option value="">Select...</option>
                <option value="Fuse box or circuit breaker work">
                  Fuse box or circuit breaker work
                </option>
                <option value="Lighting install">Lighting install</option>
                <option value="Re-wiring">Re-wiring</option>
                <option value="Switch or outlet install">
                  Switch or outlet install
                </option>
                <option value="Switch or outlet repair">
                  Switch or outlet repair
                </option>
                <option value="Other appliance installation">
                  Other appliance installation
                </option>
                <option value="Other appliance repair">
                  Other appliance repair
                </option>
              </Form.Control>
            </Form.Group>

            {/* Question 3 - Schedule */}
            <Form.Group className="mb-4">
              <Form.Label
                htmlFor="schedule"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                When do you want the work done?
              </Form.Label>
              <Form.Control
                as="select"
                value={schedule}
                id="schedule"
                onChange={(e) => setSchedule(e.target.value)}
                style={{ height: "45px", borderRadius: "8px" }}
              >
                <option value="">Select...</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Next week">Next week</option>
                <option value="In the next month">In the next month</option>
                <option value="In the next 2 months">
                  In the next 2 months
                </option>
                <option value="In the next 3 months">
                  In the next 3 months
                </option>
              </Form.Control>
            </Form.Group>

            {/* Question 4 - Postcode */}
            <Form.Group className="mb-4">
              <Form.Label
                htmlFor="postcode"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                What's your postcode?
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postcode"
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                style={{ height: "45px", borderRadius: "8px" }}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "12px 0",
                borderRadius: "8px",
              }}
            >
              Get Estimate
            </Button>
          </Form>

          {/* Display estimate if available */}
          {estimate && (
            <div className="mt-4">
              <h4 style={{ fontWeight: "bold" }}>{estimate}</h4>

              {/* Contact Us Now button */}
              <Button
                variant="success"
                onClick={openContactModal} // Close the quote modal and open contact modal
                className="w-100 mt-3"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: "12px 0",
                  borderRadius: "8px",
                }}
              >
                Contact Us Now
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Contact Modal */}
      <ContactModal
        show={contactModalShow}
        handleClose={() => setContactModalShow(false)}
      />
    </>
  );
};

export default QuoteSheet;
