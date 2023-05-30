import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Vücut Kitle İndeksi Hesapla</h1>
      <div className="nav-link">
        <Link to="/">Anasayfa</Link>
        <Link to="/diet">Diyetler</Link>
      </div>
    </nav>
  );
};

export default Navbar;
