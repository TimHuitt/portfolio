import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold text-text transition-colors hover:text-accent"
        >
          Tim Huitt
        </Link>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/resume" className="text-muted transition-colors hover:text-text">
            Resume
          </Link>
          <Link href="/case-study" className="text-muted transition-colors hover:text-text">
            Case Study
          </Link>
          <Link href="/contact" className="text-muted transition-colors hover:text-text">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
