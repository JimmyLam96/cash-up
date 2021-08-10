import React, { useState} from "react";
import SummaryModal from "./SummaryModal";
import "../css/Summary.css";
import { useForm } from "../utils/useForm";
import Alert from "./Alert";
import { useOrder } from "../utils/useOrder";


function Summary(props: SProps) { 
  const [delivery, setDelivery] = useState(0);
  const { state } = useForm();
  const { totalAmount } = useOrder();


  const placeOrder = () => {
    console.log(state)
    // console.log(state);
    // const order = {
    //   platform: "cash-up",
    //   ...state
    // };
    // axios.post(`http://localhost:4000/orders`, order).then((res) =>
    //   console.log(res)
    // ).catch(e => {
    //   console.log(e)
    // });
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
      {delivery > 0 ? <SummaryModal/> : null}
      <Alert/>
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
              ? (totalAmount + delivery).toFixed(2)
              : totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="checkout"
        onClick={
          placeOrder
        }
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
