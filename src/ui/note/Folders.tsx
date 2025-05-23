import List from "@/ui/components/List";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import {
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Folder, Note } from "@/lib/definitions";

// let nextId = 3;

export default function Folders({
  folders,
  setFolders,
  activeFolder,
  setActiveFolder,
  setActiveLayout,
  notes,
}: {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  notes: Note[] | undefined;
}) {
  const [tempTitle, setTempTitle] = useState<string>("");
  const [editingFolder, setEditingFolder] = useState<string | null>(null);

  const handleFolderClick = (folderId: string) => {
    setActiveLayout(2);
    setActiveFolder(folderId);
  };

  const handleAddFolder = () => {
    setFolders([{ title: "New folder", id: uuidv4() }, ...folders]);
  };

  const handleSaveFolder = (id: string, title: string) => {
    const existingFolder = folders.filter(
      (folder) => folder.title === title
    ).length;

    if (existingFolder > 1) return;

    const newFolder = folders.map((folder) => {
      if (folder.id === id) {
        return { ...folder, title: tempTitle };
      } else {
        return folder;
      }
    });
    setFolders(newFolder);
    setTempTitle("");
    setEditingFolder(null);
    // setActiveFolder(id);
  };

  const handleDeleteFolder = (id: string) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
  };

  const handleEditActive = (id: string, title: string) => {
    setEditingFolder(id);
    setTempTitle(title);
  };

  // const handleEditFolder = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   id: string
  // ) => {
  //   const value = e.target.value;

  //   // setTempTitle((prev) => ({ ...prev, [id]: value }));

  //   const newFolder = folders.map((folder) => {
  //     if (folder.id === id) {
  //       return {
  //         ...folder,
  //         title: value,
  //       };
  //     } else {
  //       return folder;
  //     }
  //   });
  //   setTimeout(() => {
  //     setFolders(newFolder);
  //   }, 500);
  // };

  return (
    <nav className="my-6 ">
      <header className="flex justify-between">
        <p className="dark:text-white dark:text-opacity-60 text-sm pl-5 mb-2">
          Folders
        </p>
        <FolderPlusIcon
          className="h-5 mr-5 dark:text-white dark:text-opacity-60 cursor-pointer "
          onClick={handleAddFolder}
        />
      </header>
      <ul>
        {folders.map((folder, key) => {
          if (editingFolder == folder.id) {
            // folder editing mode
            return (
              <div
                key={key}
                className="w-full px-5 py-2 flex justify-between my-2 bg-white  dark:bg-black dark:bg-opacity-5 bg-opacity-5"
              >
                <span>
                  <FolderIcon className="dark:text-white  inline-block size-6" />
                  <input
                    type="text"
                    autoFocus
                    className="bg-transparent dark:text-white ml-2.5 h-5 self-center dark:placeholder:text-white placeholder:text-sm  "
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                  />
                </span>

                <span>
                  <CheckIcon
                    className="dark:text-white size-5 inline-block cursor-pointer"
                    onClick={() => handleSaveFolder(folder.id, folder.title)}
                  />
                </span>
              </div>
            );
          } else {
            // folder in list mode
            return (
              <List
                onClick={() => handleFolderClick(folder.id)}
                key={key}
                className={
                  folder.id === activeFolder
                    ? "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5"
                    : "hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
                }
              >
                <span>
                  {folder.id === activeFolder ? (
                    <FolderOpenIcon className="dark:text-white size-6 inline-block" />
                  ) : (
                    <FolderIcon className="dark:text-white size-6 dark:text-opacity-60 inline-block" />
                  )}

                  <span className="text-sm ml-2 dark:text-white">
                    {folder.title}
                  </span>
                </span>
                <span>
                  <PencilSquareIcon
                    className="dark:text-white inline-block size-6"
                    onClick={() => handleEditActive(folder.id, folder.title)}
                  />
                  {/* checking if a folder is empty before deleting */}
                  {notes?.filter((note: Note) =>
                    note.folderId?.includes(folder.id)
                  ).length === 0 && (
                    <TrashIcon
                      className="size-6 dark:text-white inline-block ml-1 "
                      onClick={() => handleDeleteFolder(folder.id)}
                    />
                  )}
                </span>
              </List>
            );
          }
        })}
      </ul>
    </nav>
  );
}
