"use client";
import React from "react";
import NoteList from "@/ui/note/NoteList";
import Nav from "@/ui/note/Nav";
import { useState } from "react";
import cn from "@/utility/cn";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Provider from "@/context/Provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeFolderID, setActiveFolderID] = useState<string>("4");
  const [activeLayout, setActiveLayout] = useState<number>(3);

  return (
    <Provider>
      <div className="flex ">
        <Nav
          key={1}
          activeFolder={activeFolderID}
          setActiveFolder={setActiveFolderID}
          activeLayout={activeLayout}
          setActiveLayout={setActiveLayout}
        />
        <NoteList
          key={2}
          activeLayout={activeLayout}
          setActiveLayout={setActiveLayout}
          activeFolderID={activeFolderID}
        />
        <section
          className={cn(
            "w-full flex-col text-white p-8 lg:p-12 hidden md:w-2/3 lg:w-[55%] md:flex md:flex-grow ]",
            { flex: activeLayout !== 1 && activeLayout !== 2 }
          )}
        >
          <p className="lg:hidden" onClick={() => setActiveLayout(2)}>
            <ArrowLeftIcon className="size-6 text-white text-opacity-60 cursor-pointer" />
          </p>
          {children}
        </section>
      </div>
    </Provider>
  );
}
