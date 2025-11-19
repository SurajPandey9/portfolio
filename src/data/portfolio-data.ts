/**
 * PORTFOLIO DATA - PLACEHOLDER CONTENT
 * 
 * This file contains all the placeholder data for the portfolio website.
 * Replace all content here with your actual information.
 * See CONTENT_GUIDE.md for detailed instructions on updating this data.
 */

export const personalInfo = {
  name: "Suraj Pandey",
  title: "AI-Driven Software Engineer",
  tagline: "Code. Create. Automate. Innovate.",
  email: "suraj.pandey01237@gmail.com",
  phone: "+918601633813",
  location: "Uttar Pradesh ,India",
  avatar: "/images/p1.jpg",
  
  bio: {
  "short": "Python developer focused on building reliable backend systems and scalable applications using Django and modern tooling.",
  
  "long": "I'm a backend-focused developer with hands-on experience in Python, Django, and building scalable web applications. I work confidently with Git, Docker, Redis, and Linux environments, and I have foundational knowledge of AI and machine learning. I enjoy creating clean, maintainable backend architectures and integrating efficient workflows that make applications fast and dependable. When I'm not coding, I explore new tools, improve my development workflow, and learn more about scalable systems and applied machine learning."
},
  
  resume: "/resume/Suraj_Pandey_resume.pdf", // Place your resume in public/resume/
  
  social: {
    github: "https://github.com/SurajPandey9",
    linkedin: "https://www.linkedin.com/in/suraj-pandey-80683023b/",
    portfolio: "https://localhost:8000",

  }
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Django", level: 87, icon: "🟢" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "PostgreSQL", level: 60, icon: "🐘" },
      { name: "Redis", level: 75, icon: "🍃" },
      { name: "REST APIs", level: 80, icon: "🔌" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 93, icon: "📦" },
      { name: "Docker", level: 75, icon: "🐳" },
     // { name: "AWS", level: 70, icon: "☁️" },
      { name: "Figma", level: 85, icon: "🎯" },
      { name: "CI/CD", level: 77, icon: "🔄" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    description: "An AI powered tracker web app which manage your daily expences",
    longDescription: "The AI-Powered Personal Finance Tracker is a smart, full-stack financial management system designed to help users efficiently track their expenses, income, and long-term financial goals. Built using Python, Django, PostgreSQL, Redis, and integrated with AI-powered classification, the platform automates budgeting workflows and provides personalized financial insights.",
    image: "/images/projects/p2.png",
    technologies: ["React", "OpenAI API", "Django","Redis", "Tailwind CSS"],
    category: "Web Developement",
    featured: true,
    demoUrl: "https://personal-finance-tracker-bnm1.onrender.com",
    githubUrl: "https://github.com/SurajPandey9/financial-tracker",
    year: "2025",
    color: "#00FFFF"
  },
 /* {
    id: 2,
    title: "Task Manager",
    description: "A smart task management application with AI-driven prioritization, natural language processing, and predictive analytics.",
    longDescription: "Built an intelligent task management system that uses machine learning to help users prioritize their work. The app learns from user behavior and suggests optimal task scheduling.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "Django Rest API", "TailwindCSS"],
    category: "Full Stack",
    featured: true,
    //demoUrl: "https://demo-task-manager.example.com",
    githubUrl: "https://github.com/SurajPandey9/Todo-app",
    year: "2025",
    color: "#FF6B6B"
  },*/
  /*{
    id: 3,
    title: "Underwater Domain Awareness AI Tool",
    description: "A collaborative workspace with real-time sound activity detection and classification.",
    longDescription: "Created a comprehensive collaboration platform that combines document editing, video calls, and project management in one seamless interface. Built with scalability in mind to handle thousands of concurrent users.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    technologies: ["PyTorch", "CRNN", "Scikit Learn", "Numpy", "Librosa"],
    category: "AIML",
    featured: true,/*
    demoUrl: "https://demo-collab-platform.example.com",
    githubUrl: "https://github.com/alexmorgan/collab-platform",
    year: "2025",
    color: "#4ECDC4"
  },
  {
    id: 4,
    title: "TODO Application",
    description: "A dynamic dashboard for visualizing complex datasets with 3D charts, real-time updates, and customizable widgets.",
    longDescription: "Designed and developed an advanced data visualization platform that transforms complex data into intuitive 3D visualizations. Features include real-time data streaming, custom chart builders, and export capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Three.js", "Python", "FastAPI"],
    category: "Data Visualization",
    featured: false,
    demoUrl: "https://demo-data-viz.example.com",
    githubUrl: "https://github.com/alexmorgan/data-viz-dashboard",
    year: "2025",
    color: "#95E1D3"
  }*/
  
];

export const experience = [
  {
    id: 1,
    company: "Nitrodynamics Aerospace & Defence Pvt. Ltd.",
    logo: "\images\companies\Asset 1.png",
    position: "Software Engineer Intern",
    location: "IIT Kanpur, UP",
    type: "Internship",
    startDate: "2025-04",
    endDate: null, // null means current position
    current: true,
    description: "Leading development of immersive web experiences and scalable full-stack applications and also learning to implement Machine Learning Algorithm in Real Time problem solving.",
    responsibilities: [
      "Built and optimized backend APIs using Python and Django.",

"Worked with PostgreSQL, Redis, and Docker to develop scalable systems."
,
"Integrated AI/ML models into real-world applications.",

"Improved UI components and contributed to full-stack features.",

"Managed deployments and debugging in Linux environments."
,
"Collaborated with engineers, reviewed code, and followed Agile workflows."

    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker","Linux","Classification Model"],
    achievements: [
      "Promoted to Trainee Developer within 6 months",
     // "Received 'Innovation Award' for 3D configurator project"
    ]
  },

];

/*export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at TechVision Studios",
    company: "TechVision Studios",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Alex is an exceptional developer who consistently delivers high-quality work. Their expertise in 3D web development has been invaluable to our team.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "Digital Innovations Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "Working with Alex was a pleasure. They have a great eye for detail and always go above and beyond to ensure project success.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "Alex's ability to bring designs to life with smooth animations and 3D elements is truly impressive. A fantastic collaborator!",
    rating: 5
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-06",
    credentialId: "AWS-CSA-2023-123456",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2022-11",
    credentialId: "META-FE-2022-789012",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  }
];*/

export const education = [
  {
    id: 1,
    institution: "Kanpur Institute of Technology,Kanpur",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    startDate: "2022-09",
    endDate: "2025-07",
    gpa: "7.8/10.0",
    description: "Focused on more deep knowledge of new tecchnology like Artificial Machine Learniing and AI Model Developement.",
    achievements: [
      "First Division With Destiniction",
    ]
  },
  {
    Id : 2,
    institution: "Govt. Polytechnic Rajgarh Mirzapur",
    degree: "Diploma",
    field: "Computer Science & Engineering",
    startDate: "2019-09",
    endDate: "2022-07",
    percentage: "76%",
    description: "Focused on software engineering, algorithms, and Web Deevelopement By using Django and Rest API.",
    achievements: [
      "First Division With Destiniction",
    ]
  }
];

