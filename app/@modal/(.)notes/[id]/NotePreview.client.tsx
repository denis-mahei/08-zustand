"use client";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { format } from 'date-fns';
const NotePreview = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { data: note, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClick = () => {
    router.back();
  };

  const formattedDate = note
    ? format(new Date(note.updatedAt || note.createdAt), "PPP, p")
    : "";

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (!note) return null;
  return (
    <Modal onClose={handleClick}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <button onClick={handleClick} className={css.backBtn}>
              Go Back
            </button>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
