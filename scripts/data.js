/**
 * Saurabh's Freelance Platform - Data Store
 * Easily extensible for new projects, testimonials, and services.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Saurabh",
    title: "Web Developer & Team Lead",
    tagline: "We build high-converting websites, scalable web applications, and modern digital platforms that turn visitors into paying clients.",
    availability: "Available for New Projects",
    experienceYears: "5+",
    projectsCompleted: "45+",
    clientSatisfaction: "99.4%",
    hoursSavedForClients: "12,000+",
    location: "Global / Remote (IST / UTC+5:30)",
    email: "saurabh.dev.pro@gmail.com",
    whatsapp: "+919876543210",
    calendly: "https://calendly.com/saurabh-freelance",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com"
  },

  about: {
    badge: "The Team Behind Your Product",
    headline: "High-Impact Web Development With Dedicated Team Execution",
    bio: "I'm Saurabh — Web Developer. Together with my trusted team of specialized UI/UX designers and web developers, we help startups, businesses, and agency partners build responsive, high-performing websites and web applications. We handle everything from concept wireframes to clean code, responsive testing, and production deployment — giving you full team capabilities with direct communication and rapid sprint execution.",
    quote: "True engineering excellence is not measured in lines of code, but in how quickly and reliably it turns your product vision into paying users.",
    principles: [
      {
        icon: "⚡",
        title: "Async-First & 24h Response Guarantee",
        desc: "You never wonder what's happening. You get daily Loom video walk-throughs, transparent progress tracking, and guaranteed responses within hours."
      },
      {
        icon: "🛡️",
        title: "Zero Technical Debt Architecture",
        desc: "Modern, clean, modular code with strict typing. Future-proof and ready for your in-house engineering team to inherit seamlessly without expensive rewrites."
      },
      {
        icon: "🎯",
        title: "Business Outcomes Over Vanity Tech",
        desc: "Every feature is evaluated through a commercial lens: Does this accelerate time-to-market? Does it reduce user drop-off? Does it increase conversions?"
      },
      {
        icon: "🔑",
        title: "100% IP & Full Code Ownership",
        desc: "From the very first commit, you hold full intellectual property rights, GitHub repository ownership, Docker containers, and complete deployment access."
      }
    ],
    stats: [
      { label: "Completed Projects", value: "45+" },
      { label: "Client Satisfaction", value: "99.4%" },
      { label: "On-Time Sprint Delivery", value: "100%" },
      { label: "Average Launch Time", value: "14 Days" }
    ],
    trustHighlights: [
      "Specialized web development team led directly by Saurabh",
      "NDA & Intellectual Property protection guaranteed",
      "Post-launch warranty & free bug-fix coverage included",
      "Daily asynchronous progress reports & weekly live demos"
    ]
  },

  services: [
    {
      id: "fullstack",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
      title: "Full-Stack Web Development",
      description: "Modern, responsive, blazing-fast web applications built with clean architecture, high security, and seamless UI/UX.",
      tags: ["React / Next.js", "Node.js / Express", "TypeScript", "Tailwind CSS"],
      badge: "Popular",
      timeline: "2 - 3 Weeks",
      bestFor: "Startups, Businesses & Agencies needing a complete, scalable digital product.",
      detailedOverview: "We architect and build complete end-to-end web applications designed to load instantly, convert visitors into paying clients, and scale reliably as your user base grows. From responsive frontend design systems to resilient backend APIs and relational databases, our team delivers production-ready software without technical debt.",
      deliverables: [
        "Modern responsive UI/UX built with Next.js 14 / React & TypeScript",
        "High-performance RESTful or GraphQL API backend with authentication",
        "Relational database modeling with PostgreSQL, Prisma ORM & Redis caching",
        "Automated CI/CD pipeline & zero-downtime deployment (Vercel, AWS, or Docker)",
        "Comprehensive cross-device testing & 95+ Google Lighthouse speed optimization"
      ],
      milestones: [
        { phase: "Week 1", title: "Architecture & Interactive Prototypes", desc: "User flows, database schemas, and approved component wireframes." },
        { phase: "Week 2", title: "Core Full-Stack Sprint", desc: "API integrations, database queries, responsive views, and state management." },
        { phase: "Week 3", title: "Security, QA & Live Deployment", desc: "Lighthouse audits, cross-browser validation, and seamless production launch." }
      ],
      includedGuarantees: [
        "100% Intellectual Property & Code Ownership",
        "30-Day Post-Launch Bugfix Warranty",
        "95+ Google Lighthouse Performance Score",
        "Daily Async Loom Progress Updates"
      ]
    },
    {
      id: "saas",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
      title: "Custom SaaS & MVP Engineering",
      description: "Transform your startup vision into an investor-ready, revenue-generating SaaS product in weeks, not months.",
      tags: ["Auth & Roles", "Stripe Billing", "Multi-Tenancy", "PostgreSQL / Prisma"],
      badge: "High ROI",
      timeline: "3 - 5 Weeks",
      bestFor: "Founders, Bootstrappers & Enterprises launching a software-as-a-service venture.",
      detailedOverview: "Turn your software concept into a fully operational, subscription-billing SaaS business. We specialize in building fast, secure Minimum Viable Products (MVPs) engineered for high user retention, self-serve onboarding, and automated revenue collection.",
      deliverables: [
        "Multi-tenant database architecture with strict tenant data isolation",
        "Secure User Authentication, Session Management, OAuth & Role-Based Access (RBAC)",
        "Automated recurring subscription billing via Stripe or Razorpay with customer portal",
        "Interactive analytics dashboards with charts, usage tracking, and data export",
        "Transactional email notifications (Resend / Postmark) and webhook event pipelines"
      ],
      milestones: [
        { phase: "Week 1-2", title: "MVP Scope & Database Foundations", desc: "Auth architecture, billing schemas, and dashboard layouts." },
        { phase: "Week 3-4", title: "Core SaaS Engine & Payment Workflows", desc: "Feature development, subscription webhooks, and self-serve onboarding." },
        { phase: "Week 5", title: "Testing, Beta Launch & Handover", desc: "End-to-end user testing, error monitoring (Sentry), and live launch." }
      ],
      includedGuarantees: [
        "Stripe-verified subscription billing integration",
        "100% clean GitHub repository with documentation",
        "Zero-lockin infrastructure on standard cloud stacks",
        "45-Day post-launch stability warranty"
      ]
    },
    {
      id: "ai",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
      title: "AI Automation & LLM Integration",
      description: "Embed intelligent AI agents, RAG document search, workflow automation, and predictive algorithms directly into your product.",
      tags: ["Gemini / OpenAI API", "LangChain / LangGraph", "Vector DBs", "Workflow Nodes"],
      badge: "Trending",
      timeline: "2 - 4 Weeks",
      bestFor: "Companies looking to automate repetitive operations or integrate generative AI features.",
      detailedOverview: "Harness modern Large Language Models and AI agent architectures to make your software significantly smarter. We build production-ready retrieval-augmented generation (RAG) pipelines, autonomous task agents, and custom workflow automations that save hundreds of human labor hours.",
      deliverables: [
        "Production AI integrations using Gemini, OpenAI, or Anthropic APIs with fallback routing",
        "RAG document search with Vector Embeddings (Pinecone / pgvector / Qdrant)",
        "Autonomous multi-step AI agents and conversational copilots with memory",
        "Automated scraping, document parsing, and unstructured data extraction pipelines",
        "Cost-controlled token streaming, prompt optimization, and rate-limiting guardrails"
      ],
      milestones: [
        { phase: "Week 1", title: "AI Prompt Engineering & Vector Setup", desc: "Model benchmarking, context window optimization, and embedding pipeline." },
        { phase: "Week 2-3", title: "Agent Integration & UI Streaming", desc: "Real-time token streaming, memory stores, and API connecting logic." },
        { phase: "Week 4", title: "Safety Guardrails & Latency Optimization", desc: "Hallucination testing, caching layers, and production deployment." }
      ],
      includedGuarantees: [
        "Optimized prompt architecture to minimize API token costs",
        "Strict data privacy & zero third-party data leakage",
        "Sub-second streaming latency optimization",
        "30-Day post-launch prompt maintenance"
      ]
    },
    {
      id: "ecommerce",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
      title: "High-Performance E-Commerce",
      description: "Custom headless storefronts, frictionless 1-click checkouts, inventory syncing, and conversion-optimized sales funnels.",
      tags: ["Shopify Headless", "Next.js Commerce", "Razorpay / Stripe", "Speed Optimization"],
      badge: "High Conversion",
      timeline: "2 - 3 Weeks",
      bestFor: "D2C brands and retailers seeking maximum checkout conversion rates and sub-second load times.",
      detailedOverview: "Traditional e-commerce platforms are slow and hurt conversions. We build custom headless e-commerce storefronts that load instantly, provide app-like smooth product browsing, and minimize cart abandonment with frictionless payment flows.",
      deliverables: [
        "Ultra-fast headless storefront built with Next.js Commerce & Tailwind CSS",
        "Seamless integration with Shopify, WooCommerce, or custom inventory backends",
        "High-converting 1-click checkout with Razorpay, Stripe, and Apple/Google Pay",
        "Smart product filters, real-time variant selectors, and predictive search",
        "Abandoned cart recovery hooks and Google Analytics / Meta Pixel conversion tracking"
      ],
      milestones: [
        { phase: "Week 1", title: "Catalog Architecture & Checkout UX", desc: "Product schema, mobile-first purchase flow, and UI prototype." },
        { phase: "Week 2", title: "Storefront Build & Gateway Integration", desc: "Payment gateways, cart synchronization, and inventory webhooks." },
        { phase: "Week 3", title: "Conversion Optimization & Launch", desc: "Core Web Vitals tuning, checkout test transactions, and live switch." }
      ],
      includedGuarantees: [
        "Sub-1 second page transitions & instant cart updates",
        "Zero payment gateway failure tolerance",
        "Mobile-first responsive optimization across 20+ screen sizes",
        "30-Day post-launch conversion audit"
      ]
    },
    {
      id: "api",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
      title: "API Architecture & Microservices",
      description: "Robust REST & GraphQL APIs, microservices clustering, third-party software integrations, and resilient databases.",
      tags: ["FastAPI / Node", "GraphQL", "Redis Caching", "Docker & CI/CD"],
      badge: "Scalable",
      timeline: "1 - 3 Weeks",
      bestFor: "Companies needing bulletproof backend services to power mobile apps, web apps, or internal tools.",
      detailedOverview: "Reliable applications need strong backends. We architect high-concurrency, well-documented REST and GraphQL APIs capable of handling millions of requests with low latency, robust data validation, and automated scaling.",
      deliverables: [
        "Well-architected RESTful or GraphQL API endpoints with strict input validation",
        "Containerized deployment using Docker & Docker Compose",
        "High-speed caching with Redis and database query optimization",
        "JWT and API Key authentication with fine-grained rate limiting",
        "Interactive Swagger / OpenAPI documentation for seamless team integration"
      ],
      milestones: [
        { phase: "Phase 1", title: "API Contract & Schema Design", desc: "Endpoint specifications, entity relationship diagrams, and auth strategy." },
        { phase: "Phase 2", title: "Implementation & Database Indexing", desc: "High-throughput endpoint coding, caching layers, and unit tests." },
        { phase: "Phase 3", title: "Load Testing & Container Deployment", desc: "Stress testing, Dockerizing, and setting up CI/CD pipelines." }
      ],
      includedGuarantees: [
        "Under 50ms average internal response times",
        "Comprehensive Swagger / Postman API documentation",
        "Automated integration test suites",
        "30-Day backend support coverage"
      ]
    },
    {
      id: "optimization",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      title: "Speed Audit & Code Refactoring",
      description: "Slash page load times to sub-second speeds, elevate Google Lighthouse scores to 95+, and eliminate technical debt.",
      tags: ["Web Vitals (LCP/CLS)", "SEO Architecture", "Database Query Tuning", "Security Audit"],
      badge: "99+ Score",
      timeline: "5 - 7 Days",
      bestFor: "Websites and web apps suffering from slow load speeds, poor Google ranking, or messy legacy code.",
      detailedOverview: "Every 1-second delay in page load time reduces conversions by up to 7%. We deep-dive into your codebase, identify bottlenecks, optimize asset bundles, tune slow database queries, and elevate your website to top-tier Google Core Web Vitals rankings.",
      deliverables: [
        "Comprehensive audit report diagnosing LCP, CLS, FID, and server response delays",
        "JavaScript bundle splitting, tree-shaking, and lazy loading implementation",
        "Next-gen image formatting (WebP/AVIF), font subsetting, and responsive loading",
        "Server-side edge caching (Cloudflare / Fastly / Redis) and compression (Brotli)",
        "Database index optimization and slow query refactoring"
      ],
      milestones: [
        { phase: "Day 1-2", title: "Performance Diagnostics & Bottleneck Mapping", desc: "Network traces, bundle analysis, and memory leak profiling." },
        { phase: "Day 3-5", title: "Code Refactoring & Asset Optimization", desc: "Bundle trimming, image optimization, edge caching, and critical CSS." },
        { phase: "Day 6-7", title: "Validation Audit & Lighthouse Verification", desc: "Final verification runs on mobile and desktop with before/after benchmarks." }
      ],
      includedGuarantees: [
        "Guaranteed 90+ Google Lighthouse Score on Mobile & Desktop",
        "Measurable reduction in Largest Contentful Paint (LCP < 1.8s)",
        "Full before-and-after performance analytics report",
        "Zero visual regression or broken functionality guarantee"
      ]
    }
  ],

  projects: [
    {
      id: "saas-analytics",
      title: "PulseMetrics — Cloud SaaS Analytics",
      category: "fullstack",
      categoryLabel: "Full-Stack SaaS",
      thumbnail: "assets/images/project-saas.jpg",
      featured: true,
      summary: "High-throughput cloud performance & revenue tracking dashboard handling 5M+ daily event metrics.",
      metrics: [
        { label: "Uptime", value: "99.98%" },
        { label: "Query Latency", value: "<45ms" },
        { label: "MRR Growth", value: "+340%" }
      ],
      techStack: ["React 19", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Recharts"],
      caseStudy: {
        client: "Venture-backed FinTech Startup (San Francisco, CA)",
        challenge: "The client needed a real-time observability and financial analytics platform capable of streaming hundreds of events per second with sub-50ms query response times and zero UI stuttering.",
        solution: "Engineered a reactive dashboard with WebSockets, optimized TimescaleDB time-series queries, and implemented dynamic client-side caching with virtualized list rendering.",
        keyFeatures: [
          "Real-time revenue & server health charting with smooth cubic-spline animations.",
          "Multi-tenant organization management with fine-grained RBAC permissions.",
          "Integrated Stripe Billing portal with automated tier upgrade webhooks.",
          "Automated PDF export and incident anomaly alert triggers."
        ],
        results: "Delivered the MVP 2 weeks ahead of schedule. Helped the startup secure their $1.8M Seed round while supporting 2,500+ active business customers."
      },
      liveUrl: "https://demo-saas-pulsemetrics.example.com",
      githubUrl: "https://github.com/saurabh-pro/pulsemetrics-saas"
    },
    {
      id: "ecommerce-luxury",
      title: "Aurum — Luxury Audio & Gear Store",
      category: "ecommerce",
      categoryLabel: "Headless E-Commerce",
      thumbnail: "assets/images/project-ecommerce.jpg",
      featured: true,
      summary: "Ultra-premium headless e-commerce storefront with instantaneous page loads, rich micro-interactions, and 3D product previews.",
      metrics: [
        { label: "Conversion Rate", value: "4.8%" },
        { label: "Lighthouse Speed", value: "99/100" },
        { label: "Cart Abandonment", value: "-28%" }
      ],
      techStack: ["Next.js 14", "Shopify Storefront API", "TypeScript", "Framer Motion", "Stripe Elements"],
      caseStudy: {
        client: "Aurum Sound Labs (London, UK)",
        challenge: "Previous WordPress/WooCommerce site had a 4.5s load time, clunky mobile checkout, and high bounce rates among luxury buyers.",
        solution: "Rebuilt the entire front-end as a headless Next.js application with edge caching, optimistic cart updates, and sleek dark-mode glassmorphic aesthetics.",
        keyFeatures: [
          "Instantaneous search and multi-attribute filtering (Brand, Price, Material, Frequency).",
          "One-click slide-out cart drawer with real-time tax & shipping estimator.",
          "Custom audio preview player with waveform visualizer.",
          "Fully responsive design optimized for mobile checkout."
        ],
        results: "Boosted monthly revenue by 62% in the first quarter post-launch and reduced page load times to 0.7s."
      },
      liveUrl: "https://demo-aurum-luxury.example.com",
      githubUrl: "https://github.com/saurabh-pro/aurum-luxury-commerce"
    },
    {
      id: "ai-agent-workflow",
      title: "Synapse AI — Visual Agent Builder",
      category: "ai",
      categoryLabel: "AI & Automation",
      thumbnail: "assets/images/project-ai.jpg",
      featured: true,
      summary: "Node-based visual workflow automation canvas allowing companies to chain LLMs, API connectors, and databases with drag-and-drop ease.",
      metrics: [
        { label: "Workflows Executed", value: "1.2M+" },
        { label: "Time Saved", value: "85%" },
        { label: "User Rating", value: "4.9/5" }
      ],
      techStack: ["React Flow", "Python / FastAPI", "LangChain", "Gemini 1.5 Pro", "Vector ChromaDB", "Docker"],
      caseStudy: {
        client: "AutomateHQ (Austin, TX)",
        challenge: "Non-technical teams struggled to integrate LLMs with internal databases, needing a visual drag-and-drop tool that doesn't require writing code.",
        solution: "Architected a high-performance React Flow canvas connected to a Python FastAPI asynchronous worker pool that compiles visual node graphs into executable pipelines.",
        keyFeatures: [
          "Interactive drag-and-drop node graph with live data wire connections and bezier routing.",
          "Embedded code sandbox for custom Python/JavaScript transforms.",
          "Multi-model support: Gemini, OpenAI, Claude, and local Ollama instances.",
          "One-click webhook deployment with custom API authentication keys."
        ],
        results: "Acquired 15,000+ developer users within 90 days of launch; featured on Product Hunt #2 Product of the Day."
      },
      liveUrl: "https://demo-synapse-ai.example.com",
      githubUrl: "https://github.com/saurabh-pro/synapse-ai-builder"
    },
    {
      id: "fintech-crypto",
      title: "Quantum — Real-Time Trading Terminal",
      category: "fullstack",
      categoryLabel: "Fintech & Web3",
      thumbnail: "assets/images/project-fintech.jpg",
      featured: true,
      summary: "Ultra-responsive financial trading portal featuring sub-millisecond WebSocket feeds, candlestick charting, and portfolio analytics.",
      metrics: [
        { label: "Live Tick Rate", value: "60 FPS" },
        { label: "WebSocket Latency", value: "<15ms" },
        { label: "Active Traders", value: "40K+" }
      ],
      techStack: ["TypeScript", "Lightweight Charts", "WebSockets", "Go / Golang", "Redis PubSub", "Tailwind CSS"],
      caseStudy: {
        client: "Quantum Capital Group (Singapore)",
        challenge: "Traders experienced visual lag and price slippage on their previous interface when analyzing rapid price fluctuations.",
        solution: "Built a hardware-accelerated Canvas/WebGL charting interface driven by binary WebSocket feeds, ensuring consistent 60 FPS renders under heavy market volume.",
        keyFeatures: [
          "Interactive Candlestick, Depth Chart, and Order Book heatmaps.",
          "Live Asset Allocation donut chart with instant profit/loss calculations.",
          "One-click quick trade drawer with stop-loss and take-profit presets.",
          "Keyboard shortcuts and modular multi-monitor layout customizer."
        ],
        results: "Handled over $45M in simulated and live trading volume without a single frontend crash."
      },
      liveUrl: "https://demo-quantum-crypto.example.com",
      githubUrl: "https://github.com/saurabh-pro/quantum-trading-terminal"
    }
  ],

  skills: {
    frontend: [
      { name: "React / Next.js", level: 96, icon: "⚛️" },
      { name: "TypeScript / JavaScript ES6+", level: 95, icon: "📘" },
      { name: "Tailwind CSS / Vanilla CSS", level: 98, icon: "🎨" },
      { name: "HTML5 / Semantic SEO / WCAG", level: 99, icon: "🌐" },
      { name: "Framer Motion & GSAP Animations", level: 90, icon: "✨" },
      { name: "State Management (Redux, Zustand)", level: 94, icon: "📦" }
    ],
    backend: [
      { name: "Node.js & Express", level: 94, icon: "🟢" },
      { name: "Python / FastAPI / Flask", level: 90, icon: "🐍" },
      { name: "RESTful & GraphQL APIs", level: 96, icon: "🔌" },
      { name: "PostgreSQL, MySQL & MongoDB", level: 92, icon: "🗄️" },
      { name: "Redis Caching & Pub/Sub", level: 88, icon: "⚡" },
      { name: "Auth (JWT, OAuth2, NextAuth, Clerk)", level: 95, icon: "🔒" }
    ],
    aiAndDevops: [
      { name: "AI/LLM Integration (Gemini, OpenAI)", level: 92, icon: "🤖" },
      { name: "LangChain & Vector Databases", level: 88, icon: "🧠" },
      { name: "Docker & Containerization", level: 86, icon: "🐳" },
      { name: "Cloud (AWS, Vercel, Supabase, GCP)", level: 90, icon: "☁️" },
      { name: "Git / GitHub Actions CI/CD", level: 94, icon: "🔄" },
      { name: "Performance & Lighthouse Optimization", level: 98, icon: "🚀" }
    ]
  },

  process: [
    {
      step: "01",
      title: "Strategic Discovery & Scope",
      desc: "We dive deep into your target audience, core business objectives, feature roadmap, and tech stack requirements to create an airtight execution blueprint."
    },
    {
      step: "02",
      title: "UI/UX & Interactive Prototype",
      desc: "Creating high-fidelity wireframes, responsive design systems, and animated interactive previews so you see and feel the product before code is written."
    },
    {
      step: "03",
      title: "High-Velocity Clean Development",
      desc: "Writing modular, type-safe, documented code with weekly demo builds, milestone check-ins, and automated testing to ensure 100% bug-free execution."
    },
    {
      step: "04",
      title: "QA, Launch & Growth Support",
      desc: "Rigorous performance audits (95+ Lighthouse), cross-browser testing, SEO optimization, deployment to production CDN, and 30 days post-launch warranty."
    }
  ],

  pricingTiers: [
    {
      id: "starter",
      name: "Starter MVP / Landing Page",
      price: "$999",
      period: "Fixed Scope",
      delivery: "5 - 7 Days",
      popular: false,
      desc: "Ideal for early-stage startups and businesses needing a world-class landing page or single-feature MVP.",
      features: [
        "High-Converting Responsive Design",
        "5 Custom Designed Sections / Pages",
        "Sub-second Load Speeds (95+ Lighthouse)",
        "SEO Meta Tags & Social Sharing Preview",
        "Contact & Lead Capture Form Integration",
        "14 Days Post-Launch Support"
      ],
      ctaText: "Choose Starter"
    },
    {
      id: "growth",
      name: "Full-Stack Custom Web App / SaaS",
      price: "$2,499",
      period: "Most Popular",
      delivery: "2 - 3 Weeks",
      popular: true,
      desc: "Complete end-to-end custom web application, SaaS platform, or client portal built for scale.",
      features: [
        "Full-Stack Architecture (React/Next.js + Node)",
        "Database Design & Relational Schema (Postgres)",
        "Authentication & Role-Based Access Control",
        "Stripe / Razorpay Payment & Subscription Gateway",
        "Interactive Admin Dashboard & Analytics",
        "30 Days Dedicated Post-Launch Support"
      ],
      ctaText: "Launch Your App"
    },
    {
      id: "enterprise",
      name: "Custom Enterprise & AI Solution",
      price: "$4,999+",
      period: "Tailored Plan",
      delivery: "3 - 5 Weeks",
      popular: false,
      desc: "Bespoke software architecture, AI agent integration, high-frequency APIs, and dedicated engineering sprints.",
      features: [
        "Custom AI / LLM Agent Workflows & RAG Search",
        "Complex Real-Time Data (WebSockets / Streaming)",
        "Microservices, Docker & Cloud Infrastructure",
        "Automated CI/CD Deployment Pipelines",
        "Priority 24/7 Slack / WhatsApp Communication",
        "60 Days Extended Warranty & Maintenance"
      ],
      ctaText: "Discuss Enterprise"
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Saurabh is one of the rarest freelance engineers who truly understands both business conversions and technical perfection. He delivered our SaaS MVP two weeks ahead of schedule and the code quality was pristine.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Vance Media Labs (USA)",
      rating: 5,
      avatarInitials: "MV",
      projectTag: "SaaS Analytics Platform"
    },
    {
      id: 2,
      quote: "Our e-commerce conversion rate jumped by 62% in the very first month after Saurabh revamped our store. The site is lightning fast, animations feel like Apple, and our customers love the checkout flow.",
      author: "Elena Rostova",
      role: "E-Commerce Director",
      company: "Aurum Audio (UK)",
      rating: 5,
      avatarInitials: "ER",
      projectTag: "Headless E-Commerce"
    },
    {
      id: 3,
      quote: "Working with Saurabh was an absolute breeze. Clear communication, daily Loom updates, and brilliant technical insights that saved us thousands in cloud costs. Highly recommended for any serious founder!",
      author: "Karan Singhania",
      role: "Chief Technology Officer",
      company: "NexGen Logistics (Singapore)",
      rating: 5,
      avatarInitials: "KS",
      projectTag: "Custom Web Application"
    }
  ],

  faqs: [
    {
      q: "What is your typical project timeline?",
      a: "Timelines depend on project complexity. A high-converting landing page or MVP typically takes 5 to 7 days, whereas a full-featured SaaS web application takes between 2 to 4 weeks. We always provide a clear milestone calendar before kickoff."
    },
    {
      q: "How does the payment and contract structure work?",
      a: "We work on a transparent milestone model: typically 50% upfront to reserve the sprint and 50% upon final sign-off and deployment (or 33% / 33% / 34% for larger projects). Invoices and contracts are provided."
    },
    {
      q: "Do I get 100% full intellectual property (IP) and code ownership?",
      a: "Yes, 100%! Upon final payment, all source code, design assets, GitHub repositories, and database schemas are completely transferred to your ownership with zero vendor lock-in."
    },
    {
      q: "What happens if I need bug fixes or updates after launch?",
      a: "Every project includes 14 to 60 days of complimentary post-launch support and warranty. If you need ongoing maintenance, new features, or dedicated monthly retainer hours, flexible support packages are available."
    },
    {
      q: "Can you work with our existing codebase or API?",
      a: "Absolutely. I regularly audit, refactor, and build on top of existing codebases (React, Next.js, Node.js, Python, PHP, etc.), as well as integrate any third-party REST or GraphQL APIs."
    }
  ]
};

// Export to window for vanilla JS modularity
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
