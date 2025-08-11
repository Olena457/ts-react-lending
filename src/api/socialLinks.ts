import type { ISocial } from "../types/ISocial";

import facebookIcon from "../assets/icons/socials/facebook.svg";
import twitterIcon from "../assets/icons/socials/twitter.svg";
import linkedinIcon from "../assets/icons/socials/linkedin.svg";
import instagramIcon from "../assets/icons/socials/instagram.svg";

export const socialLinks: ISocial[] = [
  {
    id: 1,
    name: "facebook",
    link: "https://facebook.com",
    icon: facebookIcon,
  },
  {
    id: 2,
    name: "twitter",
    link: "https://twitter.com",
    icon: twitterIcon,
  },
  {
    id: 3,
    name: "linkedin",
    link: "https://linkedin.com",
    icon: linkedinIcon,
  },
  {
    id: 4,
    name: "instagram",
    link: "https://instagram.com",
    icon: instagramIcon,
  },
];
