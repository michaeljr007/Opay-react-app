import React from "react";
import { BsGlobe2, BsLightningFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

const CardBottom = () => {
  return (
    <div>
      <div className="pb-[6rem] ml-7 mt-[-1rem]">
        <div className="grid rounded-2xl grid-cols-2 justify-evenly text-center px-8 py-2 items-center">
          <div className="bg-gray-100 py-[0.5rem] mt-2 px-3 mr-[7.2rem] items-center text-center rounded-[50%] ml-[-0.4rem]">
            <span>
              <BsLightningFill className="w-[20px] ml-[-0.27rem] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-4.6rem] text-left">
            <span className="font-bold block text-[0.8rem]">Glo Airtime</span>
            <span className="text-[0.8rem] block mt-1">
              Apply and activate{" "}
              <span className="text-green-500 text-[0.8rem]">instantly</span>
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[0.1rem] grid-cols-2 justify-evenly py-1 text-center px-8 pb-1 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-3 mr-[7rem] items-center text-center rounded-[50%] ml-[-0.4rem]">
            <span>
              <AiFillCreditCard className="w-[20px] ml-[-0.2rem] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-4.6rem] text-left">
            <span className="font-bold block text-[0.8rem]">Safety</span>
            <span className=" text-[0.8rem] block mt-1">
              Apply and activate{" "}
              <span className="text-green-500 text-[0.8rem]">instantly</span>
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[0.1rem] grid-cols-2 justify-evenly py-1 text-center px-8 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-3 mr-[7rem] items-center text-center rounded-[50%] ml-[-0.4rem]">
            <span>
              <BsGlobe2 className="w-[20px] ml-[-0.2rem] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-4.6rem] text-left">
            <span className="font-bold block text-[0.8rem]">
              Online Merchant Acceptance
            </span>
            <span className=" text-[0.8rem] block mt-1">
              Apply and activate{" "}
              <span className="text-green-500 text-[0.8rem]">instantly</span>
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl mt-[0.1rem] grid-cols-2 justify-evenly text-center px-8 items-center">
          <div className="bg-gray-100 py-[0.6rem] mt-2 px-3 mr-[7rem] items-center text-center rounded-[50%] ml-[-0.4rem]">
            <span>
              <MdSecurity className="w-[20px] ml-[-0.2rem] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-4.6rem] text-left">
            <span className="font-bold block text-[0.8rem]">Security</span>
            <span className=" text-[0.8rem] block mt-1">
              Apply and activate{" "}
              <span className="text-green-500 text-[0.8rem]">instantly</span>
            </span>
          </div>
        </div>

        <div className="ml-[26.5vw] bg-white py-8 fixed w-full mb-3 mt-[-0.1rem]">
          <span className="bg-green-500 py-[0.6rem] px-9 text-white rounded-3xl text-[0.8rem]">
            Get It Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBottom;
