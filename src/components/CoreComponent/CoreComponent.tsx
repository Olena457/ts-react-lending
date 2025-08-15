import style from "./CoreComponent.module.scss";
import AboutAgency from "./../AboutAgency/AboutAgency";
import First from "./../First/First";
import Awords from "../Awords/Awords";
import BlogList from "../BlogList";
import Achievements from "../Achievements";
import ClientList from "../ClientList";
import FeaturesList from "../FeaturesList/FeaturesList";
import CaseList from "../CaseList/CaseList";
import ArchitectList from "../ArchitectList/ArchitectList";
import ContactAndConsult from "../ContactAndConsult";

const CoreComponent = () => {
  return (
    <main id="home" className={style.main}>
      <First />
      <FeaturesList />
      <AboutAgency />
      <BlogList />
      <Achievements />
      <ClientList />
      <CaseList />
      <Awords />
      <ArchitectList />
      <ContactAndConsult />
    </main>
  );
};
export default CoreComponent;
