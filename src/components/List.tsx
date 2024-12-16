import Image from "next/image";
import React from "react";

export default function List({
  children,
  folder,
  custom,
}: {
  children: React.ReactNode;
  folder?: boolean;
  custom?: string;
}) {
  return (
    <li className="py-2 px-5 my-2 w-full opacity-60 hover:opacity-100 hover:bg-orange-400 list-none ">
      {folder ? (
        <Image
          className="inline mr-2"
          src={"/file3.png"}
          alt="file_icon"
          width={20}
          height={20}
        />
      ) : custom ? (
        <Image
          className="inline mr-2 "
          src={custom}
          alt={custom}
          width={20}
          height={20}
        />
      ) : (
        <Image
          className="inline mr-2"
          src={"/file_small.png"}
          alt="file_icon"
          width={20}
          height={20}
        />
      )}

      <span className="text-sm text-white">{children}</span>
    </li>
  );
}
