/**
 * SAURABH FREELANCE PLATFORM - PARALLAX FLOATING BACKGROUND
 * Infinite vertical scrolling parallax with zero-gravity hover effect.
 */

(function () {
  'use strict';

  // SVG Definitions
  const SVGS = {
    react: `<svg viewBox="0 0 841.9 595.3" fill="none" stroke="currentColor" stroke-width="35" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(420.9, 297.6)"><ellipse rx="310" ry="85" /><ellipse rx="310" ry="85" transform="rotate(60)" /><ellipse rx="310" ry="85" transform="rotate(120)" /><circle r="40" fill="currentColor" stroke="none"/></g></svg>`,
    js: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>`,
    python: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-25 53.4-54.3V92.1c0-29-24.4-50.7-53.4-54.3-31.1-3.8-67.6-4-106.8 0-27.1 2.7-53.4 20-53.4 54.3v40.7h106.9v13.6h-160.2c-31.1 0-42.6 21.7-53.4 54.2-11.2 33.5-10.7 65.7 0 108.6 7.7 30.9 22.3 54.2 53.4 54.2h40.1v-47.4c0-36.8 31.2-67.8 66.8-67.8H167.8v-10.1zM161.8 87.7c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3z"/></svg>`,
    node: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M224 50.8c-2.4 0-4.5 .6-6.3 1.5L47.6 151.4c-4.8 2.7-7.6 7.5-7.6 13v183.1c0 5.4 2.7 10.2 7.6 13L217.7 460c1.8 .9 3.9 1.5 6.3 1.5s4.5-.6 6.3-1.5l170.1-99.4c4.8-2.7 7.6-7.5 7.6-13V164.5c0-5.4-2.7-10.2-7.6-13L230.3 52.3c-1.8-.9-3.9-1.5-6.3-1.5zM250.7 348.6c-20.1 11.4-44.1 11.4-64.2 0L97 296.8v-32.2l83.4 48c10.5 5.7 22.8 5.7 33.3 0l83.4-48v32.2l-46.4 51.8zM111.4 153l79.4-46.2c16.2-9.3 35.7-9.3 51.9 0l79.4 46.2-38.3 22.5L240.2 149c-8.7-5.1-19.2-5.1-27.9 0l-43.6 25.5 11.6 6.6 32-18.7c4.2-2.4 9.3-2.4 13.5 0l133.7 77.4v42.8l-83.4-48c-10.5-5.7-22.8-5.7-33.3 0L135 282.8v-42.8l83.4-48.4c4.2-2.4 9.3-2.4 13.5 0l21.2 12.4-11.6 6.6-21.2-12.4c-8.7-5.1-19.2-5.1-27.9 0l-123.4 71.3V201l42.4-25.1z"/></svg>`,
    astronaut: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M439.1 199.1c-16-16-53.7-33.1-97.1-41.5V112c0-61.9-50.1-112-112-112S118 50.1 118 112v45.6c-43.4 8.4-81.1 25.5-97.1 41.5C6.1 214 0 231 0 256c0 23.3 5.4 39 18 50.7c11.9 11.1 29 17.3 46 17.3c15 0 28.5-4.8 38.3-12.7c-2.4 8-3.6 16.5-3.6 24.7c0 48.6 39.4 88 88 88h64c48.6 0 88-39.4 88-88c0-8.2-1.2-16.7-3.6-24.7c9.8 7.9 23.3 12.7 38.3 12.7c17 0 34.1-6.2 46-17.3c12.6-11.7 18-27.4 18-50.7c0-25-6.1-42-20.9-56.9zM224 48c35.3 0 64 28.7 64 64v35.8c-20-4.6-41.5-7.8-64-7.8s-44 3.2-64 7.8V112c0-35.3 28.7-64 64-64zM96 256c0-70.7 57.3-128 128-128s128 57.3 128 128c0 30.6-11 58.7-29.2 80c-15.5-22.1-40.4-38.3-69.3-44.4c17.5-12.3 28.5-32.3 28.5-55.6c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.3 11 43.3 28.5 55.6c-28.9 6.1-53.8 22.3-69.3 44.4C107 314.7 96 286.6 96 256z"/></svg>`,
    rocket: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M497.1 27.6c-3-9.5-11.9-16.1-21.9-16.5-38.5-1.5-131 9.4-203.4 81.8l-37 37-14.8-4.6c-36-11.3-76.3-4-105.8 21.6-4 3.5-5.9 8.9-5.1 14.1l11.4 75.3-78.5 78.5c-7 7-9.4 17.5-6.2 27.1s11.5 16.5 21.2 16.5h77.7l-49 49c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l49-49v77.7c0 9.7 7 18.1 16.5 21.2 9.5 3.2 20.1 .8 27.1-6.2l78.5-78.5 75.3 11.4c1.1 .2 2.3 .3 3.4 .3 4.1 0 8.1-1.5 11.3-4.4 27.4-25.2 36.3-63.5 26.5-101.4l-4.5-17.6 40.7-40.7c72.4-72.4 83.3-164.9 81.8-203.4-.4-10-7-18.9-16.5-21.9zM203 268.4l-49.9-49.9 26.3-26.3c15.1-15.1 41.5-21.9 63-16.6l10.9 2.7c-11.3 18.2-22.7 39.5-30.8 62.4l-19.5 27.7zM309.8 402c-15.1 15.1-41.5 21.9-63 16.6l-10.9-2.7c11.3-18.2 22.7-39.5 30.8-62.4l19.5-27.7 49.9 49.9-26.3 26.3zM358.7 274.6l-67.4-67.4 87.5-87.5c21.8-21.8 49.9-35.3 78.4-40.3-4.6 29.8-18.9 59.3-41.4 81.8l-57.1 57.1-57.4 57.4-56.3 56.3c-22.5 22.5-52 36.8-81.8 41.4 5-28.5 18.5-56.6 40.3-78.4l153.8-153.8z"/></svg>`
  };

  const ITEMS = [
    { id: 'astronaut', type: 'svg', content: SVGS.astronaut, size: 140, speed: 0.6, startX: 10, startY: 20, color: 'var(--accent-primary)', opacity: 0.15 },
    { id: 'rocket', type: 'svg', content: SVGS.rocket, size: 120, speed: 1.1, startX: 80, startY: 45, color: 'var(--text-primary)', opacity: 0.1 },
    { id: 'react', type: 'svg', content: SVGS.react, size: 180, speed: 0.4, startX: 75, startY: 10, color: 'var(--accent-highlight)', opacity: 0.08 },
    { id: 'node', type: 'svg', content: SVGS.node, size: 110, speed: 0.75, startX: 15, startY: 60, color: '#339933', opacity: 0.08 },
    { id: 'python', type: 'svg', content: SVGS.python, size: 100, speed: 0.5, startX: 85, startY: 80, color: 'var(--accent-light)', opacity: 0.12 },
    { id: 'js', type: 'svg', content: SVGS.js, size: 90, speed: 0.35, startX: 45, startY: 30, color: '#F7DF1E', opacity: 0.08 },
    { id: 'syntax1', type: 'text', content: '{ }', size: 80, speed: 0.9, startX: 5, startY: 85, color: 'var(--accent-secondary)', opacity: 0.2 },
    { id: 'syntax2', type: 'text', content: '&lt;/&gt;', size: 90, speed: 0.45, startX: 55, startY: 90, color: 'var(--accent-primary)', opacity: 0.15 },
    { id: 'syntax3', type: 'text', content: '#', size: 130, speed: 0.2, startX: 90, startY: 65, color: 'var(--text-primary)', opacity: 0.05 },
    { id: 'cube', type: 'text', content: '&#10036;', size: 60, speed: 0.8, startX: 35, startY: 75, color: 'var(--accent-light)', opacity: 0.15 }
  ];

  function initParallax() {
    // 1. Create Container
    const container = document.createElement('div');
    container.id = 'parallax-bg-container';
    
    // 2. Inject CSS
    const style = document.createElement('style');
    style.textContent = \`
      #parallax-bg-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
      }
      .parallax-item {
        position: absolute;
        will-change: transform;
        /* Center transform origin */
        transform-origin: center center;
      }
      .parallax-inner {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-family: 'Outfit', sans-serif;
        will-change: transform;
        animation: zero-gravity 6s ease-in-out infinite alternate;
      }
      .parallax-inner svg {
        width: 100%;
        height: 100%;
      }
      
      @keyframes zero-gravity {
        0% { transform: translateY(-15px) rotate(-3deg); }
        100% { transform: translateY(15px) rotate(3deg); }
      }
    \`;
    document.head.appendChild(style);

    // 3. Generate Items
    const maxTravel = window.innerHeight + 500;
    
    const elements = ITEMS.map((item, index) => {
      const el = document.createElement('div');
      el.className = 'parallax-item';
      
      // Calculate a randomized initial offset based on startY
      // So they are spread out when scrollY = 0
      const startPixelY = (item.startY / 100) * maxTravel;
      
      el.dataset.speed = item.speed;
      el.dataset.starty = startPixelY;
      
      el.style.left = \`\${item.startX}%\`;
      el.style.width = \`\${item.size}px\`;
      el.style.height = \`\${item.size}px\`;
      el.style.color = item.color;
      el.style.opacity = item.opacity;
      
      // Different animation delays so they don't bob together
      const inner = document.createElement('div');
      inner.className = 'parallax-inner';
      inner.style.animationDelay = \`-\${index * 1.5}s\`;
      inner.style.animationDuration = \`\${5 + Math.random() * 3}s\`;
      
      if (item.type === 'svg') {
        inner.innerHTML = item.content;
      } else {
        inner.innerHTML = item.content;
        inner.style.fontSize = \`\${item.size}px\`;
        inner.style.lineHeight = '1';
      }
      
      // Add subtle glow
      inner.style.filter = \`drop-shadow(0 0 20px \${item.color})\`;
      
      el.appendChild(inner);
      container.appendChild(el);
      return el;
    });

    document.body.appendChild(container);

    // 4. Scroll Logic (Infinite Loop)
    function renderParallax() {
      const scrollY = window.scrollY;
      const travelDistance = window.innerHeight + 500; 
      
      elements.forEach(el => {
        const speed = parseFloat(el.dataset.speed);
        const startY = parseFloat(el.dataset.starty);
        
        // y decreases as you scroll down (objects go UP)
        let y = (startY - scrollY * speed) % travelDistance;
        
        // Handle negative modulo for scrolling back up
        if (y < 0) {
          y += travelDistance;
        }
        
        // y goes from 0 to travelDistance. 
        // We offset it by -250px so it wraps cleanly off-screen.
        const finalY = y - 250;
        
        el.style.transform = \`translateY(\${finalY}px)\`;
      });
    }

    // Initial render
    renderParallax();

    // Event listener
    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(renderParallax);
    }, { passive: true });
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
  } else {
    initParallax();
  }

})();

