"use client";
import { v4 as uuidv4 } from "uuid";
import Folders from "@/ui/note/Folders";
import Button from "@/ui/components/Button";
import List from "@/ui/components/List";
import cn from "@/utility/cn";
import {
  // ArchiveBoxIcon,
  DocumentTextIcon,
  PlusIcon,
  // TrashIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useNoteContext } from "@/context/NoteContext";
import UseIsTablet from "@/utility/UseTablet";
import { useFolderContext } from "@/context/FolderContext";

interface NavProps {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
}


export default function Nav({
  activeFolder,
  setActiveFolder,
  activeLayout,
  setActiveLayout,
}: NavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { notes, setNotes } = useNoteContext();
  const { folders, setFolders } = useFolderContext();
  const isTablet = UseIsTablet();
  const createdAt = new Date().toISOString();

  const handleAddPage = () => {
    
    const newNote = {
      id: uuidv4(),
      title: "New note",
      body: "",
      folderId: ["allnotes",activeFolder],
      created_at: createdAt,
    };

    console.log(notes);
    setNotes((prevNote) => [newNote, ...prevNote]);
    router.push(`/note/${newNote.id}`);
  };

  return (
    <section
      className={cn(" hidden w-full md:w-1/3 lg:block lg:w-[21%]", {
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
              onClick={() => {
                router.push(`/note/${note.id}`);
                if (isTablet) {
                  setActiveLayout(0);
                }
              }}
              className={
                pathname === `/note/${note.id}`
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
        folders={folders}
        setFolders={setFolders}
      />
      {/* more */}
      <nav>
        <p className="text-white opacity-60 text-sm pl-5 mb-2">More</p>
        <ul>
          {moreFolders.map((folder, key) => {
            const Icon = folder.icon;
            return (
              <List
                onClick={() => {
                  setActiveLayout(2);
                  setActiveFolder(folder.id);
                }}
                className={
                  folder.id === activeFolder
                    ? "bg-white bg-opacity-5"
                    : " hover:bg-white hover:bg-opacity-5"
                }
                key={key}
              >
                <span>
                  <Icon className="size-6 text-white inline-block" />
                  <span className="text-sm ml-2 text-white">
                    {folder.title}
                  </span>
                </span>
              </List>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

export const moreFolders = [
  { title: "Favorite", id: "favorite", icon: StarIcon, href: "" },
  // { title: "Trash", id: "trash", icon: TrashIcon, href: "" },
  // { title: "archive", id: "archive", icon: ArchiveBoxIcon, href: "" },
];
