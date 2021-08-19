import axios, { AxiosResponse } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { DetailsType, ItemDetails, ItemFetch, Order } from '../../../shared/interfaces/Interfaces'
import { useForm } from './useForm';

const OrderContext = createContext<value>({} as value);

export function useOrder() {
    return useContext(OrderContext);
}

//provider that enables every child wrapped within it to have access to the cashier logic when taking new orders
export function OrderProvider({ children }: orderProps) {
    const [items, setItems] = useState<ItemDetails[]>([]);
    const [fetchedCategories, setfetchedCategories] = useState<ItemFetch[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredData, setFilteredData] = useState([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [selected, setSelected] = useState<{item: ItemDetails, amount: number}[]>([]);
    const [delivery, setDelivery] = useState(0);

    //fetch on the intial mount all the fetchedCategories from the server
    useEffect(() => {
        const getfetchedCategories = axios.get(`http://localhost:4000/items`);
        getfetchedCategories.then((x: AxiosResponse<any>) => {
            setfetchedCategories(x.data);
            setFilteredData(x.data);

            const newItem: ItemDetails[] = [];
            x.data.forEach((x: ItemFetch) => {
              newItem.push(...x.dishes)
            })
            setItems(newItem);
            

        });
      }, []);

      //on changes to the searchTerm filter out the dishes (search functionality)
      useEffect(() => {
        const results = filteredData.filter(
          (x: any) =>
            x.dishes.some((y: any) => y.name.toLowerCase().includes(searchTerm)) ||
            x.category.toLowerCase().includes(searchTerm)
        );
        setfetchedCategories(results);
      }, [searchTerm]);

    const placeOrder = (customerDetails: DetailsType) => {
      // console.log(customerDetails)
      if(delivery > 0) {
        const order: Order = {
          "platform": "cash-up",
          "status": OrderStatus.STATUS_NEW,
          "address": customerDetails.address,
          "houseNumber": customerDetails.houseNumber,
          "items": selected,
          "postalCode": customerDetails.postalCode,
          "phoneNumber": customerDetails.phoneNumber,
        }
        const post = axios.post(`http://localhost:4000/orders`, order)
        console.log(post)
      }
      
      
      
      return Promise.resolve(true)
    }

    //handle the search query
    const setSearchInput = (input: string) => setSearchTerm(input.toLowerCase());

    //handle delivery change
    const updateDelivery = (amount: number) => setDelivery(amount)

    const addItem = (_id: string) => {
      //check if the list of selected items contains the to be added item
      //we add the XOR such that item will evaluate to undefined and not throw an error for the check on line 77
      const { item, amount } = selected.filter((x: { item: ItemDetails, amount: number }) => x.item._id === _id)[0] || {}
      
      //if the item is in our list (not undefined) of selected items we increment the amount
      if(item !== undefined) {
        setSelected((prevState) => prevState.map((x: { item: ItemDetails, amount: number }) => x.item._id === _id ? { item: x.item, amount: x.amount + 1} : x))
      } 
      //if the item is not in our list we spread out all the current items in the list and add our new selection
      else {
        const newItem = items.filter(x => x._id === _id)[0]
        setSelected(
          [...selected, { item: newItem, amount: 1 }]
        )
        return setTotalAmount(totalAmount + newItem.price);
      }
      setTotalAmount(totalAmount + item.price);
    }

    const deleteItem = (_id: string) => {
      //retreive the item we would like to delete or decrement its amount
      const { item, amount } = selected.filter((x: { item: ItemDetails, amount: number }) => x.item._id === _id)[0]

      //if the item is in our list (not undefined) of selected items we decrement the amount
      if(item !== undefined) {  
        setSelected((prevState) => {
          //we make sure that the amount is higher than 1 otherwise we remove it entirely from our list
          if(amount > 1) {
            return prevState.map((x: { item: ItemDetails, amount: number }) => x.item._id === _id ? { item: x.item, amount: x.amount - 1} : x)
          } else {
            return selected.filter((x: { item: ItemDetails, amount: number }) => x.item._id !== _id)
          }
        })
    }

    setTotalAmount(totalAmount - item.price);

  }

    //values that can be accessed by the consumers of this provider
    const values: value = {
        items: items,
        fetchedCategories: fetchedCategories,
        addItem: addItem,
        deleteItem: deleteItem,
        searchTerm: searchTerm,
        setSearchInput: setSearchInput,
        totalAmount: totalAmount,
        selected: selected,
        placeOrder: placeOrder,
        delivery: delivery,
        updateDelivery: updateDelivery
        
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
    items: ItemDetails[];
    fetchedCategories: ItemFetch[];
    addItem: (_id: string) => void;
    deleteItem: (_id: string) => void;
    searchTerm: string;
    setSearchInput: (input: string) => void;
    totalAmount: number;
    selected: {item: ItemDetails, amount: number}[];
    placeOrder: (customerDetails: DetailsType) => Promise<Boolean>;
    delivery: number
    updateDelivery: (amount: number) => void;
}

//enum for the status of each order
enum OrderStatus {
  STATUS_NEW = "NEW",
  STATUS_PROCESSING = "PROCESSING",
  STATUS_DELIVERY = "DELIVERY",
  STATUS_COMPLETED = "COMPLETED"
}
