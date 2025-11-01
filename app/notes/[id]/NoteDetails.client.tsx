"use client";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import css from "./NoteDetails.module.css";

const NoteDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: note, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const router = useRouter();

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
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <button onClick={handleClick}>Go Back</button>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteDetails;
