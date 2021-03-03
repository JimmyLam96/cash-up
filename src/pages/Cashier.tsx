import React, { useState } from "react";
import Itemcard from "../components/Itemcard";
import Searchbar from "../components/Searchbar";
import { DishesData } from "../tmp/DishesData";
import Summary from "../components/Summary";
import { ItemType } from "../Interfaces";
import "../css/Cashier.css";
import SummaryItem from "../components/SummaryItem";

function Cashier() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selected, setSelected] = useState({} as ItemType);

  const addItem = (title: string, price: number) => {
    //add the to the global JSON
    const item = selected[title];
    if (item !== undefined) {
      setSelected((prevState) => {
        let update = Object.assign({}, prevState[title]); // creating copy of the item to be updated
        update.amount++; // update the amount of the selected item
        return { ...selected, [title]: update }; // return previous objects including the updated item
      });
    } else {
      setSelected({ ...selected, [title]: { price: price, amount: 1 } });
    }
    //add the cost of the item
    setTotalAmount(totalAmount + price);
  };

  const deleteItem = (title: string, price: number) => {
    //add the to the global JSON
    const item = selected[title];
    if (item !== undefined) {
      setSelected((prevState) => {
        let update = Object.assign({}, prevState[title]); // creating copy of the item to be updated
        //if the item has been selected less than once we delete it.
        if (update.amount > 1) {
          update.amount--; // update the amount of the selected item
          return { ...selected, [title]: update }; // return previous objects including the updated item
        } else {
          delete prevState[title];
          return { ...selected };
        }
      });
    }
    //subtract the cost of the item
    setTotalAmount(totalAmount - price);
  };

  return (
    <div className="cashier">
      <div className="left">
        <div className="searchbar-container">
          <Searchbar />
        </div>
        <div className="itemcards-container">
          {DishesData.map((item) => {
            return (
              <div className="category-container">
                <h1>{item.category}</h1>
                {item.dishes.map((x) => {
                  return <Itemcard details={x} onClick={addItem}></Itemcard>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Summary selected={selected} totalAmount={totalAmount}>
          {Object.keys(selected).map((title) => {
            return (
              <SummaryItem
                title={title}
                itemType={selected}
                addItem={addItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </Summary>
      </div>
    </div>
  );
}

export default Cashier;
