import cn from "@/utility/cn";
import React from "react";

type List = {
  icon: React.ReactNode;
  onClick?: () => void;
  label: string;
} & React.LiHTMLAttributes<HTMLLIElement>;

export default function List({
  icon,
  label,
  onClick,
  className,
  ...props
}: List) {
  return (
    <li
      {...props}
      onClick={onClick}
      className={cn(
        "py-2 px-5 my-2 w-full list-none cursor-pointer",
        className
      )}
    >
      {icon}
      <span className="text-sm text-white">{label}</span>
    </li>
  );
}
