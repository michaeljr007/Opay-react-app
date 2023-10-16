import React from "react";
import { LuSmartphoneCharging } from "react-icons/lu";
import { TbCoin } from "react-icons/tb";

const RewardsMid = () => {
  return (
    <div className="mt-[-1.2rem]">
      <div className="px-[1.2rem]">
        <h1 className="text-[1rem] font-semibold">Daily Bonus</h1>

        <div className="grid rounded-2xl mt-[1.2rem] mb-[1rem] grid-cols-3 justify-evenly text-center bg-white px-4 py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.5rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.75rem]">
              <span className="flex">
                <span>Glo Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[20px] h-[18px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.29rem]" />
                </span>
                <span className="text-green-600 text-[0.7rem] ml-[-0.1rem] font-semibold">
                  +6%
                </span>
              </span>
            </h1>
            <span className="text-[0.7rem]">
              Buy Airtime and get up to{" "}
              <span className="text-green-600">%6</span> cashback
            </span>
          </div>

          <div className="ml-[3.8rem]">
            <span className="py-[0.3rem] text-[0.7rem] px-[1rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[0.7rem] grid-cols-3 justify-evenly text-center bg-white px-4 py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-1 px-2 mr-[4.5rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.75rem]">
              <span className="flex">
                <span>9 Mobile Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[20px] h-[18px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.29rem]" />
                </span>
                <span className="text-green-600 text-[0.7rem] ml-[-0.1rem] font-semibold">
                  +5%
                </span>
              </span>
            </h1>
            <span className="text-[0.7rem]">
              Buy Airtime and get up to{" "}
              <span className="text-green-600">%5</span> cashback
            </span>
          </div>

          <div className="ml-[3.8rem]">
            <span className="py-[0.3rem] text-[0.7rem] px-[1rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[0.7rem] grid-cols-3 justify-evenly text-center bg-white px-4 py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.5rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.75rem]">
              <span className="flex">
                <span>Mtn/Airtel Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[20px] h-[18px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.29rem]" />
                </span>
                <span className="text-green-600 text-[0.7rem] ml-[-0.1rem] font-semibold">
                  +3%
                </span>
              </span>
            </h1>
            <span className="text-[0.7rem]">
              Buy Airtime and get up to{" "}
              <span className="text-green-600">%3</span> cashback
            </span>
          </div>

          <div className="ml-[3.8rem]">
            <span className="py-[0.3rem] text-[0.7rem] px-[1rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsMid;
