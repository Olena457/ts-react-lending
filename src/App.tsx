import { useState, useEffect } from "react";
import AOS from "aos";
import Burger from "./components/Burger";
import HeaderComponent from "./components/HeaderComponent";
import ButtonBack from "./components/ButtonBack/ButtonBack";

import CoreComponent from "./components/CoreComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 500,
    });
  }, []);

  return (
    <>
      <Burger isOpen={isOpen} onClick={handleBurgerOpen} />
      <HeaderComponent onClickBurger={handleBurgerOpen} />
      <CoreComponent />
      <FooterComponent />
      <ButtonBack />
    </>
  );
};

export default App;
