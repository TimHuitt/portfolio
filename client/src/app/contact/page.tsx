import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tim Huitt.",
};

const links = [
  { label: "timhuitt@gmail.com", href: "mailto:timhuitt@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/timhuitt", external: true },
  { label: "GitHub", href: "https://github.com/TimHuitt", external: true },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-10 text-3xl font-bold text-text">Contact</h1>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map(({ label, href, external }) => (
          <Link
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            {label}
            {external && <span className="text-muted">↗</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
