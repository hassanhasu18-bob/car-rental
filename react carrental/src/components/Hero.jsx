export default function Hero() {
  return (
    <section className="hero">
      <h1>Find din bil</h1>
      <div className="search-bar">
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Pris" />
        <input type="text" placeholder="Placering" />
        <input type="date" />
        <button>Søg</button>
      </div>
    </section>
  );
}
