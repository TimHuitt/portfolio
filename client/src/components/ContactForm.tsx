"use client";

import { useRef, useState } from "react";

const MEETING_OPTIONS = ["Video call", "Phone call", "Either works"];

const field =
  "w-full rounded-lg border border-border bg-surface-hover px-3.5 py-2.5 text-text placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors";
const labelCls = "mb-1.5 block text-sm font-medium text-text/80";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; mailto: string };

function mailtoFallback(v: Record<string, string>) {
  const body = [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Company: ${v.company || "(not given)"}`,
    `Prefers: ${v.meeting}`,
    "",
    v.message,
  ].join("\n");
  return `mailto:timhuitt@gmail.com?subject=${encodeURIComponent(`Portfolio contact: ${v.company || v.name}`)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(
      ["name", "email", "company", "message", "meeting", "website"].map((k) => [
        k,
        String(data.get(k) ?? "").trim(),
      ]),
    );

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      if (res.ok) {
        setStatus({ kind: "sent" });
        return;
      }
      const { error } = await res.json().catch(() => ({ error: "" }));
      setStatus({
        kind: "error",
        message: error || "Something went wrong sending your message.",
        mailto: mailtoFallback(values),
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Something went wrong sending your message.",
        mailto: mailtoFallback(values),
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8" role="status">
        <p className="text-lg font-semibold text-text">Thanks, got it!</p>
        <p className="mt-2 leading-relaxed text-muted">
          Your message is on its way. I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 sm:p-8"
    >
      <div>
        <label htmlFor="cf-name" className={labelCls}>
          Your name
        </label>
        <input
          id="cf-name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelCls}>
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={field}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-company" className={labelCls}>
          Company{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="cf-company"
          name="company"
          maxLength={150}
          autoComplete="organization"
          className={field}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={labelCls}>
          What would you like to discuss?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          maxLength={5000}
          rows={4}
          className={field}
        />
      </div>
      <fieldset className="sm:col-span-2">
        <legend className={labelCls}>How would you prefer to connect?</legend>
        <div className="flex flex-wrap gap-2">
          {MEETING_OPTIONS.map((opt, i) => (
            <label
              key={opt}
              className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:checked]:text-accent"
            >
              <input
                type="radio"
                name="meeting"
                value={opt}
                defaultChecked={i === 2}
                className="sr-only"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-border bg-surface-hover px-4 py-3 text-sm text-text/80 sm:col-span-2"
        >
          {status.message}{" "}
          <a
            href={status.mailto}
            className="font-medium text-accent underline underline-offset-4"
          >
            Send it by email instead
          </a>
          .
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="rounded-lg border border-accent/40 bg-accent-soft px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent/60 hover:bg-accent-soft disabled:cursor-wait disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
