import Button from "components/butttons/Button";
import ReceiptItem from "components/list-items/ReceiptItem";
import { useReceiptContext } from "contexts/ReceiptProvider";
import { FC, useState } from "react";

type props = {
  className?: string;
};

const Receipt: FC<props> = ({ className, ...rest }: props) => {
  const { selectedProducts, orderType, setOrderType } = useReceiptContext();
  const [searchProduct, setSearchProduct] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");

  return (
    <div
      className={`flex flex-col w-full p-4 gap-3 relative ${className}`}
      {...rest}
    >
      <div className="flex gap-2 w-full">
        <input
          className="w-full p-1 rounded-md border-gray-300 border-2"
          placeholder="Customer"
          value={searchCustomer}
          onChange={(e) => setSearchCustomer(e.target.value)}
        />
        <input
          className="w-full p-1 rounded-md border-gray-300 border-2"
          placeholder="Product"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <h5 className="col-start-1 col-end-1">Quantity</h5>
        <h5 className="col-start-2 col-end-2">Product</h5>
        <h5 className="col-start-3 col-end-3">Price</h5>
        {selectedProducts.map((selectedProduct, index) => {
          return <ReceiptItem key={index} product={selectedProduct} />;
        })}
      </div>
      <div className="flex flex-col w-full absolute bottom-5 gap-3">
        <div className="flex justify-around w-full gap-2">
          <Button
            className={`
            h-10 w-full ${
              orderType === "Take-away" ? " bg-secondary-orange rounded-md" : ""
            }
          `}
            onClick={() => setOrderType("Take-away")}
          >
            Take-away
          </Button>
          <Button
            className={`
          h-10 w-full ${
            orderType === "Delivery" ? " bg-secondary-orange rounded-md" : ""
          }
        `}
            onClick={() => setOrderType("Delivery")}
          >
            Delivery
          </Button>
        </div>
        <hr className="w-full h-1 bg-black" />
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
