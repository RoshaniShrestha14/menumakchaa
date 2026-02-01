import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.jpg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  const activeTab =
    navLinks.find((link) => link.to === location.pathname)?.name ?? "Home";

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`nav-link ${
                activeTab === link.name ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="auth-buttons">
          <button type="button" className="btn register-btn">
            Register
          </button>
          <button type="button" className="btn login-btn">
            Login
          </button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`nav-link ${
              activeTab === link.name ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <div className="auth-mobile">
          <button type="button" className="btn register-btn">
            Register
          </button>
          <button type="button" className="btn login-btn">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
