/**
 * Saurabh's Freelance Platform - Main Logic & Rendering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // 1. Render Technologies We Power (Marquee + Filter Grid)
  if (data.technologies) {
    renderTechnologies(data.technologies);
  }

  // 2. Render Services
  renderServices(data.services);

  // 3. Render Industries We Empower
  if (data.industries) {
    renderIndustries(data.industries);
  }

  // 4. Render Projects & Filter Logic
  renderProjects(data.projects);
  initProjectFilters(data.projects);

  // 5. Render Skills Matrix
  // renderSkills(data.skills);

  // 6. Render Work Process
  renderProcess(data.process);

  // 7. Render About & Working Philosophy
  renderAbout(data.about);

  // 9. Render Testimonials
  renderTestimonials(data.testimonials);

  // 10. Render FAQs
  renderFAQs(data.faqs);

  // 11. Dedicated Service Detail Page (if on service-detail.html)
  initServiceDetailPage();

  // 12. Navigation & Scroll Observers
  initNavigation();
  initScrollAnimations();
  
  // 13. Welcome Popup
  initWelcomePopup();
});

/* --------------------------------------------------------------------------
   RENDER FUNCTIONS
-------------------------------------------------------------------------- */

/* 1. TECHNOLOGIES WE POWER (3D Interactive Tech Sphere) */
function renderTechnologies(technologies) {
  const scene = document.getElementById('sphere-scene');
  const stage = document.getElementById('sphere-stage');
  if (!scene || !stage || !technologies || !technologies.length) return;

  scene.innerHTML = '';

  const isMobile = window.innerWidth <= 768;
  const radius = isMobile ? 180 : 250;

  const items = technologies.map((t, idx) => {
    const phi = Math.acos(-1 + (2 * idx) / technologies.length);
    const theta = Math.sqrt(technologies.length * Math.PI) * phi;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    const el = document.createElement('a');
    el.href = t.url || '#';
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.className = 'sphere-item';
    el.title = `${t.name} — ${t.tag || 'Official Website'}`;
    el.setAttribute('aria-label', `${t.name} (Opens official website in new tab)`);
    el.innerHTML = `
      <div class="sphere-item-icon">${t.icon}</div>
      <div class="sphere-item-label">${t.name}</div>
    `;
    scene.appendChild(el);

    return { el, x, y, z };
  });

  let rotX = 0, rotY = 0;
  let targetRotX = 0, targetRotY = 0;
  let isDragging = false;
  let lastMouseX = 0, lastMouseY = 0;

  stage.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    targetRotY += dx * 0.4;
    targetRotX -= dy * 0.4;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  // Touch drag support for mobile devices
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMouseX;
    const dy = e.touches[0].clientY - lastMouseY;
    targetRotY += dx * 0.4;
    targetRotX -= dy * 0.4;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  function animate() {
    if (!isDragging) {
      targetRotY += 0.35; // continuous smooth auto-rotation
    }

    // Smooth damping
    rotX += (targetRotX - rotX) * 0.08;
    rotY += (targetRotY - rotY) * 0.08;

    const radX = (rotX * Math.PI) / 180;
    const radY = (rotY * Math.PI) / 180;

    items.forEach(item => {
      // Rotate around Y
      const cosY = Math.cos(radY);
      const sinY = Math.sin(radY);
      const x1 = item.x * cosY - item.z * sinY;
      const z1 = item.z * cosY + item.x * sinY;

      // Rotate around X
      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);
      const y2 = item.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + item.y * sinX;

      // Scale and opacity by depth (z2)
      const scale = 0.72 + (z2 + radius) / (2 * radius) * 0.52;
      const opacity = 0.32 + (z2 + radius) / (2 * radius) * 0.68;
      const zIndex = Math.round(z2 + radius);

      item.el.style.transform = `translate3d(${x1}px, ${y2}px, ${z2}px) scale(${scale})`;
      item.el.style.opacity = opacity;
      item.el.style.zIndex = zIndex;
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* 2. INDUSTRIES WE EMPOWER (VARIATION 1B: DARK LUXURY EXPANDING ACCORDION) */
function renderIndustries(industries) {
  const container = document.getElementById('industries-container');
  if (!container) return;

  const validIndustries = (industries || []).filter(ind => ind && ind.title);
  if (!validIndustries.length) return;

  container.innerHTML = `
    <div class="luxury-accordion-stage" id="luxury-accordion">
      ${validIndustries.map((ind, idx) => `
        <div class="luxury-panel ${idx === 0 ? 'active' : ''}" data-industry="${ind.category || ind.id || 'all'}" style="--l-accent: ${ind.accentColor || '#FFFFFF'};">
          <div class="luxury-panel-bg" style="background-image: url('${ind.image || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop'}');"></div>
          <div class="luxury-collapsed-title">${ind.num || '0' + (idx + 1)} / ${ind.badge ? ind.badge.split('&')[0].trim().toUpperCase() : 'INDUSTRY'}</div>
          <div class="luxury-content">
            <span class="luxury-badge">${ind.badge || 'Enterprise'}</span>
            <h2 class="luxury-title">${ind.title || ''}</h2>
            <p class="luxury-desc">${ind.desc || ''}</p>
            <a href="contact.html?industry=${ind.id || ''}" class="luxury-cta">
              <span>Initiate Consultation</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // 1. Accordion Auto-Loop & Hover/Click Interaction
  const stage = container.querySelector('.luxury-accordion-stage');
  const panels = container.querySelectorAll('.luxury-panel');
  if (!panels.length) return;

  let currentActiveIndex = 0;
  let autoLoopTimer = null;
  let isUserPausing = false;
  let resumeTimer = null;

  function advanceLoop() {
    if (isUserPausing) return;
    currentActiveIndex = (currentActiveIndex + 1) % panels.length;
    panels.forEach((p, idx) => {
      p.classList.toggle('active', idx === currentActiveIndex);
    });
  }

  function startAutoLoop() {
    stopAutoLoop();
    autoLoopTimer = setInterval(advanceLoop, 3200); // Smooth 3.2s interval
  }

  function stopAutoLoop() {
    if (autoLoopTimer) {
      clearInterval(autoLoopTimer);
      autoLoopTimer = null;
    }
  }

  // Hover or Click on a panel activates it and pauses auto-loop
  panels.forEach((panel, idx) => {
    panel.addEventListener('mouseenter', () => {
      isUserPausing = true;
      stopAutoLoop();
      if (resumeTimer) clearTimeout(resumeTimer);
      currentActiveIndex = idx;
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });

    panel.addEventListener('click', () => {
      isUserPausing = true;
      stopAutoLoop();
      if (resumeTimer) clearTimeout(resumeTimer);
      currentActiveIndex = idx;
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });

  // When mouse leaves the accordion stage, resume loop after 4 seconds of idle time
  if (stage) {
    stage.addEventListener('mouseleave', () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        isUserPausing = false;
        startAutoLoop();
      }, 4000);
    });
  }

  // Start initial auto-loop
  startAutoLoop();
}

let currentOpenServiceId = null;

function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="glass-card service-card reveal" onclick="window.location.href='service-detail.html?id=${s.id}'" tabindex="0" role="button" aria-label="Explore ${s.title}">
      <div class="service-top">
        <div class="service-icon-wrap">
          ${s.icon}
        </div>
        <span class="service-badge ${s.badge === 'Popular' ? 'badge-tangerine' : (s.badge === 'Trending' ? 'badge-lime' : 'badge-plum')}">${s.badge}</span>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <div class="service-tags">
        ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>
      <a href="service-detail.html?id=${s.id}" class="service-card-action">
        <span>Explore Service Details</span>
        <span class="action-arrow">&rarr;</span>
      </a>
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
    <!-- Top Action Nav -->
    <div class="slide-top-nav">
      <button class="btn-back-to-services" onclick="window.closeServiceSlide()" aria-label="Back to all services">
        <span>&larr;</span>
        <span>BACK TO SERVICES</span>
      </button>

      <div class="slide-pager-nav">
        <span class="slide-pager-counter">Service ${currIdx + 1} of ${services.length}</span>
        <button class="slide-pager-btn" onclick="window.openServiceSlide('${prevService.id}')" title="Previous: ${prevService.title}" aria-label="Previous service">
          &larr; Prev
        </button>
        <button class="slide-pager-btn" onclick="window.openServiceSlide('${nextService.id}')" title="Next: ${nextService.title}" aria-label="Next service">
          Next &rarr;
        </button>
      </div>
    </div>

    <!-- Main Slide Card (Matching User Attachment) -->
    <div class="service-slide-card">
      <!-- Dark Hero Banner -->
      <div class="slide-header-banner">
        <h1 class="slide-header-title">${service.title}</h1>
        <p class="slide-header-subtitle">${service.subtitle || service.description}</p>
      </div>

      <!-- Theme-Matching Card Body -->
      <div class="slide-body-content">
        <!-- Overview Section -->
        <div class="slide-section-block">
          <h2 class="slide-section-title">Overview</h2>
          <p class="slide-overview-text">${service.overview}</p>
        </div>

        <!-- Key Capabilities Grid (Consolidating the 6 Core Offerings with Custom Icons) -->
        <div class="slide-section-block">
          <h3 class="slide-section-title" style="font-size: 1.25rem;">Key Capabilities & Solutions</h3>
          <div class="slide-solutions-grid">
            ${(service.capabilities || []).map(cap => `
              <div class="slide-solution-card">
                <div class="slide-solution-icon">
                  ${cap.icon}
                </div>
                <h4 class="slide-solution-title">${cap.title}</h4>
                <p class="slide-solution-desc">${cap.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2-Column Split: Deliverables & Specifications -->
        <div class="slide-columns-split">
          <!-- Left: Deliverables -->
          <div class="slide-deliverables-box">
            <h3 class="slide-box-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-primary);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>What You Receive (Deliverables)</span>
            </h3>
            <ul class="slide-items-list">
              ${service.deliverables.map(d => `
                <li class="slide-item-row">
                  <span class="slide-item-bullet">&bull;</span>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Right: Blueprint & Guarantees -->
          <div class="slide-spec-panel">
            <div>
              <div class="slide-spec-row">
                <span class="slide-spec-key">Typical Delivery:</span>
                <span class="slide-spec-val" style="color: var(--accent-secondary); font-family: var(--font-mono);">${service.timeline}</span>
              </div>
              <div class="slide-spec-row">
                <span class="slide-spec-key">Execution Team:</span>
                <span class="slide-spec-val">Saurabh (Lead) + Senior Devs</span>
              </div>
              <div class="slide-spec-row" style="border-bottom: none; padding-bottom: 0;">
                <span class="slide-spec-key">Core Technologies:</span>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:6px; margin: 8px 0 16px 0;">
                ${service.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
              </div>
            </div>

            <div>
              <span class="slide-spec-key" style="display:block; margin-bottom:8px;">Included Guarantees:</span>
              <ul class="slide-guarantees-sublist">
                ${service.includedGuarantees.map(g => `
                  <li class="slide-guarantee-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-success)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${g}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="slide-action-footer">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
            <span>Discuss on WhatsApp</span>
          </a>
          <a href="contact.html" class="btn btn-secondary btn-lg">
            <span>Book Discovery Call &rarr;</span>
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

// Dedicated Service Detail Page Engine
function initServiceDetailPage() {
  const detailContainer = document.getElementById('service-detail-container');
  if (!detailContainer) return;

  const data = window.PORTFOLIO_DATA;
  if (!data || !data.services) return;

  const urlParams = new URLSearchParams(window.location.search);
  let serviceId = urlParams.get('id') || 'software-web';

  const services = data.services;
  let currIdx = services.findIndex(s => s.id === serviceId);
  if (currIdx === -1) {
    currIdx = 0;
    serviceId = services[0].id;
  }

  const service = services[currIdx];
  const prevIdx = (currIdx - 1 + services.length) % services.length;
  const nextIdx = (currIdx + 1) % services.length;
  const prevService = services[prevIdx];
  const nextService = services[nextIdx];

  document.title = `${service.title} | Saurabh.dev`;

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hi Saurabh, I'm interested in discussing your "${service.title}" service for my project!`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${encodedWhatsAppMsg}`;

  detailContainer.innerHTML = `
    <!-- Top Action Nav -->
    <div class="slide-top-nav">
      <a href="services.html" class="btn-back-to-services" aria-label="Back to all services">
        <span>&larr;</span>
        <span>BACK TO SERVICES</span>
      </a>

      <div class="slide-pager-nav">
        <span class="slide-pager-counter">Service ${currIdx + 1} of ${services.length}</span>
        <a href="service-detail.html?id=${prevService.id}" class="slide-pager-btn" title="Previous: ${prevService.title}" aria-label="Previous service">
          &larr; Prev
        </a>
        <a href="service-detail.html?id=${nextService.id}" class="slide-pager-btn" title="Next: ${nextService.title}" aria-label="Next service">
          Next &rarr;
        </a>
      </div>
    </div>

    <!-- Main Slide Card (Matching User Attachment with Cyber/Obsidian Theme) -->
    <div class="service-slide-card">
      <!-- Dark Hero Banner -->
      <div class="slide-header-banner">
        <span class="slide-header-badge ${service.badge === 'Popular' ? 'badge-tangerine' : (service.badge === 'Trending' ? 'badge-lime' : 'badge-plum')}">${service.badge}</span>
        <h1 class="slide-header-title">${service.title}</h1>
        <p class="slide-header-subtitle">${service.subtitle || service.description}</p>
      </div>

      <!-- Theme-Matching Card Body -->
      <div class="slide-body-content">
        <!-- Overview Section -->
        <div class="slide-section-block">
          <h2 class="slide-section-title">Overview</h2>
          <p class="slide-overview-text">${service.overview}</p>
        </div>

        <!-- Key Capabilities Grid (Consolidating the 6 Core Offerings with Custom Icons) -->
        <div class="slide-section-block">
          <h3 class="slide-section-title" style="font-size: 1.25rem;">Key Capabilities & Solutions</h3>
          <div class="slide-solutions-grid">
            ${(service.capabilities || []).map(cap => `
              <div class="slide-solution-card">
                <div class="slide-solution-icon">
                  ${cap.icon}
                </div>
                <h4 class="slide-solution-title">${cap.title}</h4>
                <p class="slide-solution-desc">${cap.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2-Column Split: Deliverables & Specifications -->
        <div class="slide-columns-split">
          <!-- Left: Deliverables -->
          <div class="slide-deliverables-box">
            <h3 class="slide-box-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-primary);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>What You Receive (Deliverables)</span>
            </h3>
            <ul class="slide-items-list">
              ${service.deliverables.map(d => `
                <li class="slide-item-row">
                  <span class="slide-item-bullet">&bull;</span>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Right: Blueprint & Guarantees -->
          <div class="slide-spec-panel">
            <div>
              <div class="slide-spec-row">
                <span class="slide-spec-key">Typical Delivery:</span>
                <span class="slide-spec-val" style="color: var(--accent-secondary); font-family: var(--font-mono);">${service.timeline}</span>
              </div>
              <div class="slide-spec-row">
                <span class="slide-spec-key">Execution Team:</span>
                <span class="slide-spec-val">Saurabh (Lead) + Senior Devs</span>
              </div>
              <div class="slide-spec-row" style="border-bottom: none; padding-bottom: 0;">
                <span class="slide-spec-key">Core Technologies:</span>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:6px; margin: 8px 0 16px 0;">
                ${service.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
              </div>
            </div>

            <div>
              <span class="slide-spec-key" style="display:block; margin-bottom:8px;">Included Guarantees:</span>
              <ul class="slide-guarantees-sublist">
                ${service.includedGuarantees.map(g => `
                  <li class="slide-guarantee-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-success)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${g}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="slide-action-footer">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
            <span>Discuss on WhatsApp</span>
          </a>
          <a href="contact.html" class="btn btn-secondary btn-lg">
            <span>Book Discovery Call &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

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
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link[href^="#"]');
  const dropdownToggle = document.getElementById('features-dropdown-btn');
  const dropdownWrapper = document.getElementById('features-dropdown');
  const dropdownLinks = document.querySelectorAll('.dropdown-item');

  const currentPath = window.location.pathname.toLowerCase();
  const isHomePage = currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '';

  // Highlight active link based on current page
  const highlightPageLink = () => {
    const allNavLinks = [...desktopLinks, ...modalLinks];
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const cleanHref = href.toLowerCase();

      if (!isHomePage) {
        if (
          (currentPath.includes('services') && cleanHref.includes('services')) ||
          (currentPath.includes('portfolio') && cleanHref.includes('portfolio')) ||
          (currentPath.includes('industries') && cleanHref.includes('industries')) ||
          (currentPath.includes('about') && cleanHref.includes('about')) ||
          (currentPath.includes('contact') && cleanHref.includes('contact'))
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  highlightPageLink();

  // Sticky Navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (isHomePage) {
      // Scrollspy active link on home page
      let current = '';
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      desktopLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'projects' && href === '#projects')) {
          link.classList.add('active');
        }
      });

      modalLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'projects' && href === '#projects')) {
          link.classList.add('active');
        }
      });
    }
  });

  // Dropdown toggle on click & outside click
  if (dropdownToggle && dropdownWrapper) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownWrapper.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    dropdownLinks.forEach(item => {
      item.addEventListener('click', () => {
        dropdownWrapper.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

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

    modal.querySelectorAll('a').forEach(link => {
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

/* --------------------------------------------------------------------------
   13. WELCOME POPUP
-------------------------------------------------------------------------- */
function initWelcomePopup() {
  const welcomeModal = document.getElementById('welcome-modal');
  const closeBtn = document.getElementById('welcome-modal-close');
  
  if (!welcomeModal || !closeBtn) return;
  
  // Show popup after 1.5 seconds if not already shown in this session
  if (!sessionStorage.getItem('welcomePopupShown')) {
    setTimeout(() => {
      welcomeModal.classList.add('active');
      sessionStorage.setItem('welcomePopupShown', 'true');
    }, 1500);
  }
  
  const closeModal = () => welcomeModal.classList.remove('active');
  
  closeBtn.addEventListener('click', closeModal);
  
  welcomeModal.addEventListener('click', (e) => {
    if (e.target === welcomeModal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && welcomeModal.classList.contains('active')) {
      closeModal();
    }
  });
}
