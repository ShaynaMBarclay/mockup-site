// src/App.jsx
import React, { useEffect } from "react";
import "./App.css";

export default function App() {

  // Navbar shrink on scroll
  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <h1 className="logo">Your Beauty Site</h1>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Beautysiteforyou.com</span>
          <h2>Your Brand. Your Style.</h2>
          <p>
            This is a demo layout. Your name, services, colors, images, and vibe can be
            fully customized.
          </p>
          <a href="#contact" className="cta-btn">Book now</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services section">
        <h3 className="section-title">Your Services</h3>
        <p className="section-subtitle">These will show what you offer.</p>

        <div className="services-grid">
          <div className="service-card">
            <h4>Your Service Name</h4>
            <p>Short description of your service goes here.</p>
          </div>
          <div className="service-card">
            <h4>Your Service Name</h4>
            <p>Short description of your service goes here.</p>
          </div>
          <div className="service-card">
            <h4>Your Service Name</h4>
            <p>Short description of your service goes here.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery section">
        <h3 className="section-title">Your Work</h3>
        <p className="section-subtitle">Your own photos will be here.</p>

        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="gallery-item">Your Image</div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about section">
        <h3 className="section-title">About You</h3>

        <div className="gallery-grid">
          {[1, 2].map((i) => (
            <div key={i} className="gallery-item">Your Image</div>
          ))}
        </div>

        <div className="about-bio">
          This section is for your story. Add your experience, certifications, vibe,
          and what makes you unique as a beauty professional.
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section">
        <h3 className="section-title">Booking & Contact</h3>
        <p className="section-subtitle">
          Replace this with your booking system, Instagram, or contact form.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Client Name" required />
          <input type="email" placeholder="Client Email" required />
          <textarea placeholder="Message or booking request" required />
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Beauty Site • Powered by Beautysiteforyou.com</p>
      </footer>
    </div>
  );
}
