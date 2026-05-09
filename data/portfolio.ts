export const profile = {
  name: "Shabil Dixon",
  title: "Software Engineer",
  headline:
    "Frontend-focused software engineer building polished, API-driven full-stack web applications.",
  intro:
    "I work with React, Next.js, TypeScript, API routes, Supabase/PostgreSQL, authentication, and AI-assisted product workflows to build useful web apps with thoughtful UI and real-world behavior.",
  currentFocus:
    "Polished frontend experiences with growing full-stack depth across APIs, auth, databases, and product-focused AI features.",
  location: "Waldorf, MD",
  email: "shabil.dixon@gmail.com",
  githubUrl: "https://github.com/muh-dixon",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-shabil-dixon-ba7ab8263/",
  learning:
    "Currently deepening backend and full-stack fundamentals through authentication, API route design, PostgreSQL persistence, and secure user-specific data flows.",
  collaboration:
    "Frontend and full-stack projects, especially products with real users, AI-assisted workflows, or security-aware engineering.",
  askAbout:
    "Responsive interfaces, authenticated workflows, REST API integration, database-backed features, and the request/response lifecycle behind usable products.",
} as const;

export const quickFacts = [
  {
    label: "Based in",
    value: "Waldorf, MD, United States",
  },
  {
    label: "Education",
    value: "B.S. in Computer Science, Towson University",
  },
  {
    label: "Current Focus",
    value: "Frontend engineering, API-driven apps, authentication, and database-backed workflows.",
  },
  {
    label: "Open To",
    value: "Frontend and full-stack opportunities with practical product impact.",
  },
] as const;

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Authentication",
  "API Routes",
  "OpenAI API",
  "Python",
  "Java",
  "REST APIs",
  "Firebase",
  "Vercel",
  "Git/GitHub",
  "Linux",
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Redux Toolkit"],
  },
  {
    label: "Backend & Platform",
    items: [
      "Full-Stack Development",
      "API Routes",
      "Next.js API Routes",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Firebase",
      "Firestore",
      "Vercel",
    ],
  },
  {
    label: "Auth & AI",
    items: ["Authentication", "Authorization", "OpenAI API", "AI-Assisted Product Workflows", "Stripe"],
  },
  {
    label: "Systems & Security",
    items: ["Linux", "Networking", "Cryptography", "Systems Programming", "HTTP Request Handling"],
  },
] as const;

