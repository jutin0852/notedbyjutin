import List from "@/ui/components/List";
import { initialFolders } from "@/lib/data";
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

let nextId = 3;

export default function Folders({
  activeFolder,
  setActiveFolder,
  setActiveLayout,
  notes,
}: {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
  setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  notes: Note[] | undefined;
}) {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);

  const handleFolderClick = (folder: string) => {
    setActiveLayout(2);
    setActiveFolder(folder);
  };

  const handleAddFolder = () => {
    const existingFolder = folders.find(
      (folder) => folder.title === "New folder"
    );
    if (existingFolder) return;
    setFolders([
      { isEditing: true, title: "New folder", id: nextId++ },
      ...folders,
    ]);
  };

  const handleSaveFolder = (id: number, title: string) => {
    const existingFolder = folders.filter(
      (folder) => folder.title === title
    ).length;

    if (existingFolder > 1) return;

    const newFolder = folders.map((folder) => {
      if (folder.id === id) {
        return { ...folder, isEditing: false };
      } else {
        return folder;
      }
    });
    setFolders(newFolder);
    setActiveFolder(title);
  };

  const handleDeleteFolder = (id: number) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
  };

  const handleEditActive = (id: number) => {
    const newFolder = folders.map((folder) => {
      if (folder.id === id) {
        return { ...folder, isEditing: !folder.isEditing };
      } else {
        return folder;
      }
    });
    setFolders(newFolder);
  };

  const handleEditFolder = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newFolder = folders.map((folder) => {
      if (folder.id === id) {
        return {
          ...folder,
          title: e.target.value,
        };
      } else {
        return folder;
      }
    });
    setFolders(newFolder);
  };

  return (
    <nav className="my-6">
      <header className="flex justify-between">
        <p className="text-white opacity-60 text-sm pl-5 mb-2">Folders</p>
        <FolderPlusIcon
          className="h-5 mr-5 text-white text-opacity-60 "
          onClick={handleAddFolder}
        />
      </header>
      <ul>
        {folders.map((folder, key) => {
          if (folder.isEditing) {
            return (
              <div
                key={key}
                className="w-full px-5 py-2 flex justify-between my-2 bg-white bg-opacity-5"
              >
                <span>
                  <FolderIcon className="text-white  inline-block size-6" />
                  <input
                    type="text"
                    autoFocus
                    className="bg-transparent text-white ml-2.5 h-5 self-center placeholder:text-white placeholder:text-sm  "
                    value={folder.title}
                    onChange={(e) => handleEditFolder(e, folder.id)}
                  />
                </span>

                <span>
                  <CheckIcon
                    className="text-white size-5 inline-block"
                    onClick={() => handleSaveFolder(folder.id, folder.title)}
                  />
                </span>
              </div>
            );
          } else {
            return (
              <List
                onClick={() => handleFolderClick(folder.title)}
                key={key}
                className={
                  folder.title === activeFolder
                    ? "bg-white bg-opacity-5"
                    : " hover:bg-white hover:bg-opacity-5"
                }
              >
                <span>
                  {folder.title === activeFolder ? (
                    <FolderOpenIcon className="text-white size-6 inline-block" />
                  ) : (
                    <FolderIcon className="text-white size-6 text-opacity-60 inline-block" />
                  )}

                  <span className="text-sm ml-2 text-white">
                    {folder.title}
                  </span>
                </span>
                <span>
                  <PencilSquareIcon
                    className="text-white inline-block size-6"
                    onClick={() => handleEditActive(folder.id)}
                  />
                  {/* checking if a folder is empty before deleting */}
                  {notes?.filter(
                    (note: Note) => note.folderName === folder.title
                  ).length === 0 && (
                    <TrashIcon
                      className="size-6 text-white inline-block ml-1 "
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
