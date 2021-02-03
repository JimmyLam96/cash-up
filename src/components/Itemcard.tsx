import React from "react";
import "../css/Itemcard.css";

function Itemcard(props: IProps) {
  return (
    <button
      className={"itemcard"}
      onClick={() => props.onClick(props.details.title, props.details.price)}
    >
      {props.details.title}
      {props.details.price}
    </button>
  );
}

export default Itemcard;

interface IProps {
  details: {
    title: string;
    price: number;
    image?: string;
  };
  children?: any;
  onClick: (title: string, price: number) => void;
}
