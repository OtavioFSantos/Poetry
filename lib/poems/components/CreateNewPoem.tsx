import { useState } from "react";
import { useCreatePoem } from "../hooks/use-newPoem";
import styles from "./CreateNewPoem.module.css";

export function CreateNewPoem() {
  const [content, setContent] = useState("");
  const createPoem = useCreatePoem(() => setContent(""));

  const onSubmit = (ev) => {
    ev.preventDefault();
    createPoem.mutate({ content });
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <textarea
        className={styles.inputPoem}
        maxLength={600}
        cols={30}
        rows={20}
        value={content}
        placeholder="What are you felling?"
        onChange={(ev) => setContent(ev.target.value)}
      />

      <button className={styles.poemButton} disabled={!content}>
        {createPoem.isLoading ? "Posting poem..." : "Post poem"}
      </button>
    </form>
  );
}
