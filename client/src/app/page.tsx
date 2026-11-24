import Image from "next/image";
import Link from "next/link";
import {
  getMainProjects,
  getLegacyProjects,
  type Project,
} from "@/data/projects";
import { skillLabel } from "@/data/skills";
import { ExpandableSkills } from "@/components/ExpandableSkills";
import { ContactForm } from "@/components/ContactForm";


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
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover">
      {/* Clickable top — image + content */}
      <Link href={`/projects/${project.slug}`} className="block flex-1">
        <div className="relative overflow-hidden bg-bg" style={{ aspectRatio: "16/9" }}>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-5 pb-4 md:p-6 md:pb-5">
          <div className="mb-2 flex flex-wrap items-start gap-2">
            <h3 className="font-semibold text-text">{project.title}</h3>
            <RoleBadge role={project.role} />
            {isNda && (
              <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted/60">
                NDA
              </span>
            )}
          </div>

          <p className="mb-4 text-sm leading-6 text-muted">{headerLine}</p>

          <ul className="mb-5 hidden md:grid grid-cols-1 gap-1.5 md:grid-cols-2">
            {project.features.map(([name]) => (
              <li key={name} className="flex items-center gap-2 text-sm text-text/80">
                <span className="size-1.5 shrink-0 rounded-full bg-accent/60" />
                {name}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <SkillChip key={s} skill={s} />
            ))}
          </div>
        </div>
      </Link>

      {/* Footer — independent links, outside the main Link */}
      <div className="flex items-center justify-between border-t border-border px-5 py-4 md:px-6">
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
    </article>
  );
}

function LegacyCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-surface/60 transition-colors hover:border-border">
      {/* Clickable top — image + content */}
      <Link href={`/projects/${project.slug}`} className="block flex-1">
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
        <div className="p-4 pb-3">
          <h3 className="mb-1 text-sm font-semibold text-text/90">{project.title}</h3>
          <p className="mb-3 text-xs leading-5 text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.skills.map((s) => (
              <span
                key={s}
                className="rounded border border-border/50 px-2 py-0.5 font-mono text-[10px] text-muted/70"
              >
                {skillLabel(s)}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Footer — independent links */}
      {(project.gitLink || project.deployLink) && (
        <div className="flex gap-4 border-t border-border/60 px-4 py-3">
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
      )}
    </article>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tim Huitt",
  jobTitle: "Software Engineer",
  url: "https://portfolio.timhuitt.com",
  email: "tim@timhuitt.com",
  sameAs: [
    "https://github.com/TimHuitt",
    "https://www.linkedin.com/in/timhuitt/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Full-Stack Web Development",
  ],
};

export default function HomePage() {
  const mainProjects = getMainProjects();
  const legacyProjects = getLegacyProjects();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-6">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pb-20 pt-24">
        <h1 className="text-5xl font-bold tracking-tight text-text sm:text-6xl">
          Tim Huitt
        </h1>
        <p className="mt-2 pl-0.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
          Software Engineer
        </p>

        <p className="mt-10 max-w-xl leading-7 text-text/70">
          Full-stack engineer building production web applications with React,
          Next.js, TypeScript, Node.js, PostgreSQL, and AWS. Most recently the
          sole engineer behind a healthcare services company&apos;s operations
          platform, from architecture through deployment.
        </p>

        <div className="mt-8">
          <ExpandableSkills />
        </div>
      </section>

      {/* ── Selected Work ──────────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Selected Work
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mainProjects.slice(0, 2).map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Freelance practice — horizontal card, full-width */}
        <a
          href="https://timhuitt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover sm:flex-row"
        >
          <div className="relative h-52 shrink-0 overflow-hidden bg-bg sm:h-auto sm:w-80">
            <Image
              src="/images/timhuitt-hero.jpg"
              alt="timhuitt.com — freelance practice site"
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 320px"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-3 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-text">timhuitt.com</h3>
              <RoleBadge role="Design & Development" />
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted">
              Marketing site for my freelance practice — websites, portals, and
              internal tools for small businesses in Western Connecticut. Built
              and designed end-to-end with Next.js, TypeScript, and Tailwind.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(["next", "ts", "tailwind", "react"] as const).map((s) => (
                <SkillChip key={s} skill={s} />
              ))}
            </div>
            <span className="text-sm font-medium text-accent group-hover:underline">
              Visit timhuitt.com ↗
            </span>
          </div>
        </a>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {mainProjects.slice(2).map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ── Earlier Projects ───────────────────────────────────── */}
      <section className="pb-24">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Earlier Projects
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {legacyProjects.map((p) => (
            <div key={p.slug} className="w-72 shrink-0 lg:w-auto">
              <LegacyCard project={p} />
            </div>
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

      {/* ── Contact ────────────────────────────────────────────── */}
      <section id="contact" className="pb-24">
        <p className="mb-8 text-xs uppercase tracking-widest text-muted">
          Contact
        </p>
        <h2 className="mb-3 text-3xl font-bold text-text">Get in touch</h2>
        <p className="mb-8 leading-7 text-muted">
          Open to roles, freelance work, and interesting problems. Fill out the
          form below or reach out directly.
        </p>
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="mailto:tim@timhuitt.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            Email ↗
          </a>
          <a
            href="https://www.linkedin.com/in/timhuitt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/TimHuitt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            GitHub ↗
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
    </>
  );
}
