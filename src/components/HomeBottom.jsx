import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { FcMoneyTransfer } from "react-icons/fc";

const HomeBottom = () => {
  // Remove onClick
  function removeAd(target) {
    target.parentElement.remove();
  }

  return (
    <div className="pb-[7rem]">
      <div className="bg-white pt-1 pb-3 mx-[1rem] my-5 rounded-lg">
        <div className="grid grid-cols-2 justify-evenly text-center items-center">
          <div className="bg-green-50 border border-green-300 py-3 mt-3 px-2 mr-[6rem] items-center text-center rounded-[50%] ml-[1rem]">
            <span>
              <TbSpeakerphone className="w-[40px] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="ml-[-4rem] text-left">
            <h1 className="font-bold">Refer & Earn</h1>
            <span>Earn $800 cash back per referral</span>
          </div>
        </div>
        <span
          onClick={(e) => removeAd(e.target)}
          className="float-right font-semibold rounded-bl-xl bg-gray-200 p-1 px-[0.4rem] mt-[-4.95rem]"
        >
          X
        </span>
      </div>

      <div className="bg-white pt-1 pb-3 mx-[1rem] my-5 rounded-t-lg">
        <div className="grid grid-cols-2 justify-evenly text-center items-center">
          <div className="bg-green-50 border border-green-300 py-3 mt-3 px-2 mr-[6rem] items-center text-center rounded-[50%] ml-[1rem]">
            <span>
              <FcMoneyTransfer className="w-[40px] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
            </span>
          </div>

          <div className="ml-[-4rem] text-left">
            <h1 className="font-bold">Predict & Win</h1>
            <span>Get two chances to share $1000</span>
          </div>
        </div>
        <span
          onClick={(e) => removeAd(e.target)}
          className="float-right font-semibold rounded-bl-xl bg-gray-200 p-1 px-[0.4rem] mt-[-4.95rem]"
        >
          X
        </span>
      </div>
      <div className="mt-[2.4rem] text-center text-green-600 font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default HomeBottom;
