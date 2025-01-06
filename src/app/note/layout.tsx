"use client";
import React from "react";
import NoteList from "@/ui/note/NoteList";
import Nav from "@/ui/note/Nav";
import { useState } from "react";
import cn from "@/utility/cn";
import { NoteProvider } from "@/context/NoteContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [folder, setfolder] = useState<string>("personal");
  const [activeLayout, setActiveLayout] = useState<number>(3);
  return (
    <NoteProvider>
      <div className="flex">
        <Nav
          key={1}
          activeFolder={folder}
          setActiveFolder={setfolder}
          activeLayout={activeLayout}
          setActiveLayout={setActiveLayout}
    
        />
        <NoteList
          key={2}
          noteFolder={folder}
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
