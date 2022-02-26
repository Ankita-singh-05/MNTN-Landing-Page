import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

//images
import VgImage from "../images/vg" ;

const GetStarted = () => {
  return (
    <>
  <div className="mt-[10.4rem] relative">
    <img src={VgImage.vgImage} className="z-30"></img>
  </div>
      <div className="content1-container flex p-12 gap-4">
        <div className="mt-12">
          <div className="flex">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-3"></div>
            <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px]">GET STARTED</h3>
          </div>
          <h1 className="text-[#fff] font-semibold text-[64px] font-[Chronicle Display] w-[10em]">What level of hiker are you?</h1>
          <p className="text-[#fff] w-[632px] text-[18px]  font-[Gilroy] mt-3">
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <p className="flex flex-row gap-2 text-[#FBD784] font-[Gilroy] text-[18px] mt-3">
            read more <HiOutlineArrowNarrowRight className="mt-1" />
          </p>
        </div>

        <div className="ml-10">
            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="Get_Started"
            className="h-[30rem] w-[24rem] object-cover"></img>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
