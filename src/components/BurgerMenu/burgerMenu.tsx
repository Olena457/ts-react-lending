import { useEffect } from "react";
import clsx from "clsx";
import { mainCategories } from "../../api/categoriesMain";
import crossIcon from "../../assets/icons/main/crossIcon.svg";
import styles from "./burgerMenu.module.scss";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerMenu: React.FC<Props> = ({ isOpen, onClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const showCategories = mainCategories.map((item) => (
    <div key={item.id}>
      <a href={item.link} onClick={onClick} className={styles.link}>
        {item.category}
      </a>
    </div>
  ));

  return (
    <nav className={clsx(styles.burger, { [styles.none]: !isOpen })}>
      <img className={styles.close} src={crossIcon} onClick={onClick} />
      <ul>{showCategories}</ul>
    </nav>
  );
};

export default BurgerMenu;
