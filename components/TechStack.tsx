import type { TechCategory, Project } from '@/lib/db/queries'

type Props = {
  stack: TechCategory[]
  projects: Project[]
}

export default function TechStack({ stack, projects }: Props) {

  // Derive which projects use each technology directly from the data
  function projectsUsingTech(tech: string): string[] {
    return projects
      .filter((p) => p.tech.includes(tech))
      .map((p) => p.name)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
      {stack.map(({ category, items }) => (
        <div key={category} className="space-y-3">

          {/* Category label */}
          <h3 className="text-xs font-medium text-muted tracking-widest uppercase">
            {category}
          </h3>

          {/* Tech items */}
          <div className="space-y-2">
            {items.map((tech) => {
              const usedIn = projectsUsingTech(tech)

              return (
                <div
                  key={tech}
                  className="group flex items-start justify-between gap-4 py-2 border-b border-edge"
                >
                  <span className="text-sm text-primary">{tech}</span>

                  {/* Show project names if used, otherwise a honest label */}
                  {usedIn.length > 0 ? (
                    <span className="text-xs text-muted text-right leading-relaxed">
                      {usedIn.join(', ')}
                    </span>
                  ) : (
                    <span className="text-xs text-muted italic">coursework</span>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      ))}
    </div>
  )
}