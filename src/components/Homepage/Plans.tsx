import React, { useRef, useState, useEffect } from "react";
import "./Plans.css";
import { plans } from "./plansData";
import type { Plan } from "./plansData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Plans: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(getVisibleCount());
  const maxIndex = Math.max(0, plans.length - visible);

  const slideTo = (i: number) => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.offsetWidth / visible;
    const clampedIndex = Math.max(0, Math.min(i, maxIndex));

    sliderRef.current.scrollTo({
      left: cardWidth * clampedIndex,
      behavior: "smooth",
    });

    setIndex(clampedIndex);
  };

  const next = () => {
    if (index < maxIndex) slideTo(index + 1);
  };

  const prev = () => {
    if (index > 0) slideTo(index - 1);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisible(getVisibleCount());
      setIndex(0);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="plans">
      <div className="plans-header">
        <span className="plans-eyebrow">Pricing</span>
        <h2>
          Flexible Plans for <span>Every Need</span>
        </h2>
        <p>Explore subscription packages designed for restaurants of all sizes.</p>
      </div>

      <div className="plans-slider-wrapper">
        <button className="nav-btn left" onClick={prev}>
          <ChevronLeft size={20} stroke="#102359" />
        </button>

        <div className="plans-slider" ref={sliderRef}>
          {plans.map((plan: Plan) => (
            <div
              key={plan.title}
              className={`plan-card ${plan.highlight ? "popular" : ""}`}
            >
              {plan.tag && <span className="badge">{plan.tag}</span>}

              <h3>{plan.title}</h3>

              <div className="price">
                {plan.price} <span>/{plan.period}</span>
              </div>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i} className={!feature.available ? "disabled" : ""}>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button className={plan.highlight ? "primary" : ""}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={next}>
          <ChevronRight size={20} stroke="#102359" />
        </button>
      </div>

      <div className="dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => slideTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Plans;
