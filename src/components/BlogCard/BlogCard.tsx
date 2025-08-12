import React from "react";
import type { IBlogList } from "../../types/IBlogList";
import TitleComponent from "./../Title/Title";
import logoIcon from "../../assets/icons/logo/logo.svg";
import styles from "./BlogCard.module.scss";

type Props = {
  blog: IBlogList;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  const { title, img, date, month, year, category } = blog;

  return (
    <article className={styles.card} data-aos="flip-right">
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>
        <TitleComponent tag="h3" className={styles.title} text={title} />
        <span className={styles.date}>{`${month} ${date}, ${year}`}</span>
        <div className={styles.bottom}>
          <span className={styles.category}>{category}</span>
          <img src={logoIcon} alt="logo" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
