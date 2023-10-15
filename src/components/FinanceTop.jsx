import React from "react";
import { AiFillEye, AiFillSetting } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";

const FinanceTop = () => {
  return (
    <div>
      <div className="pt-3 pb-12 bg-gray-50">
        <h1 className="font-bold text-xl pl-[1.2rem]">
          Finance from our Parners
        </h1>
        <div className="flex ml-9 font-semibold text-[1.2rem] mt-5 justify-around">
          <span className="flex justify-between">
            <span className="border-b-2 border-black">Savings</span>
            <span className="ml-[6.5rem] opacity-80">Loan</span>
          </span>

          <span className="ml-[-2rem] self-center">
            <AiFillSetting />
          </span>
        </div>

        <div>
          <div className="flex mt-5 justify-between px-7">
            <div>
              <span className="flex">
                <span>Total Balance</span>
                <span className="self-center">
                  <AiFillEye className="w-[24px] mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
                </span>
              </span>
              <span className="mt-1 block font-bold text-lg">
                <span>
                  $<span className="text-3xl ml-1">0</span>.00
                </span>
              </span>
            </div>
            <div>
              <span className="block">
                <span>Total Balance</span>
              </span>
              <span className="mt-1 text-green-500 block font-bold text-lg">
                <span>
                  $<span className="text-3xl ml-1">0</span>.00
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-5 px-3 my-5 text-left bg-purple-100 rounded-lg mx-4">
          <div className="flex">
            <span className="self-center">
              <BiSolidDonateHeart className="w-[24px] text-purple-800 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">OWealth</span>
          </div>

          <span className="mt-3 block">
            Your daily returns. You can withdraw at any time
          </span>

          <span className="mt-10 block font-bold text-xl">$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default FinanceTop;
