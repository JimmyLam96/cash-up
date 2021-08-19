import React from "react";
import { ItemDetails } from "../../../shared/interfaces/Interfaces";
import "../css/SummaryItem.css";
import { useOrder } from "../utils/useOrder";

function SummaryItem(props: SIProps) {

  const { selected, addItem, deleteItem } = useOrder();
  // const item = selected.filter((x: {item: ItemDetails, amount: number}) => x.item._id === props.id)[0]

  return (
    <div className="summary-item"> 
      <div className="details">
        <p className="summaryText">{props.item.name}</p>
        <div className="buttons">
          <button
            onClick={() =>
              deleteItem(props.item._id)
            }
          >
            -
          </button>
          <b>{props.amount}</b>
          <button
            onClick={() =>
              addItem(props.item._id)
            }
          >
            +
          </button>
        </div>
      </div>
      <div className="price">
        <p>
          {(
            props.amount *
            props.item.price
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default SummaryItem;

interface SIProps {
  item: ItemDetails
  amount: number
}
