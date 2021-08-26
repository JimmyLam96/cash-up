import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Order } from '../../../shared/interfaces/Interfaces';

const DeliveryContext = createContext<value>({} as value);

export function useDelivery() {
  return useContext(DeliveryContext);
}

export function DeliveryProvider({ children }: DProps) {
  const [ordersData, setOrdersData] = useState<categorizedOrders>({} as categorizedOrders);

  useEffect(() => {
    const result = axios.get(`http://localhost:4000/orders`);
    result.then((x: AxiosResponse<Order[]>) => {

      const co: categorizedOrders = {
        "NEW": [] as Order[],
        "PROCESSING": [] as Order[],
        "DELIVERY": [] as Order[],
        "COMPLETED": [] as Order[]
      }

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
    });
  }, []);

  const values: value = {
    ordersData: ordersData,
  };

  return (
    <DeliveryContext.Provider value={values}>
      {children}
    </DeliveryContext.Provider>
  );
}

interface value {
  ordersData: categorizedOrders;
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
