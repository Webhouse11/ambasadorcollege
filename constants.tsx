
import React from 'react';
import { BookOpen, Users, Award, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { NavItem, StatItem, ProgramItem, NewsItem, StaffMember, SlideItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Staff', href: '#staff' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const SLIDES: SlideItem[] = [
  {
    id: 1,
    highlight: "Academic Excellence",
    title: "Building Global Leaders",
    subtitle: "Nurturing the next generation of innovators and thinkers in the historic city of Ile-Ife.",
    image: "https://lh3.googleusercontent.com/d/1w7Mz7CoAGVH2O3ud1_KMu2nR7HRXfVdW",
    ctaPrimary: "Apply Today",
    ctaSecondary: "Our Vision"
  },
  {
    id: 2,
    highlight: "Modern Facilities",
    title: "Innovation in Learning",
    subtitle: "State-of-the-art laboratories and digital classrooms designed for the 21st-century student.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
    ctaPrimary: "Tour Campus",
    ctaSecondary: "Facilities"
  },
  {
    id: 3,
    highlight: "Character First",
    title: "Values That Last",
    subtitle: "Integrating strong moral foundations with a rigorous academic curriculum.",
    image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Learn More",
    ctaSecondary: "Core Values"
  },
  {
    id: 4,
    highlight: "Sports & Athletics",
    title: "Beyond The Classroom",
    subtitle: "Developing teamwork, discipline, and resilience through our diverse athletic programs.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
    ctaPrimary: "Athletics",
    ctaSecondary: "Join Team"
  },
  {
    id: 5,
    highlight: "Creative Arts",
    title: "Unlock Creative Potential",
    subtitle: "From music to fine arts, we encourage every student to find their unique creative voice.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    ctaPrimary: "Arts Program",
    ctaSecondary: "Gallery"
  },
  {
    id: 6,
    highlight: "Community Spirit",
    title: "A Family Atmosphere",
    subtitle: "A supportive boarding and day-school environment where every student feels at home.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Student Life",
    ctaSecondary: "Testimonials"
  },
  {
    id: 7,
    highlight: "Future Ready",
    title: "Success Starts Here",
    subtitle: "Consistently producing the highest WAEC results and alumni in world-class universities.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Join Us",
    ctaSecondary: "Results"
  }
];

export const STATS: StatItem[] = [
  { value: '15+', label: 'Years of Excellence', icon: 'Award' },
  { value: '500+', label: 'Happy Students', icon: 'Users' },
  { value: '40+', label: 'Expert Faculty', icon: 'BookOpen' },
  { value: '100%', label: 'WAEC Pass Rate', icon: 'GraduationCap' },
];

export const PROGRAMS: ProgramItem[] = [
  {
    title: 'Junior Secondary',
    description: 'A foundational stage focusing on core academic competence, moral grounding, and critical thinking for students in JSS 1-3.',
    icon: 'BookOpen'
  },
  {
    title: 'Senior Secondary',
    description: 'Comprehensive preparation for WAEC and NECO, offering Science, Arts, and Commercial tracks for SSS 1-3.',
    icon: 'GraduationCap'
  },
  {
    title: 'Vocational Training',
    description: 'Beyond the classroom, we equip students with practical skills in ICT, arts, and entrepreneurship.',
    icon: 'Award'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Ambassadors College Wins National Science Olympiad',
    date: 'February 5, 2024',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Our students showcased exceptional analytical skills at the National Science Competition, clinching the first position.'
  },
  {
    id: 2,
    title: 'New Digital Learning Center Commissioned',
    date: 'February 5, 2024',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop',
    excerpt: 'We are proud to announce the opening of our state-of-the-art laboratory for advanced digital literacy.'
  },
  {
    id: 3,
    title: 'Admission 2024/2025 Now Open',
    date: 'February 5, 2024',
    category: 'Admission',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Join the college of champions. Applications are now being accepted for all classes.'
  }
];

export const FACULTY: StaffMember[] = [
  {
    name: 'Dr. O. A. Adeyemi',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'An educational visionary with over 25 years of experience in secondary school administration.'
  },
  {
    name: 'Mrs. Funmi Balogun',
    role: 'Vice Principal (Academic)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'Dedicated to curriculum excellence and student performance monitoring.'
  },
  {
    name: 'Mr. John Okafor',
    role: 'Head of Sciences',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    bio: 'Passionate about physics and fostering a love for scientific inquiry.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Mrs. Adenike Peters',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    text: 'Ambassadors College didn\'t just give my children an education; it gave them a future based on sound character and academic excellence.'
  },
  {
    name: 'David Adeleke',
    role: 'Alumnus',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    text: 'The discipline and academic rigor I experienced here prepared me perfectly for my medical studies in the UK.'
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop"
];
