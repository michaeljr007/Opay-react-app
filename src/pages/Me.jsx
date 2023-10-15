import React from "react";
import MeTop from "../components/MeTop";
import MeMid from "../components/MeMid";
import MeBottom from "../components/MeBottom";

const Me = () => {
  return (
    <div className="bg-gray-50">
      <MeTop />
      <MeMid />
      <MeBottom />
    </div>
  );
};

export default Me;
