import cn from "@/utility/cn";
import React from "react";

type List = {
  onClick?: () => void;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

export default function List({ onClick, children, className, ...props }: List) {
  return (
    <li
      {...props}
      onClick={onClick}
      className={cn(
        "py-2 px-5 my-2 w-full list-none cursor-pointer flex justify-between",
        className
      )}
    >
      {children}
    </li>
  );
}
