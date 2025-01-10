import Card from "@/ui/components/Card";
import cn from "@/utility/cn";
import React from "react";
import { useNoteContext } from "@/context/NoteContext";
import UseIsTablet from "@/utility/UseTablet";
import { useFolderContext } from "@/context/FolderContext";

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
  const folder = folders.find((folder) => folder.id === activeFolderID);

  // filter notes for folder
  const filteredNote = notes?.filter((note) => note.folderId === folder?.id);
  const isTablet = UseIsTablet();
  return (
    <section
      className={cn(
        "py-5 text-white  px-5 bg-[#1C1C1C] hidden w-full md:w-1/3 lg:w-[22%] lg:block",
        { block: activeLayout === 2 }
      )}
    >
      <h3 onClick={() => setActiveLayout(1)}>Folder</h3>
      <h2 className="text-white font-bold ">{folder?.title}</h2>
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
