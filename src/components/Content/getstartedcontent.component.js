import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const GetStarted = () => {
  return (
    <>
      <div className="content1-container">
        <div className="content1-content">
          <div className="flex">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-3"></div>
            <h3 className="ml-4 text-[#FBD784]">GET STARTED</h3>
          </div>
          <h1>What level of hiker are you?</h1>
          <p>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <p className="flex flex-row">
            scroll down <HiOutlineArrowNarrowRight className="mt-1" />
          </p>
        </div>

        <div className="content1-image">
            <img src=""></img>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
