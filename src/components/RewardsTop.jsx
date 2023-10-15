import React from "react";
import { SlOptions } from "react-icons/sl";
import { TbCoin } from "react-icons/tb";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";

const RewardsTop = () => {
  return (
    <div className="pb-10">
      <div className="flex py-4 bg-green-100 px-5 justify-between">
        <div className="flex items-center justify-evenly">
          <span className="font-bold text-[1.4rem]">Rewards</span>
        </div>
        <div className="border border-black px-[0.2rem] py-2 items-center text-center rounded-[50%]">
          <span>
            <SlOptions className="w-[27px] h-[18px] md:w-[60px] md:h-[40px]" />
          </span>
        </div>
      </div>
      <div className="bg-green-100 pt-7 pb-12 pl-7">
        <div className="grid grid-cols-2 mb-1">
          <div>
            <span className="mb-2 flex">
              {" "}
              <span className="self-center">
                <TbCoin className="w-[48px] h-[25px] text-yellow-500 md:w-[60px] md:h-[40px] ml-[-0.9rem]" />
              </span>{" "}
              <span className="ml-[-0.45rem]">CashBack</span> <span>?</span>
            </span>
            <span className="flex text-green-600 text-[1.3rem] font-semibold">
              <span>
                $<span className="text-3xl ml-1">0</span>.00
              </span>

              <span className="self-center">
                <MdOutlineArrowForwardIos className="w-[38px] h-[18px] md:w-[60px] md:h-[40px] ml-[-0.3rem]" />
              </span>
            </span>
          </div>

          <div>
            <span className="block mb-2">Voucher</span>
            <span className="flex">
              <span className="text-[1.7rem] font-semibold">0</span>
              <span className="self-center">
                <MdOutlineArrowForwardIos className="w-[38px] h-[18px] md:w-[60px] md:h-[40px] ml-0" />
              </span>
            </span>
          </div>
        </div>

        <span className="float-right mr-5 mt-[-4rem]">
          <BsFillTicketPerforatedFill className="w-[57px] -rotate-12 h-[48px] md:w-[60px] text-green-300 opacity-70 md:h-[50px]" />
        </span>
      </div>

      <div className="grid rounded-2xl mt-[-2rem] grid-cols-3 justify-evenly text-center bg-white mx-4 px-5 py-3 items-center">
        <div className="bg-green-100 py-[0.6rem] mt-2 px-2 mr-[3.5rem] items-center text-center rounded-2xl ml-[-0.4rem]">
          <span>
            <RiCalendarTodoFill className="w-[34px] self-center text-green-600 h-[30px] md:w-[60px] md:h-[40px]" />
          </span>
        </div>

        <div className="mr-[-2.9rem] ml-[-2.7rem] text-left">
          <h1 className="font-bold text-[0.95rem]">Daily bonus</h1>
          <span className="text=[0.9rem]">Get up to $50 cashback</span>
        </div>

        <div className="ml-[1.61rem]">
          <span className="py-[0.6rem] text-[0.9rem] px-[0.6rem] bg-green-600 text-white text-center rounded-3xl">
            Get Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default RewardsTop;
