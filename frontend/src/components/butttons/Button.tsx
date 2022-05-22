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
        text-black
        p-2 
        rounded-md
        transition ease-in-out
        hover:bg-secondary-orange
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
