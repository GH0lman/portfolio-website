export const portfolioData = {
  name: 'George Holman',
  title: 'Graduate Software Developer',
  tagline: 'I develop efficient and scalable software and website products.',
  status: 'Open to opportunities',
  location: 'Auckland, NZ',
  email: 'georgeholmanwork@gmail.com',
  github: 'github.com/GH0lman',
  linkedin: 'linkedin.com/in/george-holman-366a7b350/',
  skills: [
    { name: 'TypeScript' },
    { name: 'React / Next.js' },
    { name: 'Node.js' },
  ],
  projects: [
    {
      name: 'Portfolio Website',
      slug: 'portfolio-website',
      desc: 'Personal portfolio built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/images/projects/placeholder.png',
      github: 'https://github.com/GH0lman/portfolio',
      live: 'https://georgeholman.dev',
      // detail page fields
      problem: 'Needed a professional presence to present projects to recruiters.',
      approach: 'Built with Next.js App Router, self-hosted domain, and Vercel deployment.',
      learnings: 'Learned the importance of keeping structure separate from styling early in the build.',
    },
  ],
}

// Derive the Project type directly from the data shape
export type Project = typeof portfolioData.projects[number]