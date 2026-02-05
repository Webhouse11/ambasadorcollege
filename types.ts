
export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export interface StaffMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}
