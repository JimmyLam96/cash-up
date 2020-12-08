import React from "react";
import "../css/Dishcard.css";

function Dishcard(props: DProps) {
  return (
    <button className={`dishcard`}>
      <p>{props.details.title}</p>
      <p>{props.details.price}</p>
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
