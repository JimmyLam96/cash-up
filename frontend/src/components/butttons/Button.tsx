import React from "react";

function Button({ ...rest }) {
  return (
    <button type="button" className="bg-teal-200 p-2 rounded-md" {...rest}>
      {rest.children}
    </button>
  );
}

export default Button;
