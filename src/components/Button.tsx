import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex justify-center p-2 w-full bg-white bg-opacity-5 text-white text-sm">
      {children}
    </button>
  );
}
