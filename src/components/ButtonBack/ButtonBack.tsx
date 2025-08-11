import styles from "./ButtonBack.module.scss";

import homeIcon from "../../assets/icons/main/home.svg";

const ButtonBack = () => {
  return (
    <a
      className={styles.arrow}
      style={{ backgroundImage: `url("${homeIcon}")` }}
      href="#"
    ></a>
  );
};

export default ButtonBack;
