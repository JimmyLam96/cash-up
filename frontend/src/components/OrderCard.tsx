import React, { useEffect, useState } from 'react';
import { Customer, Order } from '../../../shared/interfaces/Interfaces';
import '../css/OrderCard.css';
import edit from '../images/edit.svg';
import biker from '../images/biker.svg';
import distance from '../images/distance.svg';
import cart from '../images/cart.svg';
import { fetch, URLPaths } from '../utils/defaultCRUD';
import { AxiosResponse } from 'axios';

interface OProps {
  order: Order;
  customer: Customer | undefined;
}

export default function OrderCard({ order, customer }: OProps) {
  // const [customer, setCustomer] = useState<Customer>({} as Customer);
  //temporary delivery names
  const names = [
    'Jimmy Lam',
    'Johannes van der Laan',
    'Sissy Wu',
    'Omar Kruiff',
    'Tess He',
  ];

  // useEffect(() => {
  //   if (order.customerId) {
  //     // let c;
  //     const res = async () => {
  //       return await fetch(URLPaths.CUSTOMER + order.customerId);
  //     };
  //     const c = res();
  //     setCustomer(c);
  //   }
  // }, []);
  // console.log(customer);

  return (
    <div className={'ordercard'}>
      <div className="upper">
        <div className="upper-left">
          <b className="time">18</b>
          <b className="time">30</b>
        </div>
        <div className="upper-middle">
          <div>
            <h1>{customer ? customer.firstName : order.platform}</h1>
            <span>{order.address}</span>
          </div>
          <div>
            <span>
              {'nr. ' +
                order.houseNumber[0] +
                (order.houseNumber[1] && '-' + order.houseNumber[1]) +
                ' / ' +
                order.postalCode[0] +
                order.postalCode[1]}
            </span>
          </div>
        </div>
        <div className="upper-right">
          <div className="circle" style={{ marginRight: '3px' }}>
            <p className="order-number">{Math.floor(Math.random() * 200)}</p>
          </div>
          <img
            width="15px"
            height="15px"
            src={edit}
            alt={'edit'}
            // style={{ marginRight: '2px' }}
          />
        </div>
      </div>
      <hr style={{ width: '90%', margin: '0 auto 0 auto' }} />
      <div className="lower">
        <div className="courier-box">
          <img
            width="12px"
            height="12px"
            src={biker}
            alt={'biker'}
            style={{ marginRight: '2px' }}
          />
          <div className="text-box">
            <p className="courier">
              {names[Math.floor(Math.random() * names.length)]}
            </p>
          </div>
        </div>
        <div className="distance-box">
          <img
            width="12px"
            height="12px"
            src={distance}
            alt={'distance'}
            style={{ marginRight: '3px' }}
          />
          <p>12KM</p>
        </div>
        <div className="cart-box">
          <p>{order.items.length}</p>
          <img
            width="10px"
            height="10px"
            src={cart}
            alt={'cart'}
            style={{ marginRight: '2px', marginLeft: '2px' }}
          />
          <p>$17.95</p>
        </div>
      </div>
    </div>
  );
}
