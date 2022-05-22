import React, { FC } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

type props = {
  error: string | undefined;
  className?: string;
  [key: string]: any;
};

const TextInput: FC<props> = ({ error, className, ...rest }: props) => {
  return (
    <div className="flex gap-3 flex-col w-full items-center">
      <input
        className={`
        p-2 
        rounded-md 
        transition ease-in-out 
        border-2 
        border-transparent
        focus:text-gray-700 focus:border-secondary-orange focus:outline-none  
        ${className}
        `}
        {...rest}
      />
      {error && (
        <div className="flex gap-3">
          <AiOutlineExclamationCircle className="fill-red-500" />
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
