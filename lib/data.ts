export const portfolioData = {
  name: 'George Holman',
  title: 'Graduate Software Developer',
  tagline: 'I develop clear, accessible software tools, focused on providing a positive user experience.',
  bio: 'I am a passionate and dedicated software developer with a strong background in software development and a passion for creating intuitive and user-friendly interfaces. I am always eager to learn new technologies and apply them in practical scenarios to make the products not only effective, but available for anyone to use.',
  status: 'Open to opportunities',
  location: 'Kumeu, Auckland 0891, NZ',
  phone: '+64274984330',
  email: 'georgeholmanwork@gmail.com',
  github: 'github.com/GH0lman',
  linkedin: 'linkedin.com/in/george-holman-366a7b350/',

  // Concrete facts - Show in hero stats
  stats: [
    { label: 'Projects', value: '1' },
    { label: 'Degree', value: 'BCS' },
    { label: 'Graduating', value: '2026' },
  ],

  // Grouped tech list - Categorisation of learnt skills.
  techStack: [
    {
      category: 'Frontend',
      items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
    },
  ],

  // Projects - Work Completed by me
  projects: [
    {
      name: 'Portfolio Website',
      slug: 'portfolio-website',
      desc: 'Personal portfolio built with Next.js and Tailwind CSS.',
      image: '/images/projects/placeholder.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub', 'Vercel', 'VS Code'],
      github: 'https://github.com/GH0lman/portfolio',
      live: 'https://georgeholman.dev',
      problem: 'Needed a professional presence to present projects to recruiters.',
      approach: 'Built with Next.js App Router, self-hosted domain, and Vercel deployment.',
      learnings: 'Learned the importance of keeping structure separate from styling early in the build.',
    },
  ],
}

// Derive the Project type directly from the data shape
export type Project = typeof portfolioData.projects[number]
export type TechCategory = typeof portfolioData.techStack[number]