import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/data'

export default function ProjectCard({ project, priority = false }: { project: Project, priority?: boolean }) {
  const { name, slug, desc, tech, image } = project

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <article className="h-full rounded-xl border border-edge bg-surface overflow-hidden hover:border-accent transition-colors duration-200">
        {/* Thumbnail */}
        <div className="relative aspect-video text-muted bg-background">
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-secondary leading-relaxed">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent-soft text-accent">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
