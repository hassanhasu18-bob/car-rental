import React, { useState } from "react";
import Header from "../components/Header.jsx";

export default function Contact() {
  const [form, setForm] = useState({ navn: "", email: "", besked: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Tak for din besked! Vi vender tilbage snarest.");
    setForm({ navn: "", email: "", besked: "" });
  }

  return (
    <>
      <Header title="Kontakt os" />
      <div className="container">
        <section className="contact-form-section">
          <h2>Send os en besked</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Navn</label>
              <input type="text" name="navn" value={form.navn} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Besked</label>
              <textarea name="besked" value={form.besked} onChange={handleChange} rows="5" required />
            </div>
            <button className="btn primary" type="submit">Send besked</button>
          </form>

          <div className="contact-info">
            <h3>Kontaktinformation</h3>
            <p>Email: <a href="mailto:email@cr.com">email@cr.com</a></p>
            <p>Telefon: +45 12 34 58 78</p>
            <a className="link" href="#">Vælarøg betingelser</a>
          </div>
        </section>
      </div>
    </>
  );
}
