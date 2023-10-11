import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.jpg";
import tour3 from "./images/tour-3.jpg";
import tour4 from "./images/tour-4.jpg";
import tour5 from "./images/tour-5.jpg";
import tour6 from "./images/tour-6.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-house-chimney-window fa-xl",
    title: "Cozy Accommodation",
    text: "Experience warmth and comfort in our handpicked winter lodges and cabins, where every stay feels like a snug retreat from the cold.",
  },
  {
    id: 2,
    icon: "fa-solid fa-car fa-xl",
    title: "Comfortable Transportation",
    text: "Travel with ease in our heated and well-equipped vehicles, ensuring your journey through winter wonderlands is as comfortable as it is breathtaking.",
  },
  {
    id: 3,
    icon: "fa-solid fa-person-skiing-nordic fa-xl",
    title: "Adventure Packages",
    text: "Dive into thrilling winter escapades with our meticulously crafted packages that combine snow sports, sightseeing, and cultural explorations for the ultimate snowy adventure.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "January 8, 2024",
    title: "Arctic Aurora Expedition",
    info: "Witness the ethereal beauty of the Northern Lights in the enchanting city of Tromsø, Norway, and immerse yourself in the Arctic wilderness.",
    location: "Norway",
    duration: 7,
    cost: 2500,
  },
  {
    id: 2,
    image: tour2,
    date: "January 13, 2024",
    title: "Swiss Alpine Ski Adventure",
    info: "Embark on a thrilling skiing and snowboarding journey in the Swiss Alps, surrounded by majestic peaks and charming alpine villages.",
    location: "Switzerland",
    duration: 9,
    cost: 3200,
  },
  {
    id: 3,
    image: tour3,
    date: "January 24, 2024",
    title: "Lapland Husky Safari",
    info: "Experience the magic of Lapland while mushing your own team of huskies through snow-covered forests and learning about Sámi culture.",
    location: "Finland",
    duration: 6,
    cost: 2800,
  },
  {
    id: 4,
    image: tour4,
    date: "February 2, 2024",
    title: "Winter Wonderland in Banff",
    info: "Explore the pristine winter landscapes of Banff National Park in Canada, with activities like ice skating on Lake Louise and snowshoeing in the Rockies.",
    location: "Canada",
    duration: 8,
    cost: 2900,
  },
  {
    id: 5,
    image: tour5,
    date: "February 10, 2024",
    title: "Japanese Snow Monkeys & Skiing",
    info: "Discover Japan's unique culture, ski in the powder-filled mountains of Hakuba, and visit the famous snow monkeys in Jigokudani.",
    location: "Japan",
    duration: 10,
    cost: 3500,
  },
  {
    id: 6,
    image: tour6,
    date: "February 19, 2024",
    title: "Icelandic Winter Adventure",
    info: "Explore Iceland's stunning landscapes, including ice caves, geothermal pools, and frozen waterfalls, while experiencing the beauty of a winter wonderland.",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
