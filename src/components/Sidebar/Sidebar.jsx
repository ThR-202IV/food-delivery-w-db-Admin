import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";

import { assets } from "../../assets/assets.js";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          {/* <img src={assets.add_icon} alt="" /> */}
          <FaRegPlusSquare
            style={{ fontSize: "30px" }}
            className="sidebar-react-icons"
          />
          <p style={{ color: "#343a40", fontWeight: "bold" }}>Add food</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          {/* <img src={assets.order_icon} alt="" /> */}
          <FaListUl
            style={{ fontSize: "28px" }}
            className="sidebar-react-icons"
          />
          <p style={{ color: "#343a40", fontWeight: "bold" }}>Inventory</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          {/* <img src={assets.order_icon} alt="" /> */}
          <GrDeliver
            style={{ fontSize: "29px" }}
            className="sidebar-react-icons"
          />
          <p style={{ color: "#343a40", fontWeight: "bold" }}>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
