import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Tim Huitt's resume — full-stack software engineer.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex h-[calc(100vh-56px)] max-w-5xl flex-col px-6 py-6">
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <h1 className="font-semibold text-text">Resume</h1>
        <a
          href="/Tim-Huitt_Resume.pdf"
          download
          className="text-sm text-muted transition-colors hover:text-text"
        >
          Download ↓
        </a>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl border border-border">
        <iframe
          src="/Tim-Huitt_Resume.pdf"
          className="h-full w-full"
          title="Tim Huitt Resume"
        />
      </div>
    </div>
  );
}
