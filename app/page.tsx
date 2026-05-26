import { portfolioData as data } from '@/lib/data'

{/* 
  Phase 1: Skeleton
  Goal: Create a static skeleton for the home page.
  Next: Develop layout and style of page.
*/} 

export default function Home() {
  return (
    <main>
      {/* HERO Section - name, title, tagline, status, location */}
      <section>
        <p>Open to opportunities</p>
        <h1>{data.name}</h1>
        <p>{data.title}</p>
        <p>{data.tagline}</p>
        <p>{data.status}</p>
        <p>{data.location}</p>
      </section>

      {/* CONTACT Section - quick links to email, github, linkedin */}
      <section>
        <a href={`mailto:${data.email}`}>{data.email}</a>
        <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">{data.github}</a>
        <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">{data.linkedin}</a>
      </section>

      {/* SKILLS Section - list skils with proficiency */}
      <section>
        <h2>Skills</h2>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill.name}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS - name, description, tech stack */}
      <section>
        <h2>Projects</h2>
        {data.projects.map((project) => (
          <article key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <ul>
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  )
}