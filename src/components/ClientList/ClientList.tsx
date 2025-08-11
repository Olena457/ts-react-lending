import reviewsData from "../../api/reviewsData";
import ClientCard from "../ClientCard/ClientCard";
import styles from "./ClientList.module.scss";
import Title from "../Title/Title";

const ClientList = () => {
  const showReviews = reviewsData.map((item) => (
    <ClientCard key={item.id} review={item} />
  ));
  return (
    <div className="container">
      <section className={styles.review}>
        <Title
          tag="h2"
          className={styles.title}
          text="Real Stories. Real Feedback. InterSpace."
        />
      </section>
      <div className={styles.wrapper}>{showReviews}</div>
    </div>
  );
};

export default ClientList;
