"use client";
import { v4 as uuidv4 } from "uuid";
import Folders from "@/ui/note/Folders";
import Button from "@/ui/components/Button";
import List from "@/ui/components/List";
import cn from "@/utility/cn";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";
import { useNoteContext } from "@/context/NoteContext";
import { useFolderContext } from "@/context/FolderContext";
import ThemeSwitch from "../components/ThemeSwitch";

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
  const { notes, setNotes } = useNoteContext();
  const { folders, setFolders } = useFolderContext();
  const createdAt = new Date().toISOString();

  const handleAddPage = () => {
    const newNote = {
      id: uuidv4(),
      title: "New note",
      body: "",
      folderId: ["allnotes", activeFolder],
      created_at: createdAt,
    };

    console.log(notes);
    setNotes((prevNote) => [newNote, ...prevNote]);
    router.push(`/note/${newNote.id}`);
  };

  return (
    <section
      className={cn(" hidden w-full md:w-1/3 lg:block lg:w-[21%]  ", {
        block: activeLayout == 1,
      })}
    >
      <header className="p-5">
        <section className="flex justify-between mb-6">
          <div className="dark:text-white">
            <i className="text-lg">NotedByJutin</i>
            <PencilIcon className="size-4 inline relative bottom-3 left-1 text-black dark:text-white " />
          </div>
          <ThemeSwitch />
        </section>

        <Button onClick={() => handleAddPage()}>
          <PlusIcon className="size-5 dark:text-white " />
          <span className="ml-1">New Note</span>
        </Button>
      </header>

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
        <p className="dark:text-white opacity-60 text-sm pl-5 mb-2">More</p>
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
                    ? "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5"
                    : "hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 "
                }
                key={key}
              >
                <span>
                  <Icon className="size-6 dark:text-white inline-block" />
                  <span className="text-sm ml-2 dark:text-white">
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
