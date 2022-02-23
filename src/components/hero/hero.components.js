import React from "react";
// Icons
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

function HeroComponent() {
  return (
    <>
      <div className="hero-container flex justify-between m-5 ">
        <div className="social">
          <div className="absolute w-77 h-22 rotate-90 leading-10">
            Follow us
          </div>
         
          <div className="list-none leading">
            <li className="top-[]">
              {" "}
              <IoLogoInstagram />{" "}
            </li>
            <li>
              {" "}
              <FiTwitter />{" "}
            </li>
          </div>
        </div>

        <div className="hero-content">
          <div className="flex">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-3"></div>
            <h3 className="ml-4 text-[#FBD784]">A HIKING GUIDE</h3>
          </div>
          <p>Be Prepared For The Mountains and Beyond!</p>
          <p className="flex flex-row">
            scroll down <HiOutlineArrowNarrowDown className="mt-1" />
          </p>
        </div>

        <div className="scrollbar list-none flex gap-3">
          <div className="scrollbar-content flex flex-col items-end">
            <li>Start</li>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </div>
          <div className="h-240 w-0.5 bg-[#e4d9d9] relative"></div>
          <div className="h-100 w-0.5 bg-[#ffffff] absolute"></div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
