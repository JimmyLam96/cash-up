import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

function Delivery() {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const result = axios.get(`http://localhost:4000/orders`);
    result.then((x: AxiosResponse<any>) => {
      console.log(x);
      setOrdersData(x.data);
    });
  }, []);

  return (
    <div className="delivery">
      {ordersData.map((x: any) => {
        return x;
      })}
    </div>
  );
}

export default Delivery;
