import React from "react";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  const priceDKK = car.pricePerDayDKK ?? Math.round(car.pricePerDayUSD * 6.7); // simple conversion

  return (
    <div className="car-card">
      <img src={car.img} alt={car.name} />
      <div className="car-info">
        <h4>{car.name}</h4>
        <p className="muted">{car.type}</p>
        <p className="price">{priceDKK} kr/dag</p>
        <div className="card-actions">
          <Link className="btn small" to={`/booking?car=${car.id}`}>Book nu</Link>
        </div>
      </div>
    </div>
  );
}
