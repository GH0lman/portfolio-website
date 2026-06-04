import { portfolioData as data } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import TechStack from '@/components/TechStack'

{/* 
  Phase 2: Visual Styling
  Goal: Develop the layout and style of the page.
  Next: Update Skills Section.
*/} 

export default function Home() {
  return (
    <main className="max-w-4xl space-y-12">
      {/* HERO Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs tracking-widest text-success uppercase">
            Open to opportunities
          </span>
        </div>

        <div>
          <h1 className="text-5xl text-primary font-bold tracking-tight">{data.name}</h1>
          <p className="text-xl text-accent font-medium mt-2">{data.title}</p>
          <p className="text-secondary mt-3">{data.tagline}</p>
        </div>

        {/* Stats row — concrete facts only */}
        <div className="flex gap-10 pt-2">
          {data.stats.map(({ label, value }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-primary">{value}</div>
              <div className="text-xs text-muted mt-1 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME Section */}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">About Me</h2>
        <p className="text-secondary mt-3">{data.bio}</p>
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
        <div className="flex flex-wrap gap-3">
          {[
            { label: data.location },
            { label: 'Call Me', href: `tel:${data.phone}` },
            { label: 'Email Me', href: `mailto:${data.email}` },
            { label: 'GitHub', href: `https://${data.github}` },
            { label: 'LinkedIn', href: `https://${data.linkedin}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href && !href.startsWith('mailto') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`px-4 py-1.5 rounded-full border border-edge text-secondary hover:border-accent hover:text-accent transition-colors
                ${href ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}