import type { IDesignTeamCard } from "../types/IDesignTeamCard";
import Icon from "../assets/icons/main/quote.svg";
import TeamLogo from "../assets/icons/main/teamIcon.svg";

const designTeamData: IDesignTeamCard[] = [
  {
    id: 1,
    photo: "https://ftp.goit.study/img/avatars/29.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Alexander",
    position: "Co-founder, Head Architect",
    description:
      "Head architect and visionary at SATI Architects. Responsible for creating unique design concepts and original architectural solutions.",
  },
  {
    id: 2,
    photo: "https://ftp.goit.study/img/avatars/30.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Taras",
    position: "Co-founder, CEO",
    description:
      "Defines development strategy and creates impeccable customer experience.",
  },
  {
    id: 3,
    photo: "https://ftp.goit.study/img/avatars/28.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Pavlo",
    position: "Architect and Team Lead",
    description:
      "Leading architect and project manager at SATI Architects with over 6 years of experience.",
  },
  {
    id: 4,
    photo: "https://ftp.goit.study/img/avatars/27.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Maria",
    position: "Interior Designer",
    description:
      "Experienced interior designer who creates harmonious and functional spaces.",
  },
  {
    id: 5,
    photo: "https://ftp.goit.study/img/avatars/26.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Ksenia",
    position: "3D Visualization Specialist",
    description:
      "Our leading specialist in 3D visualization, bringing concepts to life with precision and style.",
  },
  {
    id: 6,
    photo: "https://ftp.goit.study/img/avatars/25.jpg",
    icon: Icon,
    logo: TeamLogo,
    name: "Anastasia",
    position: "Interior Designer",
    description:
      "Interior designer specializing in space furnishing and functional composition.",
  },
];

export default designTeamData;
