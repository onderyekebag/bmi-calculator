import React from "react";
import Zayif from "./diet/zayif";
import Normal from "./diet/normal";
import Kilolu from "./diet/kilolu";
import Obez from "./diet/obez";

const Diets = () => {
  return (
    <div className="diets">
      <Zayif />
      <Normal />
      <Kilolu />
      <Obez />
    </div>
  );
};

export default Diets;
