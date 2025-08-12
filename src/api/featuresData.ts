import type { IFeaturesCard } from "../types/IFeaturesCard";
import crown from "../assets/icons/logo/crown.svg";
import exclusive from "../assets/icons/logo/exclusive.svg";
import smile from "../assets/icons/logo/smile.svg";
import srvice from "../assets/icons/logo/srvice.svg";

export const featuresData: IFeaturesCard[] = [
  {
    id: 1,
    icon: crown,
    title: "Creative",
    content:
      "We craft inspiring interiors that balance aesthetics and functionality for modern living.",
  },
  {
    id: 2,
    icon: exclusive,
    title: "Furniture",
    content:
      "Custom furniture solutions that elevate comfort and reflect your unique style.",
  },
  {
    id: 3,
    icon: smile,
    title: "Smart",
    content:
      "Durable and elegant surfaces designed to enhance every step of your space.",
  },
  {
    id: 4,
    icon: srvice,
    title: "Service",
    content:
      "From concept to completion, we ensure a seamless and satisfying design experience.",
  },
];
