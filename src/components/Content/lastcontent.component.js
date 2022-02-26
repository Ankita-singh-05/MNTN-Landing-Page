import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const GetStarted = () => {
  return (
    <>
      <div className="content1-container flex p-12 gap-5">
        <div className="mt-12">
          <div className="flex">
            <div className="w-11 h-0.5 left-0 bg-[#FBD784] mt-[8.2px]"></div>
            <h3 className="ml-4 text-[#FBD784] font-[Gilroy] font-extrabold text-[18px] tracking-[6px]">
              where you go is the key
            </h3>
          </div>
          <h1 className="text-[#fff] font-semibold text-[64px] font-[Chronicle Display] w-[10em]">
            Understand Your Map & Timing
          </h1>
          <p className="text-[#fff] w-[632px] text-[18px]  font-[Gilroy] mt-3">
            To start, print out the hiking guide and map. If it’s raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I’ll read the guide and know that say, in
            a mile, I make a right turn at the junction..
          </p>
          <p className="flex flex-row gap-2 text-[#FBD784] font-[Gilroy] text-[18px] mt-3">
            read more <HiOutlineArrowNarrowRight className="mt-1" />
          </p>
        </div>

        <div className="content1-image ml-10">
          <img
            src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            className="h-[30rem] w-[24rem]  object-cover"
          ></img>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
