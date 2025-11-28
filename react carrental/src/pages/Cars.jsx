import React, { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Filters from "../components/Filters.jsx";
import CarList from "../components/CarList.jsx";
import { cars } from "../components/Data.js";

export default function Cars() {
  const [filters, setFilters] = useState({});

  const filtered = useMemo(() => {
    return cars.filter(c => {
      const price = c.pricePerDayDKK ?? Math.round(c.pricePerDayUSD * 6.7);
      if (filters.type && c.type !== filters.type) return false;
      if (filters.pickUp && c.location !== filters.pickUp) return false;
      if (filters.priceMin && price < Number(filters.priceMin)) return false;
      if (filters.priceMax && price > Number(filters.priceMax)) return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      <Header title="Find din bil" />
      <div className="container grid-2">
        <Filters onApply={setFilters} />
        <div>
          <CarList title="Available Cars" cars={filtered} />
        </div>
      </div>
    </>
  );
}
