import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Cashier",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Delivery",
    path: "/delivery",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Editor",
    path: "/editor",
    icon: <IoIcons.IoIosApps />,
  },
];
