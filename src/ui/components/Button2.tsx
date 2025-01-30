import cn from "@/utility/cn";
import React from "react";

type ButtonProps2 = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button2: React.FC<ButtonProps2> = ({
  variant,
  children,
  onClick,
  className,
}) => {
  const baseStyle =
    " px-6 py-3 rounded-[100px] border-solid border-2 border-[#4D2114]";
  const variantStyle =
    variant === "secondary" &&
    "bg-notesOrange text-white shadow-[2px_2px_0px_0px_black] hover:shadow-[1px_1px_0px_0px_black] ";
  return (
    <button
      onClick={onClick}
      className={cn(`${variantStyle} ${baseStyle} `, className)}
    >
      {children}
    </button>
  );
};

export default Button2;
