export interface Note {
  id: string;
  title: string;
  body: string;
  folder: string;
}
export const folders = ["personal", "friends"];

export const notes: Note[] = [
  {
    id: "1",
    title: "whats my life",
    body: "my life is good",
    folder: "personal",
  },
  {
    id: "3",
    title: "is it good",
    body: "good is goood yess",
    folder: "personal",
  },
  { id: "2", title: "chinwe", body: "my life is good", folder: "friends" },
  { id: "4", title: "olise", body: "good is goood yess", folder: "friends" },
];
