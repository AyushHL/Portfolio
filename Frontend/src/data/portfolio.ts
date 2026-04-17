import type { Project, Experience, Education, SkillCategory, Achievement } from "../types";

export const personalInfo = {
  name: "Ayush",
  title: "Software Developer",
  subtitle: "Turning Complex Problems into Scalable and Elegant Solutions",
  email: "Ayush2004002@gmail.com",
  phone: "+91 81301 37518",
  linkedin: "https://linkedin.com/in/AyushHL",
  github: "https://github.com/AyushHL",
  leetcode: "https://leetcode.com/u/AyushHL/",
  instagram: "https://instagram.com/zenith_ayush",
  x: "https://x.com/zenith_ayush",
  shortBio: "I'm a Software Developer proficient in C++ and Python. I enjoy solving Complex Problems, conducting in-depth Research and building Scalable, Elegant Software.",
  bio: "I'm a Computer Engineering student at Delhi Technological University with a strong foundation in C++ and Python. I enjoy solving Complex Problems, conducting in-depth Research and building Scalable, Elegant Software. I focus on turning Challenging Ideas into Simple, Efficient Solutions while continuously learning and growing in Collaborative Environments.",
};

export const education: Education[] = [
  {
    id: "dtu",
    institution: "Delhi Technological University",
    degree: "B.Tech in Computer Engineering",
    period: "Nov 2022 – Present",
    score: "8.78",
    scoreLabel: "CGPA",
  },
  {
    id: "xii",
    institution: "Kendriya Vidyalaya, New Delhi",
    degree: "Class XII (CBSE)",
    period: "Apr 2021 – Mar 2022",
    score: "91.4%",
    scoreLabel: "Percentage",
  },
  {
    id: "x",
    institution: "Kendriya Vidyalaya, New Delhi",
    degree: "Class X (CBSE)",
    period: "Apr 2019 – Mar 2020",
    score: "84.8%",
    scoreLabel: "Percentage",
  },
];

export const experiences: Experience[] = [
  {
    id: "nptel",
    role: "Software Developer",
    company: "NPTEL, IIT Ropar",
    period: "May 2025 – July 2025",
    bullets: [
      "Engineered the Front-End Architecture for an AI-Powered Poll Automation Platform using React and TypeScript, including Dashboards, Poll Creation modules, and Dynamic Form Validation.",
      "Developed Dynamic, Role-based Interactive Dashboards for Hosts and Students ensuring Responsive Layouts and Smooth UI Interactions.",
      "Collaborated with a Cross-functional Team to Build a Scalable Monorepo Architecture using Turborepo, Managing CI/CD Workflows via GitHub and Deploying on Netlify.",
    ],
    github: "https://github.com/AyushHL/poll-automation",
    live: "https://pollautomationdev.netlify.app/",
    certificate: "https://drive.google.com/file/d/1lEE1tGfnldOeaQYf5iplMXmHRCjZIlnj/view",
  },
];

