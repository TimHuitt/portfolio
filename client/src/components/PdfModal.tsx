"use client";

import { useState, useEffect } from "react";

const PDF_MODAL_EVENT = "open-pdf-modal";

interface ModalPayload {
  url: string;
  title: string;
}

export function PdfModalRoot() {
  const [modal, setModal] = useState<ModalPayload | null>(null);

  useEffect(() => {
    const handler = (e: Event) =>
      setModal((e as CustomEvent<ModalPayload>).detail);
    window.addEventListener(PDF_MODAL_EVENT, handler);
    return () => window.removeEventListener(PDF_MODAL_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [modal]);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => setModal(null)}
    >
      <div
        className="relative flex h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-medium text-text">{modal.title}</span>
          <div className="flex items-center gap-4">
            <a
              href={modal.url}
              download
              className="text-xs text-muted transition-colors hover:text-text"
            >
              Download ↓
            </a>
            <button
              type="button"
              onClick={() => setModal(null)}
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:text-text"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
        <iframe
          src={modal.url}
          className="h-full w-full flex-1"
          title={modal.title}
        />
      </div>
    </div>
  );
}

interface PdfModalButtonProps {
  url: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function PdfModalButton({
  url,
  title,
  className,
  children,
}: PdfModalButtonProps) {
  function open() {
    window.dispatchEvent(
      new CustomEvent<ModalPayload>(PDF_MODAL_EVENT, { detail: { url, title } })
    );
  }
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
