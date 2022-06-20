import Button from "components/butttons/Button";
import ReceiptItem from "components/list-items/ReceiptItem";
import { useReceiptContext } from "contexts/ReceiptProvider";
import { FC } from "react";

type props = {
  className?: string;
};

const Receipt: FC<props> = ({ className, ...rest }: props) => {
  const { selectedProducts, orderType, setOrderType } = useReceiptContext();
  return (
    <div className={`flex flex-col w-full p-4 ${className}`} {...rest}>
      <div className="flex h-1/3 justify-around w-full">
        <Button
          className={`
            h-10 ${
              orderType === "Take-away"
                ? " border-b-secondary-orange border-b-2"
                : ""
            }
          `}
          onClick={() => setOrderType("Take-away")}
        >
          Take-away
        </Button>
        <Button
          className={`
          h-10 ${
            orderType === "Delivery"
              ? " border-b-secondary-orange border-b-2"
              : ""
          }
        `}
          onClick={() => setOrderType("Delivery")}
        >
          Delivery
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <h5 className="col-start-1 col-end-1">Quantity</h5>
        <h5 className="col-start-2 col-end-2">Product</h5>
        <h5 className="col-start-3 col-end-3">Price</h5>
        {selectedProducts.map((selectedProduct, index) => {
          return <ReceiptItem key={index} product={selectedProduct} />;
        })}
      </div>
      <div className="flex-2 self-end">
        <h5>
          Total:{" "}
          {selectedProducts
            .reduce((acc, product) => {
              return acc + product.price * product.amount;
            }, 0)
            .toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default Receipt;
