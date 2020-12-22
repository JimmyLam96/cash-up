import React from "react";
import "../css/Dishcard.css";

function Dishcard(props: DProps) {
  return (
    <button className={`dishcard`}>
      {props.details.title}
      {props.details.price}
    </button>
  );
}

export default Dishcard;

interface DProps {
  details: {
    title: string;
    price: number;
    image?: string;
  };
  children?: any;
}
