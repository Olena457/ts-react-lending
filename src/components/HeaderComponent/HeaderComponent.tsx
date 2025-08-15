import ComponentNavigation from "../ComponentNavigation";
import BrandComponent from "../BrandComponent";
import burgerIcon from "../../assets/icons/main/burgerIcon.svg";
import styles from "./HeaderComponent.module.scss";

type Props = {
  onClickBurger: () => void;
};

const HeaderComponent: React.FC<Props> = ({ onClickBurger }) => {
  return (
    <div className={styles.header} data-aos="fade-right">
      <div className="container">
        <div className={styles.wrapper}>
          <BrandComponent />
          <ComponentNavigation />
          <button className={styles.burger} onClick={onClickBurger}>
            <img src={burgerIcon} alt="burger" className={styles.imageBurger} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
