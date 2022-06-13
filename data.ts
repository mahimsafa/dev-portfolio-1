import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaMedium, FaGithub } from "react-icons/fa";
import { AiFillTwitterSquare, AiOutlineAntDesign, AiOutlineApi, AiFillLinkedin } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill, Education, Experience } from "./types";



import { BsCircleFill } from "react-icons/bs";

export const myDetails =  {
  name: "Mahim Safa",
  title: "Developer",
  description: "I am a developer and cyber security expert with a passion for building applications and securing then. I have a strong background in security and have worked with a wide range of technologies. I am a self taught developer and I am always looking to learn new things and improve my skills.",
  email: 'hi@mahimsafa.com',
  phone: '',
  address: 'Dhaka, Bangladesh',
  socials: [
    {
      name: "Github",
      url: "https://github.com/mahimsafa",
      icon: FaGithub
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahimsafa/",
      icon: AiFillLinkedin
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mahim_safa",
      icon: AiFillTwitterSquare
    },
    {
      name: "Medium",
      url: "https://mahimsafa.medium.com",
      icon: FaMedium
    }
  ]
}

export const education: Education[] = [
  {
    school: "University of Dhaka",
    degree: "Bachelor of Science",
    passing_year: "N/A",
    description: "I am currently pursuing my bachelor degree in geography and environmental science.",
  },
  {
    school: "Satkhira Govt. College",
    degree: "Higher Secondary",
    passing_year: "2019",
    description: "I have completed my Higher Secondary from Satkhira Govt. College with 4.86 GPA. I have a strong background in science and mathematics. During all these period I have been working towards developing my skills in computer science.",
  },
  {
    school: "Satkhira Govt. High School",
    degree: "Secondary",
    passing_year: "2017",
    description: "I have completed my Secondary from Satkhira Govt. High School with 4.94 GPA. I have also perticipated in couple of extra curricular activities cricket club, badminton and other sports.",
  }
];

export const experience: Experience[] = [
  {
    company: "Byte Capsule Ltd.",
    position: "Jr. Security Analyst",
    start_date: "2020",
    end_date: "Present",
    description: "I am currently working as a Jr. Security Analyst at Byte Capsule Ltd. I have worked on a project related to cyber security and I am a active member of cyber security community locally as well as globally.",
    key_techs: ["React", "Node", "Express", "MongoDB", "Django", "Python"]
  },
  {
    company: "Self-Employed",
    position: "Full Stack Developer",
    start_date: "N/A",
    end_date: "",
    description: "I work as a part time developer for some freelance marketplaces. I have a strong background in front-end development and have worked with a wide range of technologies.",
    key_techs: ["React", "Node", "Express", "MongoDB", "Django", "Python"]
  },
];

export const services: Service[] = [
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
    title: "Automation & Scripting",
    about: "I write scripts mainly in <b>Python</b> to automate tasks to save time and effort",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Penetration Testing",
    about:
      "Analyze <b>Applications</b> and <b>servers</b> to findvulnerabilities and fix them accordingly",
  },
  {
    Icon: RiComputerLine,
    title: "CTF Player",
    about:
      "I play <b>CTF</b> as hacker and solve challenges to earn points, badges and most importantly knodledge",
  },
];

export const frameworks: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "93",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bash",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Go",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Flask",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "77",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CI/CD",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "87",
  },
  {
    Icon: BsCircleFill,
    name: "Kubernetes",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "ESXi",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Selenium",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Scapy",
    level: "70",
  },
];

export const projects: IProject[] = [
  { 
    id: 4,
    name: "Reddit Clone (Fullstack)",
    description:
      "This is a full-stack Reddit build. It's frontend is desined with React (Next Js) and backend with Node Js. Two databases are used, one is MongoDB which is used for authentication and the other is PostgreSQL for storing other data. It's a single page application and it's responsive. It's frontend is hosted on Vercel and backend is hosted on Stepzen. For database MongoDB is hosted on Mongo Atlas and PostgreSQL is hosted on Supabase.",
    image_path: "/images/reddit-clone.png",
    deployed_url: "https://reddit-clone-ivory.vercel.app/",
    github_url: "https://github.com/mahimsafa/reddit-clone",
    category: ["web", "development"],
    key_techs: ['Node Js', 'Next Js', 'Tailwind CSS', 'Headless UI', 'GraphQL', 'Apollo', 'MongoDB', 'Postgres', 'Supabase', 'NextAuth', 'Stepzen'],
  },
  { 
    id: 5,
    name: "React Fitness App",
    description:
      "This is a frondend fitness application using vannila React. Frontend is designed with Material UI and css. For fetching backend data I used Rapid API It's a single page application and it's responsive..",
    image_path: "https://camo.githubusercontent.com/746abd821ec7c0224f27176a2ea5c698157b05aaa1f58390059629bf6644dae9/68747470733a2f2f692e6962622e636f2f597439737047632f696d6167652e706e67",
    deployed_url: "https://exquisite-salamander-0b9b1d.netlify.app/",
    github_url: "https://github.com/mahimsafa/react-fitness-app",
    category: ["web", "development"],
    key_techs: ['React Js','CSS', 'Material UI', 'Rapid API'],
  },
  { 
    id: 1,
    name: "Real Time Video Chat",
    description:
      "This app allows two users to video chat with each other in real time.",
    image_path: "https://raw.githubusercontent.com/mahimsafa/video-calling/main/vid_app.png",
    deployed_url: "https://mahims-personal-video-chat.netlify.app/",
    github_url: "https://github.com/mahimsafa/video-calling",
    category: ["web", 'development'],
    key_techs: ["React", "Socket.io", "Node JS", "Express", "MongoDB", "Heroku"],
  },
  { 
    id: 2,
    name: "FlutterFire Note",
    description:
      "This is a clone of Google Keep note application. User can read, create, update, delete notes. It is developed using flutter.",
    image_path: "https://raw.githubusercontent.com/mahimsafa/FlutterFire-note/main/screenshots/img6.png",
    deployed_url: "https://github.com/mahimsafa/FlutterFire-note/releases/tag/v1.0",
    github_url: "https://github.com/mahimsafa/FlutterFire-note",
    category: ["mobile", 'development'],
    key_techs: ['Flutter', 'Dart', 'Firebase', 'Google Auth', 'Google Cloud Firestore'],
  },
  { 
    id: 3,
    name: "Mail Bomber",
    description:
      "Using this tool one can send huge number of mails to a targeted person and flood their inbox.",
    image_path: "https://raw.githubusercontent.com/MahimSafa/MailBomber/master/ebomb.png",
    deployed_url: "#",
    github_url: "https://github.com/mahimsafa/MailBomber",
    category: ["scripting", 'cybersecurity'],
    key_techs: ['Python', 'SMTP Protocol',],
  },
  
];
