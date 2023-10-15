import React from "react";
import { LuSmartphoneCharging } from "react-icons/lu";
import { TbCoin } from "react-icons/tb";

const RewardsMid = () => {
  return (
    <div className="mt-[-1.2rem]">
      <div className="px-[1.2rem]">
        <h1 className="text-xl font-semibold">Daily Bonus</h1>

        <div className="grid rounded-2xl mt-[1.4rem] mb-[1rem] grid-cols-3 justify-evenly text-center bg-white px-3 py-3 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.95rem]">
              <span className="flex">
                <span>Glo Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[48px] h-[25px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
                </span>
                <span className="text-green-500 ml-[-0.6rem] font-semibold">
                  +6%
                </span>
              </span>
            </h1>
            <span className="text-[0.9rem]">
              Get up to <span className="text-green-600">%6</span> cashback
            </span>
          </div>

          <div className="ml-[1.61rem]">
            <span className="py-[0.55rem] text-[0.9rem] px-[1.7rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[1rem] grid-cols-3 justify-evenly text-center bg-white px-3 py-3 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.95rem]">
              <span className="flex">
                <span>Glo Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[48px] h-[25px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
                </span>
                <span className="text-green-500 ml-[-0.6rem] font-semibold">
                  +6%
                </span>
              </span>
            </h1>
            <span className="text-[0.9rem]">
              Get up to <span className="text-green-600">%5</span> cashback
            </span>
          </div>

          <div className="ml-[1.61rem]">
            <span className="py-[0.55rem] text-[0.9rem] px-[1.7rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[1rem] grid-cols-3 justify-evenly text-center bg-white px-3 py-3 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <LuSmartphoneCharging className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.9rem] text-left">
            <h1 className="font-bold text-[0.95rem]">
              <span className="flex">
                <span>Glo Airtime</span>{" "}
                <span className="self-center ml-2">
                  <TbCoin className="w-[48px] h-[25px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
                </span>
                <span className="text-green-500 ml-[-0.6rem] font-semibold">
                  +6%
                </span>
              </span>
            </h1>
            <span className="text-[0.9rem]">
              Get up to <span className="text-green-600">%3</span> cashback
            </span>
          </div>

          <div className="ml-[1.61rem]">
            <span className="py-[0.55rem] text-[0.9rem] px-[1.7rem] bg-green-600 text-white text-center rounded-3xl">
              Go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsMid;
