import { useState } from "react";
import { personalInfo } from "../data/portfolio";
import FadeIn from "./FadeIn";
import type { ContactMessage } from "../types";

const Contact = () => {
  const [form, setForm] = useState<ContactMessage>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <FadeIn>
          <div className="divider" />
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">Have a Project in Mind or Just want to Say Hi? I'd Love to Hear from You.</p>
        </FadeIn>

        <div className="contact-grid">
          {/* Info */}
          <FadeIn direction="left">
            <div>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}>{personalInfo.phone}</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">AyushHL</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Instagram</div>
                  <div className="contact-info-value">
                    <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer">Zenith_Ayush</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">X</div>
                  <div className="contact-info-value">
                    <a href={personalInfo.x} target="_blank" rel="noopener noreferrer">Zenith_Ayush</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Delhi, India</div>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" delay={0.1}>
            <div className="card">
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    className="form-input"
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    className="form-input"
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    className="form-textarea"
                    id="contact-message"
                    name="message"
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === "success" && (
                  <div className="form-success">✅ Message Sent! I'll Get Back to You Soon.</div>
                )}
                {status === "error" && (
                  <div className="form-error">❌ Something Went Wrong. Please Email Me Directly.</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  id="contact-submit-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
