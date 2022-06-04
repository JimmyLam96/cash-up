import { FC } from "react";
import MainLayout from "layouts/MainLayout";
import Products from "components/cashier/Products";
import Receipt from "components/cashier/Receipt";

const Cashier: FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-grow gap-3 w-full">
        <Products className="w-2/3 bg-slate-300" />
        <Receipt className="w-1/3 bg-slate-500" />
      </div>
    </MainLayout>
  );
};

export default Cashier;
