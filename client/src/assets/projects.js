const projects = [
  {
    "title": "Dynamic Portfolio",
    "role": "Freelance Full Stack Developer",
    "description": "Responsive portfolio website built using Next.js and TypeScript, PostgreSQL, and Cloudinary, featuring dynamic content management capabilities.",
    "header": "Dynamic portfolio website built to client specification with a fully integrated and authenticated content management system that allows easy updates to any section of the website.",
    "body": "This portfolio website is designed to provide a showcase of the clients work, while also offering full control over their content.  The custom CMS empowers them to update their website without needing technical expertise.",
    "features": [
      ["Server-Side Rendering", "Utilizes Next.js for efficient, dynamic rendering."],
      ["Custom CMS", "Allows the client to update content without needing technical knowledge."],
      ["API Integration", "Uses Node.js and axios for backend communication."],
      ["Image Management", "Integrates Cloudinary for optimized image storage and delivery."],
      ["Database", "Utilizes PostgreSQL for persistent data storage."]
    ],
    "images": ["https://i.imgur.com/nCdJOIu.png", "https://i.imgur.com/f1ujfJY.png", "https://i.imgur.com/0OtWU5d.png"],
    "gitLink": "https://github.com/TimHuitt/kira-tattoo",
    "deployLink": "https://kira-art.vercel.app/",
    "skills" : ['next', 'ts', 'node', 'cloudinary', 'postgresql', 'axios', 'tailwind'],
  },
  {
    "title": "CodeChallenger",
    "role": "Lead Full Stack Developer",
    "description": "AI Generated code challenges. Customize challenges and let AI evaluate your solution. Provides challenge details, test cases, hints, and solutions.",
    "header": `
      Coding challenge platform fully controlled by Artificial Intelligence<br/><br/>Unique coding practice environment where you can customize AI created challenges to fit your learning path and receive AI evaluations of your solution.  
    `,
    "body": `
      CodeChallenger is designed to enhance your programming skills through a variety of customized challenges <br/><br/><b>Each challenge provides:</b><br/>Detailed Instructions<br/>Test Cases<br/>Hints<br/>Solutions</p>
    `,
    "features": [
      ['AI-Generated Challenges', 'Access a vast array of challenges created by AI'],
      ['Customization', 'Tailor the difficulty and scope of challenges to match your personal learning objectives'],
      ['Instant Feedback', 'Submit your solutions and receive AI-evaluated feedback with actionable insights'],
      ['Comprehensive Hints and Solutions', 'Hints and detailed solutions to help you through each challenge'],
      ['User-Friendly Interface', 'Built with a clean and intuitive design for an enjoyable user experience']
    ],
    "images": ["https://i.imgur.com/gjRtX8j.png", "https://i.imgur.com/TCqkEd1.png", "https://i.imgur.com/eBM2M4h.png", "w-https://i.imgur.com/EOIECN8.png"],
    "gitLink": "https://github.com/TimHuitt/code-challenger-client",
    "deployLink": "https://code-challenger-app.netlify.app/",
    "skills" : ['react', 'js', 'express', 'node', 'openai', 'html', 'css'],
  },
  {
    "title": "Auto Component",
    "role": "Front End Developer and AI Prompt Engineer",
    "description": "An npm published tool that streamlines UI element creation in React projects through AI prompted element generation.",
    "header": `AutoComponent is a developer tool published to npm and designed to transform the way UI elements are created in React projects. By integrating artificial intelligence with your development environment, AutoComponent speeds up the design and implementation of UI components`,
    "body": `AutoComponent automates the generation of React components through a simple, user-friendly interface, enhancing productivity and reducing manual coding errors`,
    "features": [
      ['AI-Prompted Generation', 'Streamline the creation of React components with AI-driven prompts that deliver precise code.'],
      ['Dynamic Rendering', 'Use JSXParser to dynamically render the generated code, ensuring accurate implementation.'],
      ['Code Beautification', 'Automatically formats JSX/HTML using js-beautify for improved readability.'],
      ['Interactive UI', 'Engage with a user-friendly interface that allows for real-time interaction and modifications.']
    ],
    "images": ["https://i.imgur.com/woDHKJY.png", "https://i.imgur.com/qDJiLJe.png"],
    "gitLink": "https://github.com/TimHuitt/auto-component",
    "deployLink": "https://auto-component.com/",
    "skills" : ['react', 'js', 'express', 'node', 'openai', 'html', 'css']
  },
  {
    "title": "Green Diary",
    "role": "Senior Full Stack Engineer",
    "description": "An innovative CO2 tracking platform that helps monitor the environmental impact of your vehicle trips.",
    "header": `Green Diary is an innovative platform designed to help you monitor the environmental impact of your vehicle trips and foster more eco-conscious decisions`,
    "body": `By understanding the carbon footprint of your travels, Green Diary aims to encourage eco-friendly behaviors. Utilizes various APIs to populate vehicle data for accurate emission tracking`,
    "features": [
      ['CO2 Emission Tracking', 'Calculates the amount of CO2 emitted on each trip based on your vehicle\'s make and model.'],
      ['Tree Mitigation Estimates', 'Provides insights into the number of trees required to offset your trip\'s carbon emissions.'],
      ['User-Friendly Interface', 'Built with Django and Bootstrap, offering a responsive and intuitive experience.'],
      ['Comprehensive Vehicle Database', 'Utilizes extensive vehicle data for accurate emission calculations.']
    ],
    "images": ["https://i.imgur.com/xurUff3.png", "https://i.imgur.com/YYFRFXu.png"],
    "gitLink": "https://github.com/elliesolhjou/Green-Diary",
    "deployLink": "https://green-diary-app-2098e92803f3.herokuapp.com/",
    "skills" : ['py', 'django', 'bootstrap', 'postgresql', 'html', 'css']
  },
  {
    "title": "Portfolio Website",
    "role": "Freelance Full Stack Developer",
    "description": "This is a responsive portfolio website built using Next.js and TypeScript. It was designed to showcase the client's work and skills in a clean and professional manner.",
    "header": "A clean and professional portfolio website showcasing the client's skills and work.",
    "body": "This portfolio website provides a concise and visually appealing presentation of the client's work and skills, designed to impress potential clients and collaborators.",
    "features": [
        ["Static Site Generation", "Utilizes Next.js for fast, static rendering."],
        ["Responsive Design", "Ensures the website looks great on all devices."],
        ["Custom Styling", "Tailored to the client's branding and style preferences."]
    ],
    "images": ["https://i.imgur.com/gAXA3Mf.jpeg", "https://i.imgur.com/KNWXUbv.png", 'https://i.imgur.com/s0Y3AwV.png'],
    "gitLink": "https://github.com/TimHuitt/steph-art",
    "deployLink": "https://steph-art.vercel.app/",
    "skills": ['next', 'ts', 'tailwind']
  },
  {
    "title": "Promptopus",
    "role": "Lead Developer",
    "description": "Prompt generator for artist inspiration. Artists can choose between Prompts or Stories.",
    "header": `
      Promptopus is an innovative and engaging app designed to inspire artists and creators by providing unique drawing prompts and storytelling ideas
    `,
    "body": `
      Promptopus is built using Next.js, TypeScript, and OpenAI, showcasing the latest in web development and artificial intelligence. Users can choose between generating random words or emojis for drawing prompts or receiving AI-generated stories based on customizable themes and lengths
    `,
    "features": [
      ['Dynamic Prompt Generation', 'Users can generate unique drawing prompts by selecting between words or emojis, providing endless inspiration'],
      ['AI-Powered Story Generation', 'Leveraging OpenAIs capabilities, the app crafts stories in various lengths and themes'],
      ['Intuitive User Experience', 'A clean, user-friendly interface allows for seamless navigation and interaction'],
      ['Responsive Design', 'The app is fully responsive, providing a consistent experience across all devices'],
    ],
    "images": ["https://i.imgur.com/8gaRKbp.png", "https://i.imgur.com/8AOi92k.png"],
    "gitLink": "https://github.com/TimHuitt/Promptopus",
    "deployLink": "https://promptopus.netlify.app/",
    "skills" : ['next', 'ts', 'express', 'node', 'openai', 'html', 'css'],
  },
  {
    "title": "pawzbe",
    "role": "Lead Developer",
    "description": "Pawzbe is a pet social media platform where users can share photos and updates about their pets.",
    "header": `
      Pawzbe is a dedicated social media platform for pets and their owners. Users can create accounts and share updates about their pets with a community of pet lovers
    `,
    "body": `
      User can create accounts using either Google or Github logins, engaging with friends and other pet enthusiasts
    `,
    "features": [
      ['User-Friendly Social Interaction', 'Create a personal space for your pets and connect with other pet owners.'],
      ['Multiple Login Options', 'Sign in with Google or Github for quick access.'],
      ['Interactive Media Sharing', 'Share photos and updates, creating a vibrant pet-centric community.']
    ],
    "images": ["https://i.imgur.com/Ct1IKgx.png", "https://i.imgur.com/6CN6238.png"],
    "gitLink": "https://github.com/TimHuitt/pawzbe",
    "deployLink": "https://pawzbe.com/",
    "skills" : ['js', 'express', 'node', 'mongo', 'html', 'css']
  },
  {
    "title": "Battleship!",
    "description": "Engage in naval warfare with advanced computer opponents and customizable ship placement in this turn-based tactical game.",
    "header": `
      Battleship! offers a classic naval combat experience where players can engage in strategic battles against an advanced AI opponent
    `,
    "body": `
      Enjoy customizable ship placement and tactical gameplay with pop-up notifications and game stats to track your progress
    `,
    "features": [
      ['Advanced Computer Opponent', 'Challenge yourself against AI designed to test your strategic thinking.'],
      ['Customizable Ship Placement', 'Strategically place your fleet to outmaneuver your opponent.'],
      ['Turn-Based Gameplay', 'Take turns and make critical decisions to sink your opponent\'s ships.'],
      ['Game Stats and Notifications', 'Keep track of your victories and receive updates with in-game notifications.']
    ],
    "images": ["https://i.imgur.com/ukgZLb4.png", "https://i.imgur.com/LOHaSfv.png"],
    "gitLink": "https://github.com/TimHuitt/battleship",
    "deployLink": "https://timhuitt.github.io/battleship/",
    "skills" : ['js', 'html', 'css']
  },
  {
    "title": "Tic Tac Toe",
    "description": "Enjoy the classic two-player Tic-Tac-Toe game with modern UI enhancements, featuring turn/piece tracking and a resettable score.",
    "header": `
      Tic Tac Toe brings the traditional game to modern audiences with an updated user interface and enhanced gameplay features
    `,
    "body": `
      This game includes player turn/piece tracking and offers a resettable persistent score to keep the competition lively and engaging
    `,
    "features": [
      ['Updated User Interface', 'A fresh look for a classic game, enhancing the overall experience.'],
      ['Player Turn/Piece Tracking', 'Easily keep track of whose turn it is and what pieces are in play.'],
      ['Resettable Score', 'Reset scores to start a new series of games, keeping gameplay competitive and fair.']
    ],
    "images": ["https://i.imgur.com/ehk6k0f.png", "https://i.imgur.com/idWiPTd.png"],
    "gitLink": "https://codepen.io/timhuitt/pen/NWoGKmo",
    "deployLink": "https://codepen.io/timhuitt/full/NWoGKmo",
    "skills" : ['js', 'html', 'css']
  },
]
export default projects