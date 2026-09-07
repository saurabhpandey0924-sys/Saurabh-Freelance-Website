/**
 * SAURABH FREELANCE PLATFORM - 3D HOLOGRAPHIC TILT CARDS
 * Smooth perspective tilt with dynamic glass sheen highlights matching user colors.
 */

(function () {
  'use strict';

  // Do not run on coarse pointer devices (touchscreens)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const tiltSelectors = [
    '.service-card',
    '.project-card',
    '.metric-card',
    '.pricing-card',
    '.calc-type-card',
    '.about-guarantee-card'
  ];

  function initTiltCard(card) {
    if (card._tiltInitialized) return;
    card._tiltInitialized = true;

    // Create sheen overlay if not present
    let sheen = card.querySelector('.hologram-sheen');
    if (!sheen) {
      sheen = document.createElement('div');
      sheen.className = 'hologram-sheen';
      card.appendChild(sheen);
    }

    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    const maxTilt = 8; // Max degrees of tilt

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1;  // -1 to +1
      const normY = (y / rect.height) * 2 - 1; // -1 to +1

      const tiltX = -normY * maxTilt;
      const tiltY = normX * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Dynamic sheen reflection
      const sheenX = (x / rect.width) * 100;
      const sheenY = (y / rect.height) * 100;
      sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 51, 75, 0.2) 0%, rgba(255, 107, 74, 0.08) 40%, transparent 70%)`;
      sheen.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      sheen.style.opacity = '0';
    });
  }

  function applyTiltToAll() {
    tiltSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(initTiltCard);
    });
  }

  // Initial run
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTiltToAll);
  } else {
    applyTiltToAll();
  }

  // Observe for dynamically loaded cards (e.g. services, projects filter)
  const observer = new MutationObserver(() => {
    applyTiltToAll();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
