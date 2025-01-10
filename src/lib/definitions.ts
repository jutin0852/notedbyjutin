
export interface Note {
  id: string;
  title: string;
  body: string;
  folderId: string[];
  created_at: string;
}


export interface Folder {
  title: string;
  id: string;
}
