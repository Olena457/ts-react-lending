import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text: string;
  icon: string;
  className: string;
};
const Button: React.FC<Props> = ({ text, icon, className }) => {
  return (
    <button className={`${styles.btn} ${className}`}>
      <span>{text}</span>
      <img src={icon} alt="Icon"></img>
    </button>
  );
};
export default Button;
