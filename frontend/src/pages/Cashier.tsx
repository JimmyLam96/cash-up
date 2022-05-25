import { FC } from "react";
import MainLayout from "layouts/MainLayout";
import Products from "components/cashier/Products";
import Receipt from "components/cashier/Receipt";

const Cashier: FC = () => {
  return (
    <MainLayout>
      <main className="flex gap-3 w-full h-full">
        <Products className="w-2/3 h-full bg-slate-300" />
        <Receipt className="w-1/3 h-full bg-slate-500" />
      </main>
    </MainLayout>
  );
};

export default Cashier;
