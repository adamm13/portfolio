import {RiComputerLine} from 'react-icons/ri'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { iProject, iService, iSkill } from './type'
import { BsCircleFill } from 'react-icons/bs'

export const services: iService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: iSkill[] = [
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const tools: iSkill[] = [
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "python",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: iProject[] = [
  {
    name: "Scheduler",
    description:
      "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/scheduler",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Lockdown",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/lockdown",
    category: ["react"],
    description:
      "Lockdown is a 2D topdown game where zombies have taken over. You must collect enough samples to eradicate the virus to save the world.",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Jungle",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/jungle",
    category: ["node", "mongo", "react"],
    description:
      "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example.",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Alfresco",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/dpappo/alfresco",
    category: ["node", "react"],
    description:
      "Find and share great outdoor dining spots with this nifty social map-app",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/tweeter",
    category: ["django", "react"],
    description: "Tweeter is a simple, single-page Twitter clone.",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "TinyApp",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/tinyapp",
    category: ["express"],
    description:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/lockdown",
    category: ["express"],
    description:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "test7",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/lockdown",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];