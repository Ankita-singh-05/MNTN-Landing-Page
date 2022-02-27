import React from "react";
import { VscAccount } from "react-icons/vsc";

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

// Background
import CloudImage from "../images/cloud";

function Navbar() {
  return (
    <>
<div className="absolute">
    <img src={CloudImage.cloudImage} alt="Clouds" className="cloud-image"></img>
    </div>

      <div className="navbar-toggler relative">
        <nav className="flex justify-between ">
          <div className="font-[Chronicle Display] text-[32px] text-white tracking-[0.01em] m-6">
            MNTN
          </div>
          
          <div
            className="list-none flex space-x-5 text-[18px] text-white font-[
            Gilroy] font-semibold m-8"
          >
            <li>Equipment</li>
            <li>About Us</li>
            <li>Blog</li>
          </div>
          <div className="flex gap-2 text-[18px] text-white font-[Gilroy] m-8">
            <VscAccount className="" />
            Account
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
