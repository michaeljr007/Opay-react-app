import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { FcMoneyTransfer } from "react-icons/fc";

const HomeBottom = () => {
  // Remove onClick
  function removeAd(target) {
    target.parentElement.remove();
  }

  return (
    <div className="pb-[5rem]">
      <div className="bg-white pt-1 pb-2 mx-[1rem] my-3 rounded-lg">
        <div className="grid grid-cols-2 justify-evenly text-center items-center">
          <div className="bg-green-50 border border-green-300 py-2 mt-3 px-2 mr-[7.4rem] items-center text-center rounded-[50%] ml-[1rem]">
            <span>
              <TbSpeakerphone className="w-[20px] self-center text-green-600 h-[19px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="ml-[-4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">Refer & Earn</h1>
            <span className="text-[0.75rem]">
              Earn $800 cash back per referral
            </span>
          </div>
        </div>
        <span
          onClick={(e) => removeAd(e.target)}
          className="float-right font-semibold rounded-bl-xl bg-gray-200 p-1 px-[0.4rem] text-[0.9rem] mt-[-3.3rem]"
        >
          X
        </span>
      </div>

      <div className="bg-white pt-1 pb-2 mx-[1rem] my-5 rounded-t-lg">
        <div className="grid grid-cols-2 justify-evenly text-center items-center">
          <div className="bg-green-50 border border-green-300 py-2 mt-3 px-2 mr-[7.3rem] items-center text-center rounded-[50%] ml-[1rem]">
            <span>
              <FcMoneyTransfer className="w-[20px] self-center text-green-600 h-[19px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="ml-[-4rem] text-left">
            <h1 className="font-bold text-[0.8rem]">Predict & Win</h1>
            <span className="text-[0.75rem]">
              Get two chances to share $1000
            </span>
          </div>
        </div>
        <span
          onClick={(e) => removeAd(e.target)}
          className="float-right font-semibold rounded-bl-xl bg-gray-200 p-1 text-[0.9rem] px-[0.4rem] mt-[-3.3rem]"
        >
          X
        </span>
      </div>
      <div className="mt-[2.4rem] text-center text-green-600 font-bold">
        <h6 className="text-[0.8rem]">Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default HomeBottom;
