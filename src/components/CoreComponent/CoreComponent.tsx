import style from "./CoreComponent.module.scss";
import AboutAgency from "./../AboutAgency/AboutAgency";
import First from "./../First/First";
import BlogList from "../BlogList";
import ClientList from "../ClientList";
import Awords from "../Awords/Awords";
import FeaturesList from "../FeaturesList/FeaturesList";

const CoreComponent = () => {
  return (
    <main id="home" className={style.main}>
      <First />
      <Awords />
      <AboutAgency />
      <FeaturesList />
      <BlogList />
      <ClientList />
    </main>
  );
};
export default CoreComponent;
