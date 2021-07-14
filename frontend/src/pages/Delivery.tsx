import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { OrderEntry, Order } from "../../../shared/interfaces/interfaces";

function Delivery() {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const result = axios.get(`http://localhost:4000/orders`);
    result.then((x: AxiosResponse<any>) => {
      setOrdersData(x.data);
    });
  }, []);

  return (
    <div className="delivery">
      {/* {ordersData.map((x: OrderEntry) => {
        x.orders.map((y: Order) => {
          return <h1>{y.houseNumber[0]}</h1>;
        });
      })} */}
    </div>
  );
}

export default Delivery;
