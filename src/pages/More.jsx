import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import MorePage from "./components/MorePage";

function More() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>More - Future Electrical Services Plans</title>
        <meta
          name="description"
          content="Learn more about our future plans for expanding our electrical services, including smart home installations, energy-efficient solutions, and more."
        />
        <meta
          name="keywords"
          content="future electrical services, smart home installations, energy-efficient electrical solutions"
        />
      </Helmet>

      <div>
        <h1 style={{ color: "#0d6efd" }}>Welcome to Our More</h1>{" "}
        {/* Title color corrected */}
        <p>
          This is the main page where you can learn more about our future plans
          for our electrical services.
        </p>
        <MorePage />
      </div>
    </>
  );
}

export default More;
