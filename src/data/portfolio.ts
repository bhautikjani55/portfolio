export const PROFILE = {
  name: "Bhautik Jani",
  role: "Full-Stack Software Engineer",
  tagline: "Building scalable products, one system at a time.",
  subline: "Full-Stack Software Engineer specializing in React, Next.js, Node.js, NestJS and AWS.",
  description:
    "3.5+ years of experience building scalable SaaS platforms, marketplaces, real-time applications and cloud-native systems.",
  location: "Surat, Gujarat, India",
  email: "bhautikjani.ce@gmail.com",
  availability: "Available for Full-Stack Opportunities",
  socials: {
    github: "https://github.com/bhautikjani",
    linkedin: "https://www.linkedin.com/in/bhautikjani",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { value: 3.5, suffix: "+", decimals: 1, label: "Years Experience" },
  { value: 10, suffix: "+", decimals: 0, label: "Technologies" },
  { value: 4, suffix: "", decimals: 0, label: "Major Projects" },
  { value: null as number | null, suffix: "", display: "AWS", label: "Cloud & Serverless" },
] as const;

export type Achievement = { title: string; detail: string };

export const EXPERIENCE = {
  company: "LA NET TEAM Software Solution PVT. LTD",
  role: "Full-Stack Software Engineer",
  location: "Surat, Gujarat, India",
  duration: "January 2023 – Present",
  summary:
    "Owning full-stack delivery across SaaS, marketplace and healthcare products — from React frontends to serverless AWS backends.",
  achievements: [
    {
      title: "Serverless architecture on AWS",
      detail:
        "Architected serverless web applications using AWS Lambda and API Gateway — designing isolated, event-driven services that scale to zero and handle bursty traffic without ops overhead.",
    },
    {
      title: "Full-stack product delivery",
      detail:
        "Developed full-stack applications using React.js / Next.js and Node.js, owning features end-to-end from UI and state management to APIs, auth and persistence.",
    },
    {
      title: "GraphQL caching & ORM integration",
      detail:
        "Implemented GraphQL caching strategies and ORM integrations (Prisma / TypeORM-style patterns) to cut redundant fetches and make database access predictable and type-safe.",
    },
    {
      title: "Marketplace + real-time systems",
      detail:
        "Built scalable marketplace platforms with real-time WebSocket systems — live booking updates, notifications and multi-role flows for admin, provider and customer.",
    },
    {
      title: "Frontend performance",
      detail:
        "Improved frontend performance using custom React Hooks, memoization, code-splitting and a responsive architecture that stays fast on low-end devices.",
    },
    {
      title: "Database optimization",
      detail:
        "Optimized databases through indexing, query-shape tuning and efficient schema design across MongoDB, MySQL and PostgreSQL workloads.",
    },
    {
      title: "Cross-functional delivery",
      detail:
        "Collaborated with cross-functional teams — product, design and QA — to scope, ship and iterate on releases with strong ownership.",
    },
  ] satisfies Achievement[],
};

export type ProjectVisualKind = "saas" | "crm" | "marketplace" | "signing";

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  features: string[];
  architecture: string[];
  challenges: { challenge: string; solution: string }[];
  visual: ProjectVisualKind;
  accent: { from: string; to: string };
};

