import axios, { AxiosResponse } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ItemFetch, ItemType } from '../../../shared/interfaces/Interfaces';

const OrderContext = createContext<value>({} as value);

export function useOrder() {
    return useContext(OrderContext);
}

//provider that enables every child wrapped within it to have access to the cashier logic when taking new orders
export function OrderProvider({ children }: orderProps) {
    const [items, setItems] = useState<ItemFetch[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredData, setFilteredData] = useState([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [selected, setSelected] = useState<ItemType>({} as ItemType);

    //fetch on the intial mount all the items from the server
    useEffect(() => {
        const getItems = axios.get(`http://localhost:4000/items`);
        getItems.then((x: AxiosResponse<any>) => {
            setItems(x.data)
            setFilteredData(x.data);
        });
      }, []);

      //on changes to the searchTerm filter out the dishes (search functionality)
      useEffect(() => {
        const results = filteredData.filter(
          (x: any) =>
            x.dishes.some((y: any) => y.name.toLowerCase().includes(searchTerm)) ||
            x.category.toLowerCase().includes(searchTerm)
        );
        setItems(results);
      }, [searchTerm]);

    //handle the search query
    const setSearchInput = (input: string) => setSearchTerm(input.toLowerCase());

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

    //values that can be accessed by the consumers of this provider
    const values: value = {
        items: items,
        addItem: addItem,
        deleteItem: deleteItem,
        searchTerm: searchTerm,
        setSearchInput: setSearchInput,
        totalAmount: totalAmount,
        selected: selected
        
    }

    return (
        <OrderContext.Provider value={values}>
            {children}
        </OrderContext.Provider>
    )
}

interface orderProps {
    children?: any;
    value?: any;
}

interface value {
    items: ItemFetch[];
    addItem: (title: string, price: number) => void;
    deleteItem: (title: string, price: number) => void;
    searchTerm: string;
    setSearchInput: (input: string) => void;
    totalAmount: number;
    selected: ItemType;
}
