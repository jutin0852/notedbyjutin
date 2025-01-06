"use client";
import React from "react";
import NoteList from "@/ui/note/NoteList";
import Nav from "@/ui/note/Nav";
import { useState } from "react";
import cn from "@/utility/cn";
import { NoteProvider } from "@/context/NoteContext";
import { Folder } from "@/lib/definitions";
import { initialFolders } from "@/lib/data";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeFolderID, setActiveFolderID] = useState<string>("4");
  const [activeLayout, setActiveLayout] = useState<number>(3);
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const activeFolder = folders.find((folder) => folder.id === activeFolderID);

  return (
    <NoteProvider>
      <div className="flex">
        <Nav
          key={1}
          activeFolder={activeFolderID}
          setActiveFolder={setActiveFolderID}
          activeLayout={activeLayout}
          setActiveLayout={setActiveLayout}
          folders={folders}
          setFolders={setFolders}
        />
        <NoteList
          key={2}
          folder={activeFolder}
          activeLayout={activeLayout}
          setActiveLayout={setActiveLayout}
        />
        <section
          className={cn(
            "basis-full flex-grow flex-col  text-white p-8 lg:p-12 hidden md:basis-[55%] md:flex ",
            { flex: activeLayout !== 1 && activeLayout !== 2 }
          )}
        >
          <p className="lg:hidden" onClick={() => setActiveLayout(2)}>
            back
          </p>
          {children}
        </section>
      </div>
    </NoteProvider>
  );
}
