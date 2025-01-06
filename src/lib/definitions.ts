

export interface Note {
  id: string;
  title: string;
  body: string;
  folderId: string;
}
export interface Folder {
  isEditing: boolean;
  title: string;
  id: string;
}
