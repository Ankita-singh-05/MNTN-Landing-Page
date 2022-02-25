import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HikingEssentials = () => {
  return (
    <>
      <div className="content1-container flex p-12 gap-4">
        <div className="mr-10">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d60be6b9791880001b7f54d/1570925030171-IZHRADBKBJXKC36XC0DQ/lucas-clara-hvPB-UCAmmU-unsplash.jpg?format=1000w"
            alt="Get_Started"
            className="h-[30rem] w-[24rem] object-cover"
          ></img>
        </div>
        <div className="content1-content">
          <div className="flex mt-10">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-3"></div>
            <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px]">Hiking Essentials</h3>
          </div>
          <h1 className="text-[#fff] font-semibold text-[64px] font-[Chronicle Display] w-[10em]">Picking the right Hiking Gear!</h1>
          <p className="text-[#fff] w-[632px] text-[18px]  font-[Gilroy] mt-3">
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe wif they get sweaty or wet.
          </p>
          <p className="flex flex-row gap-2 text-[#FBD784] font-[Gilroy] text-[18px] mt-3">
            read more <HiOutlineArrowNarrowRight className="mt-1" />
          </p>
        </div>
      </div>
    </>
  );
};

export default HikingEssentials;
