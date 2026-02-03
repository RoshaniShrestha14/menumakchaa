import React from "react";
import "./Service.css";
import Gifs from "../ui/Gifs";
import Blob from "../ui/Blob";

const services = [
  {
    title: "Menu Discovery",
    description:
      "Explore a variety of restaurant menus effortlessly with our intuitive browsing experience.",
    gif: "https://lottie.host/c8494b69-5317-44e0-a117-7f372e18926f/dMIIsdHlQ7.lottie",
  },
  {
    title: "Social Dining",
    description:
      "Connect with other food enthusiasts and share dining experiences within our community.",
    gif: "https://lottie.host/625b4bb4-535d-4502-941a-edb03a6f053a/ffPqP0ij2z.lottie",
  },
  {
    title: "Creative Cuisine",
    description:
      "Indulge in visually captivating dishes and culinary innovations crafted by top chefs.",
    gif: "https://lottie.host/1b579da4-f20e-4c23-8a2c-d9e04e9744ce/JNAHEBUqZJ.lottie",
  },
  {
    title: "Taste Identity",
    description:
      "Discover the unique flavors and signature styles that define each restaurant's personality.",
    gif: "https://lottie.host/b0f9b154-7869-476e-918a-ff7e79710260/umxRpdNUSm.lottie",
  },
  {
    title: "User-Friendly Ordering",
    description:
      "Empower users to self-order with ease, enhancing their overall dining experience.",
    gif: "https://lottie.host/3ba535e7-0880-44b7-8c65-9fcc379d019c/gPW7Yx7HXb.lottie",
  },
  {
    title: "QR Stand Integration",
    description:
      "Easily access menus with our QR Stand feature, enabling quick scanning for instant viewing.",
    gif: "https://lottie.host/de4895db-45dc-4659-a1f6-9bce633eb65a/itd6CbAq79.lottie",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-blob-decoration">
        <div className="services-blob-top-left">
          <Blob color="#FFE3E3" width={320} height={320} hoverAnimate={false} />
        </div>
        <div className="services-blob-top-right">
          <Blob color="#B8E2FF" width={280} height={280} hoverAnimate={false} />
        </div>
        <div className="services-blob-bottom-left">
          <Blob color="#D4F1E8" width={360} height={360} hoverAnimate={false} />
        </div>
        <div className="services-blob-bottom-right">
          <Blob color="#A6E2CF" width={300} height={300} hoverAnimate={false} />
        </div>
      </div>
      <div className="services-header">
        <h2>What We Do</h2>
        <p>
          Save time managing advertising & content for your business with our
          streamlined digital tools.
        </p>
      </div>
      {/* <div>
        <Blob color="#00B4D8" width={300} height={300} />
        </div>  */}

      <div className="services-grid">
        {services.map((item) => (
          <div key={item.title} className="service-card">
            <div className="service-gif-circle">
              <Gifs src={item.gif} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
