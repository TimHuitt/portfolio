import Image from "next/image";
import Link from "next/link";
import {
  getMainProjects,
  getLegacyProjects,
  type Project,
} from "@/data/projects";
import { skillLabel } from "@/data/skills";

const HERO_SKILLS = ["ts", "next", "node", "postgresql", "tailwind"];

function SkillChip({ skill }: { skill: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
      {skillLabel(skill)}
    </span>
  );
}

function RoleBadge({ role }: { role: string }) {
  return (
    <span className="rounded bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
      {role}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-4">
      {project.gitLink && (
        <a
          href={project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted transition-colors hover:text-accent"
        >
          GitHub ↗
        </a>
      )}
      {project.deployLink && (
        <a
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted transition-colors hover:text-accent"
        >
          Live ↗
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 md:p-8">
      {/* 2×2 example screenshot grid */}
      <div className="mb-2 grid grid-cols-2 gap-2">
        {project.images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg bg-bg"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={src}
              alt={`Example screen ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 400px"
            />
          </div>
        ))}
      </div>
      <p className="mb-6 text-xs text-muted">
        Example screens — fictional data
      </p>

      {/* Title + role */}
      <div className="mb-3 flex flex-wrap items-start gap-3">
        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
        <RoleBadge role={project.role} />
      </div>

      {/* Header text */}
      <p className="mb-6 leading-7 text-muted">{project.header}</p>

      {/* Key features (first 4) */}
      <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {project.features.slice(0, 4).map(([name]) => (
          <li key={name} className="flex items-center gap-2 text-sm text-text/80">
            <span className="size-1.5 shrink-0 rounded-full bg-accent/60" />
            {name}
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.skills.map((s) => (
          <SkillChip key={s} skill={s} />
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between">
        <ProjectLinks project={project} />
        {project.caseStudy && (
          <Link
            href="/case-study"
            className="text-sm font-medium text-accent transition-colors hover:underline"
          >
            View Case Study →
          </Link>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover">
      {/* Screenshot */}
      {project.images[0] && (
        <div className="relative overflow-hidden bg-bg" style={{ aspectRatio: "16/9" }}>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {/* Title + role */}
        <div className="mb-2 flex flex-wrap items-start gap-2">
          <h3 className="font-semibold text-text">{project.title}</h3>
          <RoleBadge role={project.role} />
        </div>

        {/* Description */}
        <p className="mb-4 grow text-sm leading-6 text-muted">
          {project.description}
        </p>

        {/* Skills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.skills.map((s) => (
            <SkillChip key={s} skill={s} />
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Details →
          </Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function LegacyCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border/60 bg-surface/60 transition-colors hover:border-border">
      {project.images[0] && (
        <div className="relative overflow-hidden bg-bg" style={{ aspectRatio: "16/9" }}>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex flex-wrap items-start gap-2">
          <h3 className="text-sm font-semibold text-text/90">{project.title}</h3>
        </div>
        <p className="mb-3 grow text-xs leading-5 text-muted">{project.description}</p>
        <div className="mb-3 flex flex-wrap gap-1">
          {project.skills.map((s) => (
            <span
              key={s}
              className="rounded border border-border/50 px-2 py-0.5 font-mono text-[10px] text-muted/70"
            >
              {skillLabel(s)}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function HomePage() {
  const mainProjects = getMainProjects();
  const legacyProjects = getLegacyProjects();
  const [featured, ...rest] = mainProjects;

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pb-20 pt-24">
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-text sm:text-6xl">
          Tim Huitt
        </h1>
        <p className="mb-6 text-xl text-muted">Software Engineer</p>
        <p className="mb-8 max-w-2xl leading-7 text-text/70">
          I help businesses replace the processes they&apos;ve outgrown with
          software built around how they actually operate. From initial planning
          through deployment, I own the full stack and everything in between.
        </p>

        {/* CTAs */}
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="/Tim-Huitt_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            Resume ↓
          </a>
          <a
            href="https://github.com/TimHuitt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:timhuitt@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            timhuitt@gmail.com
          </a>
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2">
          {HERO_SKILLS.map((s) => (
            <SkillChip key={s} skill={s} />
          ))}
        </div>
      </section>

      {/* ── Selected Work ──────────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Selected Work
        </p>

        {/* Featured project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Main project grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ── Earlier Projects ───────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Earlier Projects
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {legacyProjects.map((p) => (
            <LegacyCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-8 text-xs uppercase tracking-widest text-muted">
          About
        </p>
        <div className="flex flex-col gap-10 md:flex-row md:gap-12">
          <div className="shrink-0">
            <Image
              src="/profile.png"
              alt="Tim Huitt"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl space-y-5 text-text/75 leading-7">
            <p>
              I help businesses replace the processes they&apos;ve outgrown with
              software built around how they actually operate. From initial
              planning through deployment, I own the full stack and everything
              in between.
            </p>
            <p>
              I most recently served as the sole engineer on a production
              platform, responsible for full stack design and operation from
              backend infrastructure through user-facing workflows. The
              engagement included inheriting and significantly expanding a
              complex data model as requirements evolved.
            </p>
            <p>
              My technical background is accompanied by decades in
              client-facing and operational roles across management, financial
              services, and data analytics. That experience shapes how I read
              problems and how I build toward solutions, across frontend,
              backend, databases, and cloud infrastructure.
            </p>
            <p className="text-muted">
              Most of my professional work is confidential, but I&apos;m always
              happy to discuss the work itself, the decisions made, and the
              problems it solved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
