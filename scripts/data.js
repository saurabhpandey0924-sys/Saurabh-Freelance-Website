/**
 * Saurabh's Freelance Platform - Data Store
 * Easily extensible for new projects, testimonials, and services.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Saurabh",
    title: "Web Developer & Solutions Architect",
    tagline: "We engineer high-impact websites, custom web applications, and enterprise digital solutions built for speed, conversion, and scale.",
    availability: "Available for New Projects & Enterprise Sprints",
    experienceYears: "5+",
    location: "Global / Remote (IST / UTC+5:30)",
    email: "contact@saurabh.dev",
    whatsapp: "+919876543210",
    calendly: "https://calendly.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com"
  },

  about: {
    badge: "The Engineering Team Behind Your Vision",
    headline: "High-Impact Web Development With Dedicated Sprint Execution",
    bio: "I'm Saurabh — Web Developer & Solutions Architect. Together with my specialized development team, we engineer robust web applications, enterprise platforms, and digital products for founders, growing businesses, and agency partners. We manage the entire lifecycle — from technical architecture and clean UI/UX to scalable backend development, rigorous security testing, and production cloud deployment.",
    quote: "True engineering excellence is delivering clean, scalable systems that solve complex business problems and drive tangible commercial growth.",
    principles: [
      {
        icon: "⚡",
        title: "Sub-Second Speed & 95+ Core Web Vitals",
        desc: "Every web app and portal is tuned for instant loading, optimized asset bundles, and peak SEO visibility on all mobile and desktop devices."
      },
      {
        icon: "🛡️",
        title: "Clean, Modular Architecture (Zero Debt)",
        desc: "Strict typing, modular components, and comprehensive documentation ensure your codebase is future-proof and effortless to maintain or scale."
      },
      {
        icon: "🔑",
        title: "100% Intellectual Property & Code Ownership",
        desc: "You retain total ownership of all source code, design assets, databases, and deployment repositories from day one with zero vendor lock-in."
      },
      {
        icon: "🤝",
        title: "Direct Communication & Sprint Transparency",
        desc: "Direct access to the lead developer with weekly video walkthroughs, clear milestone tracking, and a guaranteed sub-24h response time."
      }
    ],
    stats: [
      { label: "Code & IP Ownership", value: "100%" },
      { label: "Performance & SEO Score", value: "95+" },
      { label: "Response Time SLA", value: "<24h" },
      { label: "Post-Launch Warranty", value: "30 Days" }
    ],
    trustHighlights: [
      "Specialized engineering team led directly by Saurabh",
      "Strict NDA & comprehensive IP transfer agreements",
      "Complimentary post-launch bug-fix warranty on all builds",
      "Daily asynchronous progress updates & live sprint demos"
    ]
  },

  technologies: [
    {
      id: "react",
      name: "React 19",
      category: "frontend",
      tag: "UI & Web Apps",
      icon: `<svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="#00D8FF"><circle cx="0" cy="0" r="2.05"/><g stroke="#00D8FF" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`
    },
    {
      id: "nextjs",
      name: "Next.js 15",
      category: "frontend",
      tag: "SSR & Full-Stack",
      icon: `<svg width="24" height="24" viewBox="0 0 180 180" fill="none"><mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style="mask-type:alpha"><circle cx="90" cy="90" r="90" fill="#000"/></mask><g mask="url(#next-mask)"><circle cx="90" cy="90" r="90" fill="#fff"/><path d="M149.508 157.438L69.147 54H54v71.979h11.979V69.379l72.484 93.308a90.259 90.259 0 0011.045-5.249z" fill="#000"/><path d="M115 54h12v72h-12z" fill="#000"/></g></svg>`
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      tag: "Type Safety",
      icon: `<svg width="24" height="24" viewBox="0 0 256 256" fill="none"><rect width="256" height="256" rx="32" fill="#3178C6"/><path d="M150.9 146.4c-4.4-3.1-9.9-5.1-16.5-5.1-13.6 0-21.7 8.3-21.7 20.7 0 13.2 8.4 20.5 23.4 25.8 19.8 7.1 28.5 15.6 28.5 32.5 0 19.8-15.6 33.7-41.4 33.7-13.6 0-25.2-4.1-32.9-9.5l6.5-16.3c6.8 4.7 16.6 8.5 26.6 8.5 15.6 0 23.9-8 23.9-19.1 0-12.8-8.7-19.5-24.6-25.3-18.7-6.9-27.1-16.1-27.1-32 0-18.5 14.8-33.1 38.6-33.1 12.5 0 22.3 3.4 28.6 7.3l-6.9 16.6zM228.3 125.7v18.7h-36.9v99.6h-21.6v-99.6h-36.8v-18.7h95.3z" fill="#fff"/></svg>`
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      tag: "Backend Runtime",
      icon: `<svg width="24" height="24" viewBox="0 0 256 283" fill="#5FA04E"><path d="M128 0L9 68.6v145.8L128 283l119-68.6V68.6L128 0zm-11.4 36.6l96.7 55.8v111.7l-96.7 55.8-96.7-55.8V92.4l96.7-55.8z"/></svg>`
    },
    {
      id: "python",
      name: "Python / FastAPI",
      category: "backend",
      tag: "AI & APIs",
      icon: `<svg width="24" height="24" viewBox="0 0 256 255" fill="none"><path d="M126.9 0C60.9 0 65 28.5 65 28.5l.1 29.5h63.2v9H39.4S0 62.7 0 128.9c0 66.2 34.3 64 34.3 64h20.5v-28.7s-1.1-34.3 33.8-34.3h58.5v-8.8H88.7s-31.5.8-31.5-30.8c0-31.6 27.5-30.7 27.5-30.7h95.4s27.2-.6 27.2 26.6v34.4h-28.9v8.8h37.7s20-2.3 20-30.7V28.5S240.2 0 126.9 0z" fill="#3776AB"/><path d="M129.1 254.9c66 0 61.9-28.5 61.9-28.5l-.1-29.5h-63.2v-9h88.9s39.4 4.3 39.4-61.9c0-66.2-34.3-64-34.3-64h-20.5v28.7s1.1 34.3-33.8 34.3H109v8.8h58.4s31.5-.8 31.5 30.8c0 31.6-27.5 30.7-27.5 30.7H76s-27.2.6-27.2-26.6v-34.4h28.9v-8.8H40s-20 2.3-20 30.7v70.8s-4.2 28.5 109.1 28.5z" fill="#FFD43B"/></svg>`
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "mobile",
      tag: "Cross-Platform",
      icon: `<svg width="24" height="24" viewBox="0 0 256 317" fill="none"><path d="M158.4 0L0 158.4l49.5 49.5L256 0h-97.6z" fill="#42A5F5"/><path d="M158.4 158.4L58.9 257.9l49.5 49.5 49.5-49.5 98.1-99.5h-97.6z" fill="#0D47A1"/><path d="M109.4 207.9L158.4 257.9 207.9 207.9 158.4 158.4l-49 49.5z" fill="#00D2B8"/></svg>`
    },
    {
      id: "apple",
      name: "Apple / iOS",
      category: "mobile",
      tag: "Swift & Mobile",
      icon: `<svg width="24" height="24" viewBox="0 0 170 170" fill="#fff"><path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.86-12-14.45-6.53-9.98-11.75-21.2-15.66-33.66-3.9-12.46-5.86-24.47-5.86-36.03 0-16.14 4.09-29.47 12.28-40 8.19-10.53 18.57-15.93 31.14-16.2 4.46 0 9.87 1.25 16.23 3.74 6.36 2.49 10.3 3.79 11.83 3.9 2.22-.44 6.3-1.87 12.23-4.29 5.93-2.42 10.89-3.5 14.88-3.23 12.73.68 22.84 5.38 30.34 14.1-11.13 6.74-16.58 16.13-16.36 28.17.22 9.57 3.86 17.65 10.93 24.23 7.07 6.58 15.62 10.3 25.65 11.18-2.61 7.84-5.98 15.56-10.11 23.16zM119.22 33.24c0-7.39 2.7-14.31 8.1-20.76C132.72 6.03 139.77 1.7 148.47 0c.22 1.09.33 2.07.33 2.94 0 7.39-2.78 14.48-8.33 21.26-5.55 6.78-12.63 10.95-21.25 12.51v-3.47z"/></svg>`
    },
    {
      id: "android",
      name: "Android",
      category: "mobile",
      tag: "Kotlin & Java",
      icon: `<svg width="24" height="24" viewBox="0 0 256 295" fill="#3DDC84"><path d="M192.5 120.2c-5.7 0-10.3-4.6-10.3-10.3 0-5.7 4.6-10.3 10.3-10.3s10.3 4.6 10.3 10.3c0 5.7-4.6 10.3-10.3 10.3m-129 0c-5.7 0-10.3-4.6-10.3-10.3 0-5.7 4.6-10.3 10.3-10.3s10.3 4.6 10.3 10.3c0 5.7-4.6 10.3-10.3 10.3M195.8 45.4l22.1-38.3c1.7-2.9.7-6.6-2.2-8.3-2.9-1.7-6.6-.7-8.3 2.2l-22.5 39C168.3 32.5 148.7 28 128 28s-40.3 4.5-56.9 12l-22.5-39c-1.7-2.9-5.4-3.9-8.3-2.2-2.9 1.7-3.9 5.4-2.2 8.3l22.1 38.3C24.4 66.8 0 106.6 0 152.2h256c0-45.6-24.4-85.4-60.2-106.8"/></svg>`
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      tag: "Relational DB",
      icon: `<svg width="24" height="24" viewBox="0 0 256 264" fill="#336791"><path d="M127.3 0C57 0 0 57 0 127.3c0 56.4 36.6 104.3 87.4 120.8-1.2-10.3-2.3-26.2.5-37.5 2.5-10.4 16.3-69.2 16.3-69.2s-4.2-8.3-4.2-20.7c0-19.4 11.2-33.8 25.2-33.8 11.9 0 17.6 8.9 17.6 19.6 0 11.9-7.6 29.8-11.5 46.3-3.3 13.9 7 25.2 20.7 25.2 24.8 0 43.9-26.2 43.9-63.9 0-33.4-24-56.8-58.3-56.8-39.7 0-63 29.8-63 60.6 0 12 4.6 24.8 10.4 31.8 1.1 1.4 1.3 2.6.9 4.1-.9 4-3.1 12.6-3.5 14.3-.6 2.3-1.9 2.8-4.3 1.7-16-7.4-26-30.8-26-49.6 0-40.4 29.4-77.5 84.7-77.5 44.5 0 79.1 31.7 79.1 74.1 0 44.2-27.9 79.8-66.6 79.8-13 0-25.2-6.8-29.4-14.7l-8 30.5c-2.9 11.2-10.8 25.2-16.1 33.8 12.1 3.7 25 5.7 38.3 5.7 70.3 0 127.3-57 127.3-127.3S197.6 0 127.3 0z"/></svg>`
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      tag: "NoSQL Database",
      icon: `<svg width="24" height="24" viewBox="0 0 256 572" fill="#47A248"><path d="M127.4 0C123.8 4.2 87 50.8 77.5 73.8c-26.8 65-38.6 136-38.6 206.8 0 78.4 24.4 148.8 67.8 206.8 6.5 8.9 15.5 18.5 20.7 26.8v-514.2z"/><path d="M128.6 0c3.6 4.2 40.5 50.8 49.9 73.8 26.8 65 38.6 136 38.6 206.8 0 78.4-24.4 148.8-67.8 206.8-6.5 8.9-15.5 18.5-20.7 26.8V0z"/></svg>`
    },
    {
      id: "docker",
      name: "Docker",
      category: "devops",
      tag: "Containers",
      icon: `<svg width="24" height="24" viewBox="0 0 256 220" fill="#2496ED"><path d="M251.4 104.3c-2.8-1.9-9.3-5.2-20.4-3.8-3.4-9.3-9.5-16.8-18.4-22.3l-5.6-3.4-3.8 5.3c-7.9 10.9-10.7 24.3-8.2 38.6-4.6 2.3-13.6 5.8-26.3 1.9-2.1-.6-4.3-1.6-6.4-2.8l-1.9-1-2.1 1c-16 7.6-36.2 7.7-54.8 7.7H9.2C3.7 132.8 0 137.9 0 143.7c0 43.1 27.9 76.3 83.1 76.3 64.9 0 109.9-38.9 123.5-98.3 18.3 1 36.8-3.7 44.8-17.4zm-143.2-12.7h23.8v23.8h-23.8zm0-29.7h23.8v23.8h-23.8zm29.8 0h23.8v23.8H138zm0 29.7h23.8v23.8H138zm-89.3 0h23.8v23.8H48.7zm0-29.7h23.8v23.8H48.7zm29.8 0h23.8v23.8H78.5zm0 29.7h23.8v23.8H78.5zm-59.5 0h23.8v23.8H19zm59.5-59.4h23.8v23.8H78.5z"/></svg>`
    },
    {
      id: "aws",
      name: "AWS Cloud",
      category: "devops",
      tag: "Cloud Native",
      icon: `<svg width="24" height="24" viewBox="0 0 256 154" fill="#FF9900"><path d="M129.5 119.5c-27.6 0-51.4-9.8-71.1-29.4-1.7-1.7-4-2.6-6.4-2.6-2.4 0-4.7.9-6.4 2.6L3.9 131.8c-3.5 3.5-3.5 9.2 0 12.8 34.4 34.4 76.4 51.6 125.6 51.6 49.3 0 91.3-17.2 125.6-51.6 3.5-3.5 3.5-9.2 0-12.8l-41.7-41.7c-3.5-3.5-9.2-3.5-12.8 0-19.6 19.6-43.5 29.4-71.1 29.4z" fill="#FF9900"/><path d="M212.8 99.2c-5.7 7.7-13.6 13.9-23.8 18.6-2.8 1.3-3.8 4.7-2.3 7.4 1.3 2.5 4.3 3.6 7 2.5 12.1-5.5 21.6-13 28.5-22.3 2.3-3.1 1.7-7.5-1.5-9.8-3.1-2.3-7.5-1.7-9.8 1.5z" fill="#FF9900"/></svg>`
    },
    {
      id: "salesforce",
      name: "Salesforce / SAP",
      category: "enterprise",
      tag: "ERP Integration",
      icon: `<svg width="24" height="24" viewBox="0 0 256 177" fill="#00A1E0"><path d="M102.5 17.5c14.2 0 26.8 6.4 35.3 16.4 9.1-10.7 22.8-17.6 38.1-17.6 27.3 0 49.5 22.2 49.5 49.5 0 2.2-.1 4.3-.4 6.4 18 6.5 31 23.7 31 43.9 0 25.8-20.9 46.7-46.7 46.7H46.7C20.9 162.8 0 141.9 0 116.1c0-21.7 14.9-39.9 35-45-1.1-4.7-1.8-9.6-1.8-14.7 0-35.3 28.6-63.9 63.9-63.9 1.8 0 3.6.1 5.4.3z"/></svg>`
    },
    {
      id: "ai-llm",
      name: "OpenAI / Gemini",
      category: "enterprise",
      tag: "AI & LLM Workflows",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/><circle cx="12" cy="12" r="2" fill="#A855F7"/></svg>`
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      tag: "Design Systems",
      icon: `<svg width="24" height="24" viewBox="0 0 256 154" fill="#06B6D4"><path d="M128 0C68.6 0 31.4 29.8 16.4 89.3c22.3-29.8 48.3-40.9 78.1-33.5 17 4.2 29.1 16.5 42.6 30.2 21.9 22.4 47.4 48.4 102.5 48.4 59.4 0 96.6-29.8 111.6-89.3-22.3 29.8-48.3 40.9-78.1 33.5-17-4.2-29.1-16.5-42.6-30.2C208.6 26 183.1 0 128 0z"/></svg>`
    },
    {
      id: "redis",
      name: "Redis",
      category: "database",
      tag: "In-Memory Cache",
      icon: `<svg width="24" height="24" viewBox="0 0 256 220" fill="#DC382D"><path d="M0 45.4L128 0l128 45.4-128 45.4L0 45.4zm0 64.6l128 45.4 128-45.4-36.6-13-91.4 32.4-91.4-32.4L0 110zm0 64.6l128 45.4 128-45.4-36.6-13-91.4 32.4-91.4-32.4L0 174.6z"/></svg>`
    }
  ],

  industries: [
    {
      id: "saas",
      title: "SaaS & Tech Startups",
      badge: "High Growth",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
      desc: "Turn product vision into investor-ready software with multi-tenant databases, Stripe billing, and automated onboarding.",
      solutions: [
        "Rapid MVP Development in 2-3 Weeks",
        "Subscription & Metered Billing Portals",
        "Role-Based Access (RBAC) & OAuth",
        "Real-Time Metrics & Churn Analytics"
      ],
      outcome: "Accelerated Time-to-Market"
    },
    {
      id: "ecommerce",
      title: "E-Commerce & D2C Brands",
      badge: "Conversion Engine",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
      desc: "Headless e-commerce storefronts that load in under 1 second, eliminate cart friction, and maximize checkout conversion rates.",
      solutions: [
        "Headless Shopify & Next.js Storefronts",
        "1-Click Slide-Out Checkout Funnels",
        "Real-Time Inventory & ERP Sync",
        "Dynamic Product Recommendations"
      ],
      outcome: "Sub-Second Load Times"
    },
    {
      id: "edtech",
      title: "Education & EdTech",
      badge: "Campus & LMS",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 3 6 3 6 3s6 0 6-3v-5"/></svg>`,
      desc: "Institutional ERPs, student & faculty portals, online fees management, and automated exam & grading systems.",
      solutions: [
        "College & School Management ERPs",
        "Student & Faculty Portal Dashboards",
        "Automated Fee Collection & Receipts",
        "Digital Attendance & Gradebooks"
      ],
      outcome: "Zero Manual Paperwork"
    },
    {
      id: "healthcare",
      title: "Healthcare & Clinics",
      badge: "Secure & Compliant",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
      desc: "Modern digital health solutions with secure patient records, interactive appointment scheduling, and telemedicine interfaces.",
      solutions: [
        "Online Patient Appointment Booking",
        "Diagnostic & Lab Report Viewers",
        "Doctor Rostering & Clinic Billing",
        "HIPAA-Conscious Data Handling"
      ],
      outcome: "Seamless Patient Care"
    },
    {
      id: "logistics",
      title: "Logistics & Operations",
      badge: "Enterprise Scale",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="13" x="4" y="5" rx="2"/><path d="M16 2v3M8 2v3M4 11h16M9 16h6"/></svg>`,
      desc: "Custom business ERPs, fleet tracking dashboards, dispatch automation, and real-time inventory management.",
      solutions: [
        "Warehouse & Inventory Management",
        "Live Fleet Tracking & Dispatch",
        "Automated Invoicing & GST Reporting",
        "Supplier & Vendor Portals"
      ],
      outcome: "3x Operational Velocity"
    }
  ],

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
      id: "campussphere-erp",
      title: "CampusSphere — Enterprise College & School ERP",
      category: "fullstack",
      categoryLabel: "Enterprise ERP & Portal",
      thumbnail: "assets/images/project-saas.jpg",
      featured: true,
      summary: "Comprehensive multi-tenant institutional ERP featuring student/faculty portals, online fee collection, automated attendance, and examination management.",
      metrics: [
        { label: "Admin Time Saved", value: "85%" },
        { label: "Fee Collection", value: "100% Digital" },
        { label: "Active Records", value: "12,000+" }
      ],
      techStack: ["React 19", "Node.js / Express", "PostgreSQL", "Tailwind CSS", "Docker", "Razorpay / Stripe"],
      caseStudy: {
        client: "Higher Education Institute & Campus Network",
        challenge: "The institution relied on fragmented legacy software and paper forms for student records, manual fee collection receipts, and offline exam grading, causing administrative backlogs.",
        solution: "Engineered an integrated cloud-based ERP with role-based dashboards (Admin, Faculty, Student, Parent), automated fee payment gateways with instant PDF receipts, and real-time attendance tracking.",
        keyFeatures: [
          "Role-Based Access Control (RBAC) for Admins, Teachers, Students, and Accounts.",
          "Automated online fee collection with UPI, NetBanking, and automated receipts.",
          "Digital attendance tracker with SMS/WhatsApp notification triggers for parents.",
          "Examination schedule builder, hall ticket generator, and GPA report cards."
        ],
        results: "Eliminated 85% of manual administrative paperwork and collected 100% of semester fees digitally within the first 48 hours of each academic term."
      },
      liveUrl: "https://demo-campussphere-erp.example.com",
      githubUrl: "https://github.com/saurabh-pro/campussphere-erp"
    },
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
      price: "₹24,999",
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
      price: "₹59,999",
      period: "Most Popular",
      delivery: "2 - 3 Weeks",
      popular: true,
      desc: "Complete end-to-end custom web application, SaaS platform, or client portal built for scale.",
      features: [
        "Full-Stack Architecture (React/Next.js + Node)",
        "Database Design & Relational Schema (Postgres)",
        "Authentication & Role-Based Access Control",
        "UPI / Razorpay / Stripe Payment & Subscription Gateway",
        "Interactive Admin Dashboard & Analytics",
        "30 Days Dedicated Post-Launch Support"
      ],
      ctaText: "Launch Your App"
    },
    {
      id: "enterprise",
      name: "Custom Enterprise & AI Solution",
      price: "₹99,999+",
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
      quote: "Saurabh and his team architected our web platform with exceptional attention to detail. Delivered two weeks ahead of schedule, with clean modular code and seamless Stripe billing integration.",
      author: "Founder & Product Lead",
      role: "SaaS Tech Startup",
      company: "Verified Client Project",
      rating: 5,
      avatarInitials: "SP",
      projectTag: "Full-Stack SaaS Platform"
    },
    {
      id: 2,
      quote: "Transformed our sluggish storefront into an ultra-fast headless web app. Page transitions are instantaneous, and mobile checkout conversion saw immediate improvements post-launch.",
      author: "E-Commerce Director",
      role: "D2C Brand",
      company: "Verified Client Project",
      rating: 5,
      avatarInitials: "EC",
      projectTag: "Headless E-Commerce"
    },
    {
      id: 3,
      quote: "Clear communication, daily asynchronous progress updates, and robust API architecture. Zero technical debt and 100% intellectual property delivered as promised.",
      author: "Chief Technology Officer",
      role: "Enterprise Logistics",
      company: "Verified Client Project",
      rating: 5,
      avatarInitials: "CT",
      projectTag: "Enterprise Web Portal"
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
