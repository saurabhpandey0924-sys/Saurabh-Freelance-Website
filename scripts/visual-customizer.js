/**
 * QUBITHRS TECHNOLOGY SOLUTIONS — VISUAL DESIGN & TYPOGRAPHY CUSTOMIZER
 * Allows live in-browser manual adjustment of font sizes, letter spacing,
 * and button dimensions with real-time preview, persistence, CSS export,
 * and a fully draggable/movable trigger pill (left-to-right / anywhere on screen).
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'qh_visual_customizer_v1';
  const DRAG_STORAGE_KEY = 'qh_visual_customizer_trigger_pos';

  // Default values matching original design system
  const DEFAULTS = {
    slideTitleSize: 48,       // px (clamp fallback avg)
    slideTitleLineHeight: 1.08,
    slideSubtitleSize: 17,    // px
    slideSubtitleLineHeight: 1.6,
    slideKickerSize: 13,      // px
    heroTitleSize: 52,        // px
    bodyFontSize: 16,         // px
    letterSpacingHeading: -0.8, // px

    btnFontSize: 14,          // px
    btnPaddingY: 14,          // px
    btnPaddingX: 34,          // px
    btnRadius: 4,             // px
    btnLetterSpacing: 1.2,    // px
    btnScale: 1.0,            // multiplier
    btnTextTransform: 'uppercase'
  };

  const PRESETS = {
    default: { ...DEFAULTS },
    compact: {
      slideTitleSize: 38,
      slideTitleLineHeight: 1.1,
      slideSubtitleSize: 15,
      slideSubtitleLineHeight: 1.5,
      slideKickerSize: 11,
      heroTitleSize: 42,
      bodyFontSize: 14,
      letterSpacingHeading: -0.5,
      btnFontSize: 12,
      btnPaddingY: 10,
      btnPaddingX: 24,
      btnRadius: 4,
      btnLetterSpacing: 1.0,
      btnScale: 0.95,
      btnTextTransform: 'uppercase'
    },
    boldImpact: {
      slideTitleSize: 58,
      slideTitleLineHeight: 1.05,
      slideSubtitleSize: 19,
      slideSubtitleLineHeight: 1.6,
      slideKickerSize: 14,
      heroTitleSize: 62,
      bodyFontSize: 17,
      letterSpacingHeading: -1.2,
      btnFontSize: 16,
      btnPaddingY: 18,
      btnPaddingX: 42,
      btnRadius: 6,
      btnLetterSpacing: 1.5,
      btnScale: 1.08,
      btnTextTransform: 'uppercase'
    },
    pillModern: {
      slideTitleSize: 46,
      slideTitleLineHeight: 1.08,
      slideSubtitleSize: 16,
      slideSubtitleLineHeight: 1.6,
      slideKickerSize: 12,
      heroTitleSize: 50,
      bodyFontSize: 15,
      letterSpacingHeading: -0.5,
      btnFontSize: 14,
      btnPaddingY: 14,
      btnPaddingX: 36,
      btnRadius: 30, // Full Pill
      btnLetterSpacing: 1.2,
      btnScale: 1.0,
      btnTextTransform: 'uppercase'
    }
  };

  let state = loadSavedState();

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULTS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Customizer: Could not read localStorage', e);
    }
    return { ...DEFAULTS };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Customizer: Could not save to localStorage', e);
    }
  }

  // Create or update live stylesheet
  let styleEl = document.getElementById('qh-live-customizer-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'qh-live-customizer-style';
    document.head.appendChild(styleEl);
  }

  function generateCSS() {
    return `
/* ==========================================================================
   QUBITHRS LIVE DESIGN CUSTOMIZER — OVERRIDE STYLES
   ========================================================================== */

/* Slide Titles (Divisions 01 to 06) */
.qh-slide-title {
  font-size: ${state.slideTitleSize}px !important;
  line-height: ${state.slideTitleLineHeight} !important;
  letter-spacing: ${state.letterSpacingHeading}px !important;
}

/* Slide Subtitles */
.qh-slide-subtitle {
  font-size: ${state.slideSubtitleSize}px !important;
  line-height: ${state.slideSubtitleLineHeight} !important;
}

/* Slide Kickers */
.qh-slide-kicker {
  font-size: ${state.slideKickerSize}px !important;
}

