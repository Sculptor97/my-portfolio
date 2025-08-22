const logotext = "LEGHA-GHA KANG";
const meta = {
  title: "LEGHA-GHA KANG",
  description:
    "I’m LEGHA-GHA KANG a Full stack devloper, currently working in Yaounde",
};

const introdata = {
  title: "I’m LEGHA-GHA KANG",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop web apps",
  },
  description:
    "I am a highly motivated Full Stack Web Developer with a degree in Software Engineering (2022). My experience spans both backend and frontend development, equipping me with a comprehensive skill set to create dynamic, responsive, and efficient web applications.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme: "I am a highly motivated Full Stack Web Developer with a degree in Software Engineering (2022). My experience spans both backend and frontend development, equipping me with a comprehensive skill set to create dynamic, responsive, andefficient web applications. With a strong background in teaching web developmentand programming, coupled with hands-on experience in building production-levelapplications, I am passionate about delivering seamless user experiences and designing scalable architectures. I am eager to leverage my full stack skills in a challenging development role that allows me to contribute effectively to innovativeprojects.",
};
const worktimeline = [
  {
    jobtitle: "Backend Developer",
    where: "KitsAfriq Sarl",
    date: "2021 - 2023",
  },
  {
    jobtitle: "Frontend Developer",
    where: "Vmedia Yaounde",
    date: "2023 - 2024",
  },
  {
    jobtitle: "Frontend Developer",
    where: "Trust Consulting",
    date: "2024 - present",
  },
];

const skills = [
  {
    name: "React",
    value: 90,
  },
  {
    name: "Node.js",
    value: 85,
  },
  {
    name: "Express",
    value: 80,
  },
  {
    name: "Next.js",
    value: 80,
  },
  {
    name: "MongoDB",
    value: 85,
  },
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "Reactflow",
    value: 70,
  },
  {
    name: "GSAP",
    value: 90,
  },
  {
    name: "Git",
    value: 90,
  },
  {
    name: "Docker",
    value: 70,
  },
  
];

const services = [
  {
    title: "Web Development",
    description:
      "I develop web applications using React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Ecommerce Development with CMS",
    description:
      "I develop ecommerce websites with CMS like Shopify, Wordpress, Wix, etc.",
  },
  {
    title: "Backend Development",
    description:
      "I develop backend applications using Node.js, Express, and MongoDB.",
  },
];

