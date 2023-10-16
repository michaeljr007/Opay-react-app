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
      <div className="bg-white py-4 my-3 mx-4 rounded-lg">
        <div className="grid grid-cols-4 mt-[-1rem]">
          <div>
            <span className="text-white ml-[2.5rem] text-[0.4rem] p-1 bg-red-600 rounded-r-lg rounded-tl-lg">
              Up to 6%
            </span>
            <div className="bg-green-50 py-2 mt-[-0.76rem] mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <BsFillFileBarGraphFill className="w-[20px] ml-[0.6rem] self-center text-green-500 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Airtime</p>
          </div>

          <div>
            <span className="text-white ml-[2.5rem] text-[0.4rem] p-1 bg-red-600 rounded-r-lg rounded-tl-lg">
              Up to 6%
            </span>
            <div className="bg-green-50 py-3 mt-[-0.76rem] mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <LuSmartphoneCharging className="w-[20px] ml-[0.6rem] self-center text-green-600 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Data</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <BiFootball className="w-[20px] ml-[0.6rem] self-center text-green-600 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Betting</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <PiTelevisionDuotone className="w-[20px] ml-[0.6rem] self-center text-green-600 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Tv</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <RiLightbulbFlashFill className="w-[20px] ml-[0.6rem] self-center text-green-500 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Electricity</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <LuHelpingHand className="w-[20px] ml-[0.6rem] self-center text-green-600 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Play4aChild</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <TbMoneybag className="w-[20px] ml-[0.6rem] self-center text-green-600 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">Refer&Earn</p>
          </div>

          <div>
            <div className="bg-green-50 py-3 mt-3 mx-[1.4rem] items-center text-center rounded-[50%]">
              <span>
                <BsFillArrowRightCircleFill className="w-[20px] ml-[0.6rem] self-center text-green-500 h-[18px] md:w-[60px] md:h-[40px]" />
              </span>
            </div>
            <p className="text-center text-[0.75rem]">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
