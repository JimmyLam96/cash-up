import React from 'react';
import SummaryModal from './SummaryModal';
import '../css/Summary.css';
import { useForm } from '../utils/useForm';
import Alert from './Alert';
import { useOrder } from '../utils/useOrder';

function Summary(props: SProps) {
  const { delivery, updateDelivery, totalAmount, placeOrder } = useOrder();
  const { state, validateForm } = useForm();

  return (
    <div className="summary">
      <b className="head-text">Current Order</b>
      <div className="button-container">
        <button
          className={`button-type ${
            delivery === 0 ? 'button-type-selected' : null
          }`}
          onClick={() => updateDelivery(0)}
        >
          Pick up
        </button>
        <button
          className={`button-type ${
            delivery > 0 ? 'button-type-selected' : null
          }`}
          onClick={() => updateDelivery(1.95)}
        >
          Delivery
        </button>
      </div>
      {delivery > 0 ? <SummaryModal /> : null}
      <Alert />
      <div className="item-container">{props.children}</div>
      <div className="footer">
        <div>
          {delivery > 0 && <span>Delivery fee</span>}
          <p>Total</p>
        </div>
        <div>
          {delivery > 0 && <span>{delivery}</span>}
          <p>
            {delivery > 0
              ? (totalAmount + delivery).toFixed(2)
              : totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="checkout"
        onClick={() => placeOrder(state, validateForm)}
      >
        checkout
      </button>
    </div>
  );
}

export default Summary;

interface SProps {
  children?: any;
}
