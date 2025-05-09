"use client";
import React from "react";
import { NoteProvider } from "./NoteContext";
import { FolderProvider } from "./FolderContext";
import RequireAuth from "@/lib/requireAuth";
import { PersistLogin } from "@/lib/persistLogin";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PersistLogin>
      <RequireAuth>
        <NoteProvider>
          <FolderProvider>{children}</FolderProvider>
        </NoteProvider>
      </RequireAuth>
    </PersistLogin>
  );
}
