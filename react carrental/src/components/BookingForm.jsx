import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";




export default function BookingForm() {
  const [params] = useSearchParams();
  const preselectId = params.get("car");
  const [carId, setCarId] = useState(preselectId || "");
  const [priceRange, setPriceRange] = useState("");
  const [pickup, setPickup] = useState("");
  const [date, setDate] = useState("");

  const carOptions = useMemo(() => cars.map(c => ({ value: c.id, label: c.name })), []);
  const selectedCar = cars.find(c => c.id === carId);

  useEffect(() => {
    if (selectedCar && !pickup) setPickup(selectedCar.location);
  }, [carId]); // eslint-disable-line

  function submit(e) {
    e.preventDefault();
    alert("Tak! Din booking er modtaget.");
  }

  return (
    <section className="booking-section">
      <h2>Booking</h2>
      <form className="booking-form" onSubmit={submit}>
        <div className="form-group">
          <label>Car type</label>
          <select value={carId} onChange={(e) => setCarId(e.target.value)}>
            <option value="">Vælg bil</option>
            {carOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Price range</label>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">Vælg pris</option>
            <option value="0-150">0–150 kr/dag</option>
            <option value="150-300">150–300 kr/dag</option>
            <option value="300-500">300–500 kr/dag</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pickup location</label>
          <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
            <option value="">Vælg lokation</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Dato</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button className="btn primary" type="submit">Book nu</button>
      </form>

      <div className="contact">
        <h3>Kontakt os</h3>
        <p>Email: <a href="mailto:email@cr.com">email@cr.com</a></p>
        <p>Telefon: +45 12 34 58 78</p>
        <a className="link" href="#">Vælarøg betingelser</a>
      </div>
    </section>
  );
}
