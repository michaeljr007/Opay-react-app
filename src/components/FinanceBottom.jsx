import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

const FinanceBottom = () => {
  return (
    <div className="pb-[4rem]">
      <div className="grid mt-[-3.8rem] mb-[2.2rem] grid-cols-2 gap-2 px-4 bg-gray-50">
        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <TbTargetArrow className="w-[20px] text-blue-700 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold text-[0.8rem]">Targets</span>
          </div>

          <span className="mt-2 text-[0.8rem] block">
            Your savings daily weekly or monthly towards your targets.
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <GiWallet className="w-[20px] text-red-500 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold text-[0.8rem]">SafeBox</span>
          </div>

          <span className="mt-2 block text-[0.8rem]">
            Your savings daily weekly or monthly automatic savings.
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <AiFillShopping className="w-[20px] text-green-600 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold text-[0.8rem]">Fixed</span>
          </div>

          <span className="mt-2 block">
            <h1 className="text-[0.8rem]">Min: $10</h1>
            <h1 className="text-[0.8rem]">Tenor: 7 - 1000 days </h1>
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <FaSackDollar className="w-[20px] text-yellow-400 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold text-[0.8rem]">Spend & Save</span>
          </div>

          <span className="mt-3 block text-[0.8rem]">
            Your percentage savings every time you spend or transfer.
          </span>
        </div>

        <div className="text-left py-5 px-2 mb-3 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <HiMiniPresentationChartLine className="w-[20px] text-purple-700 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold text-[0.8rem]">Savings Report</span>
          </div>

          <span className="mt-2 block text-[0.8rem]">
            Check our your savings journey so far.
          </span>
        </div>
      </div>
      <div className="text-purple-900 mt-[-0.4rem] pb-3 text-center text-[0.8rem] font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default FinanceBottom;
