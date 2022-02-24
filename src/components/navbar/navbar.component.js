import React from "react";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <header className="mt-10">
      <nav className="flex justify-between">
        <div className="font-[Chronicle Display] text-[32px] text-white tracking-[0.01em]">
          MNTN
        </div>
        <div
          className="list-none flex space-x-5 text-[18px] text-white font-[
            Gilroy font-bold]"
        >
          <li>Equipment</li>
          <li>About Us</li>
          <li>Blog</li>
        </div>
        <div className="flex gap-2 text-[18px] text-white font-[Gilroy">
          <VscAccount className="mt-1" />
          Account
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
