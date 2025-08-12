import { caseData } from "../../api/caseData";
import styles from "./CaseList.module.scss";
import Case from "../Case/Case";
import Title from "../Title/Title";

const CaseList = () => {
  const showCases = caseData.map((item) => <Case key={item.id} data={item} />);
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.top} data-aos="fade-down">
          <Title tag="h2" className={styles.title} text="Active Projects" />
          <p className={styles.text}>
            "With intuitive tools that bring a human touch to every step and a
            support team genuinely eager to assist, getting started with us has
            never been simpler."
          </p>
        </div>
        <div className={styles.bottom}>{showCases}</div>
      </div>
    </section>
  );
};

export default CaseList;
