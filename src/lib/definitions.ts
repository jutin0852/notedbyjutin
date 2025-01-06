export interface Note {
  id: number;
  title: string;
  body: string;
  folderName: string;
}
export interface Folder {
  isEditing: boolean;
  title: string;
  id: number;
}
