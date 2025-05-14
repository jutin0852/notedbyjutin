
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

export interface NoteBackend {
  body: string;
  id: number;
  reactions: { likes: number; dislikes: number };
  tags: string[];
  title: string;
  userId: string;
  views: number;
}
