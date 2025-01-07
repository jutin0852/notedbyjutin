"use client";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";

type EllipsisProp = {
  items: {
    label: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
    action: () => void;
  }[];
};

export default function EllipsisDropDown({ items }: EllipsisProp) {
  const [isOpen, setIsOpen] = useState<boolean>();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <EllipsisHorizontalCircleIcon
        onClick={handleClick}
        className="size-6 text-opacity-60 text-white "
      />
      {isOpen && (
        <div className="absolute -right-2 top-8 bg-[#333333] py-4 px-3 w-44 rounded ">
          {items.map((item, key) => {
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => item.action}
                className="block pb-3 w-full text-left "
              >
                <Icon className="size-5 inline mr-2 font-bold" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {}}
            className="block pt-3 border-t border-solid border-white border-opacity-5 w-full text-left"
          >
            <TrashIcon className="size-5 inline mr-2 " />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
