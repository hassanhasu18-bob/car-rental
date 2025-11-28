import React from "react";
import CarCard from "./CarCard.jsx";

export default function CarList({ title = "Available Cars", cars }) {
  return (
    <section className="cars-section">
      <h2>{title}</h2>
      <div className="cars-grid">
        {cars.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
    </section>
  );
}
