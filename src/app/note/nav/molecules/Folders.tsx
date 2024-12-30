import Icon from "@/components/Icon";
import List from "@/components/List";
import { Folder, initialFolders, Note } from "@/data/data";
import React, { useState } from "react";
import Edit from "@/style/icons/Edit";
import Tick from "@/style/icons/tick";
import Trash from "@/style/icons/trash";
import FolderIcon from "@/style/icons/folderIcon";

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
  notes: Note[];
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
        <Icon
          src={"/icons/add_folder.png"}
          className="h-5 mr-5"
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
                  <FolderIcon />
                  <input
                    type="text"
                    autoFocus
                    className="bg-transparent text-white h-5 self-center placeholder:text-white placeholder:text-sm  "
                    value={folder.title}
                    onChange={(e) => handleEditFolder(e, folder.id)}
                  />
                </span>

                <span>
                  <Tick
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
                label={folder.title}
                icon={<FolderIcon />}
                icon2={<Edit onClick={() => handleEditActive(folder.id)} />}
                icon3={
                  notes.filter((note: Note) => note.folder === folder.title)
                    .length === 0 && (
                    <Trash onClick={() => handleDeleteFolder(folder.id)} />
                  )
                }
                className={
                  folder.title === activeFolder
                    ? "bg-white bg-opacity-5"
                    : " hover:bg-white hover:bg-opacity-5"
                }
              />
            );
          }
        })}
      </ul>
    </nav>
  );
}
