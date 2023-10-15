import React from "react";
import opay from "../img/Opay_card-removebg-preview.png";

const CardTop = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex py-4 px-5 justify-between">
          <div className="flex items-center justify-evenly">
            <span className="font-bold text-[1.4rem]">Cards</span>
          </div>

          <span>
            <h1 className="text-teal-500 text-xl">Q&A</h1>
          </span>
        </div>

        <div className="font-semibold px-[6.5rem] text-[1.2rem] mt-1 justify-around">
          <span className="flex justify-between">
            <span className="border-b-2 border-black">Savings</span>
            <span className="opacity-80">Loan</span>
          </span>
        </div>

        <span>
          <img src={opay} className="w-[400px] bg-white h-[250px]" alt="card" />
        </span>
      </div>
    </div>
  );
};

export default CardTop;
