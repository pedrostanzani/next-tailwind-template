import React from "react";

const Button = (props) => {
  return (
    <div className="inline-block cursor-pointer rounded-md bg-blue-500 p-2 px-3 text-sm font-medium text-white hover:bg-blue-400">
      {props.children}
    </div>
  );
};

export default Button;
