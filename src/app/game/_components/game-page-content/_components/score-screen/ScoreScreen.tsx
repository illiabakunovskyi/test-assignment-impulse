"use client";

import type { FC } from "react";
import Image from "next/image";

import { Button } from "@/components";

import styles from "./styles.module.css";
import type { ScoreScreenProps } from "./types";

export const ScoreScreen: FC<ScoreScreenProps> = ({ scoreLabel, onTryAgainClick }) => {
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
          <h1 className={styles.content__right__title}>Total score:</h1>

          <h2>{scoreLabel}</h2>

          <Button
            className={styles.content__right__button}
            onClick={onTryAgainClick}
          >
            Try again
          </Button>
        </div>
      </main>
    </div>
  );
};
