import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import LedLightingSection from "./components/LedLightingSection";
import ContactForm from "./components/ContactForm";

function ContactUs() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Electrician Services</title>
        <meta
          name="description"
          content="Get in touch with us for any electrical service inquiries. Call, WhatsApp, or email us today for a quick response."
        />
        <meta
          name="keywords"
          content="contact electrician, electrical services contact, call electrician, email electrician"
        />
      </Helmet>

      <LedLightingSection />
      <ContactForm />

      <div>
        <h1>Welcome to Our Contact Page</h1>
        <p>
          Feel free to call, WhatsApp, or email us if you have any questions.
        </p>

        {/* Contact Us Section */}
        <div className="d-flex justify-content-center mt-4">
          <div className="mx-3">
            <a
              href="mailto:example@example.com"
              className="btn btn-outline-primary"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="Email icon" // Alt attribute for SEO
                style={{ width: "30px", marginRight: "10px" }}
              />
              Email
            </a>
          </div>
          <div className="mx-3">
            <a href="tel:+123456789" className="btn btn-outline-success">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone icon" // Alt attribute for SEO
                style={{ width: "30px", marginRight: "10px" }}
              />
              Phone
            </a>
          </div>
          <div className="mx-3">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp icon" // Alt attribute for SEO
                style={{ width: "30px", marginRight: "10px" }}
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
