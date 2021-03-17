import React from "react";
import "../css/Itemcard.css";

function Itemcard(props: IProps) {
  return (
    <button
      className={"itemcard"}
      onClick={() => props.onClick(props.details.name, props.details.price)}
    >
      {props.details.name}
    </button>
  );
}

export default Itemcard;

interface IProps {
  details: {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
  };
  children?: any;
  onClick: (title: string, price: number) => void;
}
