export type Project = {
  id: number;
  slug: string;
  title: string;
  image: string;
  tags: string[];
  date: string;
  company: string;
  github?: string;
  liveUrl?: string;
  description: string[]; // changed to array
};

import cmsImage from '@/assets/cmss.png';
import cognifyImage from '@/assets/cognify.png';
import igadsEcomImage from '@/assets/igad.png';
import igadsLandingImage from '@/assets/igadss.png';
import schoolImage from '@/assets/school.png';
import pgImage from '@/assets/pg.png';
import cicdImage from '@/assets/cicd2.png';
export const projects: Project[] = [
  {
    id: 1,
    slug: 'complaint-management-system',
    title: 'Complaint Management System',
    image: cmsImage,
    tags: ['React.js', 'TailwindCSS', 'GoogleMap API', 'Node.js', 'mongoDB'],
    date: '2025',
    company: 'SmartCity CMS',
    github: 'https://github.com/Atheeek/City-fix',
    description: [
      'Full-stack city-scale complaint management platform using React.js, Node.js, Express, and MongoDB.',
      'Real-time complaint tracking with Google Maps API and dynamic heatmaps.',
      'Role-based access: Admin, Staff, Volunteer, Citizen.',
      'Mobile-responsive UI built with TailwindCSS.',
      'Notifications and alerts for new complaints and resolution confirmations.',
    ],
  },
  {
    id: 2,
    slug: 'cognify-child-learning',
    title: 'Cognify – Child Learning & Screening Platform',
    image: cognifyImage,
    tags: ['React.js', 'JWT Webtokens', 'Gamified Learning', 'AI Chatbot', 'Node.js', 'mongoDB', 'express'],
    date: '2025',
    company: 'Cognify',
    github: 'https://github.com/Atheeek/Cognify-project',
    description: [
      'Full-stack child learning and cognitive screening platform using React.js, Node.js, Express, and MongoDB.',
      'Gamified modules and interactive games for engaging learning.',
      'AI chatbot providing personalized recommendations.',
      'Level-based progress tracking with charts and dashboards.',
      'Responsive design optimized for tablets and desktops.',
    ],
  },
  {
    id: 3,
    slug: 'pg-pal-saas',
    title: 'PG-Pal | SaaS Management Platform',
    image: pgImage,
    tags: ['React.js',          // The core frontend library
    'Node.js',           // The backend runtime
    'Express.js',        // The backend framework
    'MongoDB',           // The database
    'Tailwind CSS',      // For the modern UI
    'REST API',          // The architecture of our backend
    'JWT Authentication',// The security model we implemented,     // A very advanced and impressive feature you built
    'Twilio API'   ],
    date: '2025',
    company: 'Personal Full-Stack Project',
    liveUrl: 'https://smart-pg.vercel.app/',
    description: [
      'SaaS platform for property managers and tenants using Typescript, React.js, Node.js, and TailwindCSS.',
      'Automated messaging with Twilio API for notifications.',
      'Tenant management: Registration, billing, and occupancy tracking.',
      'Responsive dashboard with real-time updates.',
      'Mobile-first UI for smooth user experience.',
    ],
  },
  {
    id: 4,
    slug: 'ci-cd-pipeline',
    title: 'AWS CI/CD Automation Pipeline',
    image: cicdImage,
    tags:  ["GitHub Actions", "Docker", "AWS EC2", "NGINX", "CI/CD", "Linux", "devOps"],
    date: '2025',
    company: 'DevOps Project',
    liveUrl: 'https://github.com/Atheeek/ci-cd-practice/',
    description:[
      "Built a fully automated CI/CD pipeline with GitHub Actions for a Dockerized full-stack web app, enabling continuous integration and delivery.",
      "Configured multi-stage build, test, and deployment workflows triggered on commits to the main branch.",
      "Deployed containerized frontend, backend, and database services to AWS EC2 using SSH authentication and GitHub Secrets.",
      "Set up NGINX reverse proxy and enabled HTTPS via Let's Encrypt for secure, production-ready deployment.",
      "Achieved seamless, zero-downtime deployments using Docker Compose orchestration and automated rollback mechanisms."
    ]
    ,
  },

  
  {
    id: 5,
    slug: 'igads-ecommerce',
    title: 'IGADS E-commerce Website',
    image: igadsEcomImage,
    tags: ['Shopify'],
    date: '2024',
    company: 'IGADS',
    liveUrl: 'https://igadsmobile.myshopify.com',
    description: [
      'Custom Shopify e-commerce website tailored for IGADS.',
      'Optimized product listing and checkout for better conversions.',
      'Mobile-first responsive design.',
      'Admin panel customization for inventory and order management.',
      'SEO-friendly structure and performance-optimized assets.',
    ],
  },
  // {
  //   id: 6,
  //   slug: 'igads-landing',
  //   title: 'IGADS Landing Page',
  //   image: igadsLandingImage,
  //   tags: ['Typescript', 'TailwindCSS', '3D Animations', 'framer-motion'],
  //   date: '2024',
  //   company: 'IGADS',
  //   liveUrl: 'https://igads.vercel.app',
  //   description: [
  //     'High-impact marketing landing page built with Typescript, React.js, TailwindCSS, and Framer Motion.',
  //     'Smooth 3D animations and motion interactions.',
  //     'Mobile-responsive with adaptive layouts.',
  //     'Interactive sections highlighting services and features.',
  //     'Clean, modern UI with optimized performance.',
  //   ],
  // },
  {
    id: 6,
    slug: 'modern-school-website',
    title: 'Modern School Website',
    image: schoolImage,
    tags: ['Typescript', 'TailwindCSS', 'Responsive UI','Framer Motion'],
    date: '2023',
    company: 'School Project',
    liveUrl: 'https://tems-school.vercel.app/',
    description: [
      'Responsive school website template using Typescript, React.js, and TailwindCSS.',
      'Modern design focusing on usability and accessibility.',
      'Clear information architecture for courses, staff, events, and contacts.',
      'Mobile-first layouts supporting all devices.',
      'Fast-loading pages with optimized assets and reusable components.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
