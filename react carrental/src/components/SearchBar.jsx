import React, { useState } from "react";
import { locations } from "./Data.js";

export default function SearchBar({ onSearch }) {
  const [pickUp, setPickUp] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.({ pickUp, pickUpDate, returnDate });
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Pick up lokation</label>
        <select value={pickUp} onChange={(e) => setPickUp(e.target.value)}>
          <option value="">Vælg lokation</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Pick up dato</label>
        <input type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Return dato</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      </div>
      <button className="btn primary" type="submit">Søg</button>
    </form>
  );
}
