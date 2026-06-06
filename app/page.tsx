import { portfolioData as data } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import TechStack from '@/components/TechStack'
import Image from 'next/image'
import { FiMapPin, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'

{/* 
  Phase 3: Functionality Finalized
  Completed design for Homepage. Redesign in the future if needed.
*/} 

export default function Home() {
  return (
    <main className="max-w-6xl space-y-12">
      {/* HERO Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs tracking-widest text-success uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Name + Photo row */}
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl text-primary font-bold tracking-tight">{data.name}</h1>
            <p className="text-xl text-accent font-medium mt-2">{data.title}</p>
            <p className="text-secondary mt-3">{data.tagline}</p>
          </div>
          <div className="relative shrink-0 w-48 h-48 rounded-2xl overflow-hidden border border-edge">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              sizes="144px"
              priority
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 pt-10 justify-evenly">
          {data.stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">{value}</div>
              <div className="text-xs text-muted mt-1 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME Section */}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">About Me</h2>
        <p className="text-secondary leading-relaxed">{data.bio}</p>
      </section>

      {/* PROJECTS Section */}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </section>

      {/* TECH STACK Section*/}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">Technologies</h2>
        <TechStack stack={data.techStack} projects={data.projects} />
      </section>

      {/* CONTACT INFO Section */}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">Contact Info</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-4">

          {/* Secondary - Location (no link) */}
          <span className="flex items-center gap-2 text-secondary">
            <FiMapPin/>
            {data.location}
          </span>

          {/* Secondary - GitHub */}
          <a
            href={`https://${data.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <FiGithub/>
            GitHub
          </a>

          {/* Secondary - LinkedIn */}
          <a
            href={`https://${data.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <FiLinkedin/>
            LinkedIn
          </a>

          {/* Divider */}
          <span className="text-secondary opacity-30 hidden sm:inline">|</span>

          {/* Primary - Email Me */}
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
          >
            <FiMail/>
            Email Me
          </a>

          {/* Primary - View CV */}
          <a
            href="/documents/GHolman-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-background hover:opacity-90 transition-opacity"
          >
            <FiFileText/>
            View my CV
          </a>

        </div>
      </section>

    </main>
  )
}