"use client";
import { InitialNotes } from "@/lib/data";
import { Note } from "@/lib/definitions";
import { createContext, useContext, useState } from "react";

interface NoteContextType {
  notes: Note[] ;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const noteContext = createContext<NoteContextType | undefined>(
  undefined
);

export function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[] >(InitialNotes);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {children}
    </noteContext.Provider>
  );
}

export function useNoteContext() {
  const context = useContext(noteContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }

  return context;
}
