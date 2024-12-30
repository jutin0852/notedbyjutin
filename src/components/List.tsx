import cn from "@/utility/cn";
import React from "react";

type List = {
  icon: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  onClick?: () => void;
  label: string;
} & React.LiHTMLAttributes<HTMLLIElement>;

export default function List({
  icon,
  icon2,
  icon3,
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
        "py-2 px-5 my-2 w-full list-none cursor-pointer flex justify-between",
        className
      )}
    >
      <span>
        {icon}
        <span className="text-sm text-white">{label}</span>
      </span>

      <span>
        {icon2}
        {icon3}
      </span>
    </li>
  );
}
