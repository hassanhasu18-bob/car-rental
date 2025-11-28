import React, { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CarList from "../components/CarList.jsx";
import { cars } from "../components/Data.js";

export default function Home() {
  const [query, setQuery] = useState({ pickUp: "", pickUpDate: "", returnDate: "" });

  const filtered = useMemo(() => {
    return cars.filter(c => {
      if (query.pickUp && c.location !== query.pickUp) return false;
      return true;
    });
  }, [query]);

  return (
    <>
      <Header title="Find din bil">
        <SearchBar onSearch={setQuery} />
      </Header>

      <div className="container">
        <CarList title="Tilgængelige biler" cars={filtered} />
      </div>
    </>
  );
}
