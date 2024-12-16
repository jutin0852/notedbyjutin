import Button from "@/components/Button";
import List from "@/components/List";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <section className=" w-[300px]">
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
          <Image
            src={"/add.png"}
            className="self-center "
            alt="add"
            width={20}
            height={20}
          />
          <span className="ml-1">New Note</span>
        </Button>
      </header>
      {/* pages */}
      <nav className="my-6">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Recents</p>
        <ul>
          <List>Reflection on the Month of June</List>
          <List>Reflection on the Month of June</List>
          <List>Reflection on the Month of June</List>
        </ul>
      </nav>
      {/* folders */}
      <nav className="my-6">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Folders</p>
        <ul>
          <List folder>Reflection on the Month of June</List>
          <List folder>Reflection on the Month of June</List>
          <List folder>Reflection on the Month of June</List>
          <List folder>Reflection on the Month of June</List>
          <List folder>Reflection on the Month of June</List>
        </ul>
      </nav>
      {/* more */}
      <nav>
        <p className="text-white opacity-60 text-sm pl-5 mb-2">More</p>
        <ul>
          <List custom="/favorite.png">Favorite</List>
          <List custom="/trash.png">Trash</List>
          <List custom="/archieve.png">Archived Notes</List>
        </ul>
      </nav>
    </section>
  );
}
