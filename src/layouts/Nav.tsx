"use client";
import Folders from "@/app/note/nav/molecules/Folders";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import List from "@/components/List";
import { notes } from "@/data/data";
import cn from "@/utility/cn";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

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

        <Button>
          <Icon src={"/add.png"} className="self-center " />
          <span className="ml-1">New Note</span>
        </Button>
      </header>
      {/* pages */}
      <nav className="my-6">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Recents</p>
        <ul>
          {notes.slice(0, 2).map((note) => (
            <List
              key={note.id}
              label={note.title}
              icon={<Icon src={"/file_small.png"} />}
              onClick={() => router.push(note.id)}
              className={
                pathname.includes(note.id)
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
