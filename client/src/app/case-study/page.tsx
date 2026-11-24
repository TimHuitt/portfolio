import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "Tim Huitt's case study — healthcare operations platform.",
};

export default function CaseStudyPage() {
  return (
    <div className="mx-auto flex h-[calc(100vh-56px)] max-w-5xl flex-col px-6 py-6">
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <h1 className="font-semibold text-text">Case Study</h1>
        <a
          href="/Tim-Huitt_Case-Study.pdf"
          download
          className="text-sm text-muted transition-colors hover:text-text"
        >
          Download ↓
        </a>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl border border-border">
        <iframe
          src="/Tim-Huitt_Case-Study.pdf"
          className="h-full w-full"
          title="Tim Huitt Case Study"
        />
      </div>
    </div>
  );
}
