"use client";
import Tiptap from "@/ui/components/tiptap";
import { useNoteContext } from "@/context/NoteContext";
import { Note } from "@/lib/definitions";
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

interface EditPageProps {
  params: string;
}
// type TextStyle = "fontWeight" | "fontStyle" | "textDecoration";

export default function EditPage({ params }: EditPageProps) {
  const { notes } = useNoteContext();
  // const [font, setFont] = useState<number>(16);
  // const [isClient, setIsClient] = useState<boolean>(false);
  const note = notes?.find((note: Note) => note.id.toString() === params);
  console.log(notes)
  // const [bold, setBold] = useState(false);

  // const onBoldToggle = () => setBold((prev) => !prev);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) return;
  // // increase and decrease font
  // const increaseFont = () => setFont((prev) => prev + 2);
  // const decreaseFont = () => setFont((prev) => Math.max(10, prev - 2));

  // const applyToSelection = (style: TextStyle, value: string) => {
  //   const selection = window.getSelection();

  //   if (selection && selection.rangeCount > 0) {
  //     const range = selection.getRangeAt(0);
  //     console.log(range);
  //     const span = document.createElement("span");

  //     // add style to the span
  //     span.style[style] = value;
  //     span.append(range.extractContents());
  //     range.insertNode(span);
  //   }
  //   // clear selection
  //   selection?.removeAllRanges();
  // };

  return (
    <>
      {/* <p onClick={() => setActiveLayout(2)}>back</p> */}
      <header className="flex justify-between my-5">
        <h2 className="font-bold text-[32px] tracking-wider">{note?.title}</h2>
        <EllipsisHorizontalCircleIcon  className="size-6 text-opacity-60 text-white "/>
      </header>

      {/* Details and options section */}
      <section className="text-sm">
        <div className="pb-3  flex justify-between text-sm">
          <div className=" flex">
            <CalendarIcon />
            <p className="text-opacity-10 ">Date</p>
          </div>
          <p className="text-opacity-10">21/06/2024</p>
        </div>

        {/* divider */}
        <div className="border-b border-white border-opacity-10"></div>

        <div className="py-3  flex justify-between text-sm">
          <div className=" flex">
            <FolderIcon />
            <p className="text-opacity-10 ">folder</p>
          </div>
          <p className="text-opacity-10">Personal</p>
        </div>
        <Tiptap note={note} />
      </section>
    </>
  );
}
