export interface TechItem {
  name: string;
}

export interface TechCategory {
  title: string;
  description?: string;
  icon?: string;
  items: TechItem[];
}

export interface Experience {
  company: string;
  role: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract' | 'Education';
  duration: string;
  current?: boolean;
  achievements: string[];
  skills?: string[];
}

export interface ProfileCard {
  platform: string;
  username: string;
  link: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  impact?: string;
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}
