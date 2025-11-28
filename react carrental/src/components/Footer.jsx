import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="link">Kontakt</a>
      <span className="copyright">© {new Date().getFullYear()} Biludlejning</span>
    </footer>
  );
}
