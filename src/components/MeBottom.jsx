import React from "react";
import { MdOutlineKeyboardArrowRight, MdCelebration } from "react-icons/md";
import { BsFillShieldLockFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const MeBottom = () => {
  return (
    <div className="mt-[1.3rem] pb-[6rem]">
      <div className="px-[1.2rem] p-1 bg-white rounded-2xl mx-4">
        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <BsFillShieldLockFill className="w-[34px] text-green-500 self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[1rem]">
              <span>Security Center</span>
            </h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <BsFillTelephonePlusFill className="w-[34px] text-green-500 self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[1rem]">OPay USSD</h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <BiSupport className="w-[34px] text-green-500 self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[1rem]">Support</h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <BsFillShieldLockFill className="w-[34px] text-green-500 self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[1rem]">Refer Friends</h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-2 mr-[3.8rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <MdCelebration className="w-[34px] text-green-500 self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.95rem]">Rate Us</h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[34px] self-center h-[30px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[2.4rem] text-center text-green-600 font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default MeBottom;
