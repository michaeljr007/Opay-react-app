import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

const FinanceBottom = () => {
  return (
    <div className="pb-[6rem]">
      <div className="grid mt-[-3.6rem] mb-[2.5rem] grid-cols-2 gap-3 px-4 bg-gray-50">
        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <TbTargetArrow className="w-[24px] text-blue-700 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">Targets</span>
          </div>

          <span className="mt-3 block">
            Your savings daily weekly or monthly towards your targets.
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <GiWallet className="w-[24px] text-red-500 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">SafeBox</span>
          </div>

          <span className="mt-3 block">
            Your savings daily weekly or monthly automatic savings.
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <AiFillShopping className="w-[24px] text-green-600 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">Fixed</span>
          </div>

          <span className="mt-3 block">
            <h1>Min: $10</h1>
            <h1>Tenor: 7 - 1000 days </h1>
          </span>
        </div>

        <div className="text-left py-5 px-2 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <FaSackDollar className="w-[24px] text-yellow-400 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">Spend & Save</span>
          </div>

          <span className="mt-3 block">
            Your percentage savings every time you spend or transfer.
          </span>
        </div>

        <div className="text-left py-5 px-2 mb-3 bg-gray-100 rounded-lg">
          <div className="flex">
            <span className="self-center">
              <HiMiniPresentationChartLine className="w-[24px] text-purple-700 mt-[-0.1rem] h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
            <span className="ml-1 font-bold">Savings Report</span>
          </div>

          <span className="mt-3 block">
            Check our your savings journey so far.
          </span>
        </div>
      </div>
      <div className="text-purple-900 text-center font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default FinanceBottom;
