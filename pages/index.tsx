import Head from "next/head";
import { Poem } from "../lib/poems/components/Poem";
import { Navbar } from "../lib/shared/components/Navbar";
import styles from "../styles/index.module.css";
import { PoemsService } from "../lib/poems/services/PoemsService";
import { CreateNewPoem } from "../lib/poems/components/CreateNewPoem";
import { db } from "../prisma/db";

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const service = new PoemsService(db);

export default function IndexPage(props: Props) {
  return (
    <main>
      <Head>
        <title>Poetry</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/5955/5955216.png"
        ></link>
      </Head>
      <Navbar />
      <article className={styles.poems}>
        <section className={styles.newPoem}>
          <CreateNewPoem />
        </section>
        <section className={styles.timeline}>
          {props.poems.map((poem) => (
            <Poem key={poem.id} poem={poem} />
          ))}
        </section>
      </article>
    </main>
  );
}

export async function getServerSideProps() {
  const poems = await service.listAll();

  return {
    props: {
      poems: await Promise.all(
        poems.map(async (poem) => ({
          ...poem,
          createdAt: poem.createdAt.toISOString(),
        }))
      ),
    },
  };
}
