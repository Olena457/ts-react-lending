import React from "react";
import styles from "./BlogCard.module.scss";
import arrowLeft from "../../assets/icons/main/arrowLeft.svg";
import type { IBlog } from "../../types/IBlog";
import TitleComponent from "./../Title/Title";
import Button from "./../Button/Button";

type Props = {
  blog: IBlog;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  const { title, img, date, month, year, category } = blog;
  return (
    <article className={styles.card} data-aos="flip-right">
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>
        <span className={styles.category}>{category}</span>
        <TitleComponent tag="h3" className={styles.title} text={title} />
        <div className={styles.bottom}>
          <span className={styles.date}>{`${month} ${date}, ${year}`}</span>
          <Button className={styles.btn} text="More details" icon={arrowLeft} />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
