import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Database,
  Server,
  Terminal,
  Globe,
  Cpu
} from "lucide-react";

export const skills = [
  "C/C++", "Python", "Java", "JavaScript", "SQL", "PHP",
  "Node.js", "Express.js", "React.js", 
  "MySQL", "MongoDB",
  "Git", "Docker", "Postman", "Linux",
  "REST APIs", "JWT Auth", "Data Structures & Algorithms"
];

export const projects = [
  {
    title: "Satellite Data Processing (WEB-GIS)",
    description: "A Web-GIS platform analyzing Sentinel-2 imagery for crop health using Gemini AI. Features include NDVI/SAVI modeling, Google Earth Engine integration, and AI-powered yield forecasting.",
    tags: ["Python", "Gemini API", "Leaflet.js", "Google Earth Engine"],
    link: "#",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    title: "Job-Seeking Platform",
    description: "Production-ready full-stack job portal with separate roles for students/employers. Features secure JWT auth, optimized MySQL queries (40% faster), and RESTful APIs for resume management.",
    tags: ["Node.js", "Express.js", "MySQL", "JWT"],
    link: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
  }
];

// Mapping Education to Certifications section as requested to fill it
export const certifications = [
  {
    name: "B.Tech in Computer Science & Engineering",
    issuer: "IIIT Jabalpur",
    date: "2023 – 2027",
    icon: GraduationCap
  },
  {
    name: "Intermediate (MPC)",
    issuer: "Sri Chaitanya Junior College",
    date: "2020 – 2022",
    icon: FileText
  }
];

export const achievements = [
  {
    title: "CodeChef 2-Star",
    description: "Max Rating: 1550. Participated in 35+ competitive programming contests.",
    icon: Award
  },
  {
    title: "DSA Problem Solver",
    description: "Solved 400+ Data Structures & Algorithms problems across LeetCode, Codeforces, and CodeChef.",
    icon: Code2
  },
  {
    title: "LeetCode Rating: 1578",
    description: "Consistent problem solver with a strong grasp of algorithmic efficiency.",
    icon: Terminal
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin
  },
  {
    name: "Email",
    url: "mailto:saitejareddynamala@gmail.com",
    icon: Mail
  }
];

export const personalInfo = {
  name: "Saiteja Reddy Namala",
  title: "Aspiring Software Developer",
  email: "saitejareddynamala@gmail.com",
  phone: "+91-7989738432",
  summary: "Aspiring Software Developer with strong foundations in Python, C++, backend engineering, and scalable system design. Experienced in REST API development, authentication systems, database-driven applications, and AI-driven automation. Passionate about solving real-world problems using clean engineering and efficient architecture."
};
