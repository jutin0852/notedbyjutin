import React from "react";
import { NoteProvider } from "./NoteContext";
import { FolderProvider } from "./FolderContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NoteProvider>
      <FolderProvider>{children}</FolderProvider>
    </NoteProvider>
  );
}
