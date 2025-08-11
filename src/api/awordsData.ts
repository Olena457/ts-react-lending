import type { IAwords } from "../types/IAwords";
import best from "../assets/img/brand/best.png";
import elit from "../assets/img/brand/elit.png";
import modern from "../assets/img/brand/modern.png";
import solution from "../assets/img/brand/solution.png";
import studio from "../assets/img/brand/studio.png";

export const awordsData: IAwords[] = [
  {
    id: 1,
    name: "Modern Home",
    logo: modern,
  },
  {
    id: 2,
    name: "Interno Style Vintage",
    logo: elit,
  },
  {
    id: 3,
    name: "Brand",
    logo: best,
  },
  {
    id: 4,
    name: "Nature Home",
    logo: solution,
  },
  {
    id: 5,
    name: "Classic design studio",
    logo: studio,
  },
];
export default awordsData;