export const PROJECTS: Project[] = [
  {
    id: "cubyl",
    name: "Cubyl",
    category: "B2B SaaS Platform",
    description:
      "Cloud-native B2B expert network SaaS platform connecting enterprises with industry specialists for expert consultations, research projects and interviews.",
    role: "Full-Stack Engineer — SaaS, serverless backend & portals",
    technologies: [
      "React",
      "TypeScript",
      "Nx Monorepo",
      "NestJS",
      "Node.js",
      "MongoDB",
      "OpenSearch",
      "Redis",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "Athena",
      "QuickSight",
      "Auth0",
    ],
    highlights: [
      "Multi-tenant SaaS architecture",
      "Admin, Client and Specialist portals",
      "Serverless NestJS microservices",
      "AI-powered search",
      "OpenSearch integration",
      "Redis caching",
      "Automated outreach workflows",
      "Email outreach analytics",
      "MongoDB → S3 → Athena → QuickSight analytics pipeline",
    ],
    features: [
      "Three isolated portals with role-based access via Auth0",
      "AI-assisted expert search backed by OpenSearch relevance tuning",
      "Automated email outreach sequences with open / reply analytics",
      "Serverless NestJS services behind API Gateway with Redis caching",
      "Lakehouse analytics: MongoDB exports to S3, queried with Athena, visualized in QuickSight",
    ],
    architecture: ["React", "API Gateway", "Lambda / NestJS", "MongoDB + Redis + OpenSearch", "S3", "Athena", "QuickSight"],
    challenges: [
      {
        challenge: "Search relevance across a large, heterogeneous expert pool.",
        solution:
          "Introduced OpenSearch with tuned analyzers, faceted filters and Redis-cached hot queries so AI-powered search stays fast and relevant.",
      },
      {
        challenge: "Analytics on operational MongoDB data without hurting production.",
        solution:
          "Built a MongoDB → S3 → Athena → QuickSight pipeline that decouples analytics from the transactional database.",
      },
      {
        challenge: "Keeping a monorepo with three portals maintainable.",
        solution:
          "Used an Nx monorepo with shared UI, types and utils packages so portals evolve independently without duplication.",
      },
    ],
    visual: "saas",
    accent: { from: "#60a5fa", to: "#a78bfa" },
  },
  {
    id: "pabau",
    name: "PABAU Hospital CRM",
    category: "Healthcare CRM",
    description:
      "Healthcare workflow CRM that streamlines clinic operations — scheduling, patient records and team coordination — with a fast, responsive frontend and a tuned data layer.",
    role: "Full-Stack Engineer — Next.js frontend & data layer",
    technologies: ["Next.js", "Node.js", "GraphQL", "MongoDB", "Express.js", "MySQL", "Hasura"],
    highlights: [
      "Healthcare workflow management",
      "GraphQL caching",
      "ORM integration",
      "Optimized database interactions",
      "Responsive media-query architecture",
      "Scalable MySQL architecture",
    ],
    features: [
      "Appointment and patient workflows with role-aware views",
      "GraphQL data layer with caching for repeat clinical queries",
      "ORM-backed MySQL access with migrations and indexed access paths",
      "Responsive layouts tuned per breakpoint for front-desk and tablet use",
    ],
    architecture: ["Next.js", "GraphQL / Hasura", "Node / Express", "MySQL + MongoDB"],
    challenges: [
      {
        challenge: "Repeated expensive reads for schedule and patient views.",
        solution: "Added GraphQL response caching with tight invalidation on mutations to keep data fresh yet fast.",
      },
      {
        challenge: "Messy raw SQL and inconsistent access patterns.",
        solution: "Introduced an ORM layer with repositories, transactions and indexed query shapes.",
      },
    ],
    visual: "crm",
    accent: { from: "#22d3ee", to: "#34d399" },
  },
  {
    id: "whizz",
    name: "Whizz Management",
    category: "Home Services Marketplace",
    description:
      "Multi-role home-services marketplace connecting customers with verified providers — real-time booking, notifications and payments with an ops-grade admin dashboard.",
    role: "Full-Stack Engineer — marketplace & real-time systems",
    technologies: ["React.js", "Node.js", "WebSocket", "MongoDB", "Payment Gateway"],
    highlights: [
      "Multi-role marketplace",
      "Admin / Provider / Customer architecture",
      "Real-time booking management",
      "WebSocket notifications",
      "Payment processing",
      "Admin dashboard",
    ],
    features: [
      "Three-sided flows: customer booking, provider jobs, admin oversight",
      "Real-time booking state and push-style notifications over WebSockets",
      "Payment capture tied to booking lifecycle with reconciliation views",
      "Admin dashboard for providers, payouts, disputes and demand",
    ],
    architecture: ["React", "REST + WebSocket", "Node.js services", "MongoDB", "Payment Gateway"],
    challenges: [
      {
        challenge: "Booking state drifting between customer, provider and admin.",
        solution: "Made the server the single source of truth with socket rooms per booking and optimistic UI with reconciliation.",
      },
      {
        challenge: "Missed jobs due to late notifications.",
        solution: "Built persistent notification records plus live socket fan-out so nothing is lost on reconnect.",
      },
    ],
    visual: "marketplace",
    accent: { from: "#f59e0b", to: "#f472b6" },
  },
  {
    id: "dovalidsign",
    name: "DovalidSign",
    category: "Digital Signature Platform",
    description:
      "Digital document-signing platform with sequential and parallel signing workflows, dynamic signer management and secure OAuth + JWT access.",
    role: "Full-Stack Engineer — product & signing engine",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "OAuth", "JWT", "Redux"],
    highlights: [
      "Digital document signing",
      "Sequential and parallel signing workflows",
      "Dynamic signer management",
      "Automated invitations",
      "OAuth + JWT security",
      "REST API architecture",
    ],
    features: [
      "Upload → prepare → invite → sign → completed audit flow",
      "Sequential and parallel signing orders with reminders",
      "Dynamic signer add / reorder / recall before completion",
      "OAuth login plus short-lived JWTs and envelope-scoped access",
    ],
    architecture: ["Next.js", "REST API", "Node / Express", "MongoDB", "OAuth + JWT"],
    challenges: [
      {
        challenge: "Complex signing orders with mixed sequential / parallel steps.",
        solution: "Modelled envelopes as state machines so each sign step transitions explicitly and auditably.",
      },
      {
        challenge: "Invitation and access security.",
        solution: "Scoped, expiring signer tokens backed by OAuth identity and JWT session guards.",
      },
    ],
    visual: "signing",
    accent: { from: "#a78bfa", to: "#22d3ee" },
  },
];