const dataportfolio = [
  {
    id: "sentiment-analysis-extension",
    title: "Sentiment Analysis Chrome Extension",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=500&fit=crop&grayscale",
    description: "A Chrome extension that analyzes webpage content sentiment and recommends similar content",
    shortDescription: "Chrome extension for content sentiment analysis",
    technologies: ["React", "TypeScript", "Sentiment API", "Chrome Extensions API"],
    challenge: "Creating a seamless browser extension that could analyze any webpage content in real-time and provide meaningful sentiment insights while maintaining performance and user privacy.",
    solution: "Developed a lightweight React-based extension with TypeScript for type safety. Implemented efficient content parsing algorithms and integrated with sentiment analysis APIs to provide real-time insights. Added smart caching mechanisms to improve performance and reduce API calls.",
    features: [
      "Real-time sentiment analysis of webpage content",
      "Content recommendations based on sentiment",
      "User-friendly dashboard with sentiment visualization",
      "Privacy-focused design with local processing",
      "Customizable sentiment thresholds"
    ],
    deployedLink: "https://chromewebstore.google.com/detail/browsebright/jgjgjgjgjgjgjgjgjgjgjgjgjgjgjgjg",
    githubLink: "https://github.com/nkeumosoft/BrowseBright",
    isDeployed: true
  },
  {
    id: "whatsapp-automation-platform",
    title: "WhatsApp Messaging Automation Platform",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=350&fit=crop&grayscale",
    description: "A comprehensive WhatsApp automation platform for workflow management and contact management",
    shortDescription: "WhatsApp automation platform with workflow management",
    technologies: ["React", "TypeScript", "ReactFlow", "GSAP", "Tailwind CSS", "Node.js"],
    challenge: "Building a complex automation platform that allows users to create intricate workflows for WhatsApp messaging, manage large contact databases, and provide a seamless user experience for both technical and non-technical users.",
    solution: "Led the entire frontend development using React and TypeScript. Implemented ReactFlow for visual workflow creation, GSAP for smooth animations, and Tailwind CSS for responsive design. Created an intuitive drag-and-drop interface for workflow building and comprehensive contact management system.",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "Contact management and segmentation",
      "WhatsApp template creation and management",
      "Real-time chat interface",
      "Analytics and reporting dashboard",
      "Multi-user collaboration features"
    ],
    deployedLink: "https://app.verboticls.com/",
    githubLink: "https://github.com/Verbotic/appointment-booking-frontend",
    isDeployed: true
  },
  {
    id: "alien-shooting-game",
    title: "Alien Shooting Game",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop&grayscale",
    description: "A fun and engaging 2D shooting game built with Python and Pygame",
    shortDescription: "2D shooting game with Python and Pygame",
    technologies: ["Python", "Pygame", "Object-Oriented Programming"],
    challenge: "Creating an engaging 2D shooting game with smooth gameplay mechanics, collision detection, scoring system, and multiple levels while ensuring optimal performance and user experience.",
    solution: "Developed a complete 2D shooting game using Python and Pygame. Implemented object-oriented design patterns for game entities, created smooth player movement and shooting mechanics, added collision detection systems, and designed multiple levels with increasing difficulty.",
    features: [
      "Smooth player movement and shooting mechanics",
      "Multiple enemy types with different behaviors",
      "Collision detection and physics",
      "Scoring system and high score tracking",
      "Multiple levels with increasing difficulty",
      "Sound effects and visual feedback",
      "Game over and restart functionality"
    ],
    deployedLink: "#",
    githubLink: "https://github.com/Sculptor97/Alien_invasion",
    isDeployed: false
  },
  {
    id: "fantasy-premier-league-refactor",
    title: "Fantasy Premier League Insights Refactor",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=450&fit=crop&grayscale",
    description: "Performance optimization and refactoring of a football statistics website",
    shortDescription: "Fantasy Premier League statistics platform refactor",
    technologies: ["TypeScript", "React", "Shadcn UI", "Fantasy Premier League API", "AOS"],
    challenge: "Refactoring and improving the performance of an existing website that manages complex football statistics and fantasy premier league data, while maintaining data accuracy and improving user experience.",
    solution: "Completely refactored the codebase using TypeScript for better type safety and React for improved component architecture. Implemented Shadcn UI for consistent design system and AOS for smooth scroll animations. Optimized API calls and data processing for better performance.",
    features: [
      "Real-time football statistics and analytics",
      "Fantasy Premier League player insights",
      "Performance-optimized data visualization",
      "Responsive design with smooth animations",
      "Advanced filtering and search capabilities",
      "Historical data analysis and trends"
    ],
    deployedLink: "https://www.fplinsights.com/",
    githubLink: "https://github.com/FPL-insights/fpl-insights",
    isDeployed: true
  },

  {
    id: "agency-portfolio",
    title: "Agency Portfolio Website",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&grayscale",
    description: "Modern agency portfolio website showcasing company services and projects",
    shortDescription: "Modern agency portfolio with animations",
    technologies: ["React", "GSAP", "Shadcn UI", "TypeScript", "Tailwind CSS"],
    challenge: "Creating a modern, visually appealing agency portfolio that effectively showcases the company's services, team, and projects while providing an engaging user experience with smooth animations and professional design.",
    solution: "Built a comprehensive agency portfolio using React and TypeScript. Implemented GSAP for smooth scroll animations and interactive elements, used Shadcn UI for consistent component design, and created a responsive layout that works seamlessly across all devices.",
    features: [
      "Modern, responsive design with smooth animations",
      "Interactive project showcase with filtering",
      "Team member profiles and contact information",
      "Service offerings with detailed descriptions",
      "Testimonials and client reviews section",
      "Contact form with email integration",
      "SEO optimized with meta tags and structured data"
    ],
    deployedLink: "https://nkeumosoft.com/",
    githubLink: "https://github.com/nkeumosoft/agency-portfolio-v3",
    isDeployed: true
  },
  {
    id: "real-estate-showcase",
    title: "Real Estate Product Showcase",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=550&fit=crop&grayscale",
    description: "Single product showcase website for a premium real estate property",
    shortDescription: "Premium real estate property showcase",
    technologies: ["React", "GSAP", "Shadcn UI", "TypeScript", "Tailwind CSS"],
    challenge: "Creating an immersive single-product website that effectively showcases a premium real estate property, highlighting its unique features and creating an emotional connection with potential buyers.",
    solution: "Developed a focused single-product website using React and TypeScript. Implemented GSAP for smooth scroll animations and interactive elements, used high-quality imagery and virtual tours, and created an intuitive user experience that guides visitors through the property's features.",
    features: [
      "Immersive property showcase with high-quality imagery",
      "Interactive virtual tour and 360° views",
      "Detailed property specifications and amenities",
      "Location highlights and neighborhood information",
      "Contact forms and inquiry system",
      "Mobile-responsive design for on-the-go viewing",
      "Fast loading times optimized for image-heavy content"
    ],
    deployedLink: "https://app.gohighlevel.com/v2/preview/Y3U7A0V281JHp10Mg1ho",
    githubLink: "#",
    isDeployed: true
  }
];

const contactConfig = {
  YOUR_EMAIL: "kanglegha@gmail.com",
  YOUR_FONE: "+237 6 83 17 93",
  description: "Let's talk about your project",
  YOUR_SERVICE_ID: "service_c0k3d6e",
  YOUR_TEMPLATE_ID: "template_sg4645i",
  YOUR_USER_ID: "aVCRRYuCl7qdrvZjv",
};

const socialprofils = {
  github: "https://github.com/Sculptor97",
  facebook: "https://facebook.com",
  linkedin: "www.linkedin.com/in/sculptork",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
