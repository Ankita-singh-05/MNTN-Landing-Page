import React from "react";

function Footer() {
  return (
    <div className="flex justify-between m-14">
      <div>
        <h1>MNTN</h1>
        <p>Get out there & discover your next slope, mountain & destination!</p>
        <p>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
      </div>
      <div>
        More on The Blog
        <div className="list-none">
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </div>
      </div>
      <div className="">
        More on MNTN
        <div className="list-none">
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
