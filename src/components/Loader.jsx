import React from "react";
import loader from "../img/opay-removebg-preview.png";

const Loader = () => {
  return (
    <div className="h-[100vh] self-center items-center object-center justify-center content-center text-center w-[100vw] bg-green-500 text-indigo-950">
      <div className="py-7">
        <span>
          <img
            className="mt-[10rem] bg-white py-3 px-3 mx-3 rounded-[50%] lg:mt-[13rem] ml-[40vw] md:ml-[20rem] lg:ml-[37rem] w-[80px] md:w-[120px]"
            src={loader}
            alt="loader"
          />
        </span>
      </div>

      <h1 className="font-bold text-[1.2rem] mt-[-1rem] mx-[10vw] text-center px-3">
        We are Beyond Banking
      </h1>
    </div>
  );
};

export default Loader;
