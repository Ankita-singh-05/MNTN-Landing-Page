import React from "react";
// Icons
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

// Background
import HeroImage from "../images/hero";

function HeroComponent() {
  return (
    <>
    <div className="absolute">
    <img src={HeroImage.heroImage} alt="hero image" className=""></img>
    </div>
      <div className="hero-container flex justify-between m-5 relative">
        {/* Social Links */}
        <div className="mt-16 space-y-9 text-white text-[18px]">
          <div className="rotate-90 font-bold">Follow us</div>
          <div className="list-none m-7 space-y-4">
            <li className="">
              {" "}
              <IoLogoInstagram />{" "}
            </li>
            <li>
              {" "}
              <FiTwitter />{" "}
            </li>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="flex">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-3"></div>
            <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px]">A HIKING GUIDE</h3>
          </div>
          <p className="font-[Chronicle Display] font-semibold text-[55px] leading-[100px] w-[38rem] text-white">
            Be Prepared For The Mountains and Beyond!
          </p>
          <p className="flex flex-row text-white font-[Gilroy] text-[18px]">
            scroll down <HiOutlineArrowNarrowDown className="mt-1" />
          </p>
        </div>

        {/* Scrollbar */}
        <div className="scrollbar list-none flex gap-3 text-white">
          <div className="scrollbar-content flex flex-col items-end space-y-1">
            <li>Start</li>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </div>
          <div className="ml-4">
            <div className="h-[120px] w-0.5 bg-[#868685] absolute"></div>
            <div className="h-[40px] w-0.5 bg-[#f1e9e9] relative"></div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default HeroComponent;
