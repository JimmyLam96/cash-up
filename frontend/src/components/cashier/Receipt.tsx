import ReceiptItem from "components/list-items/ReceiptItem";
import { useReceiptContext } from "contexts/ReceiptProvider";
import { FC } from "react";

type props = {
  className?: string;
};

const Receipt: FC<props> = ({ className, ...rest }: props) => {
  const { selectedProducts } = useReceiptContext();
  return (
    <div className={`flex flex-col w-full p-4 ${className}`}>
      <div className="flex w-full justify-between">
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Price</h1>
      </div>
      <ul className="flex flex-col gap-2 items-center">
        {selectedProducts.map((selectedProduct, index) => {
          return <ReceiptItem key={index} product={selectedProduct} />;
        })}
      </ul>
    </div>
  );
};

export default Receipt;
