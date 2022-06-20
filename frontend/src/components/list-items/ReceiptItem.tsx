import { SelectedProduct, useReceiptContext } from "contexts/ReceiptProvider";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

interface props {
  product: SelectedProduct;
}

const ReceiptItem = ({ product }: props) => {
  const { addSelectedProduct, removeSelectedProduct } = useReceiptContext();

  const handleAdd = () => {
    addSelectedProduct(product);
  };

  const handleRemove = () => {
    removeSelectedProduct(product);
  };

  return (
    <>
      <h4 className="text-secondary-yellow font-semibold col-start-1 col-end-1">
        {product.amount}
      </h4>
      <h4 className="col-start-2 col-end-2">{product.display_name}</h4>

      <div className="flex gap-3 col-start-3 col-end-3 items-center ">
        <AiFillPlusCircle
          className="hover:cursor-pointer select-none "
          onClick={handleAdd}
        />
        <h4 className="col-start-3 col-end-3">{product.price}</h4>
        <AiFillMinusCircle
          className="hover:cursor-pointer select-none"
          onClick={handleRemove}
        />
      </div>
    </>
  );
};

export default ReceiptItem;
