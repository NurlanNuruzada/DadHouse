import { AiOutlineCar } from "react-icons/ai";
import fishingImg from "../Images/fishing.jpg";
import { MdOutlineBedroomParent } from "react-icons/md";
import {
  FaUtensils,
  FaBasketballBall,
  FaWifi,
  FaDumbbell,
} from "react-icons/fa";

export const departmentsData = [
  {
    image:
      "https://duruthemes.com/demo/html/cappa/demo1-light/img/restaurant/1.jpg",
    type: "DISCOVER",
    name: "The DAD House Restaurant",
    about:
      "Delight in the harmonious blend of Azerbaijani traditional dishes from the southern region and European cuisine. Immerse yourself in a gastronomic journey that seamlessly marries local authenticity with international flair.",
  },
  {
    image: "https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/3.jpg",
    type: "EXPERIENCES",
    name: "Open Air Cinema",
    about:
      "Immerse yourself in our enchanting Open Air Cinema. A haven for both kids and adults, our cinema offers a selection of movies that cater to all ages. Book now for an unforgettable cinema experience amidst the soothing embrace of nature.",
  },
  {
    image: "https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/2.jpg",
    type: "MODERN",
    name: "Fitness Center",
    about:
      "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
  },
  {
    image: fishingImg,
    type: "EXPERIENCES",
    name: "Fishing",
    about:
      "Embark on a tranquil fishing experience at our pristine lake within the area. Our guests are provided with top-notch fishing equipment to enjoy this recreational service. Immerse yourself in the calming surroundings as you indulge in the art of fishing during your stay.",
  },
];

export const facilities = [
  {
    logo: <FaUtensils />,
    name: "Kitchen",
    about:
      "Every residence is equipped with a fully stocked kitchen, complete with utensils, for the utmost comfort of our guests.",
  },
  {
    logo: <AiOutlineCar />,
    name: "Parking Space",
    about:
      " Secure parking awaits your vehicle on our premises. With ample space and accessibility, enjoy the convenience of hassle-free parking during your stay.",
  },
  {
    logo: <MdOutlineBedroomParent />,
    name: "Room Service",
    about:
      "Our dedicated Room Service operates daily from 9:00 to 23:00, ensuring an impeccable standard of care for our esteemed guests.",
  },
  {
    logo: <FaBasketballBall />,
    name: "Multi-Sports Court",
    about:
      "Our multi-sports court offers versatility for tennis, volleyball, and basketball. Enjoy a dynamic space designed for various athletic pursuits.",
  },
  {
    logo: <FaWifi />,
    name: "High-Speed Internet",
    about:
      "Stay connected with our high-speed WiFi. Whether you're here for work or leisure, enjoy seamless internet access throughout our premises.",
  },
  {
    logo: <FaDumbbell />,
    name: "Open-Air Gym Equipment",
    about:
      "Stay active with our open-air gym equipment. Exercise in the fresh air, surrounded by nature, and elevate your fitness routine during your stay.",
  },
];

export const slides = [
  {
    image: "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/4.jpg",
    type: "THE ULTIMATE LUXURY EXPERINCE",
    text: "ENJOY THE BEST MOMENTS OF LIFE",
  },
  {
    image: "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/7.jpg",
    type: "LUXURY HOTEL & BEST RESORT",
    text: "ENJOY A LUXURY EXPERINCE",
  },
  {
    image: "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/3.jpg",
    type: "UNIQUE PLACE TO RELAX & ENJOY",
    text: "THE PERFECT BASE FOR YOU",
  },
];

export const formValue = [
  {
    value: "Your Name *",
  },
  {
    value: "Your Email *",
  },
  {
    value: "Your Number *",
  },
  {
    value: "Subject *",
  },
];
