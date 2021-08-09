import React from "react";
import { ItemType } from "../../../shared/interfaces/Interfaces";
import "../css/SummaryItem.css";
import { useOrder } from "../utils/useOrder";

function SummaryItem(props: SIProps) {

  const { addItem, deleteItem } = useOrder();

  return (
    <div className="summary-item">
      <div className="details">
        <p className="summaryText">{props.title}</p>
        <div className="buttons">
          <button
            onClick={() =>
              deleteItem(props.title, props.itemType[props.title].price)
            }
          >
            -
          </button>
          <b>{props.itemType[props.title].amount}</b>
          <button
            onClick={() =>
              addItem(props.title, props.itemType[props.title].price)
            }
          >
            +
          </button>
        </div>
      </div>
      <div className="price">
        <p>
          {(
            props.itemType[props.title].amount *
            props.itemType[props.title].price
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default SummaryItem;

interface SIProps {
  title: string;
  itemType: ItemType;
}
