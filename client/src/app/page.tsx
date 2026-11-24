import Image from "next/image";
import Link from "next/link";
import {
  getMainProjects,
  getLegacyProjects,
  type Project,
} from "@/data/projects";
import { skillLabel } from "@/data/skills";
import { ClickableImage } from "@/components/ClickableImage";
import { ExpandableSkills } from "@/components/ExpandableSkills";

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

function WorkCard({ project }: { project: Project }) {
  const headerLine = project.header.split("\n\n")[0];
  const isNda = !project.gitLink && !project.deployLink && project.caseStudy;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover">
      <ClickableImage
        src={project.images[0]}
        alt={`${project.title} screenshot`}
        caption={project.exampleImages ? "Example screen — fictional data" : undefined}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        {isNda && (
          <span className="mb-3 inline-flex w-fit rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted/60">
            NDA
          </span>
        )}

        <div className="mb-2 flex flex-wrap items-start gap-2">
          <h3 className="font-semibold text-text">{project.title}</h3>
          <RoleBadge role={project.role} />
        </div>

        <p className="mb-4 text-sm leading-6 text-muted">{headerLine}</p>

        <ul className="mb-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {project.features.map(([name]) => (
            <li key={name} className="flex items-center gap-2 text-sm text-text/80">
              <span className="size-1.5 shrink-0 rounded-full bg-accent/60" />
              {name}
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.skills.map((s) => (
            <SkillChip key={s} skill={s} />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Details →
          </Link>
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
                Demo ↗
              </a>
            )}
            {project.caseStudy && (
              <Link
                href="/case-study"
                className="text-xs font-medium text-accent transition-colors hover:underline"
              >
                Case Study →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function LegacyCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border/60 bg-surface/60 transition-colors hover:border-border">
      {project.images[0] && (
        <ClickableImage
          src={project.images[0]}
          alt={`${project.title} screenshot`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
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
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const mainProjects = getMainProjects();
  const legacyProjects = getLegacyProjects();

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pb-20 pt-24">
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-text sm:text-6xl">
          Tim Huitt
        </h1>
        <p className="mb-6 text-xl text-muted">Software Engineer</p>
        <p className="mb-8 max-w-2xl leading-7 text-text/70">
          Full-stack engineer building production web applications with React,
          Next.js, TypeScript, Node.js, PostgreSQL, and AWS. Most recently the
          sole engineer behind a healthcare services company&apos;s operations
          platform, from architecture through deployment.
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="/Tim-Huitt_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            Resume ↗
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

        <ExpandableSkills />
      </section>

      {/* ── Selected Work ──────────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Selected Work
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mainProjects.map((p) => (
            <WorkCard key={p.slug} project={p} />
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
          <div className="max-w-2xl space-y-5 leading-7 text-text/75">
            <p>
              Most recently, I was the sole engineer on a production platform
              for a healthcare services company, owning everything from database
              design and AWS infrastructure to the user-facing workflows. Over
              18 months I inherited and substantially expanded a complex data
              model (70+ tables), built separate portals for internal staff and
              several hundred outside attorneys on a shared backend, and
              migrated 500,000+ records and 80,000+ documents off Salesforce,
              all under HIPAA-conscious security requirements.
            </p>
            <p>
              Before engineering, I spent years in client-facing and operational
              roles across management, financial services, and data analytics.
              That background shapes how I work: I start with how the business
              actually runs, ask questions before writing code, and build
              software that holds up once real users depend on it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
