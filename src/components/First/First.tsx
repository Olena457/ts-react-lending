import Button from "../Button";
import Title from "../Title";
import styles from "./First.module.scss";
import arrowIcon from "../../assets/icons/main/arrowIcon.svg";

const First = () => {
  return (
    <section
      className={styles.started}
      style={{
        backgroundImage: "url(./src/assets/img/projects/big.jpg)",
      }}
    >
      <div className="container">
        <div className={styles.wrapper} data-aos="fade-right">
          <Title
            tag="h1"
            text="Your Dream Space Starts Here"
            // Bring Your Dream Space to Life
            className={styles.title}
          />

          <p className={styles.text}>
            The world thrives on bold thinkers and creative minds who transform
            obstacles into inspiring opportunities.
          </p>

          <Button text="Started" className={styles.btn} icon={arrowIcon} />
        </div>
      </div>
    </section>
  );
};

export default First;
