import React from "react";
import "./Footer.css"; // Create and link a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Movie App. All rights reserved.</p>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
