import React from 'react';
import { ItemDetails } from '../../../shared/interfaces/Interfaces';
import '../css/SummaryItem.css';
import { useOrder } from '../utils/useOrder';

function SummaryItem(props: SIProps) {
  const { addItem, deleteItem } = useOrder();

  return (
    <div className="summary-item">
      <div className="details">
        <p className="summaryText">{props.item.name}</p>
        <div className="buttons">
          <button onClick={() => deleteItem(props.item._id)}>-</button>
          <b>{props.amount}</b>
          <button onClick={() => addItem(props.item._id)}>+</button>
        </div>
      </div>
      <div className="price">
        <p>{(props.amount * props.item.price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SummaryItem;

interface SIProps {
  item: ItemDetails;
  amount: number;
}
