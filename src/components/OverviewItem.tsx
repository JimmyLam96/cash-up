import * as React from "react";
import { ItemType } from "../Interfaces";
import "../css/OverviewItem.css";

function OverviewItem(props: OProps) {
  return (
    <div className="overview-item">
      <div className="details">
        <p>{props.title}</p>
        <div className="buttons">
          <button
            onClick={() =>
              props.deleteItem(props.title, props.itemType[props.title].price)
            }
          >
            -
          </button>
          <b>{props.itemType[props.title].amount}</b>
          <button
            onClick={() =>
              props.addItem(props.title, props.itemType[props.title].price)
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

export default OverviewItem;

interface OProps {
  title: string;
  itemType: ItemType;
  addItem: (title: string, price: number) => void;
  deleteItem: (title: string, price: number) => void;
}
