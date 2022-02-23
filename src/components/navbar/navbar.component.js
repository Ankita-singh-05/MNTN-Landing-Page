import React from "react";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <header className="m-5">
      <nav className="flex justify-between">
        <div className="logo">MNTN</div>
        <div className="list-none flex space-x-5">
          <li>Equipment</li>
          <li>About Us</li>
          <li>Blog</li>
        </div>
        <div className="flex gap-2">
          <VscAccount className="mt-1" />
          Account
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
