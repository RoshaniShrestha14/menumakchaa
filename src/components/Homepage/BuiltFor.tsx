import {
  Store,
  Coffee,
  Utensils,
  Wine,
  Pizza,
  Sandwich,
  Cake,
  Building2,
  Croissant,
  Cloud, 
} from "lucide-react";
import { GrAppleAppStore } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import "./BuiltFor.css";
import { Link } from "react-router-dom";

const features = [
  { icon: Store, label: "Food courts & canteens" },
  { icon: Coffee, label: "Cafe" },
  { icon: Utensils, label: "Fine dine" },
  { icon: Wine, label: "Bar & brewery" },
  { icon: Pizza, label: "Pizzeria" },
  { icon: Sandwich, label: "QSR" },
  { icon: Cake, label: "Desserts" },
  { icon: Building2, label: "Large chains" },
  { icon: Croissant, label: "Bakery" },
  { icon: Cloud, label: "Cloud kitchens" },
];

const BuiltFor = () => {
  return (
    <>
    <section className="built-section">
      <div className="built-container">
        <div className="built-text">
          <h2 className="built-heading">
            Built for all types of{" "}
            <span className="highlight">
              Food Business
              <span className="underline"></span>
            </span>
          </h2>

          <p className="built-description">
            The all-in-one Restaurant Management System for all types of restaurant formats and food outlets
          </p>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="built-features">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="feature-card">
              <Icon size={34} strokeWidth={2} />
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="built-blob" />
    </section>
    <section className="cta-section">
      <div className="cta-card">
        <div className="cta-content">
          <h2>Elevate Your Restaurant's Profile!</h2>
          <p>
            Menumakchha.com, an innovative QR menu service designed to redefine the dining experience for both restaurants and customers. In an era where convenience, safety, and efficiency are paramount, Menumakchha.com offers a comprehensive solution to digitize menus, streamline operations, and elevate customer satisfaction.
          </p>

          <div className="cta-actions">
            <Link to="/register" className="primary-btn">
              Register Your Resturant
            </Link>
          </div>
        </div>

        <div className="cta-store-buttons">
          <button className="store-btn">
            <GrAppleAppStore size={22} />
            <div>
              <small>DOWNLOAD ON THE</small>
              <span>App Store</span>
            </div>
          </button>

          <button className="store-btn">
            <FaGooglePlay size={22} />
            <div>
              <small>GET IT ON</small>
              <span>Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default BuiltFor;
