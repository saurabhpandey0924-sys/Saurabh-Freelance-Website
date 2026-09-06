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

  // 6. Render Testimonials
  renderTestimonials(data.testimonials);

  // 7. Render FAQs
  renderFAQs(data.faqs);

  // 8. Navigation & Scroll Observers
  initNavigation();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   RENDER FUNCTIONS
-------------------------------------------------------------------------- */

function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="glass-card service-card reveal">
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
    </div>
  `).join('');
}

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

/* --------------------------------------------------------------------------
   NAVIGATION & SCROLL
-------------------------------------------------------------------------- */

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

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

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileBtn.innerHTML = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (mobileBtn) mobileBtn.innerHTML = '☰';
      });
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
