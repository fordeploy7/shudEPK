"use client";

import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/gallery/thankyou.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "50vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          THANK YOU FOR VISITING!
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "1rem" }}>
          I appreciate everyone who listens to my music, or takes the time to visit my website. I hope you find something that resonates and I hope it goes about your day with love and kindness. I couldn’t do it without you! <span role="img" aria-label="heart">❤️</span>
        </p>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          -Shudhita
        </p>
      </div>
    </div>
  );
};

export default ThankYou;