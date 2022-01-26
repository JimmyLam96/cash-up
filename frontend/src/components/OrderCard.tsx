import React from 'react';
import { Order } from '../../../shared/interfaces/Interfaces';
import '../css/OrderCard.css';
import edit from '../images/edit.svg';
import biker from '../images/biker.svg';
import distance from '../images/distance.svg';
import cart from '../images/cart.svg';

export default function OrderCard({ details }: OProps) {
  //temporary delivery names
  const names = [
    'Jimmy Lam',
    'Johannes van der Laan',
    'Sissy Wu',
    'Omar Kruiff',
    'Tess He',
  ];

  return (
    <div className={'ordercard'}>
      <div className="upper">
        <div className="upper-left">
          <b className="time">18</b>
          <b className="time">30</b>
        </div>
        <div className="upper-middle">
          <div>
            <span>{details.address}</span>
          </div>
          <div>
            <span>
              {'nr. ' +
                details.houseNumber[0] +
                (details.houseNumber[1] && '-' + details.houseNumber[1]) +
                ' / ' +
                details.postalCode[0] +
                details.postalCode[1]}
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
          <p>{details.items.length}</p>
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

interface OProps {
  details: Order;
}
