import React from "react";
import Title from "../Title/Title";
import type { IDesignTeamCard } from "../../types/IDesignTeamCard";
import styles from "./ArchitectCard.module.scss";

type Props = {
  member: IDesignTeamCard;
};

const ArchitectCard: React.FC<Props> = ({ member }) => {
  const { photo, logo, name, position, description } = member;

  return (
    <article className={styles.card} data-aos="fade-up">
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Team logo" className={styles.logo} />
          <Title tag="h4" text="Interspace" className={styles.logoTitle} />
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.profile}>
        <img src={photo} alt={name} className={styles.photo} />
        <div className={styles.textBlock}>
          <Title tag="h3" text={name} className={styles.name} />
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </article>
  );
};

export default ArchitectCard;
