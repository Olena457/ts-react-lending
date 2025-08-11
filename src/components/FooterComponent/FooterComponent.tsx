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
    <footer id="contact" className={styles.footer} data-aos="fade-up">
      {/* <div className={styles.line}></div> */}

      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <BrandComponent />
            <p className={styles.text}>
              Renowned worldwide for excellence in architectural and interior
              design solutions.
            </p>
            <div className={styles.socials}>{showSocials}</div>
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
                <a href="#"> Service</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <Title tag="h3" className={styles.title} text="Contact" />
            <div className={styles.links}>
              <div>
                <a
                  href="https://www.google.com/maps?q=Khreshchatyk+Street,+22,+Kyiv,+Ukraine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  22 Khreshchatyk Street, Kyiv, Ukraine
                </a>
              </div>
              <div>
                <a href="mailto:contact@interspace.com">
                  contact@interspace.com
                </a>
              </div>
              <div>
                <a href="tel:+380931234567">+38 (093) 123 45 67</a>
              </div>
            </div>
          </div>
          <ButtonBack />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
