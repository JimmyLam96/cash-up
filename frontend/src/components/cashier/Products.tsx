import { FC } from "react";

type props = {
  className?: string;
};

const Products: FC<props> = ({ className, ...rest }: props) => {
  return (
    <div className={`${className}`} {...rest}>
      Products
    </div>
  );
};

export default Products;
