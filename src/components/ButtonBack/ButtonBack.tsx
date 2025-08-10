import styles from "./BackButton.module.scss";

import homeIcon from "../../assets/icons/main/home.svg";

const BackButton = () => {
  return (
    <a
      className={styles.arrow}
      style={{ backgroundImage: `url("${homeIcon}")` }}
      href="#"
    ></a>
  );
};

export default BackButton;
