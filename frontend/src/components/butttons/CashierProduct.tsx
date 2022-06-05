import { FC } from "react";

type props = {
  className?: string;
  name: string;
  [key: string]: any;
};

const CashierProduct: FC<props> = ({ className, name, ...rest }: props) => {
  return (
    <button
      className={`flex flex-col gap-1 rounded-md p-2 bg-secondary-yellow ${className}`}
      {...rest}
    >
      {name}
    </button>
  );
};

export default CashierProduct;
