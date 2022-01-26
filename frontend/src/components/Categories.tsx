import React from 'react';
import { useOrder } from '../utils/useOrder';

export default function Categories() {
  const { sortCategories, fetchedCategories } = useOrder();
  return (
    <div>
      {fetchedCategories.map((x) => {
        return (
          <button key={x._id} onClick={() => sortCategories(x.category)}>
            {x.category}
          </button>
        );
      })}
    </div>
  );
}
