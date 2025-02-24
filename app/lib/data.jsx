// app/lib/data.js

// Importing images
import githubLogo from "../public/Menu/github.png";
import linkedinLogo from "../public/Menu/linkedin.png";
import facebookLogo from "../public/Menu/facebook.png";
import instagramLogo from "../public/Menu/instagram.png";
import ArrowDown from "../public/Header/Header Arrow Down.png";
import NavLogo from "../public/Nav/Nav Logo.png";
import createvesLogo from "../public/Menu/createveslogo.png";
import avatarLogo from "../public/About me/About me avatar.png";
import codeLogo from "../public/About me/About me code.png";
import designLogo from "../public/About me/About me design.png";
import gameLogo from "../public/About me/About me game.png";
import Asetrak from "../public/Projects/Asetrak.png";
import SSS from "../public/Projects/SSS.png";
import ERP from "../public/Projects/ERP.png";
import EcomServer from "../public/Projects/ecomserver.png";
import cssLogo from "../public/Techs/css.png";
import djangoLogo from "../public/Techs/django.png";
import figmaLogo from "../public/Techs/Figma.png";
import htmlLogo from "../public/Techs/html.png";
import javascriptLogo from "../public/Techs/javascript.png";
import mongodbLogo from "../public/Techs/MongoDB.png";
import mysqlLogo from "../public/Techs/mysql.png";
import nextjsLogo from "../public/Techs/nextjs 1.png";
import nodejsLogo from "../public/Techs/nodejs.png";
import pythonLogo from "../public/Techs/python.png";
import reactNativeLogo from "../public/Techs/react native.png";
import reactLogo from "../public/Techs/React.png";
import tailwindLogo from "../public/Techs/Tailwind CSS.png";
import typescriptLogo from "../public/Techs/typescript.png";
//
import footerarrow from "../public/Footer/footer arrow.png";
import footerfacebook from "../public/Footer/footer facebook.png";
import footergit from "../public/Footer/footer git.png";
import footerig from "../public/Footer/footer ig.png";
import footerlinkedin from "../public/Footer/footer linkedin.png";
import footerlogo from "../public/Footer/footer logo.png";

export const footerIcons = [
  {
    imageSrc: footerfacebook,
  },
  {
    imageSrc: footergit,
  },
  {
    imageSrc: footerig,
  },
  {
    imageSrc: footerlinkedin,
  },
];

// Social media links
export const socialMediaLinks = [
  {
    name: "GITHUB",
    imageSrc: githubLogo,
    url: "https://github.com/kylhrmys", // Replace with your GitHub URL
  },
  {
    name: "LINKEDIN",
    imageSrc: linkedinLogo,
    url: "https://www.linkedin.com/in/kyltvs/", // Replace with your LinkedIn URL
  },
  {
    name: "FACEBOOK",
    imageSrc: facebookLogo,
    url: "https://www.facebook.com/profile.php?id=100083186330824", // Replace with your Facebook URL
  },
  {
    name: "INSTAGRAM",
    imageSrc: instagramLogo,
    url: "https://www.instagram.com/hrmyskyl/", // Replace with your Instagram URL
  },
];

export const createvesLogoData = {
  imageSrc: createvesLogo, // Path to the logo image
  name: "CREATEVES", // Name for the logo
};

// Navbar data
export const navbarData = {
  logo: NavLogo,
  logoAlt: "Logo",
};

// Header data
export const headerData = {
  name: "KAYL TEVES",
  title: ["CREATIVITY", "MEETS", "CODE"],
  description: `Turn your ideas into high-performance solutions. I combine design
  and coding to craft sleek apps, powerful websites, and custom
  software. From concept to launch, every detail is crafted to make
  your vision shine.`,
  buttonText: "Collaboration",
  arrowImage: ArrowDown,
};

// About data
export const aboutData = {
  image: avatarLogo,
  imageAlt: "Avatar",
  description: `Hi, I’m Kayl Jeremiah Teves. Starting with graphic design and UI/UX,
  I’ve transitioned into full-stack development, crafting both websites and applications.
  My focus is on creating visually appealing and highly functional digital experiences.
  I blend design and coding to bring innovative ideas to life, ensuring seamless and
  engaging user interactions across various platforms.`,
  slides: [
    "DESIGN",
    "CODE",
    "PLAY",
    "DESIGN",
    "CODE",
    "PLAY",
    "DESIGN",
    "CODE",
    "PLAY",
    "DESIGN",
    "CODE",
    "PLAY",
  ],
};

export const aboutIcons = [
  {
    name: "DESIGN",
    imageSrc: designLogo,
  },
  {
    name: "CODE",
    imageSrc: codeLogo,
  },
  {
    name: "GAME",
    imageSrc: gameLogo,
  },
];

// Tech Data

export const technologyData = [
  { name: "CSS", imageSrc: cssLogo },
  { name: "DJANGO", imageSrc: djangoLogo },
  { name: "FIGMA", imageSrc: figmaLogo },
  { name: "HTML", imageSrc: htmlLogo },
  { name: "JAVASCRIPT", imageSrc: javascriptLogo },
  { name: "MONGODB", imageSrc: mongodbLogo },
  { name: "MYSQL", imageSrc: mysqlLogo },
  { name: "NEXT.JS", imageSrc: nextjsLogo },
  { name: "NODE.JS", imageSrc: nodejsLogo },
  { name: "PYTHON", imageSrc: pythonLogo },
  { name: "REACT NATIVE", imageSrc: reactNativeLogo },
  { name: "REACT", imageSrc: reactLogo },
  { name: "TAILWIND CSS", imageSrc: tailwindLogo },
  { name: "TYPESCRIPT", imageSrc: typescriptLogo },
];

export const projectData = [
  {
    title: "Sari-Sari Store",
    description:
      "A simple yet robust e-commerce template utilizing NEXTJS for the frontend and FreeAPI for backend services, for frontend playgoard practices.",
    techStack: ["DJANGO", "REACTJS"],
    imageSrc: SSS,
  },
  {
    title: "Asetrak",
    description:
      "A comprehensive logistic web application designed for effectively managing and optimizing the inventory of assets, enhancing efficiency across the board.",
    techStack: ["DJANGO", "REACTJS"],
    imageSrc: Asetrak,
  },
  {
    title: "ERP Consultancy Website",
    description:
      "A professional and user-friendly website developed specifically for the esteemed company providing ERP consultancy services to businesses looking for solutions.",
    techStack: ["DJANGO", "REACTJS"],
    imageSrc: ERP,
  },
  {
    title: "E-commerce APIs",
    description:
      "Rest APIs for e-commerce, it covers, adding to cart, wishlist, products, category, user profile. Tested and working for postman, used for tailored solutions for ecommerce sites.",
    techStack: ["DJANGO"],
    imageSrc: EcomServer,
  },
];
