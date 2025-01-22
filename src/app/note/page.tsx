"use client";

import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Note() {
  return (
    <div >
      <div className=" flex justify-center align-middle flex-col text-center  ">
        <p className="justify-center flex">
          <DocumentTextIcon className="size-24 block" />
        </p>
        <h2 className="text-lg">Select to note to view</h2>
        <p className="text-white text-opacity-60 text-xs">
          Choose a note from the list on the left to view its contents, or
          create a new note to add to your collection
        </p>
      </div>
    </div>
  );
}
