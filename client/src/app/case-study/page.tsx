import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "Healthcare operations platform case study — Tim Huitt.",
};

export default function CaseStudyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold text-text">Case Study</h1>
        <div className="ml-auto">
          <a
            href="/Tim-Huitt_Case-Study.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-border-hover"
          >
            Download PDF ↓
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          src="/Tim-Huitt_Case-Study.pdf"
          className="w-full"
          style={{ height: "calc(100vh - 160px)", minHeight: 600 }}
          title="Healthcare Operations Platform Case Study"
        />
      </div>
    </div>
  );
}
