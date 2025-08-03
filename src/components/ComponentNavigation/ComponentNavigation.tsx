import { mainCategories } from "../../api/categoriesMain";
import style from "./ComponentNavigation.module.scss";

const ComponentNavigation = () => {
  const showCategories = mainCategories.map((item) => (
    <div key={item.id}>
      <a href={`#${item.link}`} className={style.link}>
        {item.category}
      </a>
    </div>
  ));
  return (
    <nav className={style.nav}>
      <div>{showCategories}</div>
    </nav>
  );
};

export default ComponentNavigation;
