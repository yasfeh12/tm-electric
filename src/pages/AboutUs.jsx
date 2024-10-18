import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import PopularCities from "./components/PopularCities";

function AboutUs() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - Professional Electricians in Morley, Leeds</title>
        <meta
          name="description"
          content="Learn more about our highly qualified electricians, offering professional electrical services in Morley, Leeds. We handle both commercial and domestic projects."
        />
        <meta
          name="keywords"
          content="professional electricians, electrical services Leeds, commercial electrician, domestic electrician"
        />
      </Helmet>

      <div>
        <h1>Welcome to Our About Us</h1>
        <p>
          This is the main page where you can learn about our electrical
          services.
        </p>
        <p>
          At TM electric, based in Morley, Leeds, we pride ourselves on
          delivering top-notch electrical services. Our team consists of fully
          registered, licensed, and highly qualified electricians with years of
          experience handling both commercial and domestic projects. Whether
          you're looking to install new lighting in your home or need complex
          electrical work for a business property, we have the expertise to get
          the job done safely and efficiently. We stand by our reputation for
          providing fair pricing without compromising on the quality of work.
          Our electricians are committed to delivering high standards, ensuring
          that all work is completed to perfection. Despite our growing demand,
          we still maintain limited availability, ensuring each project receives
          the attention it deserves. When you choose us, you're choosing
          experience, reliability, and exceptional service for all your
          electrical needs. Feel free to get in touch to discuss your
          requirements and secure your booking with our trusted professionals
          today.
        </p>
      </div>
      <PopularCities />
    </>
  );
}

export default AboutUs;
