import React, { useState } from "react";
import { ItemType } from "../Interfaces";
import OverviewItem from "./OverviewItem";
import "../css/Overview.css";

function Overview(props: OProps) {
  const [delivery, setDelivery] = useState(0);

  return (
    <div className="overview">
      <b style={{ fontSize: "20px" }}>Current Order</b>
      <div className="button-container">
        <button className="button-type" onClick={() => setDelivery(0)}>
          Pick up
        </button>
        <button className="button-type" onClick={() => setDelivery(1.95)}>
          Delivery
        </button>
      </div>
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
    </div>
  );
}

export default Overview;

interface OProps {
  selected: ItemType;
  totalAmount: number;
  children?: any;
}
