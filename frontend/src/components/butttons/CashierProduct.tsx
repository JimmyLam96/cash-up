import { FC } from "react";

type props = {
  className?: string;
  [key: string]: any;
};

const CashierProduct: FC<props> = ({ className, children, ...rest }: props) => {
  return (
    <button
      className={`flex flex-col gap-1 rounded-md p-3 items-center justify-center bg-secondary-yellow ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CashierProduct;
