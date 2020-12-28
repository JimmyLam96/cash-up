import React from "react";
import Dishcard from "../components/Dishcard";
import { DishesData } from "../tmp/DishesData";

function Cashier() {
  return (
    <div className="cashier-container">
      <div className="searchbar-container"></div>
      <div className="dishcard-container">
        {DishesData.map((item, index) => {
          return <Dishcard key={index} details={item}></Dishcard>;
        })}
      </div>
    </div>
  );
}

export default Cashier;
