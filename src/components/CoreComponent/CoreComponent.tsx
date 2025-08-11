import style from "./CoreComponent.module.scss";
import AboutAgency from "./../AboutAgency/AboutAgency";
import First from "./../First/First";
import BlogList from "../BlogList";
import ClientList from "../ClientList";

const CoreComponent = () => {
  return (
    <main id="home" className={style.main}>
      <First />
      <AboutAgency />
      <BlogList />
      <ClientList />
    </main>
  );
};
export default CoreComponent;
