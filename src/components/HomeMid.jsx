import React from "react";
import {
  BsFillFileBarGraphFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { LuSmartphoneCharging, LuHelpingHand } from "react-icons/lu";
import { BiFootball } from "react-icons/bi";
import { PiTelevisionDuotone } from "react-icons/pi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

const HomeMid = () => {
  return (
    <div>
      <div className="bg-white py-8 my-3 mx-3 rounded-lg">
        <div className="grid grid-cols-4 mt-[-1rem]">
          <div>
            <span className="text-white ml-[2.5rem] text-[0.6rem] p-1 bg-red-600 rounded-r-lg rounded-tl-lg">
              Up to 6%
            </span>
            <div className="bg-green-50 py-3 mt-[-0.76rem] mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <BsFillFileBarGraphFill className="w-[40px] ml-[0.6rem] self-center text-green-500 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Airtime</p>
          </div>

          <div>
            <span className="text-white ml-[2.5rem] text-[0.6rem] p-1 bg-red-600 rounded-r-lg rounded-tl-lg">
              Up to 6%
            </span>
            <div className="bg-green-50 py-3 mt-[-0.76rem] mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <LuSmartphoneCharging className="w-[40px] ml-[0.6rem] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Data</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <BiFootball className="w-[40px] ml-[0.6rem] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Betting</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <PiTelevisionDuotone className="w-[40px] ml-[0.6rem] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Tv</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <RiLightbulbFlashFill className="w-[40px] ml-[0.6rem] self-center text-green-500 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Electricity</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <LuHelpingHand className="w-[40px] ml-[0.6rem] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Play4aChild</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <TbMoneybag className="w-[40px] ml-[0.6rem] self-center text-green-600 h-[35px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">Refer&Earn</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[0.9rem] items-center text-center rounded-[50%]">
              <span>
                <BsFillArrowRightCircleFill className="w-[37px] ml-[0.6rem] self-center text-green-500 h-[33px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
