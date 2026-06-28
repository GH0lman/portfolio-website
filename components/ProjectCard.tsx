import { FiGithub } from 'react-icons/fi'
import type { Project } from '@/lib/db/queries'


function ProjectThumbnail({ icon: Icon }: { icon?: Project['icon'] }) {
  return (
    <div className="relative aspect-16/7 flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-edge bg-background">
        {Icon
          ? <Icon size={40} className="text-muted" />
          : <span className="text-lg font-semibold text-muted select-none">?</span>
        }
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: { project: Project, priority?: boolean }) {
  const { name, desc, tech, icon, github } = project

  return (
    <article className="h-full rounded-xl border border-edge bg-surface overflow-hidden hover:border-accent transition-colors duration-200">
      <div className="relative text-muted bg-background">
        <ProjectThumbnail icon={icon} />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-primary">{name}</h3>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted hover:text-accent transition-colors duration-200"
              aria-label={`View ${name} on GitHub`}
            >
              <FiGithub size={17} />
            </a>
          )}
        </div>
        <p className="text-sm text-secondary leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md border border-muted text-accent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}