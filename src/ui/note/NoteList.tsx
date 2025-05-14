import Card from "@/ui/components/Card";
import cn from "@/utility/cn";
import React from "react";
import { useNoteContext } from "@/context/NoteContext";
import UseIsTablet from "@/utility/UseTablet";
import { useFolderContext } from "@/context/FolderContext";
import { moreFolders } from "./Nav";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface NoteList {
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  activeFolderID: string;
}

export default function NoteList({
  activeLayout,
  setActiveLayout,
  activeFolderID,
}: // notes,
NoteList) {
  const { notes } = useNoteContext();
  const { folders } = useFolderContext();
  const folder = folders.find((folder) => folder.id === activeFolderID) ??
    moreFolders.find((folder) => folder.id === activeFolderID) ?? {
      title: "All notes",
      id: "allnotes",
    };

  // filter notes for folder
  const filteredNote = notes?.filter((note) =>
    note.folderId?.includes(folder.id)
  );
  const isTablet = UseIsTablet();
  return (
    <section
      className={cn(
        "py-5 overflow-y-auto  bg-[#EFEFEF] dark:text-white  px-5 dark:bg-[#1C1C1C] hidden w-full md:w-1/3 lg:w-[22%] lg:block h-screen",
        { block: activeLayout === 2 }
      )}
    >
      <h3 onClick={() => setActiveLayout(1)}>
        <ArrowLeftIcon className="size-5 mr-1 dark:text-white dark:text-opacity-60 cursor-pointer  lg:hidden inline" />
        Folder
      </h3>
      <h2 className="dark:text-white font-bold ">{folder?.title}</h2>
      <ul>
        {filteredNote?.map((note, key) => (
          <Card
            key={key}
            note={note}
            onClick={() => isTablet && setActiveLayout(0)}
          />
        ))}
      </ul>
    </section>
  );
}
