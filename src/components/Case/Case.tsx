import React from "react";
import type { ICase } from "../../types/ICase";
import styles from "./Case.module.scss";
import Title from "../Title/Title";

type Props = {
  data: ICase;
};

const Case: React.FC<Props> = ({ data }) => {
  const { img, title, genre } = data;

  return (
    <article
      className={`${styles.card} ${styles.content}`}
      data-aos="flip-left"
    >
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className={styles.wrapInfo}>
        <div className={styles.info}>
          <Title tag="h3" className={styles.title} text={title} />
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </article>
  );
};

export default Case;
