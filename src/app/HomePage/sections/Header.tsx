// import Button2 from "@/ui/components/Button2";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 border-b-2 border-solid border-black bg-white lg:py-6 lg:px-14 ">
      <div className=" flex">
        <i className="text-xl text-black self-center underline decoration-notesOrange">
          NotedByJutin
        </i>
        <PencilIcon className="size-4 inline relative self-center  left-1 text-notesOrange " />
      </div>

      <nav className="hidden text-xl text-black lg:flex list-none gap-6 w-1/3 justify-between  ">
        <li className="self-center">Feature</li>
        <li className="self-center">Pricing</li>
        <li className="self-center">Discover</li>
        <li className="self-center">About</li>
      </nav>

      {/* <div className="flex gap-4 text-black">
        <Button2 variant="secondary" className="">Sign up</Button2>
        <Button2 variant="primary">Login</Button2>
      </div> */}
    </header>
  );
}
