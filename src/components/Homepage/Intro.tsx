import "./Intro.css";
import {
  Monitor,
  BadgeCheck,
  ArrowDownUp,
  TicketPercent,
  ShieldCheck
} from "lucide-react";

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        
        <div className="intro-text">
          <h1 className="intro-heading">
            Welcome to {" "}
            <span className="highlight">
              MenuMakchha!
              <span className="underline"></span>
            </span>
          </h1>

          <p className="intro-description">
           We're dedicated to bringing you the finest dining experiences from a variety of restaurants. Dive into our curated menus and uncover your next culinary delight!
          </p>
        </div>

        <div className="intro-image">
          <img
            src="https://menumakchha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebmockup.b1c519aa.png&w=3840&q=75"
            alt="MenuMakchha App"
          />
          <div className="intro-blob"></div>
        </div>

      </div>
      <div className="intro-features">
        <div className="feature-card">
          <Monitor size={28} />
          <p>Digital Presence</p>
        </div>

        <div className="feature-card">
          <BadgeCheck size={28} />
          <p>Conditional Recommendations</p>
        </div>

        <div className="feature-card">
          <ArrowDownUp size={28} />
          <p>Intelligent Sorting</p>
        </div>

        <div className="feature-card">
          <TicketPercent size={28} />
          <p>Promo Code</p>
        </div>

        <div className="feature-card">
          <ShieldCheck size={28} />
          <p>Brand Enhancement</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
