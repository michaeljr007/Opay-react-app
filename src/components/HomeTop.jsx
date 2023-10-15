import React from "react";
import { BiSupport, BiTransferAlt } from "react-icons/bi";
import { LuScanLine } from "react-icons/lu";
import { SlBell } from "react-icons/sl";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CgArrowsExpandUpRight } from "react-icons/cg";

const HomeTop = () => {
  return (
    <div>
      <div className="flex py-4 mx-1 justify-between">
        <div className="flex items-center justify-evenly">
          <span className="p-1 py-2 ml-3 mr-3 px-2 rounded-[50%] bg-green-500 text-white">
            Img
          </span>
          <span>Hi, Michael</span>
        </div>
        <div className="flex gap-1 items-center justify-evenly">
          <span>
            <BiSupport className="w-[44px] h-[28px] md:w-[60px] md:h-[40px]" />
          </span>
          <span>
            <LuScanLine className="w-[44px] h-[28px] md:w-[60px] md:h-[40px]" />
          </span>
          <span>
            <SlBell className="w-[44px] h-[28px] md:w-[60px] md:h-[40px]" />
          </span>
        </div>
      </div>

      <div className="py-11 p-3 text-[0.9rem]  items-center bg-gradient-to-r from-green-500 to-green-400 rounded-lg text-white ml-[1rem] mr-4 my-3">
        <div className="grid grid-cols-2 mt-[-1.9rem] justify-between">
          <div className="flex w-full">
            <span className="opacity-95">Account Balance</span>
            <span>
              <AiFillEye className="w-[44px] mt-[-0.1rem] text-white h-[28px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="flex ml-[1.4rem] w-full">
            <span className="min-w-full opacity-95">Transaction History</span>
            <span>
              <MdOutlineArrowForwardIos className="w-[38px] text-white h-[18px] md:w-[60px] md:h-[40px] ml-[-3rem]" />
            </span>
          </div>
        </div>

        <div className="text-white">
          <div className="block font-bold text-[1.5rem]">
            $ <span className="text-[2rem] ml-[-0.2rem]">1,000,000</span>.00
          </div>

          <div className="flex my-1">
            <span className="font-semibold">Earn rewards daily</span>
            <span>
              <MdOutlineArrowForwardIos className="w-[36px] text-white h-[16px] md:w-[60px] md:h-[40px] ml-[-0.4rem] mt-[0.19rem]" />
            </span>
          </div>
        </div>

        <div className="text-white flex mt-3 justify-around text-center items-center">
          <div>
            <span>
              <span className="block shadow text-center bg-white py-2 px-[o.3rem] mx-[16px] rounded-[0.5rem] text-green-600">
                <AiOutlinePlus className="w-[40px] text-green-600 h-[25px] md:w-[60px] md:h-[40px]" />
              </span>
            </span>

            <span className="block mt-1">Add money</span>
          </div>

          <div>
            <span>
              <span className="block shadow bg-white py-2 px-[o.3rem] mx-[16px] rounded-[0.5rem] text-green-600">
                <BiTransferAlt className="w-[40px] text-green-600 h-[25px] md:w-[60px] md:h-[40px]" />
              </span>
            </span>
            <span className="block mt-1">Transfer</span>
          </div>

          <div>
            <span>
              <span className="block shadow bg-white py-2 px-[o.3rem] mx-[16px] rounded-[0.5rem] text-green-600">
                <CgArrowsExpandUpRight className="w-[40px] text-green-600 h-[25px] md:w-[60px] md:h-[40px]" />
              </span>
            </span>
            <span className="block mt-1">Withdraw</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
