import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Tim Huitt</p>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <a
            href="mailto:timhuitt@gmail.com"
            className="transition-colors hover:text-text"
          >
            timhuitt@gmail.com
          </a>
          <Link
            href="https://github.com/TimHuitt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/timhuitt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