export const featuredProjects = [
  {
    name: "CareerTrack Dashboard",
    summary:
      "An authenticated full-stack job application tracker built with Next.js, React, TypeScript, Supabase Auth, PostgreSQL, and Tailwind CSS. Users can sign up, log in, and manage their own job applications through protected API routes and user-specific data access.",
    highlights: [
      "Supabase Auth",
      "PostgreSQL persistence",
      "Protected Next.js API routes",
      "Proxy-based route protection",
      "Row Level Security (RLS)",
      "CRUD operations",
      "Search and filtering",
      "Duplicate detection",
      "Modal editing",
      "Responsive dashboard UI",
      "Deployed on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    liveUrl: "https://job-app-tracker-dun.vercel.app/?auth=login",
    repoUrl: "https://github.com/muh-dixon/job-app-tracker",
    previewLabel: "Authenticated job application dashboard",
    previewDomain: "job-app-tracker-dun.vercel.app",
    accent: "from-[#0d1b2a] via-[#1b4965] to-[#5fa8d3]",
  },
  {
    name: "AI Resume Assistant",
    summary:
      "A full-stack AI-powered resume assistant that transforms rough resume bullets and project descriptions into recruiter-ready language. It includes tone selection, before/after comparison, backend API integration, loading states, error handling, and copy-to-clipboard functionality.",
    highlights: [
      "OpenAI API integration",
      "Next.js API route",
      "Tone selection",
      "Before/after comparison",
      "Loading and error states",
      "Copy-to-clipboard",
      "Responsive branded UI",
      "Deployed on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    liveUrl: "https://ai-resume-helper-five.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/ai-resume-helper",
    previewLabel: "AI resume bullet refinement workflow",
    previewDomain: "ai-resume-helper-five.vercel.app",
    accent: "from-[#112a46] via-[#2f6690] to-[#81c3d7]",
  },
  {
    name: "Skinstric AI Platform",
    summary:
      "A full-stack skincare analysis experience built with Next.js, React, and TypeScript. It features a multi-step onboarding flow, image-based analysis requests, reusable UI architecture, and persistent client-side state.",
    highlights: [
      "Multi-step product flow",
      "Image-based analysis requests",
      "REST API integration",
      "Reusable component structure",
      "Client-side persistence",
      "Responsive Tailwind UI",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://skinstric-internship-nu.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/skinstric-internship",
    previewLabel: "AI skincare analysis workflow",
    previewDomain: "skinstric-internship-nu.vercel.app",
    accent: "from-[#0c214f] via-[#174a84] to-[#48c0b5]",
  },
] as const;

export const additionalProjects = [
  {
    name: "Ultraverse Market",
    summary:
      "A responsive NFT marketplace interface powered by external APIs. It demonstrates dynamic routing, marketplace browsing, skeleton states, sorting, pagination, and animated UI presentation.",
    stack: ["React", "React Router", "API Integration", "AOS", "Responsive Design"],
    liveUrl: "https://shabil-internship-main.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/shabil-internship-main",
  },
  {
    name: "Summarist Platform",
    summary:
      "A full-stack reading platform with authentication, subscription access, and dynamic book and player pages. The build highlights product thinking across frontend UX, state management, persistence, and payments.",
    stack: ["Next.js", "Redux Toolkit", "Firebase", "Firestore", "Stripe"],
    liveUrl: "https://summarist-sigma.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/summarist",
  },
] as const;

export const experience = [
  {
    company: "Skinstric AI",
    role: "Frontend Developer Intern",
    location: "Remote",
    period: "Apr. 2026 - Apr. 2026",
    highlights: [
      "Built and deployed a full-stack skincare analysis application using Next.js, React, and TypeScript.",
      "Integrated REST APIs for user submission flows and image-based analysis, including Base64 image handling.",
      "Developed responsive Tailwind CSS interfaces with interactive transitions across mobile and desktop layouts.",
      "Structured reusable components and client-side persistence for a more scalable product foundation.",
    ],
  },
  {
    company: "Frontend Simplified",
    role: "Frontend Developer Intern",
    location: "Remote",
    period: "Jan. 2026 - Feb. 2026",
    highlights: [
      "Built and deployed multiple React and Next.js applications, including marketplace and full-stack subscription products.",
      "Implemented authentication, dynamic routing, state management, and real-time UI updates across app flows.",
      "Integrated Firebase, Firestore, Stripe Checkout, and cloud-function endpoints to support end-to-end features.",
      "Used Git and Vercel to manage version control, deployments, and iterative frontend delivery.",
    ],
  },
] as const;

export const education = {
  school: "Towson University",
  degree: "Bachelor of Science in Computer Science",
  period: "August 2021 - May 2025",
  coursework: [
    "Data Structures",
    "Software Engineering",
    "Systems Programming",
    "Operating Systems",
    "Database Systems",
    "Networking",
    "Cryptography",
  ],
} as const;

export const strengths = [
  {
    title: "Frontend Execution",
    description:
      "I care about responsive layouts, clear user flows, and interfaces that feel polished instead of merely functional.",
  },
  {
    title: "Full-Stack Growth",
    description:
      "I am growing into full-stack development by adding backend APIs, authentication, authorization, and database-backed workflows to my frontend foundation.",
  },
  {
    title: "Product-Minded Engineering",
    description:
      "I care about usability, maintainability, and understanding the full request/response lifecycle behind features people can actually use.",
  },
] as const;
