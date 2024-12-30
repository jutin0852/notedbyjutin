export interface Note {
  id: number;
  title: string;
  body: string;
  folder: string;
}
export interface Folder {
  isEditing: boolean;
  title: string;
  id: number;
}

export const initialFolders: Folder[] = [
  { isEditing: false, title: "personal", id: 1 },
  { isEditing: false, title: "friends", id: 2 },
];

export const InitialNotes: Note[] = [
  {
    id: 1,
    title: "whats my life",
    body: "my life is good",
    folder: "personal",
  },
  { id: 2, title: "chinwe", body: "my life is good", folder: "friends" },

  {
    id: 3,
    title: "is it good",
    body: "good is goood yess",
    folder: "personal",
  },
  { id: 4, title: "olise", body: "good is goood yess", folder: "friends" },
];
