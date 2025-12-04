import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export const skills = [
  "React.js", "Node.js", "Express.js", "MongoDB", 
  "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL",
  "Git", "Docker", "AWS", "Figma"
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, team workspaces, and drag-and-drop kanban boards.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
  },
  {
    title: "AI Content Generator",
    description: "SaaS application leveraging OpenAI's API to generate marketing copy and blog posts for businesses.",
    tags: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  }
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Award
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    icon: Code2
  },
  {
    name: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "2023",
    icon: GraduationCap
  }
];

export const achievements = [
  {
    title: "Hackathon Winner 2024",
    description: "First place in the Global Tech Innovation Hackathon for building a sustainable energy tracking app.",
    icon: Award
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to several major React ecosystem libraries with over 50 merged PRs.",
    icon: Github
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
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: Mail
  }
];
