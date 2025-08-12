import type { ICase } from "../types/ICase";
import apartImg from "../assets/img/projects/apartmen-1.jpg";
import kitImg from "../assets/img/projects/kitchen-1.jpg";
import bed2Img from "../assets/img/projects/bedroom.jpg";
import desingImg from "../assets/img/projects/apartment-2.jpg";

export const caseData: ICase[] = [
  {
    id: 1,
    img: apartImg,
    title: "Lounge Space",
    genre: "Art Modern",
  },
  {
    id: 2,
    img: kitImg,
    title: "Creative Design",
    genre: "Minimalist",
  },
  {
    id: 3,
    img: bed2Img,
    title: "Minimal Elegance",
    genre: "Modern",
  },
  {
    id: 4,
    img: desingImg,
    title: "Light Design",
    genre: "Scandinavian",
  },
];
