import { Folder, Note } from "./definitions";

export const initialFolders: Folder[] = [
  { isEditing: false, title: "personal", id: 1 },
  { isEditing: false, title: "friends", id: 2 },
];



export const InitialNotes: Note[] = [
  {
    id: 1,
    title: "whats my life",
    body: "my life is good",
    folderName: "personal",
  },
  { id: 2, title: "chinwe", body: "my life is good", folderName: "friends" },

  {
    id: 3,
    title: "is it good",
    body: "good is goood yess",
    folderName: "personal",
  },
  { id: 4, title: "olise", body: "good is goood yess", folderName: "friends" },
];
