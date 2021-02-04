import React from "react";
import "../css/OverviewModal.css";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";

function OverviewModal() {
  return (
    <div className="overview-modal">
      <form>
        <HiIcons.HiLocationMarker color="#00a99d" />
        <input type="text" name="name" />
      </form>
      <form>
        <HiIcons.HiClock color="#00a99d" />
        <input type="text" name="name" />
      </form>
      <form>
        <BsIcons.BsFillPersonFill color="#00a99d" />
        <input type="text" name="name" />
      </form>
    </div>
  );
}

export default OverviewModal;
