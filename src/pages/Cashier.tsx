import React from "react";
import Dishcard from "../components/Dishcard";
import Searchbar from "../components/Searchbar";
import { DishesData } from "../tmp/DishesData";
import "../css/Cashier.css";

function Cashier() {
  return (
    <div className="cashier">
      <div className="searchbar-container">
        <Searchbar />
      </div>
      <div className="dishcards-container">
        {DishesData.map((item, index) => {
          return <Dishcard key={index} details={item}></Dishcard>;
        })}
      </div>
    </div>
  );
}

export default Cashier;
