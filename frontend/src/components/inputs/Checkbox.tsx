import React, { FC } from "react";

type props = {
  name?: string;
  className?: string;
  [key: string]: any;
};

const Checkbox: FC<props> = ({ name, className, ...rest }: props) => {
  return (
    <input
      id={name}
      name={name}
      type="checkbox"
      className={` ${className}`}
      {...rest}
    />
  );
};

export default Checkbox;
