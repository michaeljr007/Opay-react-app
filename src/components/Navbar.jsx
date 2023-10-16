import React from "react";
import { Link } from "react-router-dom";
import { BiChart, BiNews } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { TbDiamond } from "react-icons/tb";
import { MdFace } from "react-icons/md";

const Navbar = () => {
  const removeActive = () => {
    const home = document.querySelector(".home");
    const homeHeader = document.querySelector(".home-header");

    if (home.classList.contains("active")) {
      home.classList.remove("active");
    }

    if (homeHeader.classList.contains("active")) {
      homeHeader.classList.remove("active");
    }
  };

  return (
    <>
      <div className="flex justify-evenly border-t-2 border-gray-200 items-center p-1 pb-[0.2rem] w-full z-[100] text-center bg-white fixed bottom-[0.1px] md:bottom-8 lg:bottom-4 left-0 sm:h-[60px]">
        <Link to={"/"}>
          <div>
            <BiNews className="home active font-bold hover:text-green-700 active:text-green-700 w-[27px] h-[30px] md:w-[60px] md:h-[40px] text-gray-400" />
            <h6 className="text-gray-400 hover:text-green-700 active:text-green-700 font-semibold home-header active text-[0.8rem] md:text-[1.2rem]">
              Home
            </h6>
          </div>
        </Link>
        <Link to={"/rewards"}>
          <div onClick={removeActive} className="rewards">
            <TbDiamond className="font-bold hover:text-green-700 active:text-green-700 w-[27px] h-[30px] md:w-[60px] md:h-[40px] text-gray-400" />
            <h6 className="text-gray-400 hover:text-green-700 active:text-green-700 font-semibold text-[0.8rem] md:text-[1.2rem]">
              Rewards
            </h6>
          </div>
        </Link>
        <Link to={"/finance"}>
          <div onClick={removeActive} className="finance">
            <BiChart className="font-bold hover:text-green-700 active:text-green-700 w-[27px] h-[30px] md:w-[60px] md:h-[40px] text-gray-400" />
            <h6 className="text-gray-400 hover:text-green-700 active:text-green-700 font-semibold text-[0.8rem] md:text-[1.2rem]">
              Finance
            </h6>
          </div>
        </Link>
        <Link to={"/cards"}>
          <div onClick={removeActive} className="cards">
            <BsCreditCard className="font-bold hover:text-green-700 active:text-green-700 w-[27px] h-[30px] md:w-[60px] md:h-[40px] text-gray-400" />
            <h6 className="text-gray-400 hover:text-green-700 active:text-green-700 font-semibold text-[0.8rem] md:text-[1.2rem]">
              Cards
            </h6>
          </div>
        </Link>
        <Link to={"/me"}>
          <div onClick={removeActive} className="me">
            <MdFace className="font-bold hover:text-green-700 active:text-green-700 w-[27px] h-[30px] md:w-[60px] md:h-[40px] text-gray-400" />
            <h6 className="text-gray-400 hover:text-green-700 active:text-green-700 font-semibold text-[0.8rem] md:text-[1.2rem]">
              Me
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
