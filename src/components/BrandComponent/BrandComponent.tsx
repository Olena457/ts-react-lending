import style from "./BrandComponent.module.scss";
import logoIcon from "../../assets/icons/logo/logo.svg";

const BrandComponent = () => {
  return (
    <a className={style.logo} href="#">
      <img src={logoIcon} alt="logo" />
      <h5 className={style.text}>InterSpase</h5>
    </a>
  );
};

export default BrandComponent;