export const projects: Project[] = [
  {
    id: "mindshield-ai",
    title: "MindShield AI",
    description:
      "An AI-Powered Early-Warning Platform using a Bi-LSTM Neural Network for Mental Health Crisis and Suicidal Ideation Detection.",
    bullets: [
      "Developed an AI Inference Service utilizing a Bi-LSTM Neural Network in Python and TensorFlow for Three-Tier Risk Classification.",
      "Architected a Scalable MERN Stack Solution connecting a React Frontend, Node.js REST API and FastAPI Machine Learning Service.",
      "Implemented Secure Data Flow and Real-Time Text Analysis for Mental Health Sentiment Prediction Aligning with 0 to 100 Risk Scores.",
    ],
    techStack: ["TypeScript", "Python", "React", "FastAPI", "TensorFlow", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AyushHL/MindShield-AI",
    live: "https://mindshield-ai.netlify.app/",
    period: "March 2026",
  },
  {
    id: "text-gen-rnn",
    title: "Text Generation Using RNN & LSTM",
    description:
      "A Deep Learning Model trained on Poetry to predict Next-Word Sequences using RNN and LSTM architectures.",
    bullets: [
      "Developed a Text Generation Model using RNN and LSTM in PyTorch on a dataset of 100 poems.",
      "Implemented both One-Hot Encoded RNN and LSTM with Embedding Layer, comparing performance and training efficiency.",
      "Preprocessed textual data using Tokenization and Vocabulary Mapping for efficient sequence modeling.",
    ],
    techStack: ["Python", "PyTorch", "NLP", "RNN", "LSTM"],
    github: "https://github.com/AyushHL/Text-Generation-Using-RNN-and-LSTM",
    period: "March 2025",
  },
  {
    id: "poem-weaver",
    title: "Poem Weaver",
    description:
      "A Modern, MERN Stack Web Application that uses Deep Learning Models to Generate Beautiful, Thematic Poetry based on Seed Words.",
    bullets: [
      "Built an AI Inference Engine using PyTorch, Implementing One-Hot RNN and Embedding LSTM Architectures for Poetry Generation.",
      "Designed a Decoupled Microservice System connecting a Visually Stunning React UI, a Node.js API and a Python Flask Server.",
      "Integrated MongoDB to Persist Global Generated Poems and LocalStorage for Secure, Localized Browsing History.",
    ],
    techStack: ["TypeScript", "Python", "React", "PyTorch", "Flask", "MongoDB"],
    github: "https://github.com/AyushHL/Poem-Weaver",
    live: "https://poemweaver-ai.netlify.app/",
    period: "April 2026",
  },
  {
    id: "all-in-one-calculator",
    title: "All-in-One Calculator Hub",
    description:
      "A Modern, Full-Featured Calculator Application Providing Diverse Functionalities like Scientific, Age, BMI, and Unit Conversions.",
    bullets: [
      "Engineered a Modular React & TypeScript Front-End Integrating 6 Distinct Calculator Systems (Basic, Scientific, BMI, Age, Unit, and Number Converters) to Maximize Code Reuse and Scalability.",
      "Implemented Secure User Authentication with JWT and Google OAuth 2.0 alongside Personal Profile Management.",
      "Integrated a Personal Notepad with Auto-Save Functionality and a User-Specific Centralized History Tracking System.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AyushHL/All-In-One-Calculator",
    live: "https://allinonecalculatorhub.netlify.app/",
    period: "February 2026",
  },
  {
    id: "snake-chaser",
    title: "Snake Chaser Game",
    description:
      "A Dynamic 2D Maze Navigation Game where the Player avoids a Snake while reaching the Goal.",
    bullets: [
      "Developed a Dynamic 2D Maze Navigation Game in C using a 2D Array to Represent the Map.",
      "Implemented Real-time Player Movement and an Undo Feature using a Stack-based Linked List (LIFO) to Track Move History.",
      "Game Map Initialization using File I/O for Persistent Level Data.",
    ],
    techStack: ["C", "Linked List", "Stack", "File I/O"],
    github: "https://github.com/AyushHL/Snake-Chaser-Game",
    period: "February 2024",
  },
    {
    id: "weather-now",
    title: "Weather Now",
    description:
      "A Modern, Responsive Weather Application Built with React, TypeScript and Vite to Provide Real-time Weather Information for any City Worldwide.",
    bullets: [
      "Developed a Lightning-fast, Modern Weather Forecasting Application utilizing React, TypeScript and Vite.",
      "Integrated the Open-Meteo Weather and Geocoding APIs to Accurately Fetch and Display Real-time Temperature, Wind Speed and Condition Data.",
      "Crafted a Fully Responsive, Clean Glassmorphism UI using Tailwind CSS and Lucide React Icons for an Intuitive and Dynamic User Experience.",
    ],
    techStack: ["TypeScript", "React", "Open-Meteo API"],
    github: "https://github.com/AyushHL/Weather-Now",
    live: "https://weather-now-project-ag.netlify.app/",
    period: "September 2025",
  },
  {
    id: "selection-sort-animation",
    title: "Selection Sort Animation",
    description:
      "A C Programmed Visualizer for the Selection Sort Algorithm utilizing System Calls and ANSI Escape Codes for Dynamic, Colorized Terminal Output.",
    bullets: [
      "Developed an animation for the Selection Sort Algorithm using C.",
      "Utilized System Calls and ANSI Escape Codes to Clear the Screen and Colorize the Output for Enhanced Visualization.",
      "Integrated Windows-Specific Functions and Delays to Control the Animation Flow.",
    ],
    techStack: ["C"],
    github: "https://github.com/AyushHL/Selection-Sort-Animation",
    period: "October 2023",
  },
  {
    id: "tic-tac-toe-multiplayer",
    title: "Tic-Tac-Toe Game with Server-Client Architecture",
    description:
      "A Multiplayer Tic-Tac-Toe Game featuring a Server-Client Architecture using Java Sockets and a User-Friendly Swing GUI.",
    bullets: [
      "Developed a Multiplayer Tic-Tac-Toe Game with a Server-Client Architecture using Java and Sockets to Manage Game Logic and Player Interactions.",
      "Designed a User-Friendly Client GUI with Java Swing for Seamless Gameplay.",
    ],
    techStack: ["Java", "Java Swing", "Socket Programming"],
    github: "https://github.com/AyushHL/Tic-Tac-Toe-Multiplayer-Game",
    period: "November 2024",
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [{ name: "C" }, { name: "C++" }, { name: "Python" }, { name: "Java" }],
  },
  {
    category: "Frontend",
    skills: [{ name: "React" }, { name: "TypeScript" }, { name: "HTML/CSS" }],
  },
  {
    category: "Backend",
    skills: [{ name: "Node.js" }, { name: "Express" }],
  },
  {
    category: "Tools & Platforms",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Visual Studio Code" }, { name: "Python IDLE" }, { name: "Microsoft Azure" }, { name: "MongoDB Atlas" }, { name: "Netlify" }],
  },
  {
    category: "Databases",
    skills: [{ name: "MySQL" }, { name: "MongoDB" }],
  },
  {
    category: "Key Courses",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOP" },
      { name: "OS" },
      { name: "DBMS" },
      { name: "CN" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "leetcode-125",
    title: "Solved 125+ DSA problems on LeetCode across varying Difficulty Levels",
    icon: "🧩",
  },
  {
    id: "leetcode-contest",
    title: "Top 30% in LeetCode Biweekly Contest 133 — Rank 9663",
    icon: "🏆",
  },
];

export const extracurricular = {
  title: "Desh Ke Mentor Initiative",
  description:
    "Recognized for mentoring students at a Government School in Delhi under the Desh Ke Mentor Initiative. Awarded by the Delhi Commission for Protection of Child Rights (Govt. of NCT of Delhi) and Delhi Technological University, and honored by Mrs. Atishi Marlena, Former Education Minister of Delhi.",
  awardedBy: ["Delhi Commission for Protection of Child Rights", "Delhi Technological University"],
  honouredBy: "Mrs. Atishi Marlena, Former Education Minister of Delhi",
};
