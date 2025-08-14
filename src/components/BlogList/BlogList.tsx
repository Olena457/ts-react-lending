import { blogsData } from "../../api/blogsData";
import BlogCard from "../BlogCard";
import Title from "../Title";

import styles from "./BlogList.module.scss";

const BlogList = () => {
  const showBlogs = blogsData.map((item) => (
    <BlogCard key={item.id} blog={item} />
  ));

  return (
    <section id="projects" className={styles.blogs}>
      <div className="container">
        <div className={styles.top} data-aos="fade-down">
          <Title
            tag="h2"
            className={styles.titleMain}
            text=" The Best Projects"
          />

          <p className={styles.text}>
            We work across various directions — from residential homes and
            apartments to commercial spaces for businesses.
          </p>
        </div>
        <div className={styles.bottom}>{showBlogs}</div>
      </div>
    </section>
  );
};

export default BlogList;
