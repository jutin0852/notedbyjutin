"use client";
import Tiptap from "@/ui/components/tiptap";
import { useNoteContext } from "@/context/NoteContext";
import { Note } from "@/lib/definitions";
import React, { useState } from "react";
import { CalendarIcon, FolderIcon } from "@heroicons/react/24/solid";
import EllipsisDropDown from "../components/EllipsisDropDown";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { useFolderContext } from "@/context/FolderContext";

interface EditPageProps {
  params: string;
}
const dropdownItems = [
  {
    label: "Add to favorites",
    icon: StarIcon,
    action: () => alert("Edit clicked"),
  },
  {
    label: "Share",
    icon: ArchiveBoxIcon,
    action: () => alert("Share clicked"),
  },
];

export default function EditPage({ params }: EditPageProps) {
  const { notes, setNotes } = useNoteContext();
  const note = notes.find((note: Note) => note.id.toString() === params) ?? {
    id: "",
    title: "Not Found",
    created_at: "",
    body: "",
    folderId: "",
  };
  const { folders } = useFolderContext();
  const noteFolder = folders.find((folder) => folder.id === note.folderId) ?? {
    title: "all",
    id: "1",
  };


  const [editing, setEditing] = useState<boolean>(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string | undefined
  ) => {
    const newNote = notes?.map((note) => {
      if (note.id === id) {
        return { ...note, title: e.target.value };
      } else {
        return note;
      }
    });

    setNotes(newNote);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  return (
    <>
      <header className="flex justify-between my-5">
        {editing ? (
          <input
            type="text"
            value={note?.title}
            onChange={(e) => handleSave(e, note?.id)}
            className="bg-transparent font-bold text-[32px] tracking-wider text-white border-none outline-none"
            autoFocus
            onBlur={() => setEditing(false)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        ) : (
          <h2
            className="font-bold text-[32px] tracking-wider"
            onClick={handleEdit}
          >
            {note?.title}
          </h2>
        )}

        <EllipsisDropDown items={dropdownItems} />
      </header>

      {/* Details and options section */}
      <section className="text-sm">
        <div className="pb-3  flex justify-between text-sm">
          <div className=" flex">
            <CalendarIcon />
            <p className="text-opacity-10 ">Date</p>
          </div>
          <p className="text-opacity-10">
            {new Date(note.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* divider */}
        <div className="border-b border-white border-opacity-10"></div>

        <div className="py-3  flex justify-between text-sm">
          <div className=" flex">
            <FolderIcon />
            <p className="text-opacity-10 ">folder</p>
          </div>
          <p className="text-opacity-10">{noteFolder.title}</p>
        </div>

        <Tiptap note={note}  />
      </section>
    </>
  );
}
