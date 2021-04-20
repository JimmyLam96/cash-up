import React from "react";
import { NavbarData } from "../tmp/NavbarData";
import { IconContext } from "react-icons";
import NavbarButton from "./NavbarButton";
import "../css/Navbar.css";

function Navbar() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar-container">
        <div className="navbar-items">
          {NavbarData.map((item, index) => {
            return (
              <NavbarButton
                key={index}
                details={item}
                buttonStyle={"default"}
              />
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
