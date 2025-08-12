import Title from "../Title";
import styles from "./Achievements.module.scss";

const Achievements = () => {
  return (
    <section className={styles.statistic} data-aos="fade-up">
      <div className="container">
        <Title tag="h2" className={styles.title} text="Our Statiscs" />
        <div className={styles.wrapper}>
          <div>
            <Title tag="h3" className={styles.num} text="10" />
            <p className={styles.text}>Experiance Years</p>
          </div>
          <div className={styles.divider}></div>
          <div>
            <Title tag="h3" className={styles.num} text="5k" />
            <p className={styles.text}>Success Project</p>
          </div>
          <div className={styles.divider}></div>
          <div>
            <Title tag="h3" className={styles.num} text="1k" />
            <p className={styles.text}>Active Project</p>
          </div>
          <div className={styles.divider}></div>
          <div>
            <Title tag="h3" className={styles.num} text="4k" />
            <p className={styles.text}>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
