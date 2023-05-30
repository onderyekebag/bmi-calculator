import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Bmi = () => {
  const [boy, setBoy] = useState(0);
  const [kilo, setKilo] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const handleChangeBoy = (e) => {
    const boy = e.target.value;
    setBoy(boy);
  };

  const handleChangeKilo = (e) => {
    const kilo = e.target.value;
    setKilo(kilo);
  };
  // hesapla butonuna basıldığında bizde indeksi hesaplayabiliriz.
  const onSubmit = (e) => {
    e.preventDefault();
    if (boy === 0 || kilo === 0) {
      alert("Lütfen değerleri tam giriniz.");
    } else {
      setSonuc((kilo / (boy * boy)).toFixed(2));
      console.log(sonuc);
    }
  };
  // çıkan sonuca göre zayıf mı kilolu mu normal mi obez mi kontrolü bu şekilde yapılabilir
  useEffect(() => {
    console.log("Hesaplanıyor........");
    console.log("Hata Yok");
  }, []);
  const durum = (sonuc) => {
    if (sonuc < 18) {
      return "Zayıf";
    } else if (sonuc < 25) {
      return "Normal";
    } else if (sonuc < 30) {
      return "Kilolu";
    } else {
      return "Obez";
    }
  };
  const diyet = (sonuc) => {
    if (sonuc < 18) {
      return "/zayif";
    } else if (sonuc < 25) {
      return "/normal";
    } else if (sonuc < 30) {
      return "/kilolu";
    } else {
      return "/obez";
    }
  };
  let durumu = durum(sonuc);
  console.log(durumu);
  return (
    <div className="bmi-main">
      {!sonuc ? (
        <form onSubmit={onSubmit}>
          <div className="boy">
            <p>Lütfen Boyunuzu Giriniz </p>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              onChange={handleChangeBoy}
              placeholder="Boy : ( 1.76 )"
            />
          </div>
          <div className="kilo">
            <p>Lütfen Kilonuzu Giriniz </p>
            <input
              type="number"
              step="0.01"
              min="0"
              max="220"
              onChange={handleChangeKilo}
              placeholder="Kilo : ( 68 )"
            />
          </div>
          <div>
            <button>Hesapla</button>
          </div>
        </form>
      ) : (
        <div className="sonuc">
          <h2 className="sonuc-title">Sonuç</h2>
          <p>{sonuc}</p>
          <p durumu={durumu}>{durum(sonuc)}</p>
          <p>
            <Link to={diyet(sonuc)} style={{ color: "white" }}>
              Diyet Önerimiz.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Bmi;
