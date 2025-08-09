import styles from "./AboutAgency.module.scss";
import arrowLeft from "../../assets/icons/main/arrowLeft.svg";
import phoneIcon from "../../assets/icons/main/phone.svg";
import Button from "../Button/Button";
import Title from "../Title/Title";

const AboutAgency = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content} data-aos="fade-right">
            <Title
              tag="h2"
              className={styles.title}
              text="We Tackle The Most Challenging Designs"
            />

            <p className={styles.text}>
              We craft solutions that transform complex challenges into
              functional and visually compelling projects. Our approach is
              driven by a deep understanding of modern trends and a passion for
              innovation.
            </p>

            <div className={styles.call}>
              <div className={styles.icon}>
                <img src={phoneIcon} alt="Phone icon" />
              </div>
              <a className={styles.tel} href="tel:+380931234567">
                <span className={styles.number}>+38 (093) 123 45 67</span>
                <span>Call Us Anytime</span>
              </a>
            </div>

            <Button
              className={styles.btn}
              text="Free Project Estimate"
              icon={arrowLeft}
            />
          </div>

          <div
            className={styles.img}
            style={{
              backgroundImage: "url(./src/assets/img/projects/big.jpg)",
            }}
            data-aos="fade-up"
          ></div>
        </div>
      </div>
    </section>
  );
};
export default AboutAgency;
