import { FiGlobe, FiZap } from 'react-icons/fi'

export const portfolioData = {
  name: 'George Holman',
  title: 'Graduate Software Developer',
  tagline: 'I develop clear, accessible software tools, focused on providing a positive user experience.',
  bio: 'I am a Computing Systems student, soon to graduate by the end of June 2026 from Unitec Institute of Technology, with a major passion in software development and a keen interest in building accessible software tools. I am particularly focused on web development using full stack tools and skills to provide available websites for users with disabilities, and I hope to enter a position related to Software Development, IT Work, and any other positions to continue broadening my skills in the IT field.',
  status: 'Open to opportunities',
  location: 'Auckland, NZ',
  email: 'georgeholmanwork@gmail.com',
  github: 'github.com/GH0lman',
  linkedin: 'linkedin.com/in/george-holman-nz/',

  // Concrete facts - Show in hero stats
  stats: [
    { label: 'Projects', value: '2' },
    { label: 'Degree', value: 'BCS' },
    { label: 'Graduating', value: 'June, 2026' },
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
      desc: 'Worked with ICIB Brokerweb on automation of workflow and CRM optimisation, contributated as team leader to implementing unused features.',
      tech: ['XPlan Iress', 'Microsoft Form', 'Power Automate', 'Project Management', 'Team Management'],
      icon: FiZap,
    },
  ],
}

// Derive the Project type directly from the data shape
export type Project = typeof portfolioData.projects[number]
export type TechCategory = typeof portfolioData.techStack[number]