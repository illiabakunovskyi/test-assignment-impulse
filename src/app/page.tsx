import Image from "next/image";

import styles from "./page.module.css";

import { Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <div className={styles.content__left}>
          <Image
            src="/images/thumb.svg"
            alt="thumb logo"
            fill
            sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        <div className={styles.content__right}>
          <h1 className={styles.content__right__title}>
            Who wants to be
            <br />
            a millionaire?
          </h1>

          <Link href="/game">
            <Button className={styles.content__right__button}>Start</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
