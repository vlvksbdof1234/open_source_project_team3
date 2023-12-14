import React from "react";
import "../styles/Navbar.css";
import logo from "../image/mainLogo.png";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="imgDiv">
          <img alt="mainlogo" src={logo} />
        </div>
        <i>COCOBOT</i>
      </div>
    </div>
  );
}

export default Navbar;
