import { Folder, Note } from "./definitions";

export const initialFolders: Folder[] = [
  { title: "personal", id: "4" },
  { title: "friends", id: "5" },
];

export const InitialNotes: Note[] = [
  {
    id: "1",
    title: "whats my life",
    body: "my life is good",
    folderId: "4",
  },
  {
    id: "2",
    title: "chinwe",
    body: "my life is good",
    folderId: "5",
  },

  {
    id: "9",
    title: "is it good",
    body: "good is goood yess",
    folderId: "4",
  },
  {
    id: "6",
    title: "olise",
    body: "good is goood yess",
    folderId: "5",
  },
];
