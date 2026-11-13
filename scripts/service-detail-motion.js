/**
 * QUBITHRS SERVICE SPECIFICATION ENGINE (MOTION SCROLLYTELLING)
 * 5-Act Motion Scrollytelling Architecture with GSAP ScrollTrigger & Lenis Physics
 * Strictly zero cartoon emojis, zero false statements, pure obsidian dark aesthetics.
 */

(function () {
  'use strict';

  let lenisInstance = null;
  let activeServiceId = null;

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotionSpecification);
  } else {
    initMotionSpecification();
  }

  function initMotionSpecification() {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const data = window.PORTFOLIO_DATA;
    if (!data || !data.services || !data.services.length) return;

    // Initialize Lenis Smooth Scroll if available
    initLenis();

    // Determine initial service
    const urlParams = new URLSearchParams(window.location.search);
    const initialId = urlParams.get('id') || 'software-web';
    
    renderServiceMotion(initialId, false);

    // Support browser Back/Forward navigation
    window.addEventListener('popstate', () => {
      const params = new URLSearchParams(window.location.search);
      const navId = params.get('id') || 'software-web';
      renderServiceMotion(navId, false);
    });
  }

  function initLenis() {
    if (typeof window.Lenis !== 'undefined' && !lenisInstance) {
      try {
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          smoothTouch: false
        });

        if (window.gsap && window.ScrollTrigger) {
          lenisInstance.on('scroll', ScrollTrigger.update);
          gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        } else {
          const raf = (time) => {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
        }
      } catch (err) {
        console.warn('Lenis initialization notice:', err);
      }
    }
  }

  function renderServiceMotion(serviceId, pushState = true) {
    const container = document.getElementById('service-detail-container');
    if (!container) return;

    const services = window.PORTFOLIO_DATA.services;
    let currIdx = services.findIndex(s => s.id === serviceId);
    if (currIdx === -1) {
      currIdx = 0;
      serviceId = services[0].id;
    }

    activeServiceId = serviceId;
    const s = services[currIdx];
    const prevIdx = (currIdx - 1 + services.length) % services.length;
    const nextIdx = (currIdx + 1) % services.length;
    const prevService = services[prevIdx];
    const nextService = services[nextIdx];

    // Push URL state if requested
    if (pushState && window.location.search !== `?id=${serviceId}`) {
      window.history.pushState({ id: serviceId }, '', `service-detail.html?id=${serviceId}`);
    }

    // Set page title
    document.title = `${s.title} | QUBITHRS Technology Solutions`;

    // Kill any existing GSAP ScrollTriggers before re-mounting
    if (window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }

    // Number formats
    const divNum = (currIdx + 1).toString().padStart(2, '0');
    const totalDivs = services.length.toString().padStart(2, '0');

    // Build the complete 5-Act Motion Scrollytelling markup
    container.innerHTML = `
      <!-- ==========================================================================
           ACT 1 TOP: FLOATING SPECIFICATION DOCK & INSTANT SWITCHER
           ========================================================================== -->
      <div class="spec-dock-nav" id="spec-dock-nav">
        <div class="spec-dock-inner">
          <a href="index.html" class="btn-dock-back" aria-label="Return to showcase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            <span>BACK TO SHOWCASE</span>
          </a>

          <div class="dock-pills-container" role="tablist" aria-label="Engineering Divisions">
            ${services.map((srv, idx) => {
              const numStr = (idx + 1).toString().padStart(2, '0');
              const shortName = srv.title.split('&')[0].trim().split(' ')[0];
              const isActive = srv.id === serviceId;
              return `
                <button type="button" class="dock-pill-btn ${isActive ? 'active' : ''}" data-service-id="${srv.id}" role="tab" aria-selected="${isActive}">
                  <span class="dock-pill-num">${numStr}</span>
                  <span>${shortName}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="dock-pager-controls">
            <span class="dock-pager-indicator">${divNum} / ${totalDivs}</span>
            <button type="button" class="dock-pager-btn" data-service-id="${prevService.id}" title="Previous: ${prevService.title}" aria-label="Previous division">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" class="dock-pager-btn" data-service-id="${nextService.id}" title="Next: ${nextService.title}" aria-label="Next division">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ==========================================================================
           ACT 1: KINETIC HERO STAGE
           ========================================================================== -->
      <section class="spec-hero-stage" id="spec-hero-stage">
        <div class="spec-hero-card">
          <div class="spec-watermark" aria-hidden="true">${divNum}</div>

          <div class="spec-hero-inner">
            <div class="spec-kicker-row">
              <span class="spec-division-pill">
                <span class="spec-kicker-dot"></span>
                <span>DIVISION ${divNum} // ARCHITECTURAL SPECIFICATION</span>
              </span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: rgba(255, 255, 255, 0.45); text-transform: uppercase;">
                ${s.timeline} Typical Sprint
              </span>
            </div>

            <h1 class="spec-hero-title">${s.title}</h1>
            <p class="spec-hero-subtitle">${s.subtitle || s.description}</p>

            <!-- Frameless Cinematic Video Viewport with 3D Mouse Parallax -->
            <div class="spec-video-viewport" id="spec-video-viewport">
              <video class="spec-video-el" autoplay muted loop playsinline poster="assets/images/project-saas.jpg">
                <source src="${s.video || 'assets/videos/division-01-web-dev.mp4'}" type="video/mp4">
              </video>
              <div class="spec-video-overlay">
                <span class="spec-video-overlay-dot"></span>
                <span>LIVE SPECIFICATION // 100% IP HANDOVER</span>
              </div>
            </div>

            <!-- 3 Verified Telemetry Metrics -->
            <div class="spec-metrics-grid">
              <div class="spec-metric-card">
                <div class="spec-metric-val">95<span>+</span></div>
                <div class="spec-metric-lbl">Core Web Vitals & Google Lighthouse Optimization</div>
              </div>
              <div class="spec-metric-card">
                <div class="spec-metric-val">&lt;500<span>ms</span></div>
                <div class="spec-metric-lbl">Global Edge Response & Database Query Latency</div>
              </div>
              <div class="spec-metric-card">
                <div class="spec-metric-val">100<span>%</span></div>
                <div class="spec-metric-lbl">Full Intellectual Property & Source Code Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           ACT 2: PINNED HORIZONTAL SCROLLER (APPLE-GRADE CAPABILITY TRACK)
           ========================================================================== -->
      <section class="spec-pinned-wrapper" id="spec-pinned-wrapper">
        <div class="spec-pinned-header">
          <div>
            <div class="spec-pinned-kicker">FOUNDATIONAL ARCHITECTURE MODULES</div>
            <h2 class="spec-pinned-title">Core Capabilities &amp; Solutions</h2>
          </div>
          <div class="spec-pinned-controls">
            <button type="button" class="spec-pinned-arrow" id="cap-scroll-left" aria-label="Scroll capabilities left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" class="spec-pinned-arrow" id="cap-scroll-right" aria-label="Scroll capabilities right">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div class="spec-horizontal-track-container" id="spec-track-container">
          <div class="spec-horizontal-track" id="spec-horizontal-track">
            ${(s.capabilities || []).map((cap, cIdx) => {
              const capNum = `${divNum}.${(cIdx + 1).toString().padStart(2, '0')}`;
              const badges = ['PRODUCTION READY', 'ZERO DOWNTIME', 'SCALABLE ARCHITECTURE', 'AUDIT VERIFIED', 'FAILSAFE REDUNDANCY', 'ENTERPRISE TESTED'];
              const badge = badges[cIdx % badges.length];
              return `
                <div class="spec-cap-card">
                  <div class="spec-cap-top">
                    <div class="spec-cap-header-row">
                      <span class="spec-cap-idx">${capNum}</span>
                      <div class="spec-cap-icon-box">
                        ${cap.icon}
                      </div>
                    </div>
                    <h3 class="spec-cap-title">${cap.title}</h3>
                    <p class="spec-cap-desc">${cap.desc}</p>
                  </div>
                  <div class="spec-cap-footer">
                    <span class="spec-cap-badge">${badge}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="spec-progress-bar-wrap">
          <div class="spec-progress-track">
            <div class="spec-progress-fill" id="spec-progress-fill"></div>
          </div>
          <span class="spec-scroll-hint">[ SCROLL OR DRAG TO EXPLORE ]</span>
        </div>
      </section>

      <!-- ==========================================================================
           ACT 3: SCOPE OF DELIVERABLES & ARCHITECTURAL MATRIX (2-COLUMN SPLIT)
           ========================================================================== -->
      <section class="spec-matrix-section">
        <div class="spec-matrix-grid">
          <!-- Left: Scope of Deliverables Checklist -->
          <div class="spec-card-panel">
            <h2 class="spec-panel-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Scope of Deliverables Checklist</span>
            </h2>
            <p class="spec-panel-subtitle">Interactive checklist of verified engineering deliverables produced during the sprint cycle.</p>

            <ul class="spec-deliverables-list">
              ${(s.deliverables || []).map((d, dIdx) => `
                <li class="spec-deliv-item" data-index="${dIdx}">
                  <span class="spec-check-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span class="spec-deliv-text">${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Right: Architecture Dossier & Blueprint -->
          <div class="spec-card-panel">
            <h2 class="spec-panel-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>Architecture Blueprint</span>
            </h2>
            <p class="spec-panel-subtitle">Contractual parameters, execution team, and foundational technology stack.</p>

            <div class="spec-blueprint-rows">
              <div class="spec-bp-row">
                <span class="spec-bp-label">Delivery Cadence</span>
                <span class="spec-bp-val highlight">${s.timeline} Typical Sprint</span>
              </div>
              <div class="spec-bp-row">
                <span class="spec-bp-label">Execution Team</span>
                <span class="spec-bp-val">Dedicated QUBITHRS Developers</span>
              </div>
              <div class="spec-bp-row">
                <span class="spec-bp-label">Intellectual Property</span>
                <span class="spec-bp-val">100% Proprietary IP Handover</span>
              </div>
              <div class="spec-bp-row" style="border-bottom: none; padding-bottom: 0;">
                <span class="spec-bp-label">Core Production Technologies</span>
                <div class="spec-tech-pills">
                  ${(s.tags || []).map(t => `<span class="spec-tech-tag">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           ACT 4: SCROLL-DRIVEN MILESTONE ROADMAP
           ========================================================================== -->
      <section class="spec-roadmap-section" id="spec-roadmap-section">
        <div class="spec-roadmap-header">
          <div class="spec-pinned-kicker">EXECUTION CADENCE</div>
          <h2 class="spec-pinned-title">Delivery Milestones &amp; Roadmap</h2>
        </div>

        <div class="spec-timeline-container">
          <div class="spec-timeline-laser-line">
            <div class="spec-timeline-laser-fill" id="spec-timeline-laser-fill"></div>
          </div>

          <div class="spec-phases-wrapper">
            ${(s.milestones || []).map((m, mIdx) => `
              <div class="spec-phase-card" data-phase-index="${mIdx}">
                <div class="spec-phase-dot"></div>
                <div class="spec-phase-header">
                  <span class="spec-phase-pill">${m.phase}</span>
                  <h3 class="spec-phase-title">${m.title}</h3>
                </div>
                <p class="spec-phase-desc">${m.desc || m.deliverables || ''}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           ACT 5: VERIFIED INSTITUTIONAL GUARANTEES & MAGNETIC CTA DOCK
           ========================================================================== -->
      <section class="spec-guarantees-section">
        <div style="margin-bottom: 36px;">
          <div class="spec-pinned-kicker">INSTITUTIONAL COMMITMENTS</div>
          <h2 class="spec-pinned-title">Verified Project Guarantees</h2>
        </div>

        <div class="spec-guarantees-grid">
          ${(s.includedGuarantees || []).map((g) => `
            <div class="spec-guarantee-card">
              <div class="spec-guarantee-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p class="spec-guarantee-text">${g}</p>
            </div>
          `).join('')}
        </div>

        <!-- Magnetic Action Dock -->
        <div class="spec-action-dock">
          <div class="spec-dock-left">
            <h3 class="spec-dock-title">Ready to Kick Off Your Project Sprint?</h3>
            <p class="spec-dock-desc">
              Book a complimentary 20-minute architecture discovery call. We'll evaluate your technical requirements, analyze feasibility, and deliver an actionable execution roadmap.
            </p>
          </div>
          <div class="spec-dock-buttons">
            <a href="contact.html?service=${s.id}" class="btn-motion-primary">
              <span>Inquire About This Service</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="contact.html" class="btn-motion-secondary">
              <span>Schedule Discovery Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </section>
    `;

    // Wire Up Interactive Events
    bindInteractiveEvents(currIdx, services);

    // Scroll to top cleanly
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function bindInteractiveEvents(currIdx, services) {
    // 1. Division Pill Switching
    const pillButtons = document.querySelectorAll('.dock-pill-btn, .dock-pager-btn');
    pillButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextId = btn.getAttribute('data-service-id');
        if (nextId && nextId !== activeServiceId) {
          renderServiceMotion(nextId, true);
        }
      });
    });

    // 2. 3D Mouse Parallax on Frameless Video Viewport
    const videoViewport = document.getElementById('spec-video-viewport');
    if (videoViewport) {
      videoViewport.addEventListener('mousemove', (e) => {
        const rect = videoViewport.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = (y / (rect.height / 2)) * -5;
        const rotY = (x / (rect.width / 2)) * 5;
        videoViewport.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      });
      videoViewport.addEventListener('mouseleave', () => {
        videoViewport.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }

    // 3. GSAP ScrollTrigger Pinned Horizontal Scroller
    const track = document.getElementById('spec-horizontal-track');
    const container = document.getElementById('spec-pinned-wrapper');
    const progressFill = document.getElementById('spec-progress-fill');
    const trackContainer = document.getElementById('spec-track-container');

    // Manual navigation buttons for horizontal track
    const btnLeft = document.getElementById('cap-scroll-left');
    const btnRight = document.getElementById('cap-scroll-right');

    if (btnLeft && trackContainer) {
      btnLeft.addEventListener('click', () => {
        trackContainer.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }
    if (btnRight && trackContainer) {
      btnRight.addEventListener('click', () => {
        trackContainer.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }

    // If GSAP and ScrollTrigger are available, set up Apple-grade pin scrub
    if (window.gsap && window.ScrollTrigger && track && container && window.innerWidth > 960) {
      try {
        const getScrollDistance = () => track.scrollWidth - window.innerWidth + 120;
        
        const horizontalTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none'
        });

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          animation: horizontalTween,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressFill) {
              progressFill.style.width = `${(self.progress * 100).toFixed(1)}%`;
            }
          }
        });

        // Milestone vertical line scrub
        const milestoneSection = document.getElementById('spec-roadmap-section');
        const laserFill = document.getElementById('spec-timeline-laser-fill');
        if (milestoneSection && laserFill) {
          ScrollTrigger.create({
            trigger: milestoneSection,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
            onUpdate: (self) => {
              laserFill.style.height = `${(self.progress * 100).toFixed(1)}%`;
            }
          });
        }
      } catch (err) {
        console.warn('GSAP ScrollTrigger setup notice:', err);
      }
    } else if (trackContainer) {
      // Fallback smooth native track scroll listener
      trackContainer.addEventListener('scroll', () => {
        const maxScroll = trackContainer.scrollWidth - trackContainer.clientWidth;
        if (maxScroll > 0 && progressFill) {
          const pct = (trackContainer.scrollLeft / maxScroll) * 100;
          progressFill.style.width = `${pct.toFixed(1)}%`;
        }
      });
    }

    // 4. Capability Cards Dynamic Specular Light
    const cards = document.querySelectorAll('.spec-cap-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 240, 255, 0.12) 0%, rgba(16, 18, 27, 0.85) 65%)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.background = '';
      });
    });

    // 5. Interactive Deliverables Checklist
    const delivItems = document.querySelectorAll('.spec-deliv-item');
    delivItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
      });
    });
  }

  // Export globally if needed
  window.initServiceDetailMotion = initMotionSpecification;
  window.renderServiceMotion = renderServiceMotion;
})();
