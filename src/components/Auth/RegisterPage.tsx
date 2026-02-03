import React, { useState } from "react";
import {
  User,
  Store,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Lock,
  Utensils,
} from "lucide-react";
import "./Register.css";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    restaurant: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => {
      const next = { ...prev };
      const trimmedValue = value.trim();

      switch (name) {
        case "fullName":
          if (!trimmedValue) next.fullName = "Full name is required";
          else next.fullName = "";
          break;
        case "restaurant":
          if (!trimmedValue) next.restaurant = "Restaurant name is required";
          else next.restaurant = "";
          break;
        case "email":
          if (!trimmedValue) next.email = "Email is required";
          else if (!/\S+@\S+\.\S+/.test(trimmedValue)) next.email = "Invalid email";
          else next.email = "";
          break;
        case "phone":
          if (!trimmedValue) next.phone = "Phone is required";
          else if (!/^\+?[0-9]{7,15}$/.test(trimmedValue)) next.phone = "Invalid phone number";
          else next.phone = "";
          break;
        case "pan":
          if (!trimmedValue) next.pan = "PAN is required";
          else next.pan = "";
          break;
        case "address":
          if (!trimmedValue) next.address = "Address is required";
          else next.address = "";
          break;
        case "password":
          if (!trimmedValue) next.password = "Password is required";
          else if (trimmedValue.length < 6) next.password = "Password must be 6+ chars";
          else next.password = "";
          break;
        default:
          break;
      }

      return next;
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.restaurant) newErrors.restaurant = "Restaurant name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.pan) newErrors.pan = "PAN is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be 6+ chars";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", formData);
      setFormData({ fullName: "", restaurant: "", email: "", phone: "", pan: "", address: "", password: "" });
      setErrors({});
    } else setErrors(validationErrors);
  };

  return (
    <section className="register-section">
      <div className="register-container">
        {/* Left Form */}
        <div className="register-card">
          <div className="register-icon">
            <Utensils size={24} />
          </div>
          <h1 className="register-title">Welcome to the Family!</h1>
          <p className="register-subtitle">
            Modernize your restaurant with a cute and simple digital menu experience.
          </p>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-row">
              <div className="register-field">
                <label><User size={16} /> Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="E.g. Ram Bahadur Thapa"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>
              <div className="register-field">
                <label><Store size={16} /> Restaurant Name</label>
                <input
                  name="restaurant"
                  type="text"
                  placeholder="The Cozy Cafe"
                  value={formData.restaurant}
                  onChange={handleChange}
                />
                {errors.restaurant && <span className="error">{errors.restaurant}</span>}
              </div>
            </div>
            <div className="register-field">
              <label><Mail size={16} /> Email Address</label>
              <input
                name="email"
                type="email"
                autoComplete="off"
                placeholder="hello@yourbrand.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="register-row">
              <div className="register-field">
                <label><Phone size={16} /> Mobile Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="register-field">
                <label><CreditCard size={16} /> PAN Number</label>
                <input
                  name="pan"
                  type="text"
                  placeholder="ABCDE1234F"
                  value={formData.pan}
                  onChange={handleChange}
                />
                {errors.pan && <span className="error">{errors.pan}</span>}
              </div>
            </div>
            <div className="register-field">
              <label><MapPin size={16} /> Address</label>
              <textarea
                name="address"
                placeholder="Where is the magic happening?"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="register-field">
              <label><Lock size={16} /> Password</label>
              <input
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit" className="register-primary-btn">
              Register Restaurant
            </button>
            <p className="register-terms">
              By joining, you're agreeing to our
              <span> Terms </span>&<span> Privacy</span>.
            </p>
          </form>
        </div>
        {/* Images */}
      <div className="register-images">
        <div className="image-stack">
          <div className="image image-primary">
            <img src="/Friends.png" alt="Dining" />
          </div>

          <div className="image image-secondary">
            <img src="/Family.png" alt="Restaurant" />
          </div>

          <div className="image-icon">
            <Utensils size={20} />
          </div>
        </div>

        <h3 className="image-title">Seamless Dining Experiences</h3>
        <p className="image-text">
          Join 500+ restaurants transforming their service with our digital-first
          approach to dining.
        </p>
      </div>

      </div>
    </section>
  );
};

export default RegisterPage;
