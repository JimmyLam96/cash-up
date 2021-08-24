import React from 'react';
import { Order } from '../../../shared/interfaces/Interfaces';
import { useDelivery } from '../utils/useDelivery';

function Delivery() {
  const { ordersData } = useDelivery()

  return (
    <div className="delivery">
      {ordersData.map((x: Order) => {
        return <div>{x.address}</div>
      })}
    </div>
  );
}

export default Delivery;
