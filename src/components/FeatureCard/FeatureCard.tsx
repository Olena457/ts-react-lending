import React from "react";
import styles from "./FeatureCard.module.scss";
import Title from "../Title";

type Props = {
  title: string;
  content: string;
  icon: string;
};

const FeatureCard: React.FC<Props> = ({ title, content, icon }) => {
  return (
    <article className={styles.card}>
      <img src={icon} alt={`${title} icon`} className={styles.icon} />
      <Title tag="h3" text={title} className={styles.title} />
      <p className={styles.content}>{content} </p>
    </article>
  );
};

export default FeatureCard;
