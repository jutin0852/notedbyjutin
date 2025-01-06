import Card from "@/ui/components/Card";
import cn from "@/utility/cn";
import React, { useEffect, useState } from "react";
import { useNoteContext } from "@/context/NoteContext";
import { Folder } from "@/lib/definitions";

interface NoteList {
  folder: Folder | undefined;
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  // notes: Note[];
}

export default function NoteList({
  folder,
  activeLayout,
  setActiveLayout,
}: // notes,
NoteList) {
  const { notes } = useNoteContext();

  // filter notes for folder
  const filteredNote = notes?.filter((note) => note.folderId === folder?.id);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    const screenSizeUpdate = () => {
      setisTablet(window.innerWidth < 768);
    };

    screenSizeUpdate();
    window.addEventListener("resize", screenSizeUpdate);

    return () => {
      window.removeEventListener("resize", screenSizeUpdate);
    };
  }, []);

  return (
    <section
      className={cn(
        "py-5 text-white  px-5 bg-[#1C1C1C] hidden basis-full md:basis-1/3 lg:basis-3/12 lg:block",
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