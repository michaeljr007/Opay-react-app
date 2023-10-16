import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import people from "../img/output.png";

const RewardsBottom = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="flex justify-center">
          <span className="text-center text-[0.8rem] text-green-600">
            View All
          </span>
          <span className="self-center ml-[0.1rem] text-green-600">
            <MdKeyboardArrowDown className="text-[0.8rem]" />
          </span>
        </div>

        <div className="bg-green-100 mt-5 mb-12 pt-12 pb-14 px-5 p-1 border-t-[15px] border-double border-green-200">
          <div>
            <span className="flex mt-[-2.4rem] ml-[-1rem]">
              <span className="self-center ml-8">
                <TbCoin className="w-[24px] h-[19px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
              </span>
              <span className="text-[1rem] font-bold">
                Refer & Earn Cashback
              </span>
            </span>
          </div>

          <div className="text-center mt-2 px-[7.8rem] ml-[-6.9rem]">
            <p className="text-left text-[0.8rem] pr-7">
              Earn <span>$800</span> Cashback per referral
            </p>
          </div>
          <div className="mt-7 ml-[0.8rem]">
            <span className="py-[0.45rem] text-[0.8rem] shadow-xl px-4 bg-green-500 text-white rounded-3xl">
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
        <div className="mb-6 mt-[-1rem] text-[0.8rem] pb-[2.8rem] text-center text-green-600 font-bold">
          <h6>Michael Isih Dev</h6>
        </div>
      </div>
    </div>
  );
};

export default RewardsBottom;
