import { FiGlobe, FiZap } from 'react-icons/fi'

export const portfolioData = {
  name: 'George Holman',
  title: 'Graduate Software Developer',
  tagline: 'Developing clear and accessible software tools, focused on providing positive user experience that makes website browsing easy for everyone.',
  bio: 'I am an aspiring Software Developer, graduated in Computing Systems by the end of June 2026 at Unitec Institute of Technology, with major passion and a keen interest in building accessible software tools for everyone to have a chance at using. I am currently focused on learning skills in web development, including full-stack tools and skills to develop fast and efficient websites when needed. I hope to enter a full-time position in Software Development, and other possible IT to continue broadening my skills in the IT field so I can put those skills into providing the tools needed for people to succeed.',
  status: 'Open to opportunities',
  location: 'Auckland, NZ',
  email: 'georgeholmanwork@gmail.com',
  github: 'github.com/GH0lman',
  linkedin: 'linkedin.com/in/george-holman-nz/',

  // Concrete facts - Show in hero stats
  stats: [
    { label: 'Projects', value: '2' },
    { label: 'Degree', value: 'BCS' },
    { label: 'Graduated', value: '2026' },
  ],

  // Grouped tech list - Categorisation of learnt skills.
  techStack: [
    {
      category: 'Frontend',
      items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'XPlan Iress'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PostgreSQL', 'XPlan Iress'],
    },
    {
      category: 'Tools',
      items: ['GitHub', 'Vercel', 'Power Automate', 'Microsoft Form'],
    },
    {
      category: 'Skills',
      items: ['Project Management', 'Version Control', 'Team Management'],
    },
  ],

  // Projects - Work Completed by me
  projects: [
    {
      name: 'Portfolio Website',
      slug: 'portfolio',
      desc: 'Personal portfolio built with Next.js and Tailwind CSS, built to reinforce my web development skills and for showing off future work.',
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'GitHub', 'Vercel', 'Version Control', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/GH0lman/portfolio-website',
      icon: FiGlobe,
    },
    {
      name: 'Project Rocket',
      slug: 'project-rocket',
      desc: 'Worked with ICIB Brokerweb on automation of workflow and CRM optimisation, contributed as team leader to implementing unused features.',
      tech: ['XPlan Iress', 'Microsoft Form', 'Power Automate', 'Project Management', 'Team Management'],
      icon: FiZap,
    },
  ],
}

// Derive the Project type directly from the data shape
export type Project = typeof portfolioData.projects[number]
export type TechCategory = typeof portfolioData.techStack[number]