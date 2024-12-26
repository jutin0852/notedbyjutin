import React from "react";

type List = {
  icon: React.ReactNode;
  onClick?: () => void;
  label: string;
} & React.LiHTMLAttributes<HTMLLIElement>;

export default function List({ icon, label, onClick, ...props }: List) {
  return (
    <li
      {...props}
      onClick={onClick}
      className="py-2 px-5 my-2 w-full opacity-60 hover:opacity-100 hover:bg-orange-400 list-none "
    >
      {icon}
      <span className="text-sm text-white">{label}</span>
    </li>
  );
}
