import "./About.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-text">
          <h1 className="about-heading">
            Discover the <br />
            Essence of{" "}
            <span className="highlight">
              MenuMakchha
              <span className="underline"></span>
            </span>
          </h1>

          <p className="about-description">
            At MenuMakchha, we take immense pride in being Nepal's top restaurant, cafe, and hotel chain, renowned for offering an exquisite blend of authentic Nepali and international cuisine. Our mission is to provide an unparalleled dining and hospitality experience that showcases the rich culinary heritage and vibrant flavors of Nepal.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images">
          <div className="about-image-main">
            <img
              src="https://menumakchha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout1.320e2fa8.jpeg&w=3840&q=75"
              alt="Food"
            />
          </div>

          <div className="about-image-secondary">
            <img
              src="https://menumakchha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout2.ee397ddc.jpeg&w=3840&q=75"
              alt="QR Menu"
            />
          </div>

          <div className="decor-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
