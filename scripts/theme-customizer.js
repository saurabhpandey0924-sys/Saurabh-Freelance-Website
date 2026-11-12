/**
 * ==========================================================================
 * QUBITHRS DESIGN STUDIO - LIVE THEME & BUTTON SHAPE CONTROLLER
 * Enterprise-Grade In-Browser Design System Controller
 * ==========================================================================
 */

(function () {
  'use strict';

  // Storage key
  const STORAGE_KEY = 'qubithrs_studio_theme_v1';

  // Factory Default State
  const DEFAULTS = {
    buttonRadius: 50,
    shapePreset: 'pill',
    themePreset: 'monochrome',
    primaryBtnBg: '#14161b',
    primaryBtnText: '#ffffff',
    secondaryBtnBg: 'transparent',
    secondaryBtnBorder: 'rgba(255, 255, 255, 0.4)',
    secondaryBtnText: '#FFFFFF',
    accentColor: '#CBD5E1',
    pageBg: '#000000',
    cardBg: '#0E0F14',
    cardBorder: 'rgba(255, 255, 255, 0.14)'
  };

  // Presets definition
  const THEME_PRESETS = {
    monochrome: {
      name: 'Monochrome Stealth',
      sub: 'Obsidian Pill & Crisp White',
      dots: ['#14161B', '#FFFFFF', '#0E0F14'],
      primaryBtnBg: '#14161b',
      primaryBtnText: '#ffffff',
      secondaryBtnBg: 'transparent',
      secondaryBtnBorder: 'rgba(255, 255, 255, 0.4)',
      secondaryBtnText: '#FFFFFF',
      accentColor: '#CBD5E1',
      pageBg: '#000000',
      cardBg: '#0E0F14',
      cardBorder: 'rgba(255, 255, 255, 0.14)'
    },
    cyber_emerald: {
      name: 'Cyber Emerald',
      sub: 'Neon Mint & Dark Slate',
      dots: ['#10B981', '#040907', '#08140E'],
      primaryBtnBg: '#10B981',
      primaryBtnText: '#000000',
      secondaryBtnBg: 'rgba(16, 185, 129, 0.08)',
      secondaryBtnBorder: '#10B981',
      secondaryBtnText: '#10B981',
      accentColor: '#10B981',
      pageBg: '#040907',
      cardBg: '#08140E',
      cardBorder: 'rgba(16, 185, 129, 0.25)'
    },
    electric_azure: {
      name: 'Electric Azure',
      sub: 'Cobalt Blue & Obsidian',
      dots: ['#3B82F6', '#060A12', '#0C1322'],
      primaryBtnBg: '#3B82F6',
      primaryBtnText: '#FFFFFF',
      secondaryBtnBg: 'rgba(59, 130, 246, 0.08)',
      secondaryBtnBorder: '#3B82F6',
      secondaryBtnText: '#60A5FA',
      accentColor: '#38BDF8',
      pageBg: '#060A12',
      cardBg: '#0C1322',
      cardBorder: 'rgba(59, 130, 246, 0.25)'
    },
    neon_amethyst: {
      name: 'Neon Amethyst',
      sub: 'Vibrant Purple & Midnight',
      dots: ['#8B5CF6', '#090611', '#130D24'],
      primaryBtnBg: '#8B5CF6',
      primaryBtnText: '#FFFFFF',
      secondaryBtnBg: 'rgba(139, 92, 246, 0.08)',
      secondaryBtnBorder: '#8B5CF6',
      secondaryBtnText: '#A78BFA',
      accentColor: '#A78BFA',
      pageBg: '#090611',
      cardBg: '#130D24',
      cardBorder: 'rgba(139, 92, 246, 0.25)'
    },
    amber_sunset: {
      name: 'Titanium Amber',
      sub: 'Warm Gold & Charcoal',
      dots: ['#F59E0B', '#0B0905', '#18130B'],
      primaryBtnBg: '#F59E0B',
      primaryBtnText: '#000000',
      secondaryBtnBg: 'rgba(245, 158, 11, 0.08)',
      secondaryBtnBorder: '#F59E0B',
      secondaryBtnText: '#FBBF24',
      accentColor: '#F59E0B',
      pageBg: '#0B0905',
      cardBg: '#18130B',
      cardBorder: 'rgba(245, 158, 11, 0.25)'
    },
    clean_light: {
      name: 'Clean Light',
      sub: 'Modern Off-White',
      dots: ['#0F172A', '#F8FAFC', '#FFFFFF'],
      primaryBtnBg: '#0F172A',
      primaryBtnText: '#FFFFFF',
      secondaryBtnBg: '#FFFFFF',
      secondaryBtnBorder: '#CBD5E1',
      secondaryBtnText: '#0F172A',
      accentColor: '#0F172A',
      pageBg: '#F8FAFC',
      cardBg: '#FFFFFF',
      cardBorder: '#E2E8F0'
    }
  };

  // State object
  let state = Object.assign({}, DEFAULTS);

  // Load state from localStorage
  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = Object.assign({}, DEFAULTS, parsed);
      }
    } catch (e) {
      console.warn('[Studio] Failed to load customizer config:', e);
    }
  }

  // Save state to localStorage
  function persistState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[Studio] Failed to save customizer config:', e);
    }
  }

  // Generate CSS string from state
  function generateCss(s) {
    const radiusVal = s.buttonRadius >= 45 ? '9999px' : `${s.buttonRadius}px`;

    return `
/* -------------------------------------------------------------
   QUBITHRS LIVE STUDIO DYNAMIC OVERRIDES
   Generated: ${new Date().toISOString()}
   ------------------------------------------------------------- */

/* 1. BUTTON GEOMETRY / SHAPE */
.btn,
.btn-primary,
.btn-secondary,
.btn-glow,
.luxury-cta,
.drawer-cta-btn,
.filter-btn,
.slide-pager-btn,
.btn-back-to-services,
button[type="submit"],
#contact-submit-btn,
.modal-dialog .btn,
.project-card .btn,
.qh-preview-sandbox button {
  border-radius: ${radiusVal} !important;
}

/* 2. PRIMARY BUTTON STYLING */
body.qh-dark-page .btn-primary,
body.qh-dark-page .btn-primary *,
body.qh-dark-page button[type="submit"],
body.qh-dark-page button[type="submit"] *,
body.qh-dark-page #contact-submit-btn,
body.qh-dark-page #contact-submit-btn *,
body.qh-dark-page .drawer-cta-btn,
body.qh-dark-page .drawer-cta-btn *,
body.qh-dark-page .luxury-cta,
body.qh-dark-page .luxury-cta *,
body.qh-dark-page .filter-btn.active,
body.qh-dark-page .filter-btn.active *,
.btn-primary,
.btn-primary * {
  background: ${s.primaryBtnBg} !important;
  color: ${s.primaryBtnText} !important;
  border-color: ${s.primaryBtnBg} !important;
}

body.qh-dark-page .btn-primary span,
body.qh-dark-page button[type="submit"] span,
body.qh-dark-page #contact-submit-btn span,
body.qh-dark-page .drawer-cta-btn span,
body.qh-dark-page .luxury-cta span,
.btn-primary span {
  color: ${s.primaryBtnText} !important;
}

body.qh-dark-page .btn-primary svg,
body.qh-dark-page button[type="submit"] svg,
body.qh-dark-page #contact-submit-btn svg,
body.qh-dark-page .drawer-cta-btn svg,
body.qh-dark-page .luxury-cta svg,
.btn-primary svg {
  stroke: ${s.primaryBtnText} !important;
  color: ${s.primaryBtnText} !important;
}

body.qh-dark-page .btn-primary svg *,
body.qh-dark-page button[type="submit"] svg *,
body.qh-dark-page #contact-submit-btn svg *,
body.qh-dark-page .drawer-cta-btn svg *,
.btn-primary svg * {
  stroke: ${s.primaryBtnText} !important;
}

/* 3. SECONDARY BUTTON STYLING */
body.qh-dark-page .btn-secondary,
body.qh-dark-page .btn-secondary *,
.btn-secondary,
.btn-secondary * {
  background: ${s.secondaryBtnBg} !important;
  color: ${s.secondaryBtnText} !important;
  border-color: ${s.secondaryBtnBorder} !important;
}

body.qh-dark-page .btn-secondary span,
.btn-secondary span {
  color: ${s.secondaryBtnText} !important;
}

body.qh-dark-page .btn-secondary svg,
.btn-secondary svg {
  stroke: ${s.secondaryBtnText} !important;
  color: ${s.secondaryBtnText} !important;
}

/* 4. BUTTON GLOW */
.btn-glow {
  box-shadow: 0 0 25px ${s.primaryBtnBg}44 !important;
}

/* 5. PAGE BACKGROUND (Subpages with .qh-dark-page) */
body.qh-dark-page,
body.qh-dark-page .section,
body.qh-dark-page main,
body.qh-dark-page .metrics-section,
body.qh-dark-page .comparison-section,
body.qh-dark-page .industries-section,
body.qh-dark-page .cta-banner-section,
body.qh-dark-page #projects,
body.qh-dark-page #reviews,
body.qh-dark-page #contact,
body.qh-dark-page #about,
body.qh-dark-page #mission-vision {
  background: ${s.pageBg} !important;
  background-color: ${s.pageBg} !important;
}

/* 6. CARDS & SURFACES */
body.qh-dark-page .glass-card,
body.qh-dark-page .card,
body.qh-dark-page .project-card,
body.qh-dark-page .cta-banner-card,
body.qh-dark-page .service-slide,
body.qh-dark-page .contact-form-card,
body.qh-dark-page .contact-info-card,
body.qh-dark-page .about-profile-card,
body.qh-dark-page .modal-dialog {
  background: ${s.cardBg} !important;
  border-color: ${s.cardBorder} !important;
}

/* 7. ACCENT COLOR */
body.qh-dark-page .section-badge,
body.qh-dark-page .badge-live {
  border-color: ${s.accentColor} !important;
}
`;
  }

  // Inject or update <style id="qubithrs-theme-customizer-live-css">
  function applyLiveStyles() {
    let styleEl = document.getElementById('qubithrs-theme-customizer-live-css');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'qubithrs-theme-customizer-live-css';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = generateCss(state);
  }

  // Show Toast
  function showToast(msg) {
    let toast = document.getElementById('qh-studio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'qh-studio-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Create Launcher & Studio Panel DOM
  function createStudioUI() {
    if (document.getElementById('qh-studio-launcher')) return;

    // 1. Launcher button
    const launcher = document.createElement('button');
    launcher.id = 'qh-studio-launcher';
    launcher.setAttribute('aria-label', 'Open Design & Button Studio');
    launcher.setAttribute('title', 'Customize Website Colors & Button Shapes (Ctrl + Shift + C)');
    launcher.innerHTML = `
      <div class="launcher-icon-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      </div>
      <span>Design Studio</span>
      <span class="launcher-dot"></span>
      <span class="launcher-badge">Manual</span>
    `;

    // 2. Backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'qh-studio-backdrop';

    // 3. Slide-out panel
    const panel = document.createElement('aside');
    panel.id = 'qh-studio-panel';
    panel.innerHTML = `
      <!-- Header -->
      <div class="qh-studio-header">
        <div class="qh-studio-title-wrap">
          <div class="qh-studio-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <h3 class="qh-studio-title">Design & Shape Studio</h3>
            <p class="qh-studio-subtitle">Live Website Colors & Button Geometry</p>
          </div>
        </div>
        <button class="qh-studio-close-btn" id="qh-studio-close-btn" aria-label="Close Design Studio">&times;</button>
      </div>

      <!-- Scrollable Body -->
      <div class="qh-studio-body">

        <!-- SECTION 1: BUTTON SHAPES -->
        <div class="qh-studio-section">
          <div class="qh-studio-section-label">
            <span>🔘 Buttons Ka Shape</span>
            <span class="qh-studio-badge-pill" id="qh-shape-pill-indicator">${state.buttonRadius}px</span>
          </div>

          <!-- Shape Presets -->
          <div class="qh-shape-presets-grid">
            <button class="qh-shape-btn ${state.shapePreset === 'pill' ? 'active' : ''}" data-shape="pill" data-radius="50">
              <span class="shape-icon-preview"></span>
              <span>Pill</span>
            </button>
            <button class="qh-shape-btn ${state.shapePreset === 'rounded' ? 'active' : ''}" data-shape="rounded" data-radius="12">
              <span class="shape-icon-preview"></span>
              <span>Modern</span>
            </button>
            <button class="qh-shape-btn ${state.shapePreset === 'subtle' ? 'active' : ''}" data-shape="subtle" data-radius="6">
              <span class="shape-icon-preview"></span>
              <span>Subtle</span>
            </button>
            <button class="qh-shape-btn ${state.shapePreset === 'sharp' ? 'active' : ''}" data-shape="sharp" data-radius="0">
              <span class="shape-icon-preview"></span>
              <span>Sharp</span>
            </button>
          </div>

          <!-- Radius Slider -->
          <div class="qh-slider-wrap">
            <div class="qh-slider-header">
              <span>Custom Border Radius:</span>
              <span class="qh-slider-val" id="qh-radius-num">${state.buttonRadius}px</span>
            </div>
            <input type="range" class="qh-range-input" id="qh-radius-slider" min="0" max="50" value="${state.buttonRadius}">
          </div>

          <!-- Live Preview Sandbox -->
          <div class="qh-preview-sandbox">
            <button class="btn btn-primary btn-sm">
              <span>Primary Button</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button class="btn btn-secondary btn-sm">
              <span>Secondary</span>
            </button>
          </div>
        </div>

        <!-- SECTION 2: THEME PRESETS (WEBSITE KA COLOUR) -->
        <div class="qh-studio-section">
          <div class="qh-studio-section-label">
            <span>🎨 Website Ka Colour (Theme Presets)</span>
            <span class="qh-studio-badge-pill">1-Click</span>
          </div>

          <div class="qh-theme-presets-grid">
            ${Object.keys(THEME_PRESETS).map(key => {
              const p = THEME_PRESETS[key];
              const isActive = state.themePreset === key ? 'active' : '';
              return `
                <button class="qh-preset-btn ${isActive}" data-preset="${key}">
                  <div class="qh-preset-swatches">
                    <div class="qh-swatch-row">
                      <span class="qh-swatch-dot" style="background:${p.dots[0]}"></span>
                      <span class="qh-swatch-dot" style="background:${p.dots[1]}"></span>
                      <span class="qh-swatch-dot" style="background:${p.dots[2]}"></span>
                    </div>
                  </div>
                  <div class="qh-preset-text">
                    <span class="qh-preset-name">${p.name}</span>
                    <span class="qh-preset-sub">${p.sub}</span>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- SECTION 3: GRANULAR COLOR PICKERS -->
        <div class="qh-studio-section">
          <div class="qh-studio-section-label">
            <span>🖌️ Custom Color Pickers</span>
            <span class="qh-studio-badge-pill">Fine-Tune</span>
          </div>

          <div class="qh-color-pickers-list">
            <div class="qh-color-picker-row">
              <span class="qh-color-picker-label">Primary Button Background</span>
              <div class="qh-color-picker-input-wrap">
                <span class="qh-color-hex-text" id="hex-primary-bg">${state.primaryBtnBg}</span>
                <input type="color" class="qh-color-input" id="picker-primary-bg" value="${state.primaryBtnBg}">
              </div>
            </div>

            <div class="qh-color-picker-row">
              <span class="qh-color-picker-label">Primary Button Text</span>
              <div class="qh-color-picker-input-wrap">
                <span class="qh-color-hex-text" id="hex-primary-text">${state.primaryBtnText}</span>
                <input type="color" class="qh-color-input" id="picker-primary-text" value="${state.primaryBtnText}">
              </div>
            </div>

            <div class="qh-color-picker-row">
              <span class="qh-color-picker-label">Page Background</span>
              <div class="qh-color-picker-input-wrap">
                <span class="qh-color-hex-text" id="hex-page-bg">${state.pageBg}</span>
                <input type="color" class="qh-color-input" id="picker-page-bg" value="${state.pageBg}">
              </div>
            </div>

            <div class="qh-color-picker-row">
              <span class="qh-color-picker-label">Card / Surface Color</span>
              <div class="qh-color-picker-input-wrap">
                <span class="qh-color-hex-text" id="hex-card-bg">${state.cardBg}</span>
                <input type="color" class="qh-color-input" id="picker-card-bg" value="${state.cardBg}">
              </div>
            </div>

            <div class="qh-color-picker-row">
              <span class="qh-color-picker-label">Accent / Glow Highlight</span>
              <div class="qh-color-picker-input-wrap">
                <span class="qh-color-hex-text" id="hex-accent-color">${state.accentColor}</span>
                <input type="color" class="qh-color-input" id="picker-accent-color" value="${state.accentColor}">
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Action Footer -->
      <div class="qh-studio-footer">
        <button class="qh-studio-btn-copy" id="qh-btn-copy-css" title="Copy clean CSS to clipboard">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <span>Copy CSS Code</span>
        </button>
        <button class="qh-studio-btn-reset" id="qh-btn-reset-studio" title="Reset all changes to factory defaults">
          <span>Reset</span>
        </button>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    // Bind all events
    bindStudioEvents(launcher, backdrop, panel);
  }

  // Open / Close Panel
  function toggleStudio(open) {
    const backdrop = document.getElementById('qh-studio-backdrop');
    const panel = document.getElementById('qh-studio-panel');
    if (!backdrop || !panel) return;

    const shouldOpen = typeof open === 'boolean' ? open : !panel.classList.contains('active');
    if (shouldOpen) {
      backdrop.classList.add('active');
      panel.classList.add('active');
    } else {
      backdrop.classList.remove('active');
      panel.classList.remove('active');
    }
  }

  // Bind Event Listeners
  function bindStudioEvents(launcher, backdrop, panel) {
    launcher.addEventListener('click', () => toggleStudio(true));
    backdrop.addEventListener('click', () => toggleStudio(false));

    const closeBtn = document.getElementById('qh-studio-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => toggleStudio(false));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('active')) {
        toggleStudio(false);
      }
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        toggleStudio();
      }
    });

    // 1. Button Shape Presets
    const shapeBtns = panel.querySelectorAll('.qh-shape-btn');
    const radiusSlider = document.getElementById('qh-radius-slider');
    const radiusNum = document.getElementById('qh-radius-num');
    const shapeIndicator = document.getElementById('qh-shape-pill-indicator');

    shapeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        shapeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const radius = parseInt(btn.dataset.radius, 10);
        state.buttonRadius = radius;
        state.shapePreset = btn.dataset.shape;

        if (radiusSlider) radiusSlider.value = radius;
        if (radiusNum) radiusNum.textContent = `${radius}px`;
        if (shapeIndicator) shapeIndicator.textContent = `${radius}px`;

        applyLiveStyles();
        persistState();
      });
    });

    // 2. Custom Radius Slider
    if (radiusSlider) {
      radiusSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.buttonRadius = val;
        state.shapePreset = val >= 45 ? 'pill' : (val === 12 ? 'rounded' : (val === 6 ? 'subtle' : (val === 0 ? 'sharp' : 'custom')));

        if (radiusNum) radiusNum.textContent = `${val}px`;
        if (shapeIndicator) shapeIndicator.textContent = `${val}px`;

        shapeBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.shape === state.shapePreset);
        });

        applyLiveStyles();
        persistState();
      });
    }

    // 3. Theme Presets
    const presetBtns = panel.querySelectorAll('.qh-preset-btn');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const presetKey = btn.dataset.preset;
        const preset = THEME_PRESETS[presetKey];
        if (!preset) return;

        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        state.themePreset = presetKey;
        state.primaryBtnBg = preset.primaryBtnBg;
        state.primaryBtnText = preset.primaryBtnText;
        state.secondaryBtnBg = preset.secondaryBtnBg;
        state.secondaryBtnBorder = preset.secondaryBtnBorder;
        state.secondaryBtnText = preset.secondaryBtnText;
        state.accentColor = preset.accentColor;
        state.pageBg = preset.pageBg;
        state.cardBg = preset.cardBg;
        state.cardBorder = preset.cardBorder;

        // Update color pickers UI
        updatePickersUI();

        applyLiveStyles();
        persistState();
        showToast(`Applied preset: ${preset.name}`);
      });
    });

    // 4. Granular Color Pickers
    function attachColorPicker(pickerId, hexId, stateKey) {
      const picker = document.getElementById(pickerId);
      const hex = document.getElementById(hexId);
      if (!picker) return;

      picker.addEventListener('input', (e) => {
        const val = e.target.value;
        state[stateKey] = val;
        if (hex) hex.textContent = val.toUpperCase();

        // Mark preset as custom
        state.themePreset = 'custom';
        presetBtns.forEach(b => b.classList.remove('active'));

        applyLiveStyles();
        persistState();
      });
    }

    attachColorPicker('picker-primary-bg', 'hex-primary-bg', 'primaryBtnBg');
    attachColorPicker('picker-primary-text', 'hex-primary-text', 'primaryBtnText');
    attachColorPicker('picker-page-bg', 'hex-page-bg', 'pageBg');
    attachColorPicker('picker-card-bg', 'hex-card-bg', 'cardBg');
    attachColorPicker('picker-accent-color', 'hex-accent-color', 'accentColor');

    // Update Color Pickers UI
    function updatePickersUI() {
      const p1 = document.getElementById('picker-primary-bg');
      const h1 = document.getElementById('hex-primary-bg');
      if (p1 && h1) { p1.value = state.primaryBtnBg.startsWith('#') ? state.primaryBtnBg : '#FFFFFF'; h1.textContent = state.primaryBtnBg; }

      const p2 = document.getElementById('picker-primary-text');
      const h2 = document.getElementById('hex-primary-text');
      if (p2 && h2) { p2.value = state.primaryBtnText.startsWith('#') ? state.primaryBtnText : '#000000'; h2.textContent = state.primaryBtnText; }

      const p3 = document.getElementById('picker-page-bg');
      const h3 = document.getElementById('hex-page-bg');
      if (p3 && h3) { p3.value = state.pageBg.startsWith('#') ? state.pageBg : '#000000'; h3.textContent = state.pageBg; }

      const p4 = document.getElementById('picker-card-bg');
      const h4 = document.getElementById('hex-card-bg');
      if (p4 && h4) { p4.value = state.cardBg.startsWith('#') ? state.cardBg : '#0E0F14'; h4.textContent = state.cardBg; }

      const p5 = document.getElementById('picker-accent-color');
      const h5 = document.getElementById('hex-accent-color');
      if (p5 && h5) { p5.value = state.accentColor.startsWith('#') ? state.accentColor : '#FFFFFF'; h5.textContent = state.accentColor; }
    }

    // 5. Copy CSS
    const copyBtn = document.getElementById('qh-btn-copy-css');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const cssCode = generateCss(state);
        navigator.clipboard.writeText(cssCode).then(() => {
          showToast('✅ CSS Copied to Clipboard!');
        }).catch(() => {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = cssCode;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showToast('✅ CSS Copied to Clipboard!');
        });
      });
    }

    // 6. Reset Studio
    const resetBtn = document.getElementById('qh-btn-reset-studio');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state = Object.assign({}, DEFAULTS);
        persistState();
        applyLiveStyles();

        // Reset UI
        if (radiusSlider) radiusSlider.value = state.buttonRadius;
        if (radiusNum) radiusNum.textContent = `${state.buttonRadius}px`;
        if (shapeIndicator) shapeIndicator.textContent = `${state.buttonRadius}px`;

        shapeBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.shape === state.shapePreset);
        });

        presetBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.preset === state.themePreset);
        });

        updatePickersUI();
        showToast('🔄 Restored Factory Defaults!');
      });
    }
  }

  // Self-boot sequence
  function init() {
    loadSavedState();
    applyLiveStyles();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createStudioUI);
    } else {
      createStudioUI();
    }
  }

  // Expose on window for programmatic control
  window.QubithrsDesignStudio = {
    open: () => toggleStudio(true),
    close: () => toggleStudio(false),
    toggle: () => toggleStudio(),
    getState: () => Object.assign({}, state),
    applyPreset: (presetKey) => {
      const p = THEME_PRESETS[presetKey];
      if (p) {
        state = Object.assign({}, state, p, { themePreset: presetKey });
        applyLiveStyles();
        persistState();
      }
    },
    setRadius: (px) => {
      state.buttonRadius = parseInt(px, 10);
      applyLiveStyles();
      persistState();
    }
  };

  // Launch
  init();
})();

