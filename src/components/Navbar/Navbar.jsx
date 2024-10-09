import React from "react";
import { RxAvatar } from "react-icons/rx";

import { assets } from "../../assets/assets.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <p className="logo">Food Kraft.</p>
      {/* <img src={assets.profile_icon} alt="" className="profile" /> */}
      <RxAvatar style={{ fontSize: "30px", marginTop: "2px" }} />
    </div>
  );
};

export default Navbar;
