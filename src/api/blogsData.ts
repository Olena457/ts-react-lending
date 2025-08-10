import type { IBlogList } from "../types/IBlogList";
import apartmentImg from "../assets/img/projects/apartment.jpg";
import kitchen3Img from "../assets/img/projects/kitchen-3.jpg";
import bedroom1Img from "../assets/img/projects/bedroom-1.jpg";
import kitchenImg from "../assets/img/projects/kitchen.jpg";
import businessImg from "../assets/img/projects/business.jpg";
import business2Img from "../assets/img/projects/business-2.jpg";

export const blogsData: IBlogList[] = [
  {
    id: 1,
    img: apartmentImg,
    title: "Modern Residential Design: Inspiration for Private Homes",
    date: 17,
    month: "November",
    year: 2023,
    category: "living room",
  },
  {
    id: 2,
    img: kitchen3Img,
    title: "Functional Kitchen: Where Style Meets Convenience",
    date: 22,
    month: "September",
    year: 2024,
    category: "Kitchen Interior",
  },
  {
    id: 3,
    img: bedroom1Img,
    title: "Cozy Bedroom: Creating a Space for Rest and Relaxation",
    date: 15,
    month: "August",
    year: 2024,
    category: "Bedroom",
  },
  {
    id: 4,
    img: kitchenImg,
    title: "Apartment Kitchen Interior: Compact and Stylish Solutions",
    date: 27,
    month: "August",
    year: 2024,
    category: "Apartment",
  },
  {
    id: 5,
    img: businessImg,
    title: "Café Interior: Crafting an Inviting Atmosphere for Guests",
    date: 12,
    month: "June",
    year: 2025,
    category: "Commercial Space",
  },
  {
    id: 6,
    img: business2Img,
    title: "Office Style: Designing a Professional Meeting Room",
    date: 4,
    month: "May",
    year: 2025,
    category: "Commercial Space",
  },
];
