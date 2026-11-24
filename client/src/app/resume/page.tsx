import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "Tim Huitt's resume — Senior Full Stack Engineer.",
};

const GOOGLE_DOCS_URL =
  "https://docs.google.com/document/d/1_sAfRg1CnfYK6I2_q3yoDlR0f7ZbxTHAT0Y6fEnLhyI/edit?usp=sharing";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold text-text">Resume</h1>
        <div className="ml-auto flex gap-3">
          <a
            href="/Tim-Huitt_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover"
          >
            Download PDF ↓
          </a>
          <Link
            href={GOOGLE_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover"
          >
            Open in Google Docs ↗
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          src="/Tim-Huitt_Resume.pdf"
          className="w-full"
          style={{ height: "calc(100vh - 160px)", minHeight: 600 }}
          title="Tim Huitt Resume"
        />
      </div>
    </div>
  );
}
