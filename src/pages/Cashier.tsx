import React, { useState } from "react";
import Itemcard from "../components/Itemcard";
import Searchbar from "../components/Searchbar";
import { DishesData } from "../tmp/DishesData";
import Overview from "../components/Overview";
import { ItemType } from "../Interfaces";
import "../css/Cashier.css";
import OverviewItem from "../components/OverviewItem";

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
        <Overview selected={selected} totalAmount={totalAmount}>
          {Object.keys(selected).map((title) => {
            return (
              <OverviewItem
                title={title}
                itemType={selected}
                addItem={addItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </Overview>
      </div>
    </div>
  );
}

export default Cashier;
