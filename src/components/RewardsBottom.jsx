import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import people from "../img/output.png";

const RewardsBottom = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="flex justify-center">
          <span className="text-center text-green-600">View All</span>
          <span className="self-center ml-[0.1rem] text-green-600">
            <MdKeyboardArrowDown className="text-[1.5rem]" />
          </span>
        </div>

        <div className="bg-green-100 mt-5 mb-12 pt-12 pb-24 px-5 p-1 border-t-[15px] border-double border-green-200">
          <div>
            <span className="flex mt-[-1.4rem]">
              <span className="self-center ml-2">
                <TbCoin className="w-[48px] h-[25px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
              </span>
              <span className="text-xl font-bold">Refer & Earn Cashback</span>
            </span>
          </div>

          <div className="text-center px-[5rem]">
            <p className="text-left ml-[-2.4rem]">
              Earn <span>$800</span> Cashback per referral
            </p>
          </div>

          <div className="mt-7 ml-1">
            <span className="py-[0.6rem] shadow-xl px-6 bg-green-500 text-white rounded-3xl">
              Refer & Earn
            </span>
          </div>
          <span>
            <img
              className="w-[160px] h-[160px] mr-[-1.25rem] float-right mt-[-6rem]"
              src={people}
              alt="people"
            />
          </span>
        </div>
        <div className="mb-8 pt-[-3rem] pb-[4.5rem] text-center text-green-600 font-bold">
          <h6>Michael Isih Dev</h6>
        </div>
      </div>
    </div>
  );
};

export default RewardsBottom;
