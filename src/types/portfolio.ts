export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    period: string;
    link?: string;
    github?: string;
    demo?: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    location: string;
    period: string;
    highlights: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    location: string;
    period: string;
    gpa?: string;
    courses?: string[];
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image?: string;
    blog_content: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  