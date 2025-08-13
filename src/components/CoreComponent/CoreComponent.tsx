import designTeamData from "../../api/designTeamData";
import style from "./CoreComponent.module.scss";
import AboutAgency from "./../AboutAgency/AboutAgency";
import First from "./../First/First";
import Awords from "../Awords/Awords";
import BlogList from "../BlogList";
import Achievements from "../Achievements";
import ClientList from "../ClientList";
import FeaturesList from "../FeaturesList/FeaturesList";
import CaseList from "../CaseList/CaseList";
import CardsSlider from "../CardsSlider/CardsSlider";

const CoreComponent = () => {
  return (
    <main id="home" className={style.main}>
      <First />
      <Awords />
      <AboutAgency />
      <FeaturesList />
      <BlogList />
      <ClientList />
      <Achievements />
      <CaseList />
      <CardsSlider cards={designTeamData} />
    </main>
  );
};
export default CoreComponent;
