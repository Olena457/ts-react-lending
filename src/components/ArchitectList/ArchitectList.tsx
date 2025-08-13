import designTeamData from "../../api/designTeamData";
import ArchitectCard from "../ArchitectCard/ArchitectCard";
import Title from "../Title/Title";
import styles from "./ArchitectList.module.scss";

const ArchitectList = () => {
  const showTeam = designTeamData.map((member) => (
    <ArchitectCard key={member.id} member={member} />
  ));

  return (
    <div className="container">
      <section className={styles.teamSection}>
        <Title tag="h2" className={styles.title} text="Meet Our Design Team" />
        <div className={styles.wrapper}>{showTeam}</div>
      </section>
    </div>
  );
};

export default ArchitectList;
