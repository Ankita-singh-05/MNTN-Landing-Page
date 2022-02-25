import React from "react";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    
      <nav className="flex justify-between ">
        <div className="font-[Chronicle Display] text-[32px] text-white tracking-[0.01em] m-8">
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
          <VscAccount className="mt-1" />
          Account
        </div>
      </nav>
    
  );
}

export default Navbar;
