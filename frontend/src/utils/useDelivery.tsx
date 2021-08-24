import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Order } from '../../../shared/interfaces/Interfaces';

const DeliveryContext = createContext<value>({} as value);

export function useDelivery() {
    return useContext(DeliveryContext)
}

export function DeliveryProvider({ children }: DProps) {

    const [ordersData, setOrdersData] = useState<Order[]>([]);

    useEffect(() => {
        const result = axios.get(`http://localhost:4000/orders`);
        result.then((x: AxiosResponse<Order[]>) => {
          setOrdersData(x.data)
        });
      }, []);

    const values: value = {
        ordersData: ordersData
    }
    return (
        <DeliveryContext.Provider value={values}>
            {children}
        </DeliveryContext.Provider>
    )
}

interface value {
    ordersData: Order[]
}

interface DProps {
    children?: any
}
