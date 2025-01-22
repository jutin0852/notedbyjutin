"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Note } from "@/lib/definitions";
import {
  BoldIcon,
  ListBulletIcon,
  PhotoIcon,
  QueueListIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";
import cn from "@/utility/cn";
import { ItalicIcon } from "@heroicons/react/24/solid";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { useNoteContext } from "@/context/NoteContext";

const Tiptap = ({ note }: { note: Note | undefined }) => {
  const { setNotes } = useNoteContext();

  const editor = useEditor({
    extensions: [
      Underline,
      Image.configure({ inline: true }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      StarterKit,
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "py-3 mx-auto h-[50vh] focus:outline-none list-inside list-disc break-words text-black dark:text-white   ",
      },
    },
    content: note?.body,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());

      setNotes((prevNotes) =>
        prevNotes.map((prevNote) => {
          if (prevNote.id === note?.id) {
            return { ...prevNote, body: editor.getHTML() };
          } else {
            return prevNote;
          }
        })
      );
    },
  });

  return (
    <>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;

export function Menu({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="flex gap-6 py-3 border-y dark:border-white dark:border-opacity-10 ">
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={cn(
          editor.isActive("paragraph")
            ? "bg-black bg-opacity-10 text-black dark:bg-white dark:bg-opacity-10 dark:text-white"
            : "",
          "p-1 rounded"
        )}
      >
        Paragraph
      </button>

      <p>
        <BoldIcon
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={cn(
            editor.isActive("bold")
              ? "dark:bg-white dark:bg-opacity-10  dark:text-white bg-black bg-opacity-10 text-black "
              : "text-black dark:text-white ",
            "size-6 inline-block"
          )}
        />
        <ItalicIcon
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={cn(
            editor.isActive("italic")
              ? "dark:bg-white dark:bg-opacity-10 dark:text-white bg-black bg-opacity-10 text-black "
              : "text-black dark:text-white ",
            "size-6 inline-block"
          )}
        />
        <UnderlineIcon
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={cn(
            editor.isActive("underline")
              ? "dark:bg-white dark:bg-opacity-10 dark:text-white bg-black bg-opacity-10 text-black "
              : "text-black dark:text-white ",
            "size-6 inline-block"
          )}
        />
      </p>
      <p>
        <ListBulletIcon
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={cn(
            editor.isActive("bulletList")
              ? "dark:bg-white dark:bg-opacity-10 dark:text-white bg-black bg-opacity-10 text-black "
              : "text-black dark:text-white ",
            "inline-block size-6 "
          )}
        />
        <QueueListIcon
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={cn(
            editor.isActive("taskList")
              ? "dark:bg-white dark:bg-opacity-10 dark:text-white bg-black bg-opacity-10 text-black "
              : "text-black dark:text-white ",
            "size-6 ml-2 inline-block "
          )}
        />
      </p>
      <p>
        <PhotoIcon onClick={addImage} className="mr-2 size-6 inline-block" />
      </p>
    </div>
  );
}
