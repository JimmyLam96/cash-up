import { Product } from "interfaces/product.interface";
import { createContext, ReactNode, useContext, useState } from "react";

export interface SelectedProduct extends Product {
  amount: number;
}

interface ReceiptContextProps {
  selectedProducts: SelectedProduct[];
  addSelectedProduct: (product: Product) => void;
  removeSelectedProduct: (product: Product) => void;
  orderType: "Take-away" | "Delivery";
  setOrderType: (orderType: "Take-away" | "Delivery") => void;
}

const ReceiptContext = createContext<ReceiptContextProps>({
  selectedProducts: [],
  addSelectedProduct: () => {},
  removeSelectedProduct: () => {},
  orderType: "Take-away",
  setOrderType: () => {},
});

const ReceiptProvider = ({ children }: { children?: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [orderType, setOrderType] = useState<"Take-away" | "Delivery">(
    "Take-away"
  );

  const addSelectedProduct = (product: Product) => {
    if (
      selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      )
    ) {
      setSelectedProducts(
        selectedProducts.map((selectedProduct) =>
          selectedProduct.id === product.id
            ? { ...selectedProduct, amount: selectedProduct.amount + 1 }
            : selectedProduct
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, amount: 1 }]);
    }
  };

  const removeSelectedProduct = (product: Product) => {
    // check if the amount of the product is greater than 1
    const storedProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    );
    if (storedProduct && storedProduct.amount > 1) {
      setSelectedProducts(
        selectedProducts.map((selectedProduct) =>
          selectedProduct.id === product.id
            ? { ...selectedProduct, amount: selectedProduct.amount - 1 }
            : selectedProduct
        )
      );
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (selectedProduct) => selectedProduct.id !== product.id
        )
      );
    }
  };

  const values: ReceiptContextProps = {
    selectedProducts,
    addSelectedProduct,
    removeSelectedProduct,
    orderType,
    setOrderType,
  };

  return (
    <ReceiptContext.Provider value={values}>{children}</ReceiptContext.Provider>
  );
};

export const useReceiptContext = () => useContext(ReceiptContext);

export default ReceiptProvider;
