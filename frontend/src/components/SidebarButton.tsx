import React, { useState } from "react";
import "../css/SidebarButton.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";

function SidebarButton(props: SBBProps) {
  //current path location of the application
  const location = useLocation();

  return (
    <IconContext.Provider
      value={{
        color: location.pathname === props.details.path ? "#00a99d" : "white",
      }}
    >
      <button
        className={`btn btn--${
          location.pathname === props.details.path ? "clicked" : "default"
        }`}
      >
        <Link
          to={props.details.path}
          className={`btn--content btn--content--${
            location.pathname === props.details.path ? "clicked" : "default"
          }`}
        >
          {props.children}
          {props.details.icon}
          {props.details.title}
        </Link>
      </button>
    </IconContext.Provider>
  );
}

export default SidebarButton;

interface SBBProps {
  details: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
  buttonStyle: string;
  children?: any;
}
