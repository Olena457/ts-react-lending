import { useState } from "react";
import Burger from "./components/Burger";
import HeaderComponent from "./components/HeaderComponent";
import CoreComponent from "./components/CoreComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Burger isOpen={isOpen} onClick={handleBurgerOpen} />
      <HeaderComponent onClickBurger={handleBurgerOpen} />
      <CoreComponent />
    </>
  );
};

export default App;
