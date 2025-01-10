import { Note } from "@/lib/definitions";
import cn from "@/utility/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { stripHtml } from "@/utility/striphtml";

interface CardProps {
  note: Note;
  onClick?: () => void;
}

export default function Card({ note, onClick }: CardProps) {
  const pathname = usePathname();
  const noteId = note.id.toString();
  const className = pathname.includes(noteId) && "bg-opacity-10";
  return (
    <Link href={`/note/${noteId}`} onClick={onClick}>
      <div
        className={cn(
          "bg-white mt-4 text-white bg-opacity-5 p-4 w-full rounded hover:bg-opacity-10 ",
          className
        )}
      >
        <p className="text-sm">{note.title}</p>
        <span className="text-xs mr-2">
          {new Date(note.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </span>
        <span className=" truncate whitespace-normal text-xs break-words line-clamp-1">
          {stripHtml(note.body)}
        </span>
      </div>
    </Link>
  );
}
