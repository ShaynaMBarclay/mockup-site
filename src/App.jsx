import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Luxe Locks Salon</h1>
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
          <h2>Transform Your Look</h2>
          <p>Professional hairstyling, coloring, and care tailored to your beauty.</p>
          <a href="#contact" className="cta-btn">Book Now</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services section">
        <h3 className="section-title">Our Services</h3>
        <div className="services-grid">
          <div className="service-card">
            <h4>Haircuts</h4>
            <p>Precision cuts for all styles and hair types.</p>
          </div>
          <div className="service-card">
            <h4>Coloring</h4>
            <p>Vibrant, lasting colors with professional care.</p>
          </div>
          <div className="service-card">
            <h4>Styling</h4>
            <p>Perfect styles for events, photoshoots, and more.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery section">
        <h3 className="section-title">Gallery</h3>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="gallery-item">Image {i}</div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about section">
        <h3 className="section-title">About the Stylist</h3>
        <p>
          Hi! I’m <strong>Luxe</strong>, a professional hairstylist with 10+ years of
          experience in creating personalized styles that enhance natural beauty. My
          mission is to make every client feel confident and radiant.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section">
        <h3 className="section-title">Book an Appointment</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Luxe Locks Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}
