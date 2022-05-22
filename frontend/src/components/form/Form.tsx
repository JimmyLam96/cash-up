import React, { FC } from "react";

type props = {
  children?: any;
  [key: string]: any;
};

const Form: FC<props> = ({ children, ...rest }: props) => {
  return (
    <form
      className="
        flex flex-col 
        items-center 
        gap-4 
        bg-primary-light
        p-5 m-3 
        w-full max-w-2xl h-2/4 
        rounded-md
        shadow-lg"
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
