import React from "react";
// Icons
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

//images
import VgImage from "../images/vg";

// Background
import HeroImage from "../images/hero";

function HeroComponent() {
  return (
    <>
      <div className="absolute hero-image-container mt-6">
        <img
          src={HeroImage.heroImage}
          alt="hero image"
          className="hero-image"
        ></img>
      </div>
      <div className="hero-container flex justify-between relative">
        {/* Social Links */}
        <div className="mt-20 space-y-9 text-white text-[18px] social-link-container">
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
        <div className="hero-content mt-3">
          <div className="flex gap-2">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-2"></div>
            <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px] hero-title">
              A HIKING GUIDE
            </h3>
          </div>
          <p className="font-[Playfair-Display] font-semibold text-[55px] w-[38rem] hero-para text-[#fcfcfc]">
            Be Prepared For The Mountains and Beyond!
          </p>
          <p className="flex flex-row text-white font-[Gilroy] text-[18px] scroll-down">
            scroll down <HiOutlineArrowNarrowDown className="mt-1" />
          </p>
        </div>

        {/* Scrollbar */}
        <div className="scrollbar-container list-none flex  text-white mt-5 mr-7">
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

      {/* Get Started Component */}
      <div className="relative">
        <div className="relative vg-image-container z-10  opacity-">
          <img src={VgImage.vgImage} className="vg-image"></img>
        </div>
        <div className="content-main-container  flex ml-16 gap-3">
          <div className="mt-12 getstarted-content">
            <div className="flex">
              <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-[7px]"></div>
              <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px] content-title">
                GET STARTED
              </h3>
            </div>
            <h1 className="text-[#fff] font-semibold text-[64px] font-[Playfair-Display] content-heading">
              What level of hiker are you?
            </h1>
            <p className="text-[#fff] w-[632px] text-[18px]  font-[Gilroy] mt-3 content-para">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <p className="flex flex-row gap-2 text-[#FBD784] font-[Gilroy] text-[18px] mt-3 read-more-para">
              read more <HiOutlineArrowNarrowRight className="mt-1" />
            </p>
          </div>

          <div className="mr-16 content-image-container">
            <img
              src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              alt="Get_Started"
              className="h-[30rem] w-[24rem] object-cover content-image"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
