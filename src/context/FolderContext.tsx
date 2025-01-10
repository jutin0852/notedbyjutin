"use client";
import { initialFolders } from "@/lib/data";
import { Folder } from "@/lib/definitions";
import { createContext, useContext, useState } from "react";

interface FolderContextType {
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
}

export const folderContext = createContext<FolderContextType>({
  folders: [],
  setFolders: () => {},
});

export function FolderProvider({ children }: { children: React.ReactNode }) {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);

  return (
    <folderContext.Provider value={{ folders, setFolders }}>
      {children}
    </folderContext.Provider>
  );
}

export function useFolderContext() {
  const context = useContext(folderContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }

  return context;
}
