import { neon } from '@neondatabase/serverless'
import { FiGlobe, FiZap, FiCode } from 'react-icons/fi'
import type { IconType } from 'react-icons'

const sql = neon(process.env.DATABASE_URL!)

// Types Section

export type Project = {
  id: number
  name: string
  slug: string
  desc: string
  tech: string[]
  github?: string
  icon: IconType
}

export type TechCategory = {
  id: number
  category: string
  items: string[]
}

export type Stat = {
  label: string
  value: string
}

// Icon map Section

const iconMap: Record<string, IconType> = {
  FiGlobe,
  FiZap,
  FiCode,
}

// Queries Section

export async function getConfig(): Promise<Record<string, string>> {
  const rows = await sql`SELECT key, value FROM config`
  return Object.fromEntries(rows.map(row => [row.key, row.value]))
}

export async function getProjects(): Promise<Project[]> {
  const rows = await sql`SELECT * FROM projects ORDER BY id ASC`
  return rows.map(row => ({
    id: row.id as number,
    name: row.name as string,
    slug: row.slug as string,
    desc: row.description as string,
    tech: row.tech as string[],
    github: row.github as string | undefined,
    icon: iconMap[row.icon_name as string] ?? FiCode,
  }))
}

export async function getTechStack(): Promise<TechCategory[]> {
  const rows = await sql`SELECT * FROM tech_categories ORDER BY id ASC`
  return rows.map(row => ({
    id: row.id as number,
    category: row.category as string,
    items: row.items as string[],
  }))
}

export async function getStats(): Promise<Stat[]> {
  const rows = await sql`SELECT COUNT(*) AS project_count FROM projects`
  return [
    { label: 'Projects', value: (rows[0].project_count as number).toString() },
    { label: 'Degree', value: 'BCS' },
    { label: 'Graduated', value: '2026' },
  ]
}