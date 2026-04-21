export const profile = {
  name: "Shabil Dixon",
  title: "Software Engineer",
  headline: "Frontend-focused engineer with systems and security experience.",
  intro:
    "I build responsive web applications with a growing full-stack toolkit and a strong interest in how software behaves across the UI, API, and systems layers. My background blends modern frontend work with hands-on experience in systems programming, networking, and security-focused problem solving.",
  currentFocus:
    "React and Next.js application work, API integration, and performance-minded product development.",
  location: "Waldorf, MD",
  email: "shabil.dixon@gmail.com",
  githubUrl: "https://github.com/muh-dixon",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-shabil-dixon-ba7ab8263/",
  learning:
    "Modern frontend frameworks, API development, full-stack integration, and scalable performance patterns.",
  collaboration:
    "Frontend and full-stack projects, especially products with real users, AI-assisted workflows, or security-aware engineering.",
  askAbout:
    "Responsive interfaces, REST API integration, systems concepts, and the process of turning tutorial foundations into stronger production-ready work.",
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
    value: "Frontend engineering, API-driven experiences, and reliable full-stack fundamentals.",
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
  "Python",
  "Java",
  "REST APIs",
  "Firebase",
  "Git",
  "Linux",
  "Systems Programming",
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
    items: ["REST APIs", "Firebase", "Firestore", "Stripe", "Vercel"],
  },
  {
    label: "Systems & Security",
    items: ["Linux", "Networking", "Cryptography", "Systems Programming", "HTTP Request Handling"],
  },
] as const;

export const featuredProjects = [
  {
    name: "Skinstric AI Platform",
    summary:
      "A full-stack skincare analysis experience built with Next.js, React, and TypeScript. It features a multi-step onboarding flow, image-based analysis requests, reusable UI architecture, and persistent client-side state.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://skinstric-internship-nu.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/skinstric-internship",
    previewLabel: "AI skincare analysis workflow",
    previewDomain: "skinstric-internship-nu.vercel.app",
    accent: "from-[#0c214f] via-[#174a84] to-[#48c0b5]",
  },
  {
    name: "Summarist Platform",
    summary:
      "A full-stack reading platform with authentication, subscription access, and dynamic book and player pages. The build highlights product thinking across frontend UX, state management, persistence, and payments.",
    stack: ["Next.js", "Redux Toolkit", "Firebase", "Firestore", "Stripe"],
    liveUrl: "https://summarist-sigma.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/summarist",
    previewLabel: "Book summaries, accounts, and subscriptions",
    previewDomain: "summarist-sigma.vercel.app",
    accent: "from-[#101c3d] via-[#205375] to-[#f66b0e]",
  },
  {
    name: "Ultraverse Market",
    summary:
      "A responsive NFT marketplace interface powered by external APIs. It demonstrates dynamic routing, marketplace browsing, skeleton states, sorting, pagination, and animated UI presentation.",
    stack: ["React", "React Router", "API Integration", "AOS", "Responsive Design"],
    liveUrl: "https://shabil-internship-main.vercel.app/",
    repoUrl: "https://github.com/muh-dixon/shabil-internship-main",
    previewLabel: "Marketplace browsing with live content",
    previewDomain: "shabil-internship-main.vercel.app",
    accent: "from-[#1d3557] via-[#457b9d] to-[#a8dadc]",
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
    title: "Systems Perspective",
    description:
      "Coursework and hands-on projects in networking, cryptography, parsing, and low-level concepts help me reason beyond the UI layer.",
  },
  {
    title: "Continuous Growth",
    description:
      "I actively turn learning projects into stronger portfolio pieces by improving architecture, delivery quality, and real-world usability.",
  },
] as const;
