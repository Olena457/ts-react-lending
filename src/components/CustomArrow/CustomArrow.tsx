import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./CustomArrow.module.scss";
import type { ComponentPropsWithoutRef } from "react";

type ArrowProps = ComponentPropsWithoutRef<"div">;

export const CustomPrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} ${styles.customArrow} ${styles["arrow-prev"]}`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronLeft className={styles.arrowIcon} size={16} color="#707070" />
  </div>
);

export const CustomNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} ${styles.customArrow} ${styles["arrow-next"]}`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronRight className={styles.arrowIcon} size={16} color="#707070" />
  </div>
);
const CustomArrow = {
  CustomPrevArrow,
  CustomNextArrow,
};

export default CustomArrow;
