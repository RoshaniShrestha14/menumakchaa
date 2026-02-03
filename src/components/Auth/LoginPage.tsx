import React, { useState } from "react";
import { Mail, Lock, Utensils } from "lucide-react";
import "./Login.css";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => {
      const next = { ...prev };
      const trimmedValue = value.trim();

      switch (name) {
        case "email":
          if (!trimmedValue) next.email = "Email is required";
          else if (!/\S+@\S+\.\S+/.test(trimmedValue)) next.email = "Invalid email";
          else next.email = "";
          break;
        case "password":
          if (!trimmedValue) next.password = "Password is required";
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
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Login submitted", formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-card">
          <div className="login-icon">
            <Utensils size={24} />
          </div>

          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Log in to manage your restaurant dashboard.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label>
                <Mail size={16} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="hello@yourbrand.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="login-field">
              <label>
                <Lock size={16} /> Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="forgot-password">Forgot password?</span>
            </div>

            <button type="submit" className="login-primary-btn">
              Login
            </button>

            <p className="login-footer">
              Don’t have an account? <span>Register</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
