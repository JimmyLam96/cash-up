import React, { useEffect, useState } from 'react';
import { Customer, Order } from '../../../shared/interfaces/Interfaces';
import OrderCard from '../components/OrderCard';
import { useDelivery } from '../utils/useDelivery';
import '../css/Delivery.css';
import Searchbar from '../components/Searchbar';
import { stringify } from 'querystring';

function Delivery() {
  const { ordersData, deliverySearch, handleSearch, customers, isLoading } =
    useDelivery();

  useEffect(() => {
    Object.entries(customers).forEach(([x, y]: [x: string, y: Customer]) =>
      console.log(x, y, 'hello'),
    );
  }, [customers]);
  // const [customers, setCustomers] = useState<temptype>({} as temptype);

  // useEffect(() => {
  //   {
  //     Object.entries(ordersData).map(
  //       ([status, orders]: [status: string, orders: Order[]]) => {
  //         orders.map(async (x) => {
  //           if (x.customerId) {
  //             const customer: AxiosResponse = await fetch(
  //               URLPaths.CUSTOMER + x.customerId,
  //             );
  //             setCustomers((prevState) => {
  //               return {
  //                 ...prevState,
  //                 [x.customerId as string]: customer.data,
  //               };
  //             });
  //           }
  //         });
  //       },
  //     );
  //     // console.log(customers);
  //   }
  // }, []);

  return (
    <div className="delivery">
      <div className="upper-container">
        <Searchbar searchTerm={deliverySearch} handleSearch={handleSearch} />
      </div>
      <div className="lower-container">
        {!isLoading &&
          Object.entries(ordersData).map(
            ([status, orders]: [status: string, orders: Order[]]) => {
              return (
                <div>
                  <h1>{status}</h1>
                  <div className="order-container">
                    {orders.map((order: Order) => {
                      return (
                        <OrderCard
                          order={order}
                          customer={
                            order.customerId
                              ? customers[order.customerId]
                              : undefined
                          }
                        />
                      );
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
