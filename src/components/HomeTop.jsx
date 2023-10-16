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
      <div className="flex py-2 mx-2 justify-between">
        <div className="flex items-center justify-evenly">
          <span className="p-1 py-1 ml-3 mr-3 text-[0.7rem] px-1 rounded-[50%] bg-green-500 text-white">
            Img
          </span>
          <span className="text-[0.8rem]">Hi, Michael</span>
        </div>
        <div className="flex gap-1 items-center justify-evenly">
          <span>
            <BiSupport className="w-[28px] h-[17px] md:w-[60px] md:h-[40px]" />
          </span>
          <span>
            <LuScanLine className="w-[28px] h-[17px] md:w-[60px] md:h-[40px]" />
          </span>
          <span>
            <SlBell className="w-[28px] h-[17px] md:w-[60px] md:h-[40px]" />
          </span>
        </div>
      </div>

      <div className="pt-11 px-3 pb-5 p-2 text-[0.7rem]  items-center bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white ml-[1.1rem] mr-[1.1rem] my-2">
        <div className="grid grid-cols-2 mt-[-1.9rem] justify-between">
          <div className="flex w-full">
            <span className="opacity-95">Account Balance</span>
            <span>
              <AiFillEye className="w-[24px] mt-[-0.1rem] text-white h-[14px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="flex ml-[1.9rem] w-full">
            <span className="min-w-full opacity-95">Transaction History</span>
            <span>
              <MdOutlineArrowForwardIos className="w-[18px] text-white h-[10px] md:w-[60px] md:h-[40px] ml-[-3.6rem]" />
            </span>
          </div>
        </div>

        <div className="text-white mt-1">
          <div className="block font-bold text-[1rem]">
            $ <span className="text-[1.4rem] ml-[-0.2rem]">1,000,000</span>.00
          </div>

          <div className="flex my-1">
            <span className="font-semibold text-[0.7rem]">
              Earn rewards daily
            </span>
            <span>
              <MdOutlineArrowForwardIos className="w-[19px] text-white h-[12px] md:w-[60px] md:h-[40px] ml-[-0.4rem] mt-[0.19rem]" />
            </span>
          </div>
        </div>

        <div className="text-white ml-1 flex mt-3 justify-around text-center items-center">
          <div>
            <span>
              <span className="block shadow text-center bg-white py-[0.4rem] px-[o.7rem] mr-[1.1rem] ml-[0.6rem] rounded-[0.5rem] text-green-600">
                <AiOutlinePlus className="w-[20px] text-green-600 h-[15px] md:w-[60px] md:h-[40px] ml-[0.2rem]" />
              </span>
            </span>

            <span className="block mt-1 text-center">Add money</span>
          </div>

          <div>
            <span>
              <span className="block shadow bg-white py-1 px-[0.2rem] mr-[1rem] ml-[o.8rem] rounded-[0.5rem] text-green-600">
                <BiTransferAlt className="w-[20px] text-green-600 h-[19px] md:w-[60px] md:h-[40px] ml-[0.2rem]" />
              </span>
            </span>
            <span className="block mt-1 mr-[0.6rem]">Transfer</span>
          </div>

          <div>
            <span>
              <span className="block shadow bg-white py-1 px-[0.2rem] mr-[1.6rem] ml-[o.6rem] rounded-[0.5rem] text-green-600">
                <CgArrowsExpandUpRight className="w-[20px] text-green-600 h-[19px] md:w-[60px] md:h-[40px] ml-[0.2rem]" />
              </span>
            </span>
            <span className="block mt-1 ml-[-1.2rem]">Withdraw</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
