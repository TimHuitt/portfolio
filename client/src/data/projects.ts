export interface Project {
  slug: string;
  title: string;
  role: string;
  description: string;
  header: string;
  body: string;
  features: [string, string][];
  images: string[];
  exampleImages?: boolean;
  gitLink: string;
  deployLink: string;
  caseStudy: boolean;
  skills: string[];
  legacy?: boolean;
}

export const projects: Project[] = [
  {
    slug: "production-platform",
    title: "Healthcare Staff & External Portal",
    role: "Senior Full Stack Engineer",
    description:
      "Sole engineer responsible for designing, building, and operating a production platform used by internal and external users.",
    header:
      "Platform supporting legacy data migration, complex relational systems, and compliance-sensitive constraints",
    body:
      "Development included frontend architecture, backend systems, and infrastructure design supporting complex data models, document handling, and internal tooling. This involved building data-driven interfaces that reflect underlying relational state and system constraints, as well as data modeling, API design, and system behavior under incomplete and shifting requirements.\n\nDue to confidentiality, implementation details are not publicly available.",
    features: [
      ["Relational Domain Modeling", "Multiple first-class entities with defined relationships and independent lifecycles."],
      ["Legacy Data Migration", "Import and reconciliation workflows for integrating data from external systems."],
      ["Document Management", "Upload, storage, preview, and association of documents across related records."],
      ["Data-Driven Interfaces", "Frontend views that map directly to underlying relational state and system constraints."],
      ["Internal Tooling", "Administrative interfaces for managing records, documents, and operational data."],
      ["Access Control", "Role-based access patterns across internal and external users."],
      ["Production Operations", "Environment separation, validation, and error handling for production use."],
    ],
    images: [
      "/images/example-cases.jpg",
      "/images/example-case.jpg",
      "/images/example-facilities.jpg",
      "/images/example-portal.jpg",
    ],
    exampleImages: true,
    gitLink: "",
    deployLink: "",
    caseStudy: true,
    skills: ["next", "react", "ts", "tailwind", "postgresql", "node", "express"],
  },
  {
    slug: "devledger",
    title: "DevLedger",
    role: "Full Stack Engineer",
    description:
      "Full-stack freelance business management platform centered on scope tracking, time tracking and billing, and document organization — with pipeline management, invoicing, and an interactive demo.",
    header:
      "Freelance business management from prospect to invoice\n\nProvides lead, client, and project management, versioned scope tracking, time and invoice tools, and extensive notes and document management.\n\nLive PostgreSQL and Vercel Blob storage for authenticated users, with a fully interactive demo for everyone else.",
    body:
      "The dashboard provides pipeline status, project health, flagged requirements, invoice status, and earnings at a glance with direct linking to every item.\n\nEach client supports multiple projects with in-depth requirement and time tracking. Projects connect at the client level and offer combined invoicing with PDF exports.\n\nNotes and file attachments are organized per client, project, and scope item, with folder hierarchy and drag-to-reorder throughout.",
    features: [
      ["Prospect Pipeline", "Priority-ranked pipeline with statistics and dashboard visibility."],
      ["Client & Project Management", "Linked client and project records with status tracking and next-action scheduling."],
      ["Scope & Requirements", "Date-versioned requirement tracking with status-based alerts linking to flagged rows on the dashboard."],
      ["Time Tracking & Billing", "Multiple billing roles per project with independent rates, a persistent timer, and time aggregated by day, month, and year."],
      ["Dashboard", "Pipeline health, scope alerts, client actions, and a 12-month earned vs. paid chart with client drill-down."],
      ["File Attachments", "File attachments across clients, projects, and scope items with private storage and secure access."],
      ["Authentication & Demo Mode", "Google and GitHub OAuth with live PostgreSQL. Unauthenticated visitors get a full seed-data demo on the same routes and components."],
      ["Invoicing", "Invoice management with status tracking, time entry import by pay period and role, and PDF export."],
      ["Notes & Attachments", "Notes and uploads available for all clients, project, and requirements, with hierarchical notes with folder organization."],
      ["Light & Dark Themes", "Follows the system color scheme by default, with a manual toggle in the header."],
    ],
    images: [
      "/images/devledger-dashboard.jpg",
      "/images/devledger-client.jpg",
      "/images/devledger-requirements.jpg",
    ],
    gitLink: "https://github.com/TimHuitt/devledger",
    deployLink: "https://devledger-alpha.vercel.app/",
    caseStudy: false,
    skills: ["next", "react", "ts", "tailwind", "postgresql", "node", "express"],
  },
  {
    slug: "work-orders",
    title: "Work Orders",
    role: "Frontend Engineer",
    description:
      "Work order management demo for a fictional electrical contractor: a status-grouped job board with drag and drop, technician assignment, checklists, permit tracking, and crew activity logs.",
    header:
      "Job tracking for a trade business, from the first call to the finished checklist\n\nA demo built around how a small electrical contractor actually runs. Dispatch sees emergencies, unassigned jobs, and today's schedule at a glance, and every job carries its own checklist, permit status, and crew notes.",
    body:
      "Built with Next.js, React 19, TypeScript, and Tailwind CSS. State lives in a small store built on useSyncExternalStore and persisted to sessionStorage, so every visitor gets a fully interactive demo that resets each session.\n\nSeed data is generated relative to today, so schedules, overdue flags, and activity timestamps always look current.",
    features: [
      ["Dispatch Dashboard", "Active jobs, today's schedule, emergencies, and unassigned work at a glance."],
      ["Status Board", "Jobs grouped by status, with drag and drop to reorder them or move them between stages."],
      ["Inline Editing", "Priority, job type, technician, and schedule set directly from the list."],
      ["Job Details", "Checklists with progress, permit tracking, estimated hours, and customer and job site details."],
      ["Activity Log", "Crew notes plus automatic entries for status, priority, assignment, and schedule changes."],
      ["Search & Filters", "Filter by technician, priority, and job type, or search jobs, customers, and addresses."],
      ["Session Demo", "Fully interactive with seeded data; changes persist for the browser session, with a one-click reset."],
    ],
    images: ["/images/work-orders-list.jpg", "/images/work-orders-detail.jpg"],
    gitLink: "",
    deployLink: "https://work-orders-lovat.vercel.app/",
    caseStudy: false,
    skills: ["next", "react", "ts", "tailwind"],
  },
  {
    slug: "patient-intake",
    title: "Patient Intake",
    role: "Frontend Engineer",
    description:
      "Front desk check-in and visit queue demo for a fictional family clinic: a four-step intake, symptom-based triage suggestions, live wait timers, and an editable patient panel.",
    header:
      "Patient check-in and visit flow for a busy front desk\n\nPatients move from Waiting to Roomed to Seen, sorted by triage level and arrival time, with a wait timer on every card so staff can see who's next at a glance.",
    body:
      "Built with Next.js, React 19, TypeScript, and Tailwind CSS. A small store built on useSyncExternalStore persists to sessionStorage, and a shared 15-second clock keeps every timer in sync without reading the time during server rendering.\n\nAll patients, clinicians, and insurers are fictional, and the demo isn't connected to any real health records.",
    features: [
      ["Visit Board", "Waiting, Roomed, and Seen columns with wait timers, sorted by triage level and then arrival."],
      ["Guided Check-In", "Four steps: patient details, reason for visit, medical history, and review."],
      ["Triage Suggestions", "Symptoms map to a suggested triage level, modeled loosely on ESI levels 1 to 5."],
      ["Patient Panel", "A slide-over panel to edit visit type, clinician, triage, and vitals in place."],
      ["Filters & Search", "Filter by clinician or visit type, or search by name or reason for visit."],
      ["Mobile Layout", "The three columns become tabs at phone width."],
      ["Session Demo", "Fully interactive with seeded data; changes persist for the browser session, with a one-click reset."],
    ],
    images: ["/images/intake-board.jpg", "/images/intake-patient.jpg"],
    gitLink: "",
    deployLink: "https://patient-intake-kappa.vercel.app/",
    caseStudy: false,
    skills: ["next", "react", "ts", "tailwind"],
  },
  {
    slug: "code-challenger",
    title: "Code Challenger",
    role: "Full Stack Engineer",
    description:
      "AI-generated code challenges. Customize challenges and let AI evaluate your solution. Provides challenge details, test cases, hints, and solutions.",
    header:
      "Coding challenge platform fully controlled by Artificial Intelligence\n\nUnique coding practice environment where you can customize AI-created challenges to fit your learning path and receive AI evaluations of your solution.",
    body:
      "Code Challenger is designed to enhance your programming skills through a variety of customizable AI-generated challenges.\n\nEach challenge provides: Detailed Instructions, Test Cases, Hints, Solutions.",
    features: [
      ["AI-Generated Challenges", "Access a vast array of challenges created by AI."],
      ["Customization", "Tailor the difficulty and scope of challenges to match your personal learning objectives."],
      ["Instant Feedback", "Submit your solutions and receive AI-evaluated feedback with actionable insights."],
      ["Hints and Solutions", "Comprehensive hints and detailed solutions to help you through each challenge."],
    ],
    images: ["/images/gjRtX8j.png", "/images/TCqkEd1.png", "/images/eBM2M4h.png"],
    gitLink: "https://github.com/TimHuitt/code-challenger-client",
    deployLink: "https://code-challenger-app.netlify.app/",
    caseStudy: false,
    skills: ["react", "js", "express", "node", "openai"],
    legacy: true,
  },
  {
    slug: "auto-component",
    title: "Auto Component",
    role: "Frontend & AI Prompt Engineer",
    description:
      "An npm-published tool that streamlines UI element creation in React projects through AI-prompted element generation.",
    header:
      "AutoComponent is a developer tool published to npm, designed to transform the way UI elements are created in React projects. By integrating AI with your development environment, AutoComponent speeds up the design and implementation of UI components.",
    body:
      "AutoComponent automates the generation of React components through a simple, user-friendly interface, enhancing productivity and reducing manual coding errors.",
    features: [
      ["AI-Prompted Generation", "Streamline the creation of React components with AI-driven prompts that deliver precise code."],
      ["Dynamic Rendering", "Use JSXParser to dynamically render the generated code, ensuring accurate implementation."],
      ["Code Beautification", "Automatically formats JSX/HTML using js-beautify for improved readability."],
      ["Interactive UI", "Engage with a user-friendly interface that allows for real-time interaction and modifications."],
    ],
    images: ["/images/X23fHN8.png", "/images/Jjd9Eu2.gif", "/images/woDHKJY.png"],
    gitLink: "https://github.com/TimHuitt/auto-component",
    deployLink: "https://auto-component.com/",
    caseStudy: false,
    skills: ["react", "js", "express", "node", "openai"],
    legacy: true,
  },
  {
    slug: "green-diary",
    title: "Green Diary",
    role: "Frontend Engineer",
    description:
      "An innovative CO2 tracking platform that helps monitor the environmental impact of your vehicle trips.",
    header:
      "Green Diary is an innovative platform designed to help you monitor the environmental impact of your vehicle trips and foster more eco-conscious decisions.",
    body:
      "By understanding the carbon footprint of your travels, Green Diary aims to encourage eco-friendly behaviors. Utilizes various APIs to populate vehicle data for accurate emission tracking.",
    features: [
      ["CO2 Emission Tracking", "Calculates the amount of CO2 emitted on each trip based on your vehicle's make and model."],
      ["Tree Mitigation Estimates", "Provides insights into the number of trees required to offset your trip's carbon emissions."],
      ["User-Friendly Interface", "Built with Django and Bootstrap, offering a responsive and intuitive experience."],
      ["Comprehensive Vehicle Database", "Utilizes extensive vehicle data via API for accurate emission calculations."],
    ],
    images: ["/images/xurUff3.png", "/images/YYFRFXu.png"],
    gitLink: "https://github.com/elliesolhjou/Green-Diary",
    deployLink: "https://green-diary-app-2098e92803f3.herokuapp.com/",
    caseStudy: false,
    skills: ["py", "django", "bootstrap", "postgresql"],
    legacy: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getMainProjects(): Project[] {
  return projects.filter((p) => !p.legacy);
}

export function getLegacyProjects(): Project[] {
  return projects.filter((p) => p.legacy);
}
