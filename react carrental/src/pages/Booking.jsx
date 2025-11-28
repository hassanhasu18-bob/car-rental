import React from "react";
import Header from "../components/Header.jsx";
import BookingForm from "../components/BookingForm.jsx";

export default function Booking() {
  return (
    <>
      <Header title="Booking" />
      <div className="container">
        <BookingForm />
      </div>
    </>
  );
}
