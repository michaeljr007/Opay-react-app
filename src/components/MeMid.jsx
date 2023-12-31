import React from "react";
import { RiTodoFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { AiFillCreditCard, AiFillIdcard } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";

const MeMid = () => {
  return (
    <div className="mt-[-2.3rem]">
      <div className="px-[1.2rem] p-1 bg-white rounded-2xl ml-4 mr-4">
        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.4rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <RiTodoFill className="w-[20px] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">
              <span>Transaction History</span>
            </h1>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid rounded-2xl grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.4rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <FaTachometerAlt className="w-[20px] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">
              <span>Account Limits</span>
            </h1>
            <span className="text-[0.8rem]">View your transaction limits</span>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.4rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <AiFillCreditCard className="w-[20px] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">
              <span>
                <span>Bank Card/Account</span>{" "}
              </span>
            </h1>
            <span className="text-[0.8rem]">Add payment option</span>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.4rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <BsFillLightningFill className="w-[20px] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">
              <span>
                <span>Pay Me</span>
              </span>
            </h1>
            <span className="text-[0.8rem]">
              Receive payment for your business
            </span>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-evenly text-center bg-white py-2 items-center">
          <div className="bg-gray-100 py-[0.4rem] mt-2 px-2 mr-[4.4rem] items-center text-center rounded-2xl ml-[-0.4rem]">
            <span>
              <AiFillIdcard className="w-[20px] text-green-500 self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="mr-[-2.9rem] ml-[-2.4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">
              <span className="flex">
                <span>Pay ID</span>{" "}
              </span>
            </h1>
            <span className="text-[0.8rem]">
              Generate unique code for online transactions
            </span>
          </div>

          <div className="ml-[3.6rem]">
            <span>
              <MdOutlineKeyboardArrowRight className="w-[20px] self-center h-[18px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMid;
