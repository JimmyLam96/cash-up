import React, { useEffect, useState } from "react";
import Itemcard from "../components/Itemcard";
import Searchbar from "../components/Searchbar";
import Summary from "../components/Summary";
import { DetailsType, ItemType } from "../../../shared/interfaces/Interfaces";
import "../css/Cashier.css";
import SummaryItem from "../components/SummaryItem";
import axios, { AxiosResponse } from "axios";
import { FormProvider } from "../utils/useForm"

function Cashier() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dishesData, setDishesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selected, setSelected] = useState<ItemType>({} as ItemType);
  const [orderDetails, setOrderDetails] = useState<DetailsType>({} as DetailsType);

  useEffect(() => {
    const itemsFetch = axios.get(`http://localhost:4000/items`);
    itemsFetch.then((x: AxiosResponse<any>) => {
      setDishesData(x.data);
      setFilteredData(x.data);
    });
  }, []);

  const setSearchInput = (input: string) => setSearchTerm(input.toLowerCase());

  useEffect(() => {
    const results = filteredData.filter(
      (x: any) =>
        x.dishes.some((y: any) => y.name.toLowerCase().includes(searchTerm)) ||
        x.category.toLowerCase().includes(searchTerm)
    );
    setDishesData(results);
  }, [searchTerm]);

  const addItem = (title: string, price: number) => {
    //add the item to the global JSON
    const item = selected[title];
    if (item !== undefined) {
      setSelected((prevState) => {
        let update = Object.assign({}, prevState[title]); // creating copy of the item to be updated
        update.amount++; // update the amount of the selected item
        return { ...selected, [title]: update }; // return previous objects including the updated item
      });
    } else {
      setSelected({
        ...selected,
        [title]: { price: price, amount: 1 },
      });
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
          <Searchbar value={searchTerm} onChange={setSearchInput} />
        </div>
        <div className="itemcards-container">
          {dishesData.map((x: any) => {
            return (
              <div key={x.category} className="category-container">
                <h1>{x.category}</h1>
                {x.dishes.map((dish: any) => {
                  return (
                    <Itemcard
                      key={dish._id}
                      details={dish}
                      onClick={addItem}
                    ></Itemcard>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <FormProvider>
          <Summary
            selected={selected}
            orderDetails={orderDetails}
            totalAmount={totalAmount}
          >
            {Object.keys(selected).map((title) => {
              return (
                <SummaryItem
                  key={title}
                  title={title}
                  itemType={selected}
                  addItem={addItem}
                  deleteItem={deleteItem}
                />
              );
            })}
          </Summary>
        </FormProvider>
      </div>
    </div>
  );
}

export default Cashier;
