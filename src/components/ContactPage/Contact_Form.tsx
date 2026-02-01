import React, { useState } from "react";
import type { FormEvent } from "react";
import { Send, MapPin, Phone, AlertCircle } from "lucide-react";
import "./Contact.css";
import Button from "../ui/buttons";

const Contact_Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("Message sent!");
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-tag">CONTACT</span>
          <h1>Get in Touch</h1>
          <p className="subtitle">We're here to help you digitalize your menu!</p>
          <p className="desc">
            Whether you're a restaurant owner interested in joining Menumakha
            or a customer with questions, feel free to reach out to us.
          </p>

          <div className="info-block">
            <div className="info-icon">
              <MapPin size={18} />
            </div>
            <div>
              <h4>Our Address</h4>
              <p>
                Golpark-3
                <br />
                Butwal, Nepal
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Phone size={20} />
            </div>
            <div>
              <h4>Contact Info</h4>
              <p>+977 71537167</p>
              <p>contact@nctbutwal.com.np</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <h2>Ready to Get Started?</h2>

          <form onSubmit={handleSubmit} className="simple-contact-form">
            {["fullName", "phone", "email"].map((field, index) => (
              <div key={index} className="form-group">
                <input
                  type="text"
                  name={field}
                  placeholder={
                    field === "fullName"
                      ? "Your name"
                      : field === "phone"
                      ? "Your Mobile Number"
                      : "Your email address"
                  }
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                />
                {errors[field] && (
                  <p className="error-text">
                    <AlertCircle size={14} /> {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="error-text">
                  <AlertCircle size={14} /> {errors.message}
                </p>
              )}
            </div>

            <Button variant="primary" type="submit" className="submit-button">
              Send Message <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Form;
