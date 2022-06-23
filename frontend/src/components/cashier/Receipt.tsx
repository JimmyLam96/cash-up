import Button from "components/butttons/Button";
import ReceiptItem from "components/list-items/ReceiptItem";
import PopupModal from "components/modal/PopupModal";
import { useReceiptContext } from "contexts/ReceiptProvider";
import { FC, useState } from "react";

type props = {
  className?: string;
};

const Receipt: FC<props> = ({ className, ...rest }: props) => {
  const { selectedProducts, orderType, setOrderType } = useReceiptContext();
  const [searchProduct, setSearchProduct] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [newCustomerActive, setNewCustomerActive] = useState(false);

  const addNewCustomer = () => {
    setNewCustomerActive(true);
  };

  return (
    <>
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
          <Button
            className="bg-secondary-orange rounded-md h-10"
            onClick={addNewCustomer}
          >
            Add new customer
          </Button>
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
      <PopupModal active={newCustomerActive} setActive={setNewCustomerActive}>
        <div className="flex flex-col gap-4">
          <h1 className="mb-4 text-center">New customer</h1>
          <div className="flex flex-col gap-1 text-gray-400">
            <h5>First name</h5>
            <input
              className="border-2 border-gray-300 rounded-md p-1 text-black"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-400">
            <h5>Last name</h5>
            <input
              className="border-2 border-gray-300 rounded-md p-1 text-black"
              placeholder="Doe"
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-400">
            <h5>Phone number</h5>
            <input
              className="border-2 border-gray-300 rounded-md p-1 text-black"
              placeholder="0612345678"
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1 text-gray-400 w-1/2">
              <h5>Address</h5>
              <input
                className="border-2 border-gray-300 rounded-md p-1 text-black"
                placeholder="Wieltjesweg"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-400 w-1/4">
              <h5>House number</h5>
              <input
                type="number"
                className="border-2 border-gray-300 rounded-md p-1 text-black"
                placeholder="20"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-400 w-1/4">
              <h5>Additional</h5>
              <input
                className="border-2 border-gray-300 rounded-md p-1 text-black"
                placeholder="A-B"
              />
            </div>
          </div>
          <Button className="w-full h-10 mt-4 bg-secondary-orange rounded-md">
            Add
          </Button>
        </div>
      </PopupModal>
    </>
  );
};

export default Receipt;
