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
    Icon: BsCircleFill,
    name: "python",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "python",
    level: "80",
  },
    {
    Icon: BsCircleFill,
    name: "python",
    level: "40",
  },
    {
    Icon: BsCircleFill,
    name: "python",
    level: "90",
  },
    {
    Icon: BsCircleFill,
    name: "python",
    level: "90",
  },
    {
    Icon: BsCircleFill,
    name: "python",
    level: "60",
  },
];

export const tools: iSkill[] = [
  {
    Icon: BsCircleFill,
    name: "python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "python",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "python",
    level: "90",
  },
];

export const projects: iProject[] = [
  {
    id: 1,
    name: "Scheduler",
    description:
      "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/scheduler",
    category: ["React"],
    key_techs: ["React", "Axios", "Storybook", "Webpack", "JEST"],
  },
  {
    id: 2,
    name: "Lockdown",
    image_path: "/images/menupic.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/lockdown",
    category: ["React", "Phaser"],
    description:
      "Lockdown is a 2D topdown game where zombies have taken over. You must collect enough samples to eradicate the virus to save the world.",
    key_techs: ["React", "Phaser", "Javascript", "NodeJs", "Tiled"],
  },

  {
    id: 3,
    name: "Jungle",
    image_path: "/images/category.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/jungle",
    category: ["Ruby"],
    description:
      "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example.",
    key_techs: ["Ruby", "Rails", "Stripe", "HTML", "CSS"],
  },

  {
    id: 4,
    name: "Alfresco",
    image_path: "/images/fav.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/dpappo/alfresco",
    category: ["Node.js", "jQuery", "Express"],
    description:
      "Find and share great outdoor dining spots with this nifty social map-app",
    key_techs: [
      "jQuery",
      "PostgreSQL",
      "Express",
      "Leaflet",
      "EJS",
      "bcrypt",
      "SASS",
    ],
  },

  {
    id: 5,
    name: "Tweeter",
    image_path: "/images/desktop.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/tweeter",
    category: ["Node.js", "jQuery", "Express"],
    description: "Tweeter is a simple, single-page Twitter clone.",
    key_techs: ["jQuery", "AJAX", "Express", "MongoDB"],
  },

  {
    id: 6,
    name: "TinyApp",
    image_path: "/images/login_page.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/tinyapp",
    category: ["Node.js", "Express"],
    description:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    key_techs: ["NodeJs", "EJS", "bcrypt"],
  },
  {
    id: 7,
    name: "Weather App",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/weather-app",
    category: ["React"],
    description:
      "A simple weather app built with React that uses the Open Weather API to check the forecast globally and returns the date, temperature, and type of weather.",
    key_techs: ["React", "Javascript", "HTML", "CSS", "Open-Weather-API"],
  },
  {
    id: 8,
    name: "PipBoy Clone",
    image_path: "/images/pipboymarkIV.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/pipboy-clone",
    category: ["jQuery"],
    description:
      "A simple Pipboy Mark IV clone from Fallout 4. This project was designed to practice HTML and CSS styling properties along with any advanced CSS topics. ",
    key_techs: ["HTML", "CSS", "Monofonto", "Tether", "Bootstrap", "jQuery"],
  },
  {
    id: 9,
    name: "Bulk Image Downloader",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/bulk-image-downloader",
    category: ["jQuery"],
    description:
      "This Chrome Extension was built using jQuery and Javascript to allow the user to download all the images on a google image search.  ",
    key_techs: ["HTML", "CSS", "jQuery"],
  },
  {
    id: 10,
    name: "Crypto Tracker",
    image_path: "/images/logo.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/crypto-tracker",
    category: ["React"],
    description:
      "This React App was built using the CoinGecko API and displays the top 100 cryptocurrencies live by market cap. ",
    key_techs: ["React", "Axios", "Testing-Library", "CoinGecko-API"],
  },
  {
    id: 10,
    name: "Recipe Finder",
    image_path: "/images/food.png",
    deployed_url: "https://www.google.ca/",
    github_url: "https://github.com/adamm13/recipe-finder",
    category: ["React", "TypeScript"],
    description:
      "This App was built to practice using TypeScript and React. It uses axios in a proxy server to call the Recipe Puppy API to return the queried results. ",
    key_techs: ["React", "TypeScript", "Chalk", "Recipe-Puppy-API"],
  },
];