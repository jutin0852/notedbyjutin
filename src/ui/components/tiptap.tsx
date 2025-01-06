"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Icon from "./Icon";
import { Note } from "@/lib/data";

const Tiptap = ({ note }: { note: Note | undefined }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: note?.body,
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
  return (
    <>
      <div className="flex gap-3 py-3 border-y border-white border-opacity-10 ">
        <p>paragraph</p>
        <p>
          <span>16</span>
          <Icon src="/icons/down.png" />
        </p>
        <p>
          <Icon
            src="/icons/bold.png"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "bg-white bg-opacity-5" : ""}
          />
          <Icon
            src="/icons/italics.png"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "bg-white bg-opacity-5" : ""}
          />
        </p>
        <p>
          <Icon src="/icons/image.png" className="mr-2" />
          <Icon src="/icons/link.png" />
        </p>
        <p>
          <Icon src="/icons/table.png" />
        </p>
      </div>
    </>
  );
}
