import { FC } from "react";

type props = {
  className?: string;
};

const Receipt: FC<props> = ({ className, ...rest }: props) => {
  return <div className={` ${className}`}>Receipt</div>;
};

export default Receipt;
