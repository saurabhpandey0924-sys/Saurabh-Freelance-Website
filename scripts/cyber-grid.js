/**
 * SAURABH FREELANCE PLATFORM - CYBER MATRIX GRID CANVAS
 * Interactive geometric background with cursor spotlight aura in Cyber Crimson (#FF334B) & Ember (#FF6B4A).
 */

(function () {
  'use strict';

  const canvas = document.getElementById('cyber-grid-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Mouse tracking with smooth lerp
  const mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    active: false,
    radius: 220
  };

  const gridSize = 46;
  const particles = [];
  const maxParticles = 24;

  // Colors matching Cyber Crimson & Obsidian Stealth palette
  const colors = {
    gridDark: 'rgba(255, 51, 75, 0.07)',        // Subtle Crimson grid lines
    gridLight: 'rgba(220, 38, 38, 0.05)',
    dotDark: 'rgba(255, 51, 75, 0.22)',         // Crimson nodes
    dotLight: 'rgba(220, 38, 38, 0.15)',
    spotlightInner: 'rgba(255, 51, 75, 0.2)',   // Cyber Crimson Red
    spotlightOuter: 'rgba(255, 107, 74, 0.04)', // Ember warm glow
    packetColor: '#FF334B',
    packetAccent: '#FBBF24'                     // Cyber Gold
  };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  // Mouse event listeners
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Touch support for mobile devices
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });

  // Floating Micro-Packet Particle System along Grid
  class GridPacket {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
      this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
      this.axis = Math.random() > 0.5 ? 'x' : 'y';
      this.dir = Math.random() > 0.5 ? 1 : -1;
      this.speed = 0.8 + Math.random() * 1.4;
      this.life = 0;
      this.maxLife = 120 + Math.random() * 160;
      this.color = Math.random() > 0.3 ? colors.packetColor : colors.packetAccent;
      this.length = 16 + Math.random() * 24;
    }

    update() {
      this.life++;
      if (this.axis === 'x') {
        this.x += this.speed * this.dir;
      } else {
        this.y += this.speed * this.dir;
      }

      if (this.life >= this.maxLife || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }

    draw() {
      const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.45;
      ctx.save();
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (this.axis === 'x') {
        ctx.moveTo(this.x - this.length * this.dir, this.y);
        ctx.lineTo(this.x, this.y);
      } else {
        ctx.moveTo(this.x, this.y - this.length * this.dir);
        ctx.lineTo(this.x, this.y);
      }
      ctx.stroke();

      // Glowing head
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    const p = new GridPacket();
    p.life = Math.random() * p.maxLife; // Stagger lifecycle
    particles.push(p);
  }

  // Animation Loop
  let animationId;
  function render() {
    // Smooth lerp mouse coordinates
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Base Grid Lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = isLight ? colors.gridLight : colors.gridDark;
    ctx.beginPath();

    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // 2. Draw Interactive Spotlight Aura Around Cursor
    if (mouse.active) {
      const grad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, mouse.radius
      );
      grad.addColorStop(0, colors.spotlightInner);
      grad.addColorStop(0.5, colors.spotlightOuter);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();

      // Highlight local grid lines inside spotlight radius
      const startX = Math.max(0, Math.floor((mouse.x - mouse.radius) / gridSize) * gridSize);
      const endX = Math.min(width, Math.ceil((mouse.x + mouse.radius) / gridSize) * gridSize);
      const startY = Math.max(0, Math.floor((mouse.y - mouse.radius) / gridSize) * gridSize);
      const endY = Math.min(height, Math.ceil((mouse.y + mouse.radius) / gridSize) * gridSize);

      ctx.lineWidth = 1.2;
      for (let x = startX; x <= endX; x += gridSize) {
        for (let y = startY; y <= endY; y += gridSize) {
          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          if (dist < mouse.radius) {
            const intensity = (1 - dist / mouse.radius);
            ctx.fillStyle = `rgba(255, 51, 75, ${intensity * 0.65})`;
            ctx.beginPath();
            ctx.arc(x, y, 2.5 * intensity, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();
    }

    // 3. Draw and Update Drifting Data Packets
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationId = requestAnimationFrame(render);
  }

  render();

  // Page visibility API to pause rendering when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(render);
    }
  });
})();
