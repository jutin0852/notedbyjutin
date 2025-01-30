"use client";

import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Note() {
  return (
    <div className=" flex-grow flex justify-center align-middle flex-col text-center text-black dark:text-white  ">
      <p className="justify-center flex">
        <DocumentTextIcon className="size-24 block text-black  dark:text-white" />
      </p>
      <h2 className="text-lg text-black dark:text-white">
        Select to note to view
      </h2>
      <p className=" dark:text-opacity-60 text-xs text-black text-opacity-60 dark:text-white">
        Choose a note from the list on the left to view its contents, or create
        a new note to add to your collection
      </p>
    </div>
  );
}
