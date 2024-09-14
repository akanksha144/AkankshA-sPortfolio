import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
   // Ensure this is correctly exported from the icons module
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    python,
    java,
    threads,
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Exercise Finder',
        description: 'Developed a web application that help to find the exercise of certain body with Gif how to do it and youtube videos for that exercise.',
        link: 'https://exploreexercises.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Finance Tracker',
        description: 'Created a full-stack App using Appwrite as a backend where you can read blog of your own created or any other user created.',
        link: 'https://financetracker-bay.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'University Site',
        description: 'Design a WebApp where a user a design a tshirt using image of your own choice and if user cannot find image ,user can ask about it using inbuid AI.',
        link: 'https://universitysite.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Portfolio',
        description: 'Built a complete 3d and animated portfolio .',
        link: 'https://github.com/praveshnexus/portfolio',
    },
    
];