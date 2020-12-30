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
          return (
            <div className="catergory-container">
              <h1>{item.category}</h1>
              {item.dishes.map((x) => {
                return <Dishcard key={index} details={x}></Dishcard>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cashier;
