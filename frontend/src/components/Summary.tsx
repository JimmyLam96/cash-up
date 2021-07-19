import React, { useState } from "react";
import { DetailsType, ItemType } from "../../../shared/interfaces/Interfaces";
import SummaryModal from "./SummaryModal";
import useForm from "../utils/useForm";
import "../css/Summary.css";
import axios from "axios";

function Summary(props: SProps) {
  const [delivery, setDelivery] = useState(0);
  const [values, handleChange] = useForm();

  function placeOrder() {
    console.log(values);
    // const order = {
    //   platform: "cash-up",
    //   status: "NEW",
    //   address: { ...props.orderDetails },
    // };
    // axios.post(`http://localhost:4000/orders`, order);
  }

  return (
    <div className="summary">
      <b className="head-text">Current Order</b>
      <div className="button-container">
        <button
          className={`button-type ${
            delivery === 0 ? "button-type-selected" : null
          }`}
          onClick={() => setDelivery(0)}
        >
          Pick up
        </button>
        <button
          className={`button-type ${
            delivery > 0 ? "button-type-selected" : null
          }`}
          onClick={() => setDelivery(1.95)}
        >
          Delivery
        </button>
      </div>
      {delivery > 0 ? <SummaryModal handleChange={handleChange} /> : null}
      <div className="item-container">{props.children}</div>
      <div className="footer">
        <div className="delivery">
          <span className={delivery > 0 ? "show" : ""}>Delivery fee</span>
          <p>Total</p>
        </div>
        <div>
          <span className={delivery > 0 ? "show" : ""}>{delivery}</span>
          <p>
            {delivery > 0
              ? (props.totalAmount + delivery).toFixed(2)
              : props.totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="checkout"
        onClick={() => {
          placeOrder();
        }}
      >
        checkout
      </button>
    </div>
  );
}

export default Summary;

interface SProps {
  selected: ItemType;
  totalAmount: number;
  orderDetails: DetailsType;
  children?: any;
}
