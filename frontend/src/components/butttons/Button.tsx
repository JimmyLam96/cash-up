import React, { FC } from "react";

type props = {
  className?: string;
  children?: string;
  [key: string]: any;
};

const Button: FC<props> = ({ className, children, ...rest }: props) => {
  return (
    <button
      type="button"
      className={`
        transition ease-in-out 
        border-b-2 border-transparent
        hover:border-secondary-orange
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
