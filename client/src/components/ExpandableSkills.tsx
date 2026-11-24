"use client";

import { useState } from "react";
import { skillLabel } from "@/data/skills";

const HERO_SKILLS = ["ts", "next", "node", "postgresql", "tailwind"];
const MORE_SKILLS = ["react", "js", "express", "mongo", "html", "css", "py", "django", "bootstrap", "openai", "vba"];

function Chip({ skill }: { skill: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
      {skillLabel(skill)}
    </span>
  );
}

export function ExpandableSkills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-wrap gap-2">
      {HERO_SKILLS.map((s) => (
        <Chip key={s} skill={s} />
      ))}
      {expanded &&
        MORE_SKILLS.map((s) => (
          <Chip key={s} skill={s} />
        ))}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted/60 transition-colors hover:border-border-hover hover:text-muted"
      >
        {expanded ? "less" : `+${MORE_SKILLS.length} more`}
      </button>
    </div>
  );
}
