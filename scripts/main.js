/**
 * Saurabh's Freelance Platform - Main Logic & Rendering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // 1. Render Services
  renderServices(data.services);

  // 2. Render Projects & Filter Logic
  renderProjects(data.projects);
  initProjectFilters(data.projects);

  // 3. Render Skills Matrix
  renderSkills(data.skills);

  // 4. Render Work Process
  renderProcess(data.process);

  // 5. Render Pricing
  renderPricing(data.pricingTiers);

  // 6. Render About & Working Philosophy
  renderAbout(data.about);

  // 7. Render Testimonials
  renderTestimonials(data.testimonials);

  // 8. Render FAQs
  renderFAQs(data.faqs);

  // 9. Navigation & Scroll Observers
  initNavigation();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   RENDER FUNCTIONS
-------------------------------------------------------------------------- */

let currentOpenServiceId = null;

function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="glass-card service-card reveal" onclick="window.openServiceSlide('${s.id}')" tabindex="0" role="button" aria-label="Open detailed slide for ${s.title}">
      <div class="service-top">
        <div class="service-icon-wrap">
          ${s.icon}
        </div>
        <span class="service-badge">${s.badge}</span>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <div class="service-tags">
        ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>
      <div class="service-card-action">
        <span>Explore Service Slide</span>
        <span class="action-arrow">&rarr;</span>
      </div>
    </div>
  `).join('');

  // Check URL hash on init
  checkServiceSlideHash();
}

window.openServiceSlide = function(serviceId) {
  const data = window.PORTFOLIO_DATA;
  if (!data || !data.services) return;

  const services = data.services;
  const currIdx = services.findIndex(s => s.id === serviceId);
  if (currIdx === -1) return;

  const service = services[currIdx];
  currentOpenServiceId = serviceId;

  const prevIdx = (currIdx - 1 + services.length) % services.length;
  const nextIdx = (currIdx + 1) % services.length;
  const prevService = services[prevIdx];
  const nextService = services[nextIdx];

  const gridContainer = document.getElementById('services-container');
  const slideWrapper = document.getElementById('service-slide-wrapper');
  if (!slideWrapper) return;

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hi Saurabh, I'm interested in discussing your "${service.title}" service for my project!`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${encodedWhatsAppMsg}`;

  slideWrapper.innerHTML = `
    <div class="service-slide-card">
      <!-- Top Slide Action Bar -->
      <div class="slide-nav-bar">
        <button class="btn-back-to-services" onclick="window.closeServiceSlide()" aria-label="Back to all services">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          <span>All Services</span>
        </button>

        <div class="slide-pager-wrap">
          <span class="slide-pager-counter">Service ${currIdx + 1} of ${services.length}</span>
          <button class="slide-pager-btn" onclick="window.openServiceSlide('${prevService.id}')" title="Previous: ${prevService.title}" aria-label="Previous service">
            &larr; Prev
          </button>
          <button class="slide-pager-btn" onclick="window.openServiceSlide('${nextService.id}')" title="Next: ${nextService.title}" aria-label="Next service">
            Next &rarr;
          </button>
        </div>
      </div>

      <!-- Slide Hero -->
      <div class="slide-hero">
        <div class="slide-hero-left">
          <div class="slide-badge-row">
            <span class="slide-category-badge">${service.badge}</span>
            <span class="slide-timeline-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Typical Delivery: ${service.timeline}</span>
            </span>
          </div>
          <h2 class="slide-title">${service.title}</h2>
          <p class="slide-overview">${service.detailedOverview}</p>

          <div class="slide-action-row">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
              <span>Book ${service.title}</span>
            </a>
            <a href="#calculator" class="btn btn-secondary">
              <span>Calculate Project Cost &rarr;</span>
            </a>
          </div>
        </div>

        <div class="service-icon-wrap" style="width:72px; height:72px; font-size:1.8rem; border-radius:var(--radius-lg); flex-shrink:0;">
          ${service.icon}
        </div>
      </div>

      <!-- Main Content 2-Column Grid -->
      <div class="service-slide-grid">
        <!-- Left: Deliverables & Milestones -->
        <div class="service-slide-main-col">
          <div class="slide-deliverables-card">
            <h3 class="slide-section-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent-primary);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>What You Receive (Core Deliverables)</span>
            </h3>
            <ul class="slide-deliverables-list">
              ${service.deliverables.map(d => `
                <li class="deliverable-item">
                  <div class="deliverable-check-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="slide-milestones-card">
            <h3 class="slide-section-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent-primary);"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
              <span>Sprint Roadmap & Milestones</span>
            </h3>
            <div class="milestones-step-list">
              ${service.milestones.map(m => `
                <div class="milestone-step-item">
                  <span class="milestone-badge">${m.phase}</span>
                  <div class="milestone-content">
                    <h4>${m.title}</h4>
                    <p>${m.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Technologies Employed -->
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-top:20px;">
            <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em;">
              Core Tech Stack:
            </span>
            ${service.tags.map(t => `<span class="service-tag" style="font-size:0.85rem; padding:6px 12px;">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Right: Blueprint Card -->
        <div class="slide-spec-blueprint">
          <div class="spec-row">
            <div class="spec-label">Ideal For</div>
            <div class="spec-value">${service.bestFor}</div>
          </div>

          <div class="spec-row">
            <div class="spec-label">Estimated Delivery</div>
            <div class="spec-value" style="color:var(--accent-secondary); font-family:var(--font-mono);">${service.timeline}</div>
          </div>

          <div class="spec-row">
            <div class="spec-label">Execution Team</div>
            <div class="spec-value">Saurabh (Lead) + Dedicated Dev Team</div>
          </div>

          <div>
            <div class="spec-label">Included Client Guarantees</div>
            <ul class="spec-guarantees-list">
              ${service.includedGuarantees.map(g => `
                <li class="spec-guarantee-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${g}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:14px;">
            <span>Discuss This Service</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;

  if (gridContainer) gridContainer.style.display = 'none';
  slideWrapper.style.display = 'block';

  // Smooth scroll to services section
  const servicesSec = document.getElementById('services');
  if (servicesSec) {
    const yOffset = -80;
    const y = servicesSec.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // Update hash
  if (history.pushState) {
    history.pushState(null, null, `#service-${serviceId}`);
  } else {
    location.hash = `#service-${serviceId}`;
  }
};

window.closeServiceSlide = function() {
  const gridContainer = document.getElementById('services-container');
  const slideWrapper = document.getElementById('service-slide-wrapper');
  currentOpenServiceId = null;

  if (slideWrapper) slideWrapper.style.display = 'none';
  if (gridContainer) gridContainer.style.display = 'grid';

  // Restore hash
  if (history.pushState) {
    history.pushState(null, null, '#services');
  } else {
    location.hash = '#services';
  }

  const servicesSec = document.getElementById('services');
  if (servicesSec) {
    const yOffset = -80;
    const y = servicesSec.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

function checkServiceSlideHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#service-')) {
    const serviceId = hash.replace('#service-', '');
    setTimeout(() => {
      window.openServiceSlide(serviceId);
    }, 100);
  }
}

window.addEventListener('hashchange', checkServiceSlideHash);

// Keyboard shortcuts for service slide
document.addEventListener('keydown', (e) => {
  const slideWrapper = document.getElementById('service-slide-wrapper');
  if (!slideWrapper || slideWrapper.style.display === 'none' || !currentOpenServiceId) return;

  const data = window.PORTFOLIO_DATA;
  if (!data || !data.services) return;
  const services = data.services;
  const currIdx = services.findIndex(s => s.id === currentOpenServiceId);
  if (currIdx === -1) return;

  if (e.key === 'Escape') {
    window.closeServiceSlide();
  } else if (e.key === 'ArrowRight') {
    const nextIdx = (currIdx + 1) % services.length;
    window.openServiceSlide(services[nextIdx].id);
  } else if (e.key === 'ArrowLeft') {
    const prevIdx = (currIdx - 1 + services.length) % services.length;
    window.openServiceSlide(services[prevIdx].id);
  }
});

function renderProjects(projects, filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No projects found in this category.</p>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div class="project-thumb-wrap">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <div class="project-overlay">
          <button class="btn btn-primary btn-sm" onclick="window.openProjectModal('${p.id}')">
            <span>View Case Study</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <span>Live Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
      <div class="project-content">
        <div class="project-header-info">
          <span class="project-category-pill">${p.categoryLabel}</span>
          <button onclick="window.openProjectModal('${p.id}')" style="color:var(--accent-primary); font-size:0.85rem; font-weight:600; display:flex; align-items:center; gap:4px;">
            Details &rarr;
          </button>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        
        <div class="project-metrics-row">
          ${p.metrics.map(m => `
            <div class="project-metric-item">
              <div class="project-metric-val">${m.value}</div>
              <div class="project-metric-lbl">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="project-tech-pills">
          ${p.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function initProjectFilters(projects) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(projects, category);
      initScrollAnimations();
    });
  });
}

function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const renderGroup = (title, icon, list) => `
    <div class="glass-card skills-column reveal">
      <h3 class="skills-col-title">
        <span>${icon}</span>
        <span>${title}</span>
      </h3>
      <div class="skill-list">
        ${list.map(s => `
          <div class="skill-item">
            <div class="skill-item-header">
              <span>${s.icon} ${s.name}</span>
              <span style="color: var(--accent-primary); font-weight:700;">${s.level}%</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" data-level="${s.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = `
    ${renderGroup('Frontend Architecture', '⚡', skills.frontend)}
    ${renderGroup('Backend & APIs', '🗄️', skills.backend)}
    ${renderGroup('AI, Cloud & DevOps', '🤖', skills.aiAndDevops)}
  `;
}

function renderProcess(process) {
  const container = document.getElementById('process-container');
  if (!container) return;

  container.innerHTML = process.map(p => `
    <div class="glass-card process-card reveal">
      <div class="process-step-num">${p.step}</div>
      <h3 class="process-title">${p.title}</h3>
      <p class="process-desc">${p.desc}</p>
    </div>
  `).join('');
}

function renderPricing(tiers) {
  const container = document.getElementById('pricing-container');
  if (!container) return;

  container.innerHTML = tiers.map(t => `
    <div class="glass-card pricing-card ${t.popular ? 'popular' : ''} reveal">
      ${t.popular ? '<div class="popular-badge">⚡ Most Popular</div>' : ''}
      <h3 class="pricing-name">${t.name}</h3>
      <div class="pricing-price-wrap">
        <span class="pricing-price">${t.price}</span>
        <span class="pricing-period">/ ${t.period}</span>
      </div>
      <div class="pricing-delivery">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Delivery: ${t.delivery}</span>
      </div>
      <p class="pricing-desc">${t.desc}</p>
      
      <ul class="pricing-features-list">
        ${t.features.map(f => `
          <li class="pricing-feature-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <a href="#contact" class="btn ${t.popular ? 'btn-primary' : 'btn-secondary'} btn-lg" style="width: 100%;">
        ${t.ctaText}
      </a>
    </div>
  `).join('');
}

function renderTestimonials(testimonials) {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = testimonials.map(t => `
    <div class="glass-card testimonial-card reveal">
      <div>
        <div class="testimonial-stars">
          ${'★'.repeat(t.rating)}
        </div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.avatarInitials}</div>
        <div>
          <div class="testimonial-name">${t.author}</div>
          <div class="testimonial-role">${t.role} • ${t.company}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQs(faqs) {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqs.map((f, index) => `
    <div class="faq-item reveal ${index === 0 ? 'open' : ''}">
      <button class="faq-question-btn" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  // Accordion toggle click handler
  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function renderAbout(about) {
  const container = document.getElementById('about-container');
  if (!container || !about) return;

  container.innerHTML = `
    <div class="about-grid">
      <!-- Profile Column -->
      <div class="about-profile-card reveal">
        <div class="about-avatar-wrapper" style="display: flex; align-items: center; justify-content: center; background: var(--gradient-primary); font-size: 2.8rem; color: #FFF;">
          <span>💻</span>
          <div class="about-verified-badge" title="Verified Web Development Team">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <h3 class="about-profile-name">Saurabh & Team</h3>
        <p class="about-profile-title">Web Developer & Specialized Dev Team</p>
        
        <div class="about-stats-grid">
          ${about.stats.map(s => `
            <div class="about-stat-item">
              <div class="about-stat-val">${s.value}</div>
              <div class="about-stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="about-trust-badges">
          ${about.trustHighlights.map(t => `
            <div class="about-trust-item">
              <span class="about-trust-icon">✓</span>
              <span>${t}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Philosophy & Guarantees Column -->
      <div class="about-content-col reveal">
        <div class="about-quote-box">
          <p class="about-quote-text">"${about.quote}"</p>
        </div>

        <div class="about-bio-card glass-card" style="padding: 28px; border-radius: var(--radius-md);">
          <h4 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-primary); font-family: var(--font-heading);">${about.headline}</h4>
          <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.75;">${about.bio}</p>
        </div>

        <div>
          <h4 style="font-size: 1.25rem; margin-bottom: 18px; color: var(--text-primary); font-family: var(--font-heading); display:flex; align-items:center; gap: 10px; flex-wrap: wrap;">
            <span>Core Working Guarantees</span>
            <span style="font-size: 0.8rem; padding: 3px 10px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); color: var(--accent-success); border: 1px solid rgba(16, 185, 129, 0.3); font-weight:600;">Client Peace of Mind</span>
          </h4>
          <div class="principles-grid">
            ${about.principles.map(p => `
              <div class="principle-card">
                <div class="principle-icon-wrapper">${p.icon}</div>
                <h5 class="principle-title">${p.title}</h5>
                <p class="principle-desc">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   NAVIGATION & SCROLL
-------------------------------------------------------------------------- */

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-toggle-btn');
  const modal = document.getElementById('nav-modal');
  const backdrop = document.getElementById('nav-modal-backdrop');
  const closeBtn = document.getElementById('nav-modal-close');
  const modalLinks = document.querySelectorAll('.nav-modal-link');

  // Sticky Navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy active link
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    modalLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Modal functions
  const openModal = () => {
    if (!modal) return;
    modal.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    if (menuBtn) {
      menuBtn.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    if (menuBtn) {
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (menuBtn && modal) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (modal.classList.contains('open')) {
        closeModal();
      } else {
        openModal();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeModal);
    }

    modalLinks.forEach(link => {
      link.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }
}

function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If it's a skill card or contains skill bars, animate width
        const bars = entry.target.querySelectorAll('.skill-bar-fill');
        bars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          if (level) bar.style.width = `${level}%`;
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
  
  // Also observe skill columns directly
  document.querySelectorAll('.skills-column').forEach(el => observer.observe(el));
}
