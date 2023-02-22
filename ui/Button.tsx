import React, { FC } from "react";

type ButtonProps = {
  children?: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      className=" h-10 px-4 text-sm font-medium text-white bg-red-600 rounded"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
