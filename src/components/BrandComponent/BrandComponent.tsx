import logoIcon from "../../assets/icons/logo/logo.svg";
import style from "./BrandComponent.module.scss";

const BrandComponent = () => {
  return (
    <div className={style.logoWrapper}>
      <a className={style.logo} href="#">
        <img src={logoIcon} alt="logo" />
        <h4 className={style.text}>InterSpace</h4>
      </a>
    </div>
  );
};

export default BrandComponent;
