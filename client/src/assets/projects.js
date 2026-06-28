const projects = [
  {
    "title": "Production Platform (NDA)",
    "role": "Senior Full Stack Engineer",
    "description": "Sole engineer responsible for designing, building, and operating a production platform used by internal and external users.",
    "header": `
      Platform supporting legacy data migration, complex relational systems, and compliance-sensitive constraints
    `,
    "body": `
      <br/><br/>
      Development included frontend architecture, backend systems, and infrastructure design supporting complex data models, document handling, and internal tooling.
      This involved building data-driven interfaces that reflect underlying relational state and system constraints, as well as data modeling, API design, and system behavior under incomplete and shifting requirements.
      <br/><br/>
      Due to confidentiality, implementation details are not publicly available.
    `,
    "features": [
      ['Relational Domain Modeling', 'Multiple first-class entities with defined relationships and independent lifecycles.'],
      ['Legacy Data Migration', 'Import and reconciliation workflows for integrating data from external systems.'],
      ['Document Management', 'Upload, storage, preview, and association of documents across related records.'],
      ['Data-Driven Interfaces', 'Frontend views that map directly to underlying relational state and system constraints.'],
      ['Internal Tooling', 'Administrative interfaces for managing records, documents, and operational data.'],
      ['Access Control', 'Role-based access patterns across internal and external users.'],
      ['Production Operations', 'Environment separation, validation, and error handling for production use.']
    ],
    "images": [],
    "gitLink": "",
    "deployLink": "",
    "caseStudy": true,
    "skills": ["next", "react", "ts", "tailwind", "postgres", "node", "express"]
  },
  {
    "title": "DevLedger",
    "role": "Full Stack Engineer",
    "description": "Full-stack freelance business management platform centered on scope tracking, time tracking and billing, and document organization - with pipeline management, invoicing, and an interactive demo.",
    "header": "Freelance business management from prospect to invoice<br/><br/>Provides lead, client, and project management, versioned scope tracking, time and invoice tools, and extensive notes and document management. <br/><br/>Live PostgreSQL and Vercel Blob storage for authenticated users, with a fully interactive demo for everyone else.",
    "body": "The dashboard provides pipeline status, project health, flagged requirements, invoice status, and earnings at a glance with direct linking to every item.<br/><br/>Each client supports multiple projects with in-depth requirement and time tracking. Projects connect at the client level and offer combined invoicing with PDF exports.<br/><br/>Notes and file attachments are organized per client, project, and scope item, with folder hierarchy and drag-to-reorder throughout.",
    "features": [
      ["Prospect Pipeline", "Priority-ranked pipeline with statistics and dashboard visibility."],
      ["Client & Project Management", "Linked client and project records with status tracking and next-action scheduling."],
      ["Scope & Requirements", "Date-versioned requirement tracking with status-based alerts linking to flagged rows on the dashboard."],
      ["Time Tracking & Billing", "Multiple billing roles per project with independent rates, a persistent timer, and time aggregated by day, month, and year."],
      ["Dashboard", "Pipeline health, scope alerts, client actions, and a 12-month earned vs. paid chart with client drill-down."],
      ["File Attachments", "File attachments across clients, projects, and scope items with private storage and secure access."],
      ["Authentication & Demo Mode", "Google and GitHub OAuth with live PostgreSQL. Unauthenticated visitors get a full seed-data demo on the same routes and components."],
      ["Invoicing", "Invoice management with status tracking, time entry import by pay period and role, and PDF export."],
      ["Notes & Attachments", "Notes and uploads available for all clients, project, and requirements, with hierarchical notes with folder organization."]
    ],
    "images": ["/images/K7vQn2X.png", "/images/mP4aR8d.png", "/images/Zx9Lf3H.png", "/images/cT6wJq1.png", "/images/N8bYk5M.png"],
    "gitLink": "https://github.com/TimHuitt/devledger",
    "deployLink": "https://devledger-alpha.vercel.app/",
    "caseStudy": false,
    "skills": ["next", "react", "ts", "tailwind", "postgres", "node", "express"]
  },
  {
    "title": "CodeChallenger",
    "role": "Full Stack Engineer",
    "description": "AI Generated code challenges. Customize challenges and let AI evaluate your solution. Provides challenge details, test cases, hints, and solutions.",
    "header": `
      Coding challenge platform fully controlled by Artificial Intelligence<br/><br/>Unique coding practice environment where you can customize AI created challenges to fit your learning path and receive AI evaluations of your solution.  
    `,
    "body": `
      CodeChallenger is designed to enhance your programming skills through a variety of customizable AI generated challenges <br/><br/><b>Each challenge provides:</b><br/>Detailed Instructions<br/>Test Cases<br/>Hints<br/>Solutions</p>
    `,
    "features": [
      ['AI-Generated Challenges', 'Access a vast array of challenges created by AI'],
      ['Customization', 'Tailor the difficulty and scope of challenges to match your personal learning objectives'],
      ['Instant Feedback', 'Submit your solutions and receive AI-evaluated feedback with actionable insights'],
      ['Comprehensive Hints and Solutions', 'Hints and detailed solutions to help you through each challenge'],
    ],
    "images": ["/images/gjRtX8j.png", "/images/TCqkEd1.png", "/images/eBM2M4h.png"],
    "gitLink": "https://github.com/TimHuitt/code-challenger-client",
    "deployLink": "https://code-challenger-app.netlify.app/",
    "skills" : ['react', 'js', 'express', 'node', 'openai'],
  },
  {
    "title": "Auto Component",
    "role": "Frontend and AI Prompt Engineer",
    "description": "An npm published tool that streamlines UI element creation in React projects through AI prompted element generation.",
    "header": `AutoComponent is a developer tool published to npm and designed to transform the way UI elements are created in React projects. By integrating artificial intelligence with your development environment, AutoComponent speeds up the design and implementation of UI components`,
    "body": `AutoComponent automates the generation of React components through a simple, user-friendly interface, enhancing productivity and reducing manual coding errors`,
    "features": [
      ['AI-Prompted Generation', 'Streamline the creation of React components with AI-driven prompts that deliver precise code.'],
      ['Dynamic Rendering', 'Use JSXParser to dynamically render the generated code, ensuring accurate implementation.'],
      ['Code Beautification', 'Automatically formats JSX/HTML using js-beautify for improved readability.'],
      ['Interactive UI', 'Engage with a user-friendly interface that allows for real-time interaction and modifications.']
    ],
    "images": ["/images/X23fHN8.png", "/images/Jjd9Eu2.gif", "/images/woDHKJY.png", "w-/images/qDJiLJe.png"],
    "gitLink": "https://github.com/TimHuitt/auto-component",
    "deployLink": "https://auto-component.com/",
    "skills" : ['react', 'js', 'express', 'node', 'openai']
  },
  {
    "title": "Green Diary",
    "role": "Frontend Engineer",
    "description": "An innovative CO2 tracking platform that helps monitor the environmental impact of your vehicle trips.",
    "header": `Green Diary is an innovative platform designed to help you monitor the environmental impact of your vehicle trips and foster more eco-conscious decisions`,
    "body": `By understanding the carbon footprint of your travels, Green Diary aims to encourage eco-friendly behaviors. Utilizes various APIs to populate vehicle data for accurate emission tracking`,
    "features": [
      ['CO2 Emission Tracking', 'Calculates the amount of CO2 emitted on each trip based on your vehicle\'s make and model.'],
      ['Tree Mitigation Estimates', 'Provides insights into the number of trees required to offset your trip\'s carbon emissions.'],
      ['User-Friendly Interface', 'Built with Django and Bootstrap, offering a responsive and intuitive experience.'],
      ['Comprehensive Vehicle Database', 'Utilizes extensive vehicle data via API for accurate emission calculations.']
    ],
    "images": ["/images/xurUff3.png", "/images/YYFRFXu.png"],
    "gitLink": "https://github.com/elliesolhjou/Green-Diary",
    "deployLink": "https://green-diary-app-2098e92803f3.herokuapp.com/",
    "skills" : ['py', 'django', 'bootstrap', 'postgresql']
  },
  // {
  //   "title": "Promptopus",
  //   "role": "Full Stack Engineer",
  //   "description": "Prompt generator for artist inspiration. Artists can choose between Prompts or Stories.",
  //   "header": `
  //     Promptopus is an innovative and engaging app designed to inspire artists and creators by providing unique drawing prompts and storytelling ideas
  //   `,
  //   "body": `
  //     Promptopus is built using Next.js, TypeScript, and OpenAI. Users can choose between generating random words or emojis for drawing prompts or receiving AI-generated stories based on customizable themes and lengths
  //   `,
  //   "features": [
  //     ['Dynamic Prompt Generation', 'Users can generate unique drawing prompts by selecting between words or emojis, providing endless inspiration'],
  //     ['AI-Powered Story Generation', 'Leveraging OpenAIs capabilities, the app crafts stories in various lengths and themes'],
  //     ['Intuitive User Experience', 'A clean, user-friendly interface allows for seamless navigation and interaction'],
  //     ['Responsive Design', 'The app is fully responsive, providing a consistent experience across all devices'],
  //   ],
  //   "images": ["/images/8gaRKbp.png", "/images/8AOi92k.png"],
  //   "gitLink": "https://github.com/TimHuitt/Promptopus",
  //   "deployLink": "https://promptopus.netlify.app/",
  //   "skills" : ['next', 'ts', 'express', 'node', 'openai'],
  // },
  // {
  //   "title": "pawzbe",
  //   "role": "Frontend Engineer",
  //   "description": "Pawzbe is a pet social media platform where users can share photos and updates about their pets.",
  //   "header": `
  //     Pawzbe is a dedicated social media platform for pets and their owners. Users can create accounts and share updates about their pets with a community of pet lovers
  //   `,
  //   "body": `
  //     User can create accounts using either Google or Github logins, engaging with friends and other pet enthusiasts
  //   `,
  //   "features": [
  //     ['User-Friendly Social Interaction', 'Create a personal space for your pets and connect with other pet owners.'],
  //     ['Multiple Login Options', 'Sign in with Google or Github for quick access.'],
  //     ['Interactive Media Sharing', 'Share photos and updates, creating a vibrant pet-centric community.']
  //   ],
  //   "images": ["/images/Ct1IKgx.png", "/images/6CN6238.png"],
  //   "gitLink": "https://github.com/TimHuitt/pawzbe",
  //   "deployLink": "https://pawzbe.com/",
  //   "skills" : ['js', 'express', 'node', 'mongo']
  // },
  // {
  //   "title": "Battleship!",
  //   "role": "Developer",
  //   "description": "Engage in naval warfare with advanced computer opponents and customizable ship placement in this turn-based tactical game.",
  //   "header": `
  //     Battleship! offers a classic naval combat experience where players can engage in strategic battles against an advanced AI opponent
  //   `,
  //   "body": `
  //     Enjoy customizable ship placement and tactical gameplay with pop-up notifications and game stats to track your progress
  //   `,
  //   "features": [
  //     ['Advanced Computer Opponent', 'Challenge yourself against AI designed to test your strategic thinking.'],
  //     ['Customizable Ship Placement', 'Strategically place your fleet to outmaneuver your opponent.'],
  //     ['Turn-Based Gameplay', 'Take turns and make critical decisions to sink your opponent\'s ships.'],
  //     ['Game Stats and Notifications', 'Keep track of your victories and receive updates with in-game notifications.']
  //   ],
  //   "images": ["/images/ukgZLb4.png", "/images/LOHaSfv.png"],
  //   "gitLink": "https://github.com/TimHuitt/battleship",
  //   "deployLink": "https://timhuitt.github.io/battleship/",
  //   "skills" : ['js']
  // },
  // {
  //   "title": "Tic Tac Toe",
  //   "role": "Developer",
  //   "description": "Enjoy the classic two-player Tic-Tac-Toe game with modern UI enhancements, featuring turn/piece tracking and a resettable score.",
  //   "header": `
  //     Tic Tac Toe brings the traditional game to modern audiences with an updated user interface and enhanced gameplay features
  //   `,
  //   "body": `
  //     This game includes player turn/piece tracking and offers a resettable persistent score to keep the competition lively and engaging
  //   `,
  //   "features": [
  //     ['Updated User Interface', 'A fresh look for a classic game, enhancing the overall experience.'],
  //     ['Player Turn/Piece Tracking', 'Easily keep track of whose turn it is and what pieces are in play.'],
  //     ['Resettable Score', 'Reset scores to start a new series of games, keeping gameplay competitive and fair.']
  //   ],
  //   "images": ["/images/ehk6k0f.png", "/images/idWiPTd.png"],
  //   "gitLink": "https://codepen.io/timhuitt/pen/NWoGKmo",
  //   "deployLink": "https://codepen.io/timhuitt/full/NWoGKmo",
  //   "skills" : ['js']
  // },
]
export default projects