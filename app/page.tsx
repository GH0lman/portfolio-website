import { portfolioData as data } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'

{/* 
  Phase 1: Skeleton
  Goal: Create a static skeleton for the home page.
  Next: Develop layout and style of page.
*/} 

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs tracking-widest text-success uppercase">
            Open to opportunities
          </span>
        </div>
        <h1 className="text-5xl text-primary font-bold tracking-tight">
          {data.name}
        </h1>
        <p className="text-xl text-accent font-medium">{data.title}</p>
        <p className="text-secondary">{data.tagline}</p>
      </section>

      {/* CONTACT PILLS */}
      <section className="flex flex-wrap gap-3">
        {[
          { label: data.location },
          { label: data.email, href: `mailto:${data.email}` },
          { label: data.github, href: `https://${data.github}` },
          { label: data.linkedin, href: `https://${data.linkedin}` },
        ].map(({ label, href }) =>
          href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-secondary border border-edge hover:border-accent hover:text-accent transition-colors"
            >
              {label}
            </a>
          ) : (
            <span key={label} className="px-4 py-1.5 rounded-full text-secondary border border-edge">
              {label}
            </span>
          )
        )}
      </section>

      {/* SKILLS */}
      <section className="space-y-4">
        <h2 className="text-xl tracking-widest text-accent uppercase">Skills</h2>
        <div className="space-y-4">
          {data.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-primary">{skill.name}</span>
                <span className="text-xs text-muted">0%</span>
              </div>
              <div className="h-1 rounded-full border-edge">
                <div
                  className="h-1 rounded-full bg-accent"
                  style={{ width: `$test%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-xl tracking-widest text-accent uppercase">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
