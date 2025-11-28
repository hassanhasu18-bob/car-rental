import React, { useState } from "react";
import { carTypes, locations } from "./Data.js";

export default function Filters({ onApply }) {
  const [type, setType] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function applyFilters(e) {
    e.preventDefault();
    onApply?.({ type, priceMin, priceMax, pickUp, pickUpDate, returnDate });
  }

  return (
    <form className="filters" onSubmit={applyFilters}>
      <h3>Filtre</h3>

      <div className="form-group">
        <label>Car type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Alle</option>
          {carTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Pris min (kr/dag)</label>
          <input type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} placeholder="0" />
        </div>
        <div className="form-group">
          <label>Pris max (kr/dag)</label>
          <input type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} placeholder="500" />
        </div>
      </div>

      <div className="form-group">
        <label>Pick up lokation</label>
        <select value={pickUp} onChange={(e) => setPickUp(e.target.value)}>
          <option value="">Alle</option>
          {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Pick up dato</label>
          <input type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Return dato</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </div>
      </div>

      <button className="btn" type="submit">Anvend filtre</button>
    </form>
  );
}
