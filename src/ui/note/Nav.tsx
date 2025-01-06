"use client";
import Folders from "@/ui/note/Folders";
import Button from "@/ui/components/Button";
import List from "@/ui/components/List";
import cn from "@/utility/cn";
import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useNoteContext } from "@/context/NoteContext";

interface NavProps {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  // notes: Note[];
  // setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

let noteId = 5;

export default function Nav({
  activeFolder,
  setActiveFolder,
  activeLayout,
  setActiveLayout,
}: NavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { notes, setNotes } = useNoteContext();

  const handleAddPage = () => {
    const newNote = [
      {
        id: noteId++,
        title: "New note",
        body: "",
        folderName: "",
      },
      ...(notes ?? []),
    ];
    console.log(notes);
    setNotes(newNote);
  };

  return (
    <section
      className={cn(" hidden basis-full md:basis-1/3 lg:block lg:basis-[20%]", {
        block: activeLayout == 1,
      })}
    >
      <header className="p-5">
        <section className="flex justify-between mb-6">
          <div className="text-white">
            <i className="text-lg">NotedByJutin</i>
            <Image
              className="inline relative bottom-3 left-1 "
              src={"/pen.png"}
              alt="pen"
              width={13}
              height={13}
            />
          </div>
        </section>

        <Button onClick={() => handleAddPage()}>
          <PlusIcon className="size-5 text-white " />
          <span className="ml-1">New Note</span>
        </Button>
      </header>
      {/* pages */}
      <nav className="my-6">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Recents</p>
        <ul>
          {notes?.slice(0, 5).map((note) => (
            <List
              key={note.id}
              onClick={() => router.push(`/note/${note.id.toString()}`)}
              className={
                pathname.includes(note.id.toString())
                  ? "bg-orange-500"
                  : " hover:bg-white hover:bg-opacity-5"
              }
            >
              <span>
                <DocumentTextIcon className="size-6 text-white inline-block" />
                <span className="text-sm ml-2 text-white">{note.title}</span>
              </span>
            </List>
          ))}
        </ul>
      </nav>
      {/* folders */}
      <Folders
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        setActiveLayout={setActiveLayout}
        notes={notes}
      />
      {/* more */}
      <nav>
        <p className="text-white opacity-60 text-sm pl-5 mb-2">More</p>
        <ul>
          {moreFolders.map((folder, key) => {
            const Icon = folder.icon;
            return (
              <List key={key}>
                <span>
                  <Icon className="size-6 text-white inline-block" />
                  <span className="text-sm ml-2 text-white">{folder.name}</span>
                </span>
              </List>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

const moreFolders = [
  { name: "Favourite", icon: StarIcon, href: "" },
  { name: "Trash", icon: TrashIcon, href: "" },
  { name: "archieve", icon: ArchiveBoxIcon, href: "" },
];
