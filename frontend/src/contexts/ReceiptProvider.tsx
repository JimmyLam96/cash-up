import { Product } from "interfaces/product.interface";
import { createContext, ReactNode, useContext, useState } from "react";

export interface SelectedProduct extends Product {
  amount: number;
}

interface ReceiptContextProps {
  selectedProducts: SelectedProduct[];
  addSelectedProduct: (product: Product) => void;
  removeSelectedProduct: (product: Product) => void;
}

const ReceiptContext = createContext<ReceiptContextProps>({
  selectedProducts: [],
  addSelectedProduct: () => {},
  removeSelectedProduct: () => {},
});

const ReceiptProvider = ({ children }: { children?: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
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
    setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
  };

  const values: ReceiptContextProps = {
    selectedProducts,
    addSelectedProduct,
    removeSelectedProduct,
  };

  return (
    <ReceiptContext.Provider value={values}>{children}</ReceiptContext.Provider>
  );
};

export const useReceiptContext = () => useContext(ReceiptContext);

export default ReceiptProvider;
