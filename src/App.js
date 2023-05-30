import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kilolu from "./pages/diet/kilolu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Obez from "./pages/diet/obez";
import Normal from "./pages/diet/normal";
import Zayif from "./pages/diet/zayif";
import Diets from "./pages/Diets";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<Diets />} />
        <Route path="/kilolu" element={<Kilolu />} />
        <Route path="/obez" element={<Obez />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/zayif" element={<Zayif />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
