import { Folder, Note } from "./definitions";

export const initialFolders: Folder[] = [
 
  {
    title: "All notes",
    id: "allnotes",
  },
];

export const InitialNotes: Note[] = [
  {
    id: "1",
    title: "note",
    body: "note",
    folderId: [ "allnotes"],
    created_at: "2025-01-07",
  }
  
];

