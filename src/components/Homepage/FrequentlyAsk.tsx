import React, { useState } from "react";
import "./Frequently.css";
import Blob from "../ui/Blob";

const faqs = [
  {
    question: "What is Menumakhcha?",
    answer:
      "Menumakhcha is a digital menu system designed for restaurants and cafes in Nepal. It eliminates the need for physical menus by providing a platform for restaurants to upload their menus and for customers to view them on their phones.",
  },
  {
    question: "Do I need to download the Menumakhcha app to view menus?",
    answer:
      "No, you don't need a separate app. You can simply scan the QR code displayed at the restaurant using your phone's camera. This will display the restaurant's digital menu on your phone's browser.",
  },
  {
    question: "How do I view a restaurant’s menu using Menumakhcha?",
    answer:
      "To view a restaurant's menu with Menumakhcha, find the QR code at the restaurant (on tables or signs). Use your phone's camera to scan it, which opens the digital menu in your browser. Browse dishes, drinks, and more conveniently on your phone without handling physical menus.",
  },
  {
    question: "What are the benefits of using Menumakhcha for restaurants?",
    answer:
      "Menumakhcha offers several benefits for restaurants. It can reduce printing costs for physical menus, allow easy and instant updates, promote eco-friendliness, and help reach a wider audience.",
  },
  {
    question: "Does Menumakhcha mean 'What’s on the Menu' in Nepali?",
    answer:
      "Yes, Menumakhcha roughly translates to 'What’s on the Menu' in Nepali.",
  },
  {
    question: "Is Menumakhcha eco-friendly?",
    answer:
      "Yes, Menumakhcha promotes a paperless dining experience, helping reduce paper waste and making restaurants more environmentally friendly.",
  },
];

const FrequentlyAsk = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Questions related to Menumakhcha
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-card"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span
                  className={`faq-arrow ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  ▾
                </span>
              </div>

              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-blob-decoration">
        <div className="blob-top-left">
          <Blob
            color="#FFE3E3"
            width={320}
            height={320}
            hoverAnimate={false}
          />
        </div>
        <div className="blob-top-right">
          <Blob
            color="#B8E2FF"
            width={280}
            height={280}
            hoverAnimate={false}
          />
        </div>
        <div className="blob-bottom-left">
          <Blob
            color="#D4F1E8"
            width={350}
            height={350}
            hoverAnimate={false}
          />
        </div>
        <div className="blob-bottom-right">
          <Blob
            color="#A6E2CF"
            width={300}
            height={300}
            hoverAnimate={false}
          />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsk;
