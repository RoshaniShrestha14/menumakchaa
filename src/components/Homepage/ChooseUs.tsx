import React from "react";
import "./ChooseUs.css";
import Gifs from "../ui/Gifs";

const reasons = [
  {
    title: "Modern Design",
    text:
      "Beautiful, high-conversion interfaces that match your brand’s unique aesthetic and elevate the dining atmosphere.",
    gif: "https://lottie.host/47c876b1-c6ea-405f-afb9-98eb065e9842/iqsQZECxon.lottie",
  },
  {
    title: "Easy Ordering",
    text:
      "Frictionless guest journey from scan to pay. Reduce wait times and increase table turnover effortlessly.",
    gif: "https://lottie.host/5302830f-8139-43ba-8a5f-e20abbf7c541/2toS2DMn9g.lottie",
  },
  {
    title: "Instant Updates",
    text:
      "Change prices, hide out-of-stock items, or update daily specials in real time across all QR codes.",
    gif: "https://lottie.host/1f5b3ce4-e999-4485-892a-cdec453c149a/G25PCEnbdj.lottie",
  },
  {
    title: "Diner Insights",
    text:
      "Understand customers with detailed analytics on popular dishes, peak times, and ordering patterns.",
    gif: "https://lottie.host/23e64104-f5cf-460a-9e2a-9116b9bee753/KEZELcVK3r.lottie",
  },
  {
    title: "Smart QR Tech",
    text:
      "Dynamic QR codes that remain functional even if you change your menu structure or platform settings.",
    gif: "https://lottie.host/9c57fd1d-b2b3-4aa7-92d3-5e475ac4267a/eZmDOtwTRR.lottie",
  },
  {
    title: "Expert Support",
    text:
      "Dedicated onboarding and 24/7 technical assistance so your digital menu never misses a beat.",
    gif: "https://lottie.host/e050cdec-fefb-47ce-87fc-fc770e413b53/K476YpZPuV.lottie",
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section className="chooseus-section">
      <div className="chooseus-header">
        <span className="chooseus-eyebrow">Why Choose Us</span>
        <h2>
          We make you look <span>different</span>
        </h2>
        <p>
          Ditch the static menus. We provide a structured, high-tech platform
          that transforms your restaurant’s digital presence into a premium
          guest experience.
        </p>
      </div>

      <div className="chooseus-grid">
        {reasons.map((item) => (
          <div key={item.title} className="chooseus-card">
            <div className="chooseus-gif">
              <Gifs src={item.gif} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
