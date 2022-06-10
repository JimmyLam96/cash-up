import { SelectedProduct } from "contexts/ReceiptProvider";
import React from "react";

interface props {
  className?: string;
  product: SelectedProduct;
}

const ReceiptItem = ({ className, product, ...rest }: props) => {
  return (
    <li className={`flex gap-2 justify-center w-full ${className}`}>
      <h4 className="text-secondary-yellow font-semibold">{product.amount}</h4>
      <h4>{product.display_name}</h4>
      <h4>{product.price}</h4>
    </li>
  );
};

export default ReceiptItem;
