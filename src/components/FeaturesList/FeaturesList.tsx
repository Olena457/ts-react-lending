import FeatureCard from "../FeatureCard/FeatureCard";
// import Title from "../Title";
import { featuresData } from "../../api/featuresData";
import styles from "./FeaturesList.module.scss";

const FeaturesList = () => {
  const showCards = featuresData.map((item) => (
    <FeatureCard
      key={item.id}
      title={item.title}
      content={item.content}
      icon={item.icon}
    />
  ));
  return (
    <section id="features" className={styles.features} data-aos="zoom-in">
      <div className="container">
        <div className={styles.wrapper}> {showCards} </div>
      </div>
    </section>
  );
};

export default FeaturesList;
