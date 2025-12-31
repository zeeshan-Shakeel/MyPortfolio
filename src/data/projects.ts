// Projects data from Ujjwal's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "syncverse",
    title: "SyncVerse | AI-Powered Roadmap & Career Navigator",
    description:
      "Web platform that helps students and developers generate personalized tech roadmaps and guidance.",
    longDescription:
      "SyncVerse is a next-generation edtech and career navigation platform designed to help students and developers move from confusion to clarity. It allows users to describe their goals or current status and generates structured learning roadmaps, curated resources, and milestone-based plans. Built with a modern React + TypeScript stack and powered by AI for roadmap generation, SyncVerse focuses on clean UI, interactive flows, and practical guidance tailored to each learner’s journey.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Aceternity UI",
      "Supabase",
      "REST APIs",
      "Prompt Engineering",
      "OpenAI (LLM-powered Roadmaps)"
    ],
    features: [
      "Goal-based roadmap generation for different tech stacks (web, AI, DSA, etc.)",
      "Step-by-step structured paths with milestones and checkpoints",
      "Clean, modern UI using shadcn/ui and Aceternity components",
      "Forms and inputs to capture user background and preferences",
      "Potential integration with Supabase for auth and persistence",
      "Responsive layout optimized for both desktop and mobile"
    ],
    image: "/images/projects/syncverse/syncverse.webp",
    demoUrl: "https://sync-verse01.vercel.app",
    githubUrl: "https://github.com/zeeshan-Shakeel/SyncVerse.git",
    category: "ai"
  },
  {
    id: "portfolio-v1",
    title: "Rapid Coworking | Management System Product",
    description:
      "Manage multiple companies/tenants within a single platform",
    longDescription:
      "A full-featured coworking space management platform designed to manage multiple company tenants and various types of workspaces efficiently. This system streamlines workspace operations, community engagement, ticket management, and role-based access control (RBAC) for both staff and members.",
    technologies: [
      "NextJs",
      "ShadCnUI & TailwindCSS",
      "NodeJs , ExpressJS",
      "React Query",
      "Cron JOB(Automation)",
      "CI/CD Pipeline"
    ],
    features: [
      "Manage multiple companies/tenants within a single platform",
      "Dynamic space allocation and booking management",
      "Staff: Manage spaces, tenants, bookings, and resolve tickets",
      "Ticket Management System Generate tickets for issues or queries",
      "FAutomate routine tasks and notifications with cron jobs",
      "Role-Based Access Control (RBAC)"
    ],
    image: "/images/projects/RC.png",
    demoUrl: "https://rapid-coworking.devlinesolutions.com/",
    githubUrl: "https://github.com/zeeshan-Shakeel/CoWorkingSpace-System.git",
    category: "web"
  },
  {
  id: "community-dashboard",
  title: "AI Soccer Intelligence ⚽🤖",
  description:
    "A backend-driven platform for soccer video analysis, match data management, chunked file uploads, and structured player intelligence.",
  longDescription:
    "AI Soccer Intelligence is a robust backend platform designed for managing and analyzing soccer videos, match data, and player profiles. Built with Python and Prisma, it supports secure user authentication, efficient chunked uploads for large video files, video processing workflows (including YouTube links and custom uploads), and a comprehensive database schema for leagues, seasons, teams, matches, and players. The system tracks video analysis statuses, handles resumeable uploads, and provides structured data for advanced football analytics, including player nutrition, vector embeddings, formations, and performance tracking — ideal for coaches, analysts, or AI-driven soccer intelligence tools.",
  technologies: [
    "Python",
    "Prisma",
    "Prisma Client Py",
    "PostgreSQL",
    "Docker & Docker Compose",
    "REST APIs",
    "Chunked File Uploads"
  ],
  features: [
    "Secure user authentication, role-based access, and password reset functionality",
    "Video analysis workflows with support for YouTube links and custom uploads",
    "Chunked large file uploads with resume support and progress tracking",
    "Real-time processing status tracking (pending, processing, completed, failed)",
    "Comprehensive soccer data management: leagues, seasons, teams, matches, and players",
    "Advanced player profiles with status, positions, nutrition analysis, and vector embeddings",
    "Match details including formations, images, and metadata",
    "Scalable backend architecture with Docker deployment and Prisma migrations"
  ],
  image: "/images/AI.png", // Update with actual image path
  demoUrl: "https://gamerun.ai/soccer", // Add live demo URL if available, e.g., hosted backend API demo
  githubUrl: "https://github.com/zeeshan-Shakeel/AI-Soccer-Intelligence.git", // Add your GitHub repo URL when public, e.g., "https://github.com/yourusername/ai-soccer-intelligence"
  category: "web" // or "backend" if you have a separate category
},
  {
  id: "fluxlura",
  title: "FluxLura – Free Online Multimedia File Converter",
  description:
    "A fast, browser-based file converter for images, audio, and videos with no limits or installations required.",
  longDescription:
    "FluxLura is a free, unlimited online tool that allows users to easily convert multimedia files directly in the browser. Supporting a wide range of image, audio, and video formats, it offers simple drag-and-drop or manual file selection for instant conversions. Built for speed and accessibility, it eliminates the need for desktop software while handling common conversion tasks efficiently — perfect for developers, designers, and everyday users who need quick format transformations without restrictions.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FFmpeg.wasm / Browser-based FFmpeg",
    "Vercel Deployment"
  ],
  features: [
    "Drag-and-drop or manual file selection for easy uploads",
    "Instant in-browser conversion of images, audio, and video files",
    "Support for popular multimedia formats with no file size or usage limits",
    "No installation required — fully client-side processing where possible",
    "Fast and responsive UI optimized for desktop and mobile",
    "Serverless-friendly architecture leveraging Vercel's edge network"
  ],
  image: "/images/projects/syncverse/fluxlura.png", // Update with your actual screenshot path
  demoUrl: "https://fluxlura.vercel.app/", // Replace with the actual live URL if different
  githubUrl: "https://github.com/zeeshan-Shakeel/Fluxlura.git", // Add GitHub link if public, otherwise leave empty or remove
  category: "web"
},
{
  id: "nohesi",
  title: "NoHesi – High-Scale Gaming Platform for Street Racing Servers",
  description:
    "Full-stack web platform powering a massive street racing community with subscriptions, leaderboards, and custom game servers serving millions of monthly users.",
  longDescription:
    "NoHesi is a high-traffic gaming community platform built around Assetto Corsa street racing servers, serving over a million monthly users with features like VIP subscriptions, global leaderboards, custom server access, and community clubs. The platform includes a modern frontend for browsing servers and managing subscriptions, a robust Node.js backend with microservices architecture, PostgreSQL for data persistence, Redis for caching and real-time leaderboards, Stripe for seamless payments, and an admin dashboard for operations. Deployed on AWS with scalable infrastructure to handle massive concurrent traffic, real-time updates, and reliable monetization — demonstrating expertise in building production-grade, high-scale full-stack applications.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Microservices",
    "Stripe Integration",
    "AWS (Deployment & Scaling)",
    "Tailwind CSS / Modern UI"
  ],
  features: [
    "Subscription management with multiple tiers and Stripe payments",
    "Real-time global leaderboards powered by Redis caching",
    "Custom game server access and management for VIP users",
    "Admin dashboard for community moderation and analytics",
    "High-performance microservices handling millions of monthly active users",
    "Scalable AWS infrastructure with auto-scaling and reliable deployments",
    "Community features including clubs, garages, and server discovery"
  ],
  image: "/images/projects/nohesig.png", // Update with your actual screenshot path
  demoUrl: "https://nohesi.gg/",
  githubUrl: "Repo are Private", // Leave empty if backend/frontend repos are private
  category: "web"
}
];
