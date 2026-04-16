export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  techStack: string[];
  github?: string;
  live?: string;
  period: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  github?: string;
  live?: string;
  certificate?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
