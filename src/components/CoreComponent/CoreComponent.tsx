import style from "./CoreComponent.module.scss";
import AboutAgency from "./../AboutAgency/AboutAgency";
import First from "./../First/First";

const CoreComponent = () => {
  return (
    <main id="home" className={style.main}>
      <First />
      <AboutAgency />
    </main>
  );
};
export default CoreComponent;
