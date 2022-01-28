import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { createContext } from 'react';
import { Customer, Order } from '../../../shared/interfaces/Interfaces';
import { fetch, URLPaths, URL } from './defaultCRUD';

const DeliveryContext = createContext<value>({} as value);

export function useDelivery() {
  return useContext(DeliveryContext);
}

export function DeliveryProvider({ children }: DProps) {
  const [ordersData, setOrdersData] = useState<categorizedOrders>(
    {} as categorizedOrders,
  );
  const [filteredOrders, setFilteredOrders] = useState<categorizedOrders>(
    {} as categorizedOrders,
  );
  const [deliverySearch, setDeliverySearch] = useState<string>('');
  const [customers, setCustomers] = useState<CustomerMap>({} as CustomerMap);

  const isInitialMount = useRef(true);
  const isLoading = useRef(false);

  //Retreive all the orders upon load
  useEffect(() => {
    const fetchCustomers = async () => {
      const allPromises: Promise<any>[] = [];

      //fill up allPromises with promises from each individual order
      Object.values(ordersData).map((orders: Order[]) => {
        const categoryPromises = [
          ...new Set(orders.filter((x: Order) => x.customerId !== undefined)),
        ].forEach((x: Order) => {
          const temp = axios.get(
            `http://localhost:4000/` + URLPaths.CUSTOMER + x.customerId,
          );
          console.log(temp);
        });
        // allPromises.push(...categoryPromises);
      });

      // allPromises.forEach((x) => x.then((y) => console.log(y)));
      // const results = await Promise.all(allPromises);
      // results.forEach((x: Customer) => {
      //   !customers[x._id] &&
      //     setCustomers((prevState) => {
      //       return { ...prevState, [x._id]: x };
      //     });
      // });
      console.log('2');
    };

    const fetchOrders = async () => {
      const result = axios.get(`http://localhost:4000/orders`);
      result.then((x: AxiosResponse<Order[]>) => {
        const co: categorizedOrders = {
          NEW: [] as Order[],
          PROCESSING: [] as Order[],
          DELIVERY: [] as Order[],
          COMPLETED: [] as Order[],
        };

        x.data.forEach((x: Order) => {
          switch (x.status) {
            case 'NEW':
              co.NEW.push(x);
              break;
            case 'PROCESSING':
              co.PROCESSING.push(x);
              break;
            case 'DELIVERY':
              co.DELIVERY.push(x);
              break;
            case 'COMPLETED':
              co.COMPLETED.push(x);
              break;
          }
        });
        setOrdersData(co);
        setFilteredOrders(co);
      });
    };

    fetchOrders();
    fetchCustomers();
    // console.log(customers);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      //conditional checker if the address, postal and phone contain the search term.
      const orderContains = (order: Order) => {
        const tempPostalCode =
          order.postalCode[0] + order.postalCode[1].toLowerCase();
        return (
          order.address.toLowerCase().includes(deliverySearch) ||
          tempPostalCode.includes(deliverySearch) ||
          order.phoneNumber.toString().includes(deliverySearch)
        );
      };

      const filteredCo: categorizedOrders = {
        NEW: filteredOrders.NEW.filter((x: Order) => orderContains(x)),
        PROCESSING: filteredOrders.PROCESSING.filter((x: Order) =>
          orderContains(x),
        ),
        DELIVERY: filteredOrders.DELIVERY.filter((x: Order) =>
          orderContains(x),
        ),
        COMPLETED: filteredOrders.COMPLETED.filter((x: Order) =>
          orderContains(x),
        ),
      };
      setOrdersData(filteredCo);
    }
  }, [deliverySearch, filteredOrders]);

  //handle the search query
  const handleSearch = (input: string) => {
    setDeliverySearch(input.toLowerCase());
  };

  const values: value = {
    ordersData: ordersData,
    deliverySearch: deliverySearch,
    handleSearch: handleSearch,
    customers: customers,
    isLoading: isLoading.current,
  };

  return (
    <DeliveryContext.Provider value={values}>
      {children}
    </DeliveryContext.Provider>
  );
}

interface value {
  ordersData: categorizedOrders;
  deliverySearch: string;
  handleSearch: (input: string) => void;
  customers: CustomerMap;
  isLoading: boolean;
}

interface categorizedOrders {
  NEW: Order[];
  PROCESSING: Order[];
  DELIVERY: Order[];
  COMPLETED: Order[];
}

interface DProps {
  children?: any;
}

type CustomerMap = {
  [key: string]: Customer;
};
