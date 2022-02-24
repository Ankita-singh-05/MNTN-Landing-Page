import React from "react";
// Icons
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

function HeroComponent() {
  return (
    <>
      <div className="hero-container flex justify-between m-5 ">
        {/* Social Links */}
        <div className="mt-16">
          <div className="rotate-90 leading-10">Follow us</div>
          <div className="list-none m-5">
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
            <h3 className="ml-4 text-[#FBD784]">A HIKING GUIDE</h3>
          </div>
          <p>Be Prepared For The Mountains and Beyond!</p>
          <p className="flex flex-row">
            scroll down <HiOutlineArrowNarrowDown className="mt-1" />
          </p>
        </div>

        {/* Scrollbar */}
        <div className="scrollbar list-none flex gap-3">
          <div className="scrollbar-content flex flex-col items-end">
            <li>Start</li>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </div>
          <div className="relative">
            {/* <div className="h-240 w-0.5 bg-[#89d137]"></div> */}
            <div className="h-240 w-0.5 bg-[#990505] absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
