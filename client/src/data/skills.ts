export const skillMap: Record<string, string> = {
  next: "Next.js",
  react: "React",
  ts: "TypeScript",
  js: "JavaScript",
  node: "Node.js",
  express: "Express",
  postgresql: "PostgreSQL",
  mongo: "MongoDB",
  tailwind: "Tailwind",
  html: "HTML",
  css: "CSS",
  py: "Python",
  python: "Python",
  django: "Django",
  bootstrap: "Bootstrap",
  openai: "AI",
  vba: "VBA",
  axios: "Axios",
  git: "Git",
};

export function skillLabel(key: string): string {
  return skillMap[key] ?? key;
}
