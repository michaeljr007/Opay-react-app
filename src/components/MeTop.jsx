import React from "react";
import { AiFillEye } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
const MeTop = () => {
  return (
    <div className="pb-10 mb-2">
      <div className="flex bg-green-500 py-3 pl-5 pr-3 justify-between">
        <div className="grid grid-cols-2 items-center justify-evenly">
          <div>
            <span className="py-2 px-2 bg-white text-green-700 rounded-[50%] text-[0.7rem]">
              Img
            </span>
          </div>

          <div className="ml-[-0.7rem]">
            <span className="font-bold block text-white text-[0.9rem]">
              Hi, Michael
            </span>
            <span className="block py-1 ml-[-5px] px-3 text-[0.5rem] bg-white rounded-2xl">
              Upgrade to Tier 3
            </span>
          </div>
        </div>
        <div className="items-center text-center">
          <span>
            <SlOptions className="w-[20px] text-white h-[18px] md:w-[60px] md:h-[40px]" />
          </span>
        </div>
      </div>
      <div className="bg-green-500 pt-5 mt-[-1rem] pb-9 pl-7">
        <div className="mb-1">
          <div>
            <span className="mb-2 flex">
              <span className="text-white text-[0.95rem]">Total Balance</span>
              <span className="self-center">
                <AiFillEye className="w-[20px] ml-1 mt-[-0.1rem] text-white h-[18px] md:w-[60px] md:h-[40px]" />
              </span>{" "}
            </span>
            <span className="text-white text-[0.9rem] font-semibold">
              <span>
                $<span className="text-[1.1rem] ml-1">0</span>.00
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid rounded-2xl mt-[-1.8rem] grid-cols-2 justify-evenly text-center bg-green-50 mx-4 px-3 py-[0.15rem] items-center">
        <div className="text-left w-[15rem]">
          <span className="text-[0.7rem] font-semibold text-green-500 w-full">
            Complete your personal information, and enjoy higher transaction
            limits
          </span>
        </div>

        <div className="ml-[6.4rem]">
          <span className="py-[0.3rem] text-[0.8rem] font-semibold px-[1rem] bg-green-500 text-white text-center rounded-3xl">
            Go
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeTop;
