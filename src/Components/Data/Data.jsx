import Large from "../../assets/large.webp";
import Small from "../../assets/small.webp";
import Flower from "../../assets/flower.webp";

import One from "../../assets/1.webp";
import Ayodhya from "../../assets/ayodhya.webp";
import Baranti from "../../assets/baranti.webp";
import MithonDam from "../../assets/mithonDam.webp";
import Palash from "../../assets/palash.webp";
import Recep from "../../assets/recep.webp";
import Room1 from "../../assets/room1.webp";

import { PiPhoneCallFill } from "react-icons/pi";
import { IoChatbubbleEllipsesSharp, IoVideocam,IoMail } from "react-icons/io5";


export const data = [
  {
    id: 1,
    img: `${Small}`,
    price: " 1000/night",
    title: "Cozy Haven Room",
    para: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    path: "https://api.whatsapp.com"
  },
  {
    id: 2,
    img: `${Large}`,
    title: "Spacious Serenity Suite",
    price: " 1500/night",
    para: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    path:"https://api.whatsapp.com"
  },
  {
    id: 3,
    img: `${Small}`,
    price: " 1000/night",
    title: "Cozy Haven Room",
    para: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    path: "https://api.whatsapp.com"
  },
];
export const Gallerydata = [
  {
    id: 1,
    img: `${One}`,
  },
  {
    id: 2,
    img: `${Baranti}`,
  },
  {
    id: 3,
    img: `${Palash}`,
  },
  {
    id: 4,
    img: `${MithonDam}`,
  },
  {
    id: 5,
    img: `${Ayodhya}`,
  },
  {
    id: 6,
    img: `${Flower}`,
  },
  {
    id: 7,
    img: `${Small}`,
  },
  {
    id: 8,
    img: `${Large}`,
  },
  {
    id: 9,
    img: `${Recep}`,
  },

  {
    id: 10,
    img: `${Room1}`,
  },
];

export const Contactdata = [
  {
    id: 1,
    Icon: <PiPhoneCallFill />,
    Name: "Call",
    Number: "1.2.3.4.5.8",
    Btnname: "Call Now",
    path: "https://api.whatsapp.com"
  },
  {
    id: 2,
    Icon: <IoChatbubbleEllipsesSharp />,
    Name: "Chat",
    Number: "1.2.3.4.5.8",
    Btnname: "Chat Now",
     path: "https://api.whatsapp.com"
  },
  {
    id: 3,
    Icon: <IoVideocam />,
    Name: "Video Call",
    Number: "1.2.3.4.5.8",
    Btnname: "Video call Now",
     path: "https://api.whatsapp.com"
  },
  {
    id: 4,
    Icon: <IoMail />,
    Name: "Message",
    Number: "1.2.3.4.5.8",
    Btnname: "Message Now",
     path: "https://api.whatsapp.com"
  },
];

export const Navdata = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Rooms",
    path: "/rooms",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  
  {
    id: 4,
    name: "Service",
    path: "/service",
  },
];
