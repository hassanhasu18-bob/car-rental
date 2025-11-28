import React from "react";

export default function Header({ title = "Find din bil", children }) {
  return (
    <header className="hero">
      <img src="/hero.jpg" alt="Scenic road" className="hero-img" />
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        {children}
      </div>
    </header>
  );
}
