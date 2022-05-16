import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function TextInput({ error, ...rest }: any) {
  return (
    <div className="flex gap-3 flex-col w-full items-center">
      <input {...rest} />
      {error && (
        <div className="flex gap-3">
          <AiOutlineExclamationCircle className="fill-red-500" />
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      )}
    </div>
  );
}

export default TextInput;
