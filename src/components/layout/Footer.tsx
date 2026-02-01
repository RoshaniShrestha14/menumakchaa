import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { GrAppleAppStore } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";



const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-brand">
          <img src={logo} alt="MenuMakchha" className="footer-logo" />

          <p>
            Discover MenuMakchha: Nepal's top restaurant, cafe, and hotel
            chain offering authentic Nepali and international cuisine.
            Explore our diverse menu and locations nationwide for
            unparalleled dining and hospitality. Elevate your experience
            with MenuMakchha today!
          </p>

          <div className="social-icons">
            <div className="icon-box">
              <Facebook size={22} />
            </div>
            <div className="icon-box">
              <Instagram size={22} />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-contact">
          <h4>CONTACT US</h4>

          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={18} />
            </div>
            <div>
              <strong>+977 9802590685</strong>
              <span>Support Number</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={18} />
            </div>
            <div>
              <strong>menumakchha@gmail.com</strong>
              <span>Support Email</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={18} />
            </div>
            <div>
              <strong>Golpark-3, Butwal, Nepal</strong>
              <span>Address</span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="footer-pages">
          <h4>PAGES</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-app">
          <h4>DOWNLOAD APP</h4>

          <img src="/qr.webp" alt="QR Code" className="qr" />

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
    </footer>
  );
};

export default Footer;
