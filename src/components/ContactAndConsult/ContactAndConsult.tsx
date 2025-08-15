import styles from "./ContactAndConsult.module.scss";
import arrowLeft from "../../assets/icons/main/arrowLeft.svg";
import Title from "../Title";
import Button from "../Button";

const ContactAndConsult = () => {
  return (
    <div className="container">
      <section className={styles.contact} data-aos="flip-up">
        <Title
          tag="h2"
          className={styles.title}
          text="Let's Create Your Dream Interior"
        />
        <p className={styles.text}>
          Start the conversation with a free expert consult
        </p>

        <Button
          text="Connect with us"
          className={styles.btn}
          icon={arrowLeft}
        />
      </section>
    </div>
  );
};

export default ContactAndConsult;
