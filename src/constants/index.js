// HAVE TO EDIT BEFORE DEPLOYING

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  freelancer,
  bocacode,
  alterco,
  pitchvote,
  metaversus,
  fashion,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cyber Security Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Alumni",
    company_name: "BocaCode",
    icon: bocacode,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Learned the fundamentals of software development, including HTML, CSS, JavaScript, React, Node, Express, SQL, Mongo, and more. I also learned how to deploy applications to AWS, Google cloud, MOngodb & Vercel.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Conducted a code review of my own work and provided an explanation of my code to the instructor's.",
      "Worked on real-world projects. This gave me the opportunity to apply my skills to real-world problems, which helped to develop a practical knowledge.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "BocaCode",
    icon: bocacode,
    iconBg: "#383E56",
    date: "Oct 2022 - May 2023",
    points: [
      "Leading successful Saturday class sessions with a comprehension rate of over 70% among students.",
      "Working as part of a 15-member team using AGILE/SCRUM methodology to create a FERN stack application using TypeScript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Guiding and supporting small groups of students in various classroom subjects, including debugging, Javascript exercises, Databases (Firebase, MongoDB, and SQL), and APIs.",
    ],
  },
  {
    title: "IOT Developer Intern",
    company_name: "Alterco Robotics",
    icon: alterco,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Exploring the intricacies of IoT and developing a project to construct a Full Stack Software that can collect data and manage devices within a local network.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Ensuring IoT devices are secure and protected using WebSockets, MQTT, and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Partnering with clients to identify business needs and requirements to deliver solutions that meet their goals.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other clients.",
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "I highly recommend Edgar for his outstanding proficiency in IoT, delivering exceptional results with a keen focus on innovation and creating robust solutions.",
    name: "Rodrigo Henriques",
    designation: "Senior Software Engineer",
    company: "Alterco Robotics",
    image: "https://ca.slack-edge.com/TTEHN9E8N-U03C3ED0SNN-f27e02056398-512",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Edgar does. Recomendable for future clients.",
    name: "Alexandra Pastrana",
    designation: "Founder",
    company: "Fashion Boutiqe8",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Edgar has created an impressive portfolio web app that showcases their coding skills, creativity, and professional growth, making them a standout candidate for any tech-related position.",
    name: "Bridgette Lemus",
    designation: "Director of Career Services",
    company: "Boca Code",
    image: "https://ca.slack-edge.com/TTEHN9E8N-U037PV19J6L-17f0fb7c328c-512",
  },
  {
    testimonial:
      "Edgar is not only passionate about building secure apps, but is constantly learning and eagerly improving — skills I see as top priorities in all candidates.",
    name: "Todd Albert",
    designation: "Founder",
    company: "Boca Code",
    image: "https://ca.slack-edge.com/TTEHN9E8N-UTCBF2YEL-9f0807c7d510-512",
  },
];

const projects = [
  {
    name: "Pitch Vote",
    description:
      "A comprehensive pitch voting platform, that allows users to create, vote, and comment on the contestants' pitches",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "Ant-Desing",
        color: "pink-text-gradient",
      },
    ],
    image: pitchvote,
    source_code_link: "https://github.com/bocacode/pitch-vote",
  },
  {
    name: "Meta Versus",
    description:
      "Web application that enables users to see the world of a metaverse, and how it can be used to create a better future.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/beboopr/-Metaverus_Webapp",
  },
  {
    name: "Fashion Boutiqe8",
    description:
      "A fashion web application that allows users to shop for their favorite clothes, shoes and accessories.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "SCSS & MUI",
        color: "pink-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://github.com/beboopr/Fashion-WebApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
