import React from "react";
import opay from "../img/Opay_card-removebg-preview.png";

const CardTop = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex py-3 px-5 justify-between">
          <div className="flex items-center justify-evenly">
            <span className="font-bold text-[0.9rem]">Cards</span>
          </div>

          <span>
            <h1 className="text-teal-500 text-[0.9rem]">Q&A</h1>
          </span>
        </div>

        <div className="font-semibold px-[6.5rem] text-[0.8rem] mt-1 justify-around">
          <span className="flex justify-between">
            <span className="border-b-2 border-black text-[0.9rem]">
              Savings
            </span>
            <span className="opacity-80 text-[0.9rem]">Loan</span>
          </span>
        </div>

        <span>
          <img
            src={opay}
            className="w-[280px] mx-[13vw] bg-white h-[180px]"
            alt="card"
          />
        </span>
      </div>
    </div>
  );
};

export default CardTop;
