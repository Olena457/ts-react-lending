import { socialLinks } from "../../api/socialLinks";
import BrandComponent from "../BrandComponent/BrandComponent";
import ButtonBack from "../ButtonBack/ButtonBack";

import styles from "./FooterComponent.module.scss";

import Title from "../Title";

const Footer = () => {
  const showSocials = socialLinks.map((item) => (
    <div key={item.id}>
      <a
        className={styles.link}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.icon} alt={item.name} />
      </a>
    </div>
  ));

  return (
    <footer id="contacts" className={styles.footer} data-aos="fade-up">
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <BrandComponent />
            <p className={styles.text}>
              Renowned worldwide for excellence in architectural and interior
              design solutions.
            </p>
          </div>
          <div>
            <Title tag="h3" className={styles.title} text="Explore" />
            <ul className={styles.links}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Awords</a>
              </li>

              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <Title tag="h3" className={styles.title} text="Details" />
            <ul className={styles.links}>
              <li>
                <a>Registration</a>
              </li>
              <li>
                <a>Consultation</a>
              </li>
              <li>
                <a>Licenses</a>
              </li>
            </ul>
          </div>
          <div>
            <Title tag="h3" className={styles.title} text="Contact" />
            <div className={styles.links}>
              <div className={styles.container}>
                <a
                  href="https://www.google.com/maps?q=Khreshchatyk+Street,+22,+Kyiv,+Ukraine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  22 Khreshchatyk Street, Kyiv, Ukraine
                </a>
              </div>
              <div className={styles.container}>
                <a href="mailto:contact@interspace.com">
                  contact@interspace.com
                </a>
              </div>
              <div className={styles.container}>
                <a href="tel:+380931234567">+38 (093) 123 45 67</a>
              </div>
            </div>
            <div className={styles.socials}>{showSocials}</div>
          </div>

          <ButtonBack />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
