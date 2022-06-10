import { FC } from "react";
import MainLayout from "layouts/MainLayout";
import Products from "components/cashier/Products";
import Receipt from "components/cashier/Receipt";
import { db } from "../firebase";

const Cashier: FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-grow gap-3 w-full">
        <Receipt className="w-1/3 bg-slate-500" />
        <Products className="w-2/3 bg-slate-300" />
      </div>
    </MainLayout>
  );
};

export default Cashier;
