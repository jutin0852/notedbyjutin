"use client";
import Folders from "@/app/note/nav/molecules/Folders";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import List from "@/components/List";
import { Note } from "@/data/data";
import Plus from "@/style/icons/plus";
import cn from "@/utility/cn";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavProps {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
  activeLayout: number;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

let noteId = 5;

export default function Nav({
  activeFolder,
  setActiveFolder,
  activeLayout,
  setActiveLayout,
  notes,
  setNotes,
}: NavProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleAddPage = () => {
    const newNote = [
      {
        id: noteId++,
        title: "New note",
        body: "",
        folder: "",
      },
      ...notes,
    ];
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
          {/* <Image
            className="inline"
            src={"/search.png"}
            alt="search"
            width={22}
            height={10}
          /> */}
        </section>

        <Button onClick={() => handleAddPage()}>
          <Plus />
          <span className="ml-1">New Note</span>
        </Button>
      </header>
      {/* pages */}
      <nav className="my-6">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Recents</p>
        <ul>
          {notes.slice(0, 5).map((note) => (
            <List
              key={note.id}
              label={note.title}
              icon={<Icon src={"/file_small.png"} />}
              onClick={() => router.push(note.id.toString())}
              className={
                pathname.includes(note.id.toString())
                  ? "bg-orange-500"
                  : " hover:bg-white hover:bg-opacity-5"
              }
            />
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
          <List icon={<Icon src={"/favorite.png"} />} label="Favorite" />
          <List icon={<Icon src={"/trash.png"} />} label="Trash" />
          <List icon={<Icon src={"/archieve.png"} />} label="archieve" />
        </ul>
      </nav>
    </section>
  );
}
