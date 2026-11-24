import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { skillLabel } from "@/data/skills";
import { PdfModalButton } from "@/components/PdfModal";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const bodyParagraphs = project.body.split("\n\n").filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
      >
        ← All projects
      </Link>

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start gap-3">
        <h1 className="text-3xl font-bold text-text">{project.title}</h1>
        <span className="rounded bg-accent-soft px-2 py-1 text-xs font-medium text-accent">
          {project.role}
        </span>
      </div>

      {/* Links */}
      {(project.gitLink || project.deployLink || project.caseStudy) && (
        <div className="mb-8 flex flex-wrap gap-3">
          {project.gitLink && (
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover"
            >
              View Code ↗
            </a>
          )}
          {project.deployLink && (
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover"
            >
              View App ↗
            </a>
          )}
          {project.caseStudy && (
            <PdfModalButton
              url="/Tim-Huitt_Case-Study.pdf"
              title="Case Study"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent/60"
            >
              View Case Study →
            </PdfModalButton>
          )}
        </div>
      )}

      {/* Skills */}
      <div className="mb-10 flex flex-wrap gap-2">
        {project.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            {skillLabel(s)}
          </span>
        ))}
      </div>

      {/* Header text */}
      <p className="mb-8 text-lg leading-8 text-text/80">{project.header}</p>

      {/* First image */}
      {project.images[0] && (
        <div className="mb-8 overflow-hidden rounded-xl border border-border">
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
      )}

      {/* Body text */}
      <div className="mb-10 space-y-4 leading-7 text-text/70">
        {bodyParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Features list */}
      {project.features.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map(([name, desc]) => (
              <li key={name} className="rounded-lg border border-border bg-surface p-4">
                <p className="mb-1 font-medium text-text">{name}</p>
                <p className="text-sm leading-5 text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Example screen note — shown once after features */}
      {project.exampleImages && (
        <p className="mb-10 text-xs text-muted/60">
          * Screenshots use example screen data and do not reflect real patient or case information.
        </p>
      )}

      {/* Additional images */}
      {project.images.slice(1).map((src, i) => (
        <div key={i} className="mb-6 overflow-hidden rounded-xl border border-border">
          <Image
            src={src}
            alt={`${project.title} screenshot ${i + 2}`}
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}
