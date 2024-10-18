import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vjaagl9",
        "template_v2s1iao",
        form.current,
        "m2JLE6pGdGYjkBMgR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="form-input"
            aria-label="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="form-input"
            aria-label="Enter your email address"
          />
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="form-textarea"
            aria-label="Enter your message"
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Send"
          className="submit-button"
          aria-label="Send your message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
