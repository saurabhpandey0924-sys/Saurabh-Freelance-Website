/**
 * QUBITHRS CLEAN SERVICE SPECIFICATION ENGINE
 * Simple, Clean, Effective Specification Architecture
 * 100% Faithful to User Reference Screenshots & Brand Integration
 */

(function () {
  'use strict';

  const DIVISION_SHORT_NAMES = {
    'software-web': 'Web & Software',
    'saas-cloud': 'SaaS & Cloud',
    'ai-automation': 'AI & Automation',
    'mobile-apps': 'Mobile Apps',
    'api-integration': 'API Integration',
    'cybersecurity-defense': 'Cybersecurity'
  };

  const WHATS_INCLUDED = {
    'software-web': [
      'Business Websites & Web Applications',
      'Mobile Apps (iOS & Android)',
      'ERP & CRM Solutions',
      'Billing & Inventory Systems',
      'API Development & Integration',
      'Website Maintenance & Support'
    ],
    'saas-cloud': [
      'Multi-Tenant SaaS Architecture',
      'Automated Subscription Billing (Stripe)',
      'User Access & Role Management (RBAC)',
      'High-Concurrency Microservices & APIs',
      'Docker Containerization & CI/CD Pipelines',
      'Real-Time Analytics & Usage Dashboards'
    ],
    'ai-automation': [
      'Autonomous AI Agents & Copilots',
      'Enterprise Hybrid RAG & Vector Search',
      'Automated CRM & Webhook Pipelines',
      'Real-Time Token Streaming Engines',
      'Intelligent Document Extraction & OCR',
      'Hallucination Guardrails & Evaluation'
    ],
    'mobile-apps': [
      'Cross-Platform iOS & Android Apps',
      'Offline-First Data Sync (SQLite)',
      'Push Notifications (APNs & FCM)',
      'Biometric Security (FaceID & Fingerprint)',
      '60/120 FPS Fluid Gestures & Physics',
      'App Store & Play Store Submissions'
    ],
    'api-integration': [
      'Custom RESTful & GraphQL API Architecture',
      'Payment Gateway Integration (Stripe & Razorpay)',
      'Enterprise ERP & CRM Connectors',
      'High-Throughput Message Queues (BullMQ)',
      'Contract-First OpenAPI 3.1 & Typed SDKs',
      'Circuit Breakers & Rate Limiting'
    ],
    'cybersecurity-defense': [
      'Penetration Testing & Security Audits',
      'OWASP Top 10 Application Hardening',
      'End-to-End Cryptography & Key Management',
      'Cloudflare Enterprise WAF & DDoS Shields',
      'Zero-Trust Architecture & Identity RBAC',
      'SOC2 & GDPR Compliance Preparation'
    ]
  };

  const CUSTOM_OVERVIEWS = {
    'software-web': 'Our software development services encompass everything from business websites to complex ERP systems. We build reliable, secure, and scalable solutions.',
    'saas-cloud': 'We engineer complete SaaS platforms with multi-tenancy, automated subscription billing, resilient cloud microservices, and customer management portals ready for scale.',
    'ai-automation': 'Harness modern Large Language Models and intelligent agent frameworks to automate complex workflows, extract unstructured documents, and stream low-latency AI responses.',
    'mobile-apps': 'Deliver fast, intuitive, and responsive mobile experiences across iOS and Android from a single codebase, equipped with offline-first synchronization and biometric security.',
    'api-integration': 'Connect your disparate tools and power your applications with robust, secure, and lightning-fast RESTful and GraphQL APIs built for high concurrency.',
    'cybersecurity-defense': 'We architect resilient digital fortifications for web applications, APIs, and cloud infrastructure, eliminating OWASP vulnerabilities and enforcing zero-trust access.'
  };

  const CUSTOM_TITLES = {
    'software-web': 'Software & Website Development',
    'saas-cloud': 'Custom SaaS & Cloud Architecture',
    'ai-automation': 'AI Agents & Workflow Automation',
    'mobile-apps': 'Mobile & Cross-Platform Development',
    'api-integration': 'API Engineering & Enterprise Integration',
    'cybersecurity-defense': 'Cybersecurity & Cloud Defense'
  };

  const CUSTOM_SUBTITLES = {
    'software-web': 'We develop scalable websites, business applications, ERP systems, CRM solutions, mobile apps, and custom software tailored to your business needs.',
    'saas-cloud': 'Transform your software vision into an investor-ready SaaS product powered by resilient cloud microservices, multi-tenancy, and subscription billing.',
    'ai-automation': 'Embed autonomous LLM agents, intelligent RAG vector search, dynamic document analysis, and token-streaming copilots directly into your business workflows.',
    'mobile-apps': 'High-performance iOS and Android applications built with React Native and Flutter, unified backends, and offline-first Progressive Web Apps (PWA).',
    'api-integration': 'High-concurrency RESTful and GraphQL APIs, seamless third-party ERP/CRM integrations, payment gateway webhooks, and secure event-driven architectures.',
    'cybersecurity-defense': 'Defense-grade web application firewalls, penetration testing, zero-trust architectures, and automated vulnerability audits to protect enterprise data.'
  };

  function initCleanSpecification() {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const data = window.PORTFOLIO_DATA;
    if (!data || !data.services || !data.services.length) return;

    const urlParams = new URLSearchParams(window.location.search);
    let serviceId = urlParams.get('id') || 'software-web';

    renderCleanService(serviceId, false);

    window.addEventListener('popstate', () => {
      const params = new URLSearchParams(window.location.search);
      const navId = params.get('id') || 'software-web';
      renderCleanService(navId, false);
    });
  }

  function renderCleanService(serviceId, pushState = true) {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const services = window.PORTFOLIO_DATA.services;
    let currIdx = services.findIndex(s => s.id === serviceId);
    if (currIdx === -1) {
      currIdx = 0;
      serviceId = services[0].id;
    }

    const s = services[currIdx];
    const prevIdx = (currIdx - 1 + services.length) % services.length;
    const nextIdx = (currIdx + 1) % services.length;
    const prevService = services[prevIdx];
    const nextService = services[nextIdx];
    const divNum = (currIdx + 1).toString().padStart(2, '0');

    if (pushState && window.location.search !== `?id=${serviceId}`) {
      window.history.pushState({ id: serviceId }, '', `service-detail.html?id=${serviceId}`);
    }

    const displayTitle = CUSTOM_TITLES[s.id] || s.title;
    const displaySubtitle = CUSTOM_SUBTITLES[s.id] || s.subtitle || s.description;
    const displayOverview = CUSTOM_OVERVIEWS[s.id] || s.overview;
    const includedItems = WHATS_INCLUDED[s.id] || [
      'Custom Web Applications & Portals',
      'Mobile Apps (iOS & Android)',
      'Enterprise Database Architecture',
      'API Development & Integration',
      'Cloud Deployment & CI/CD Pipelines',
      'Continuous Support & Maintenance'
    ];

    document.title = `${displayTitle} | QUBITHRS Technology Solutions`;

    container.innerHTML = `
      <div class="clean-spec-wrapper">
        <!-- Top Back Nav & Quick Division Switcher -->
        <div class="clean-top-nav">
          <a href="index.html#division-${divNum}" class="btn-back-services" aria-label="Back to services showcase">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            <span>BACK TO SERVICES</span>
          </a>

          <div class="clean-division-pills" role="tablist" aria-label="Division Switcher">
            ${services.map((srv, idx) => {
              const numStr = (idx + 1).toString().padStart(2, '0');
              const shortName = DIVISION_SHORT_NAMES[srv.id] || srv.title.split('&')[0].trim();
              const isActive = srv.id === serviceId;
              return `
                <button type="button" class="clean-div-btn ${isActive ? 'active' : ''}" data-service-id="${srv.id}" role="tab" aria-selected="${isActive}">
                  <span>${numStr}</span>
                  <span>${shortName}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="clean-pager-controls">
            <span class="clean-pager-indicator">${currIdx + 1} of ${services.length}</span>
            <button type="button" class="clean-pager-btn" data-service-id="${prevService.id}" title="Previous: ${prevService.title}" aria-label="Previous service">
              &larr; Prev
            </button>
            <button type="button" class="clean-pager-btn" data-service-id="${nextService.id}" title="Next: ${nextService.title}" aria-label="Next service">
              Next &rarr;
            </button>
          </div>
        </div>

        <!-- Dark Hero Banner Card (Exact match to user reference screenshot) -->
        <div class="clean-hero-card">
          <h1 class="clean-hero-title">${displayTitle}</h1>
          <p class="clean-hero-subtitle">${displaySubtitle}</p>
        </div>

        <!-- Overview Section (Exact match to user reference screenshot) -->
        <div class="clean-overview-section">
          <h2 class="clean-sec-title">Overview</h2>
          <p class="clean-overview-text">${displayOverview}</p>
        </div>

        <!-- "What's Included" Container (Exact match to user reference screenshot) -->
        <div class="clean-included-box">
          <h3 class="clean-included-title">What's Included</h3>
          <div class="clean-included-grid">
            ${includedItems.map(item => `
              <div class="clean-included-item">
                <span class="clean-check-badge">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span class="clean-item-text">${item}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2-Column Split: Deliverables & Specifications -->
        <div class="clean-specs-split">
          <!-- Left: Scope of Deliverables -->
          <div class="clean-spec-card">
            <h3 class="clean-spec-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>What You Receive (Deliverables)</span>
            </h3>
            <ul class="clean-deliv-list">
              ${(s.deliverables || []).map(d => `
                <li class="clean-deliv-row">
                  <span class="clean-deliv-bullet">&bull;</span>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Right: Architecture Blueprint & Guarantees -->
          <div class="clean-spec-card">
            <h3 class="clean-spec-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>Architecture Blueprint</span>
            </h3>

            <div>
              <div class="clean-param-row">
                <span class="clean-param-key">Typical Delivery:</span>
                <span class="clean-param-val highlight">${s.timeline}</span>
              </div>
              <div class="clean-param-row">
                <span class="clean-param-key">Execution Team:</span>
                <span class="clean-param-val">Dedicated QUBITHRS Developers</span>
              </div>
              <div class="clean-param-row">
                <span class="clean-param-key">Intellectual Property:</span>
                <span class="clean-param-val">100% IP & Code Ownership</span>
              </div>
              <div style="padding-top: 12px;">
                <span class="clean-param-key" style="display:block; margin-bottom: 6px;">Core Technologies:</span>
                <div class="clean-tech-tags">
                  ${(s.tags || []).map(t => `<span class="clean-tag-pill">${t}</span>`).join('')}
                </div>
              </div>
              <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
                <span class="clean-param-key" style="display:block; margin-bottom: 6px;">Included Guarantees:</span>
                ${(s.includedGuarantees || []).map(g => `
                  <div class="clean-guarantee-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${g}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="clean-action-footer">
          <a href="contact.html?service=${s.id}" class="btn-clean-primary">
            <span>Inquire About This Service</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="contact.html" class="btn-clean-secondary">
            <span>Book Discovery Call &rarr;</span>
          </a>
        </div>
      </div>
    `;

    // Division pill & pager click handler
    const buttons = container.querySelectorAll('.clean-div-btn, .clean-pager-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-service-id');
        if (targetId && targetId !== serviceId) {
          renderCleanService(targetId, true);
        }
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCleanSpecification);
  } else {
    initCleanSpecification();
  }

  window.initCleanSpecification = initCleanSpecification;
  window.renderCleanService = renderCleanService;
})();
