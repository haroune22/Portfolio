import {
  mobile,
  backend,
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
  mysql,
  next,
  Weather,
  threejs,
  Admin,
  AiText,
  Chat,
  Ecommerce,
  Netflex,
  Social,
  Youtube,
  portf,
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
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Next JS",
    icon: next,
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
    name: "MySQL",
    icon: mysql,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js & Next.js, including CSS styling with Sass and Tailwind CSS.",
      "Implementing engaging animations and integrating 3D models into React.js projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designing and implementing web application database structures using Node.js.",
      "Working with MongoDB, MySQL, and Firebase for efficient data storage and retrieval.",
      "Implementing user authentication and real-time data synchronization.",
      "Collaborating with frontend developers to integrate frontend functionality with backend APIs.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and Nodejs.",
      "Integrating databases like MongoDB, MySQL, and Firebase with React.js and Next.js.",
      "Implementing server-side rendering (SSR) & (CSR) and data fetching from databases.",
      "Designing efficient database schemas and performing database optimizations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflex-Clone",
    description:
      "Experience the future of movie streaming with our React UI Design Netflix Clone. This full-stack app, powered by JWT, React Hooks, and Context API, offers a comprehensive movie-watching experience. Explore a vast library of movies, enjoy a seamless user interface, and stay up-to-date with the latest releases. With our admin dashboard, effortlessly create, update, and delete movies and lists. Elevate your streaming experience today and embrace the future of entertainment.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MERN-Stack",
        color: "red-text-gradient",
      },
    ],
    image: Netflex,
    source_code_link: "https://github.com/haroune22/Netflex-Clone",
  },
  {
    name: "Social-app",
    description:
      "Immerse yourself in the world of social media with our cutting-edge Full-stack Social Media App. Powered by hooks, Context API, React-query, JWT, and Cookies, this app revolutionizes the way you connect and share your life with friends. Create a user profile, seamlessly share posts and stories, and stay connected with your loved ones. Engage in vibrant discussions by commenting on posts, creating a dynamic and interactive community. Experience the ultimate social media platform that keeps you connected and allows you to share your unique story with the world.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "ref-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
    ],
    image: Social,
    source_code_link: "https://github.com/haroune22/Social-app",
  },
  {
    name: "Youtube-Clone",
    description:
      "Introducing our YouTube-Clone app, designed with React and Styled Components, utilizing hooks and functional components. Powered by Reactjs, Node, MongoDB, and Firebase, our app offers seamless video sharing capabilities. With features like likes, dislikes, comments, and following, you can engage with the community and support your favorite content creators. Take advantage of Redux Toolkit, JWT Cookies, and Firebase Storage for enhanced functionality. Join us today and unlock a world of video sharing possibilities.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
      {
        name: "Styled-Component",
        color: "black-text-gradient",
      },
    ],
    image: Youtube,
    source_code_link: "https://github.com/haroune22/Youtube-Clone",
  },
  {
    name: "TempoWeather",
    description:
      "Our weather app is a user-friendly platform that allows you to access detailed weather information for any city you choose. Whether you're planning a trip, or simply staying informed, our app provides a seamless experience with responsive design across various devices. Stay ahead of changing weather conditions, hourly and weekly forecasts, our app ensures you're always prepared for whatever Mother Nature brings your way.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/haroune22/Weather-App.git",
    source_app_link: "https://weather-app-1f5578.netlify.app/",
  },
  {
    name: "Admin",
    description:
      "Introducing the Admin Panel: a powerful, intuitive web application built with React.js, Material-UI, Context, Recharts, and Sass. Efficiently manage users, products, and orders while tracking transactions and calculating revenue. The visually appealing interface and comprehensive features make it ideal for ecommerce or movie apps. Simplify operations, filter data, and take control with this professional admin tool.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: Admin,
    source_code_link: "https://github.com/haroune22/Admin-Panel",
    source_app_link: "https://harouneadminpanel.netlify.app/",
  },
  {
    name: "E-Commerce",
    description:
      "Discover E-Commerce App: a modern shopping platform with React, Strapi, and Stripe integration. Explore categories and subcategories, add to cart, Add items to your cart and seamlessly complete transactions using the integrated Stripe payment system. Filter products by price for a tailored shopping experience. Elevate your online shopping with this stylish and convenient app.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/haroune22/E-Commerce-2",
  },
  {
    name: "Ai-Text-Summarizer",
    description:
      "Discover our Article Summarizer Application: Effortlessly summarize articles or websites in seconds with our user-friendly Article Summarizer App. Powered by OpenAI's GPT model, Reactjs, and Tailwind CSS. Customize summary length, copy URLs, and summarize multiple texts without losing previous ones. Experience the efficiency of instant information digestion and stay ahead of the game.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Open-Ai",
        color: "text-red",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: AiText,
    source_code_link: "https://github.com/haroune22/AI-Text-Summarizer",
    source_app_link: "https://ai-text-summarizer.netlify.app/",
  },
  {
    name: "Chat-app",
    description:
      "Introducing our Chat App, a real-time private messaging application designed with React and Firebase. Stay connected with friends and loved ones through seamless and responsive communication .you can create your own profile, login securely, and find and connect with friends through intuitive search functionality. Share images to enhance your conversations and make them more engaging. Experience the convenience and excitement of our Chat App as you connect, chat, and share with those who matter most.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Chat,
    source_code_link: "https://github.com/haroune22/Chat-app",
    source_app_link: "https://harounechatapp.netlify.app/",
  },
  {
    name: "Portfolio",
    description:
      "Introducing our Next.js 13 Full Stack App, a powerful portfolio website built with App Router, Auth.js, MongoDB, and SSR/CSR components. Showcase your work and skills with a stunning and responsive portfolio. Create and publish your own blog posts to share your insights and experiences. With secure login functionality, your data is protected. Experience the seamless navigation and enhanced performance of Next.js 13 as you build your professional online presence.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "swr",
        color: "pink-text-gradient",
      },
    ],
    image: portf,
    source_code_link: "https://github.com/haroune22/Portfolio-Nextjs",
  },
];

export { services, technologies, experiences, testimonials, projects };