export const SKILLS: { category: string; description: string; items: { name: string; note: string }[] }[] = [
  {
    category: "Frontend",
    description: "Interfaces that stay fast and maintainable at scale.",
    items: [
      { name: "React.js", note: "Hooks, composition & performance tuning" },
      { name: "Next.js", note: "App Router, SSR/SSG & streaming" },
      { name: "Redux Toolkit", note: "Predictable client state" },
      { name: "Redux Saga", note: "Complex async orchestration" },
      { name: "React Query", note: "Server-state caching & sync" },
      { name: "Electron.js", note: "Desktop-grade web apps" },
      { name: "MUI", note: "Enterprise component systems" },
      { name: "Ant Design", note: "Dense admin & data UIs" },
      { name: "Chakra UI", note: "Rapid accessible interfaces" },
    ],
  },
  {
    category: "Backend",
    description: "APIs designed for clarity, scale and ownership.",
    items: [
      { name: "Node.js", note: "Event-loop-aware services" },
      { name: "Express.js", note: "Lean REST services" },
      { name: "NestJS", note: "Modular, testable server apps" },
      { name: "GraphQL", note: "Typed, cacheable data graphs" },
      { name: "REST APIs", note: "Versioned, documented contracts" },
    ],
  },
  {
    category: "Database",
    description: "The right store and index for the query.",
    items: [
      { name: "MongoDB", note: "Document modelling & aggregation" },
      { name: "PostgreSQL", note: "Relational integrity & tuning" },
      { name: "MySQL", note: "Indexed, scalable schemas" },
      { name: "Redis", note: "Caching, queues & pub/sub" },
      { name: "Prisma ORM", note: "Type-safe data access" },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Serverless-first, observable by default.",
    items: [
      { name: "AWS Lambda", note: "Event-driven compute" },
      { name: "API Gateway", note: "Managed API front door" },
      { name: "S3", note: "Storage & data-lake origin" },
      { name: "Docker", note: "Reproducible environments" },
    ],
  },
  {
    category: "Tools",
    description: "Boring tooling that keeps shipping smooth.",
    items: [
      { name: "Git", note: "Clean history & reviews" },
      { name: "GitHub", note: "CI, PRs & collaboration" },
      { name: "Bitbucket", note: "Team workflows & pipelines" },
      { name: "Jira", note: "Scoped, shippable sprints" },
      { name: "Postman", note: "API design & testing" },
    ],
  },
];

export const PRINCIPLES = [
  {
    title: "Scalability",
    body: "Design systems that can grow without unnecessary complexity.",
  },
  {
    title: "Performance",
    body: "Optimize rendering, API calls, database queries and caching.",
  },
  {
    title: "Reliability",
    body: "Build resilient services with proper error handling and monitoring.",
  },
  {
    title: "Maintainability",
    body: "Prefer clean architecture, reusable components and clear abstractions.",
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Engineering",
  school: "Government Engineering College, Gandhinagar",
  period: "2019 – 2023",
  cgpa: "8.56",
} as const;

export const SYSTEM_PIPELINE = ["User", "Frontend", "API Gateway", "Backend Services", "Cache", "Database", "Cloud Infrastructure"] as const;
