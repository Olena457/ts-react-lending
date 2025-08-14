import { awordsData } from "../../api/awordsData";
import styles from "./Awords.module.scss";

const Awords = () => {
  const showAwords = awordsData.map((item) => (
    <img src={item.logo} alt={item.name} key={item.id} />
  ));
  return (
    <section id="awords" className={styles.brand} data-aos="fade-rigsh">
      <div className="container">
        <div className={styles.wrapper}>{showAwords}</div>
      </div>
    </section>
  );
};

export default Awords;
