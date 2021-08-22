import React from "react";
import { ItemDetails } from "../../../shared/interfaces/Interfaces";
import "../css/Itemcard.css";
import { useOrder } from "../utils/useOrder";

function Itemcard(props: IProps) {

  const { addItem } = useOrder();

  return (
    <button
      className={"itemcard"}
      onClick={() => addItem(props.details._id)}
    >
      {props.details.name}
    </button>
  );
}

export default Itemcard;

interface IProps {
  details: ItemDetails;
}
