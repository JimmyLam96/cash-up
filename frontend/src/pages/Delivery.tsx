import React from 'react';
import { Order } from '../../../shared/interfaces/Interfaces';
import OrderCard from '../components/OrderCard';
import { useDelivery } from '../utils/useDelivery';
import '../css/Delivery.css';
import Searchbar from '../components/Searchbar';

function Delivery() {
  const { ordersData, deliverySearch, handleSearch } = useDelivery();

  return (
    <div className="delivery">
      <div className="upper-container">
        <Searchbar searchTerm={deliverySearch} handleSearch={handleSearch} />
      </div>
      <div className="lower-container">
        {Object.entries(ordersData).map(
          (x: [status: string, orders: Order[]]) => {
            return (
              <div>
                <h1>{x[0]}</h1>
                <div className="order-container">
                  {x[1].map((order: Order) => {
                    return <OrderCard details={order} />;
                  })}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Delivery;
