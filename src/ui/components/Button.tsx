import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center p-2 w-full bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 dark:text-white text-sm"
    >
      {children}
    </button>
  );
}
