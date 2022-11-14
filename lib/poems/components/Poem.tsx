import styles from "./Poem.module.css";
import type { Poem as PoemType } from "@prisma/client";

type Props = {
  poem: {
    id: PoemType["id"];
    content: PoemType["content"];
    createdAt: string;
    author: PoemType["author"];
  };
};

export function Poem({ poem }: Props) {
  return (
    <div className={styles.poem} key={poem.id}>
      <section className={styles.content}>{poem.content}</section>
      <section className={styles.author}>{poem.author}</section>
      <span className={styles.poemDate}>
        {new Date(poem.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
}
