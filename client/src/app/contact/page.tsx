import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

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
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="mb-3 text-3xl font-bold text-text">Get in touch</h1>
      <p className="mb-10 leading-7 text-muted">
        Open to roles, freelance work, and interesting problems. Fill out the
        form below or reach out directly.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        {links.map(({ label, href, external }) => (
          <Link
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            {label}
            {external && <span className="text-muted">↗</span>}
          </Link>
        ))}
      </div>

      <ContactForm />
    </div>
  );
}
