import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home.jsx";
import Cars from "./pages/Cars.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">Biludlejning</div>
        <div className="nav-links">
          <NavLink to="/" end>Forside</NavLink>
          <NavLink to="/biler">Tilgængelige biler</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biler" element={<Cars />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
