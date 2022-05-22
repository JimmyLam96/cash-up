import React from "react";

function Form({ children, ...rest }: { children: any }) {
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
}

export default Form;
