"use client";
import { Note } from "@/lib/definitions";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

import React, { useEffect, useRef, useState } from "react";

type EllipsisProp = {
  items: {
    label: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
    action: (noteId: string) => void;
  }[];
  note: Note;
};

export default function EllipsisDropDown({ items, note }: EllipsisProp) {
  const [isOpen, setIsOpen] = useState<boolean>();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  return (
    <div className="relative" ref={dropDownRef}>
      <EllipsisHorizontalCircleIcon
        onClick={handleClick}
        className="size-6 text-opacity-60 text-white "
      />
      {isOpen && (
        <div className="absolute -right-2 top-8 bg-[#333333]  w-44 rounded ">
          {items.map((item, key) => {
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  item.action(note.id);
                  setIsOpen((prev) => !prev);
                }}
                className="block py-3 px-3 w-full text-left hover:bg-white hover:bg-opacity-10 "
              >
                <Icon className="size-5 inline mr-2 font-bold" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
                           
            }}
            className="block py-3 px-3 border-t border-solid border-white border-opacity-5 w-full text-left hover:bg-white hover:bg-opacity-10"
          >
            <TrashIcon className="size-5 inline mr-2 " />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
