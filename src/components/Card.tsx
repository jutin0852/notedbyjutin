import { Note } from "@/data/data";
import cn from "@/utility/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface CardProps {
  note: Note;
  onClick?: () => void;
}

export default function Card({ note, onClick }: CardProps) {
  const pathname = usePathname()
  const className = pathname.includes(note.id) && 'bg-opacity-10'
  return (
    <Link href={`/note/${note.id}`} onClick={onClick}>
      <div className={cn("bg-white mt-4 text-white bg-opacity-5 p-4 w-full rounded hover:bg-opacity-10",className)}>
        <p className="text-sm">{note.title}</p>
        <span className="text-xs mr-2">11/2/2023</span>
        <span className=" truncate whitespace-normal text-xs">{note.body}</span>
      </div>
    </Link>
  );
}
