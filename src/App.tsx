import { useState } from "react";
import "./App.scss";
import Burger from "./components/Burger";
import HeaderComponent from "./components/HeaderComponent";
import CoreComponent from "./components/CoreComponent";
import FooterComponent from "./components/FooterComponent";

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
      <FooterComponent />
    </>
  );
};

export default App;
