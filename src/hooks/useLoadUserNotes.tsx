import { useNoteContext } from "@/context/NoteContext";
import { useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";
import { Note, NoteBackend } from "@/lib/definitions";

export default function useLoadUserNotes() {
  const { auth } = useAuth();
  const { setNotes } = useNoteContext();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();
    const getUser = async () => {
      try {
        if (auth) {
          const user = await axiosPrivate.get("/auth/me", {
            signal: controller.signal,
          });

          if (user) {
            const notesData = await axiosPrivate.get(
              `/posts/user/${user.data.id}`
            );
            const notes = notesData.data.posts;
            const notesFormatted: Note[] = notes.map((note: NoteBackend) => ({
              id: note.id.toString(),
              title: note.title,
              body: note.body,
              folderId: ["allnotes"],
              created_at: "",
            }));

            setNotes(notesFormatted);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();

    return () => {
      controller.abort();
    };
  }, [axiosPrivate, auth, setNotes]);
}
