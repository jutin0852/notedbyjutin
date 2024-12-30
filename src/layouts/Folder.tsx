import Card from "@/components/Card";
import { Note } from "@/data/data";
import cn from "@/utility/cn";
import React, { useEffect, useState } from "react";

interface NoteList {
  noteFolder: string;
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  notes: Note[];
}

export default function NoteList({
  noteFolder,
  activeLayout,
  setActiveLayout,
  notes,
}: NoteList) {
  // filter notes for folder
  const filteredNote = notes.filter((note) => note.folder === noteFolder);
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
      <h2 className="text-white font-bold ">{noteFolder}</h2>
      <ul>
        {filteredNote.map((note, key) => (
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
