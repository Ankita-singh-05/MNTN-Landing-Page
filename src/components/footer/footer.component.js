import React from "react";

function Footer() {
  return (
    <div className="flex justify-between m-14">
      <div>
        <h1 className="mb-4 font-[Chronicle Display] tracking-[0.01em] text-[32px]">MNTN</h1>
        <div className="font-[Gilroy] text-[18px]">
          <p className="w-56 font-bold">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="mt-[4.8em] font-medium opacity-[0.5]">
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>

      <div className="font-[Gilroy]">
        <h1 className="text-[#FBD784] mb-4 font-bold text-[24px]">
          More on The Blog
        </h1>
        <div className="list-none text-[18px] space-y-4 font-medium">
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </div>
      </div>

      <div className="font-[Gilroy]">
        <h1 className="text-[#FBD784] mb-4 font-bold text-[24px]">
          More on MNTN
        </h1>
        <div className="list-none text-[18px] space-y-4 font-medium">
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
