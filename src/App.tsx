import { useState } from "react";
import Burger from "./components/Burger";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Burger isOpen={isOpen} onClick={handleBurgerOpen} />
      <HeaderComponent onClickBurger={handleBurgerOpen} />
    </>
  );
};

export default App;
