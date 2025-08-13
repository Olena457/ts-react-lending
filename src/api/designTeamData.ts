import type { IDesignTeamCard } from "../types/IDesignTeamCard";
import TeamLogo from "../assets/icons/main/teamIcon.svg";

const designTeamData: IDesignTeamCard[] = [
  {
    id: 1,
    photo: "https://ftp.goit.study/img/avatars/27.jpg",
    logo: TeamLogo,
    name: "Alexander",
    position: "Co-founder, Head Architect",
    description:
      "Interspace Head Architect. Visionary Designer.Creator of unique concepts.",
  },
  {
    id: 2,
    photo: "https://ftp.goit.study/img/avatars/29.jpg",
    logo: TeamLogo,
    name: "Taras",
    position: "Co-founder, CEO",
    description:
      "Defines development strategy and creates impeccable customer experience.",
  },
  {
    id: 3,
    photo: "https://ftp.goit.study/img/avatars/28.jpg",
    logo: TeamLogo,
    name: "Pavlo",
    position: "Architect and Team Lead",
    description:
      "Leading architect and project manager at SATI Architects with over 6 years of experience.",
  },
  {
    id: 4,
    photo: "https://ftp.goit.study/img/avatars/30.jpg",
    logo: TeamLogo,
    name: "Maria",
    position: "Interior Designer",
    description:
      "Experienced interior designer who creates harmonious and functional spaces.",
  },
  {
    id: 5,
    photo: "https://ftp.goit.study/img/avatars/26.jpg",
    logo: TeamLogo,
    name: "Ksenia",
    position: "3D Visualization Specialist",
    description:
      "Our leading specialist in 3D visualization, bringing concepts to life with precision and style.",
  },
  {
    id: 6,
    photo: "https://ftp.goit.study/img/avatars/25.jpg",
    logo: TeamLogo,
    name: "Anastasia",
    position: "Furniture Designer",
    description:
      "Furniture Designer.Furniture that fits and elevates interiors.",
  },
];

export default designTeamData;