/* Hero Section Title */
.hero-title,
.qh-closing-title,
h1.qh-slide-title {
  font-size: ${state.heroTitleSize}px !important;
}

/* General Body / Subtext */
.qh-slide-subtitle,
.footer-bio,
p.lead {
  font-size: ${state.bodyFontSize}px !important;
}

/* Button Sizing & Architecture (All Division & Primary Buttons) */
.qh-btn,
.qh-btn-solid,
.btn-hero-primary,
.nav-cta-btn,
.service-card-cta {
  font-size: ${state.btnFontSize}px !important;
  padding: ${state.btnPaddingY}px ${state.btnPaddingX}px !important;
  border-radius: ${state.btnRadius}px !important;
  letter-spacing: ${state.btnLetterSpacing}px !important;
  text-transform: ${state.btnTextTransform} !important;
  transform-origin: left center;
  ${state.btnScale !== 1.0 ? `zoom: ${state.btnScale};` : ''}
}
    `.trim();
  }

  function applyStyles() {
    styleEl.textContent = generateCSS();
    saveState();
  }

  // Initial apply of saved styles
  applyStyles();

  // Inject UI once DOM is ready
  function initUI() {
    if (document.getElementById('qh-customizer-root')) return;

    // Trigger Pill Button (Draggable Left-to-Right & Anywhere)
    const triggerBtn = document.createElement('button');
    triggerBtn.id = 'qh-customizer-trigger';
    triggerBtn.setAttribute('aria-label', 'Open Design Customizer');
    triggerBtn.title = 'Drag left/right to move • Click to adjust fonts & buttons (Alt + T)';
    triggerBtn.innerHTML = `
      <div class="qh-cust-grip" title="Drag to move anywhere">
        <span></span><span></span>
      </div>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
      <span>Tweak Design</span>
    `;

    // Customizer Modal Drawer
    const panel = document.createElement('div');
    panel.id = 'qh-customizer-panel';
    panel.innerHTML = `
      <div class="qh-cust-header">
        <div class="qh-cust-brand">
          <div class="qh-cust-badge">LIVE STUDIO</div>
          <h3 class="qh-cust-title">Design Customizer</h3>
          <p class="qh-cust-sub">Real-time font & button adjuster</p>
        </div>
        <div class="qh-cust-header-actions">
          <button id="qh-cust-reset-top" title="Reset to Defaults" class="qh-cust-icon-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
          </button>
          <button id="qh-cust-close" title="Close Studio" class="qh-cust-icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Quick Preset Selector -->
      <div class="qh-cust-presets">
        <div class="qh-cust-label">Quick Presets:</div>
        <div class="qh-cust-preset-grid">
          <button class="qh-preset-btn active" data-preset="default">Default</button>
          <button class="qh-preset-btn" data-preset="compact">Compact</button>
          <button class="qh-preset-btn" data-preset="boldImpact">Bold Impact</button>
          <button class="qh-preset-btn" data-preset="pillModern">Pill Rounded</button>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="qh-cust-tabs">
        <button class="qh-cust-tab active" data-tab="tab-fonts">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          Typography
        </button>
        <button class="qh-cust-tab" data-tab="tab-buttons">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="4"/></svg>
          Buttons
        </button>
      </div>

      <!-- Tab Content: Typography -->
      <div id="tab-fonts" class="qh-cust-tab-pane active">
        <!-- Slide Titles -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Division Titles (H2)</span>
            <span class="qh-control-val" id="val-slideTitleSize">${state.slideTitleSize}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="slideTitleSize" data-delta="-2">-</button>
            <input type="range" id="input-slideTitleSize" min="26" max="76" step="1" value="${state.slideTitleSize}">
            <button class="qh-step-btn" data-step="slideTitleSize" data-delta="2">+</button>
          </div>
        </div>

        <!-- Slide Subtitles -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Slide Subtitles</span>
            <span class="qh-control-val" id="val-slideSubtitleSize">${state.slideSubtitleSize}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="slideSubtitleSize" data-delta="-1">-</button>
            <input type="range" id="input-slideSubtitleSize" min="13" max="26" step="1" value="${state.slideSubtitleSize}">
            <button class="qh-step-btn" data-step="slideSubtitleSize" data-delta="1">+</button>
          </div>
        </div>

        <!-- Slide Kickers -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Section Kickers (Overline)</span>
            <span class="qh-control-val" id="val-slideKickerSize">${state.slideKickerSize}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="slideKickerSize" data-delta="-1">-</button>
            <input type="range" id="input-slideKickerSize" min="10" max="18" step="1" value="${state.slideKickerSize}">
            <button class="qh-step-btn" data-step="slideKickerSize" data-delta="1">+</button>
          </div>
        </div>

        <!-- Hero Title -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Hero / Main Headings</span>
            <span class="qh-control-val" id="val-heroTitleSize">${state.heroTitleSize}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="heroTitleSize" data-delta="-2">-</button>
            <input type="range" id="input-heroTitleSize" min="30" max="80" step="1" value="${state.heroTitleSize}">
            <button class="qh-step-btn" data-step="heroTitleSize" data-delta="2">+</button>
          </div>
        </div>

        <!-- Letter Spacing -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Title Letter Spacing</span>
            <span class="qh-control-val" id="val-letterSpacingHeading">${state.letterSpacingHeading}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="letterSpacingHeading" data-delta="-0.2">-</button>
            <input type="range" id="input-letterSpacingHeading" min="-2.5" max="3.0" step="0.1" value="${state.letterSpacingHeading}">
            <button class="qh-step-btn" data-step="letterSpacingHeading" data-delta="0.2">+</button>
          </div>
        </div>
      </div>

      <!-- Tab Content: Buttons -->
      <div id="tab-buttons" class="qh-cust-tab-pane">
        <!-- Button Font Size -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Button Font Size</span>
            <span class="qh-control-val" id="val-btnFontSize">${state.btnFontSize}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="btnFontSize" data-delta="-1">-</button>
            <input type="range" id="input-btnFontSize" min="11" max="22" step="1" value="${state.btnFontSize}">
            <button class="qh-step-btn" data-step="btnFontSize" data-delta="1">+</button>
          </div>
        </div>

        <!-- Button Padding Horizontal -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Button Width Padding (X)</span>
            <span class="qh-control-val" id="val-btnPaddingX">${state.btnPaddingX}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="btnPaddingX" data-delta="-2">-</button>
            <input type="range" id="input-btnPaddingX" min="16" max="64" step="1" value="${state.btnPaddingX}">
            <button class="qh-step-btn" data-step="btnPaddingX" data-delta="2">+</button>
          </div>
        </div>

        <!-- Button Padding Vertical -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Button Height Padding (Y)</span>
            <span class="qh-control-val" id="val-btnPaddingY">${state.btnPaddingY}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="btnPaddingY" data-delta="-1">-</button>
            <input type="range" id="input-btnPaddingY" min="8" max="26" step="1" value="${state.btnPaddingY}">
            <button class="qh-step-btn" data-step="btnPaddingY" data-delta="1">+</button>
          </div>
        </div>

        <!-- Button Radius (Corners) -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Corner Radius (Roundedness)</span>
            <span class="qh-control-val" id="val-btnRadius">${state.btnRadius}px</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="btnRadius" data-delta="-2">-</button>
            <input type="range" id="input-btnRadius" min="0" max="36" step="1" value="${state.btnRadius}">
            <button class="qh-step-btn" data-step="btnRadius" data-delta="2">+</button>
          </div>
        </div>

        <!-- Button Scale Zoom -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Overall Button Scale</span>
            <span class="qh-control-val" id="val-btnScale">${state.btnScale}x</span>
          </div>
          <div class="qh-slider-wrap">
            <button class="qh-step-btn" data-step="btnScale" data-delta="-0.05">-</button>
            <input type="range" id="input-btnScale" min="0.80" max="1.35" step="0.05" value="${state.btnScale}">
            <button class="qh-step-btn" data-step="btnScale" data-delta="0.05">+</button>
          </div>
        </div>

        <!-- Text Transform Toggle -->
        <div class="qh-control-group">
          <div class="qh-control-header">
            <span class="qh-control-title">Button Text Case</span>
          </div>
          <div class="qh-toggle-row">
            <button class="qh-toggle-btn ${state.btnTextTransform === 'uppercase' ? 'active' : ''}" data-case="uppercase">UPPERCASE</button>
            <button class="qh-toggle-btn ${state.btnTextTransform === 'none' ? 'active' : ''}" data-case="none">Capitalize / Normal</button>
          </div>
        </div>
      </div>

      <!-- Bottom Action Bar -->
      <div class="qh-cust-footer">
        <button id="qh-cust-copy" class="qh-cust-btn qh-cust-btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Copy Clean CSS</span>
        </button>
        <button id="qh-cust-reset" class="qh-cust-btn qh-cust-btn-secondary">
          <span>Reset All</span>
        </button>
      </div>

      <div id="qh-cust-toast" class="qh-cust-toast"></div>
    `;

    // Root wrapper
    const root = document.createElement('div');
    root.id = 'qh-customizer-root';
    root.appendChild(triggerBtn);
    root.appendChild(panel);
    document.body.appendChild(root);

    // =========================================================================
    // DRAGGABLE / MOVABLE TRIGGER LOGIC (LEFT-TO-RIGHT & FULL VIEWPORT)
    // =========================================================================
    let isDragging = false;
    let hasMoved = false;
    let justDragged = false;
    let startX = 0, startY = 0;
    let initialLeft = 24, initialTop = window.innerHeight - 80;

    // Smart Panel Positioning relative to current trigger button coordinates
    function positionPanel() {
      const btnRect = triggerBtn.getBoundingClientRect();
      const panelWidth = Math.min(370, window.innerWidth - 24);
      const margin = 12;

      // Horizontal: align to button, ensuring panel stays fully inside viewport
      let targetLeft = btnRect.left;
      if (btnRect.left > window.innerWidth / 2) {
        // Button is on right side -> align right edge of panel to right edge of button
        targetLeft = btnRect.right - panelWidth;
      }
      // Clamp inside screen
      targetLeft = Math.max(margin, Math.min(window.innerWidth - panelWidth - margin, targetLeft));
      panel.style.left = `${Math.round(targetLeft)}px`;
      panel.style.right = 'auto';

      // Vertical: if in lower half, position above button; if in upper half, position below button
      if (btnRect.top > window.innerHeight / 2) {
        const targetBottom = window.innerHeight - btnRect.top + 10;
        panel.style.bottom = `${Math.round(targetBottom)}px`;
        panel.style.top = 'auto';
      } else {
        const targetTop = btnRect.bottom + 10;
        panel.style.top = `${Math.round(targetTop)}px`;
        panel.style.bottom = 'auto';
      }
    }

    function clampTriggerPosition() {
      const rect = triggerBtn.getBoundingClientRect();
      const maxLeft = Math.max(10, window.innerWidth - triggerBtn.offsetWidth - 10);
      const maxTop = Math.max(10, window.innerHeight - triggerBtn.offsetHeight - 10);
      const clampedLeft = Math.min(Math.max(10, rect.left), maxLeft);
      const clampedTop = Math.min(Math.max(10, rect.top), maxTop);

      triggerBtn.style.left = `${Math.round(clampedLeft)}px`;
      triggerBtn.style.top = `${Math.round(clampedTop)}px`;
      triggerBtn.style.bottom = 'auto';
      triggerBtn.style.right = 'auto';
    }

    function restoreTriggerPosition() {
      try {
        const saved = localStorage.getItem(DRAG_STORAGE_KEY);
        if (saved) {
          const { left, top } = JSON.parse(saved);
          const maxLeft = Math.max(10, window.innerWidth - 180);
          const maxTop = Math.max(10, window.innerHeight - 60);
          const clampedLeft = Math.min(Math.max(10, left), maxLeft);
          const clampedTop = Math.min(Math.max(10, top), maxTop);

          triggerBtn.style.left = `${clampedLeft}px`;
          triggerBtn.style.top = `${clampedTop}px`;
          triggerBtn.style.bottom = 'auto';
          triggerBtn.style.right = 'auto';
          return;
        }
      } catch (e) {
        console.warn('Could not restore trigger button position', e);
      }

      // Default bottom-left
      triggerBtn.style.left = '24px';
      triggerBtn.style.bottom = '24px';
      triggerBtn.style.top = 'auto';
      triggerBtn.style.right = 'auto';
    }

    restoreTriggerPosition();

    triggerBtn.addEventListener('pointerdown', (e) => {
      if (e.button && e.button !== 0) return;
      const rect = triggerBtn.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = rect.left;
      initialTop = rect.top;
      isDragging = true;
      hasMoved = false;

      try {
        triggerBtn.setPointerCapture(e.pointerId);
      } catch (err) {}
    });

    triggerBtn.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.hypot(dx, dy) > 4) {
        hasMoved = true;
        triggerBtn.classList.add('is-dragging');

        const maxLeft = Math.max(10, window.innerWidth - triggerBtn.offsetWidth - 10);
        const maxTop = Math.max(10, window.innerHeight - triggerBtn.offsetHeight - 10);
        const currentLeft = Math.min(Math.max(10, initialLeft + dx), maxLeft);
        const currentTop = Math.min(Math.max(10, initialTop + dy), maxTop);

        triggerBtn.style.left = `${Math.round(currentLeft)}px`;
        triggerBtn.style.top = `${Math.round(currentTop)}px`;
        triggerBtn.style.bottom = 'auto';
        triggerBtn.style.right = 'auto';

        if (panel.classList.contains('open')) {
          positionPanel();
        }
      }
    });

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      triggerBtn.classList.remove('is-dragging');

      try {
        triggerBtn.releasePointerCapture(e.pointerId);
      } catch (err) {}

      if (hasMoved) {
        justDragged = true;
        setTimeout(() => { justDragged = false; }, 180);

        const rect = triggerBtn.getBoundingClientRect();
        try {
          localStorage.setItem(DRAG_STORAGE_KEY, JSON.stringify({
            left: Math.round(rect.left),
            top: Math.round(rect.top)
          }));
        } catch (err) {}
      }
    }

    triggerBtn.addEventListener('pointerup', onPointerUp);
    triggerBtn.addEventListener('pointercancel', onPointerUp);

    // Prevent panel toggle if pointer was dragging
    triggerBtn.addEventListener('click', (e) => {
      if (justDragged) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      togglePanel();
    });

    window.addEventListener('resize', () => {
      clampTriggerPosition();
      if (panel.classList.contains('open')) {
        positionPanel();
      }
    });

    // Close button
    panel.querySelector('#qh-cust-close').addEventListener('click', closePanel);

    // Keyboard shortcut: Alt + T
    window.addEventListener('keydown', (e) => {
      if (e.altKey && (e.key === 't' || e.key === 'T')) {
        togglePanel();
      }
    });

    // Tab Switching
    panel.querySelectorAll('.qh-cust-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        panel.querySelectorAll('.qh-cust-tab').forEach(t => t.classList.remove('active'));
        panel.querySelectorAll('.qh-cust-tab-pane').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const target = panel.querySelector('#' + tab.getAttribute('data-tab'));
        if (target) target.classList.add('active');
      });
    });

    // Preset Switching
    panel.querySelectorAll('.qh-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.qh-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const presetKey = btn.getAttribute('data-preset');
        if (PRESETS[presetKey]) {
          state = { ...PRESETS[presetKey] };
          syncInputs();
          applyStyles();
          showToast(`Preset "${btn.textContent}" Applied!`);
        }
      });
    });

    // Sliders input event
    const sliderKeys = [
      'slideTitleSize', 'slideSubtitleSize', 'slideKickerSize', 'heroTitleSize',
      'letterSpacingHeading', 'btnFontSize', 'btnPaddingX', 'btnPaddingY',
      'btnRadius', 'btnScale'
    ];

    sliderKeys.forEach(key => {
      const input = panel.querySelector('#input-' + key);
      const valDisplay = panel.querySelector('#val-' + key);
      if (input) {
        input.addEventListener('input', (e) => {
          state[key] = parseFloat(e.target.value);
          if (valDisplay) {
            valDisplay.textContent = formatVal(key, state[key]);
          }
          applyStyles();
        });
      }
    });

    // Plus/Minus step buttons
    panel.querySelectorAll('.qh-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-step');
        const delta = parseFloat(btn.getAttribute('data-delta'));
        const input = panel.querySelector('#input-' + key);
        if (input && state[key] !== undefined) {
          let newVal = Math.round((state[key] + delta) * 100) / 100;
          const min = parseFloat(input.min);
          const max = parseFloat(input.max);
          newVal = Math.max(min, Math.min(max, newVal));
          state[key] = newVal;
          input.value = newVal;
          const valDisplay = panel.querySelector('#val-' + key);
          if (valDisplay) valDisplay.textContent = formatVal(key, newVal);
          applyStyles();
        }
      });
    });

    // Text transform toggles
    panel.querySelectorAll('.qh-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.qh-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.btnTextTransform = btn.getAttribute('data-case');
        applyStyles();
      });
    });

    // Reset button
    const resetFn = () => {
      state = { ...DEFAULTS };
      syncInputs();
      applyStyles();
      showToast('All sizes reset to default!');
    };
    panel.querySelector('#qh-cust-reset').addEventListener('click', resetFn);
    panel.querySelector('#qh-cust-reset-top').addEventListener('click', resetFn);

    // Copy CSS button
    panel.querySelector('#qh-cust-copy').addEventListener('click', () => {
      const css = generateCSS();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(css).then(() => {
          showToast('CSS copied to clipboard! Ready to paste.');
        }).catch(() => {
          fallbackCopy(css);
        });
      } else {
        fallbackCopy(css);
      }
    });

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('CSS copied to clipboard!');
    }

    function syncInputs() {
      sliderKeys.forEach(key => {
        const input = panel.querySelector('#input-' + key);
        const valDisplay = panel.querySelector('#val-' + key);
        if (input && state[key] !== undefined) {
          input.value = state[key];
          if (valDisplay) valDisplay.textContent = formatVal(key, state[key]);
        }
      });
      panel.querySelectorAll('.qh-toggle-btn').forEach(b => {
        if (b.getAttribute('data-case') === state.btnTextTransform) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }

    function formatVal(key, val) {
      if (key === 'btnScale') return val.toFixed(2) + 'x';
      return val + 'px';
    }

    function togglePanel() {
      const isOpen = panel.classList.toggle('open');
      triggerBtn.classList.toggle('active', isOpen);
      if (isOpen) {
        positionPanel();
      }
    }

    function closePanel() {
      panel.classList.remove('open');
      triggerBtn.classList.remove('active');
    }

    let toastTimer;
    function showToast(msg) {
      const toast = panel.querySelector('#qh-cust-toast');
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2400);
    }
  }

  // Inject Customizer CSS Styles
  const uiStyles = document.createElement('style');
  uiStyles.id = 'qh-customizer-ui-styles';
  uiStyles.textContent = `
    /* Floating Draggable Trigger Button */
    #qh-customizer-trigger {
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 99998;
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 10px 18px 10px 13px;
      border-radius: 9999px;
      background: rgba(10, 10, 12, 0.90);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: #FFFFFF;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    }

    #qh-customizer-trigger:hover {
      background: #FFFFFF;
      color: #0A0A0C;
      border-color: #FFFFFF;
      box-shadow: 0 16px 42px rgba(0, 0, 0, 0.65);
    }

    #qh-customizer-trigger.is-dragging {
      cursor: grabbing !important;
      transform: scale(1.06);
      box-shadow: 0 22px 50px rgba(0, 0, 0, 0.75), 0 0 24px rgba(56, 189, 248, 0.5) !important;
      border-color: #38BDF8 !important;
      transition: none !important;
    }

    #qh-customizer-trigger.active {
      background: #0A0A0C;
      border-color: #38BDF8;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
    }

    /* Grip Handle Indicator */
    .qh-cust-grip {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding-right: 6px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      opacity: 0.75;
      cursor: grab;
    }

    #qh-customizer-trigger:hover .qh-cust-grip {
      border-right-color: rgba(10, 10, 12, 0.25);
      opacity: 1;
    }

    .qh-cust-grip span {
      width: 3px;
      height: 12px;
      border-radius: 2px;
      background: currentColor;
    }

    /* Customizer Drawer Panel */
    #qh-customizer-panel {
      position: fixed;
      bottom: 84px;
      left: 24px;
      width: 370px;
      max-width: calc(100vw - 24px);
      max-height: calc(100vh - 110px);
      z-index: 99999;
      background: rgba(12, 14, 18, 0.96);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 18px;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
      color: #FFFFFF;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      opacity: 0;
      pointer-events: none;
      transform: translateY(14px) scale(0.97);
      transition: all 0.26s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #qh-customizer-panel.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    #qh-customizer-panel::-webkit-scrollbar {
      width: 6px;
    }
    #qh-customizer-panel::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    /* Header */
    .qh-cust-header {
      padding: 18px 20px 14px 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .qh-cust-badge {
      display: inline-block;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.12em;
      padding: 2px 7px;
      border-radius: 4px;
      background: rgba(56, 189, 248, 0.18);
      color: #38BDF8;
      border: 1px solid rgba(56, 189, 248, 0.35);
      margin-bottom: 6px;
    }

    .qh-cust-title {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: -0.01em;
      margin: 0;
      color: #FFFFFF;
    }

    .qh-cust-sub {
      font-size: 11px;
      color: #94A3B8;
      margin: 2px 0 0 0;
    }

    .qh-cust-header-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .qh-cust-icon-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #CBD5E1;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.18s ease;
    }

    .qh-cust-icon-btn:hover {
      background: #FFFFFF;
      color: #0A0A0C;
    }

    /* Presets */
    .qh-cust-presets {
      padding: 14px 20px;
      background: rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .qh-cust-label {
      font-size: 11px;
      font-weight: 700;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }

    .qh-cust-preset-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }

    .qh-preset-btn {
      padding: 6px 4px;
      font-size: 10.5px;
      font-weight: 700;
      text-align: center;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #E2E8F0;
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .qh-preset-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #FFFFFF;
    }

    .qh-preset-btn.active {
      background: #FFFFFF;
      color: #0A0A0C;
      border-color: #FFFFFF;
    }

    /* Tabs */
    .qh-cust-tabs {
      display: flex;
      padding: 10px 20px 0 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      gap: 12px;
    }

    .qh-cust-tab {
      background: none;
      border: none;
      padding: 8px 12px 10px 12px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: #94A3B8;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-bottom: 2px solid transparent;
      transition: all 0.18s ease;
    }

    .qh-cust-tab:hover {
      color: #FFFFFF;
    }

    .qh-cust-tab.active {
      color: #FFFFFF;
      border-bottom-color: #38BDF8;
    }

    /* Tab Panes */
    .qh-cust-tab-pane {
      display: none;
      padding: 16px 20px;
    }

    .qh-cust-tab-pane.active {
      display: block;
    }

    /* Controls */
    .qh-control-group {
      margin-bottom: 16px;
    }

    .qh-control-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }

    .qh-control-title {
      font-size: 12px;
      font-weight: 600;
      color: #CBD5E1;
    }

    .qh-control-val {
      font-family: ui-monospace, Menlo, Consolas, monospace;
      font-size: 12px;
      font-weight: 700;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.12);
      padding: 2px 7px;
      border-radius: 4px;
    }

    .qh-slider-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .qh-slider-wrap input[type="range"] {
      flex: 1;
      height: 5px;
      -webkit-appearance: none;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 3px;
      outline: none;
    }

    .qh-slider-wrap input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #FFFFFF;
      cursor: pointer;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
      transition: transform 0.1s ease;
    }

    .qh-slider-wrap input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      background: #38BDF8;
    }

    .qh-step-btn {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s ease;
      line-height: 1;
    }

    .qh-step-btn:hover {
      background: #FFFFFF;
      color: #0A0A0C;
    }

    /* Toggle row */
    .qh-toggle-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .qh-toggle-btn {
      padding: 8px 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #94A3B8;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.18s ease;
    }

    .qh-toggle-btn.active {
      background: #FFFFFF;
      color: #0A0A0C;
      border-color: #FFFFFF;
    }

    /* Footer Action Buttons */
    .qh-cust-footer {
      padding: 14px 20px 18px 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 10px;
      background: rgba(0, 0, 0, 0.3);
    }

    .qh-cust-btn {
      padding: 11px 14px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      transition: all 0.18s ease;
    }

    .qh-cust-btn-primary {
      background: #FFFFFF;
      color: #0A0A0C;
      border: 1px solid #FFFFFF;
    }

    .qh-cust-btn-primary:hover {
      background: #38BDF8;
      border-color: #38BDF8;
      color: #0A0A0C;
    }

    .qh-cust-btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: #E2E8F0;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .qh-cust-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.16);
      color: #FFFFFF;
    }

    /* Toast */
    .qh-cust-toast {
      position: absolute;
      bottom: 74px;
      left: 20px;
      right: 20px;
      padding: 10px 14px;
      border-radius: 8px;
      background: #10B981;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
      transition: all 0.22s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .qh-cust-toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 600px) {
      #qh-customizer-trigger {
        padding: 9px 15px;
        font-size: 11.5px;
      }
      #qh-customizer-panel {
        left: 10px !important;
        right: 10px !important;
        width: auto !important;
        max-width: none !important;
      }
    }
  `;
  document.head.appendChild(uiStyles);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }
})();
