import { FC } from "react";
import MainLayout from "layouts/MainLayout";
import Products from "components/cashier/Products";
import Receipt from "components/cashier/Receipt";
import { db } from "../firebase";
import ReceiptProvider from "contexts/ReceiptProvider";

const Cashier: FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-grow gap-3 w-full">
        <ReceiptProvider>
          <Receipt className="w-1/3" />
          <Products className="w-2/3" />
        </ReceiptProvider>
      </div>
    </MainLayout>
  );
};

export default Cashier;
