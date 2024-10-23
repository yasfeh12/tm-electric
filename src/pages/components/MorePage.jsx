<section className="text-center my-4" aria-label="Connect With Us">
  <h3 style={{ color: "#0d6efd", fontWeight: "bold", fontSize: "1.8rem" }}>
    Connect With Us
  </h3>
  <p>
    Follow us on our social media platforms to stay updated on our latest news
    and projects.
  </p>
  <div className="d-flex justify-content-center mt-3">
    {/* Social Media Buttons */}
    <Button
      href="https://facebook.com"
      className="mx-2"
      aria-label="Follow us on Facebook"
      style={{
        background: "linear-gradient(45deg, #3b5998, #2b4786)", // Gradient background
        border: "none",
        color: "white",
        borderRadius: "50%",
        width: "60px", // Increased size
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Hover effect
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <FaFacebook size={30} />
    </Button>
    <Button
      href="https://instagram.com"
      className="mx-2"
      aria-label="Follow us on Instagram"
      style={{
        background: "linear-gradient(45deg, #E1306C, #C13584)", // Gradient background
        border: "none",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <FaInstagram size={30} />
    </Button>
    <Button
      href="https://twitter.com"
      className="mx-2"
      aria-label="Follow us on Twitter"
      style={{
        background: "linear-gradient(45deg, #1DA1F2, #0d8dd2)", // Gradient background
        border: "none",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <FaTwitter size={30} />
    </Button>
    <Button
      href="https://linkedin.com"
      className="mx-2"
      aria-label="Follow us on LinkedIn"
      style={{
        background: "linear-gradient(45deg, #0077b5, #005a93)", // Gradient background
        border: "none",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <FaLinkedin size={30} />
    </Button>
  </div>
</section>;
