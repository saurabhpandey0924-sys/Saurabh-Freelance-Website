/**
 * Saurabh's Freelance Platform - Case Study Modal System
 */

(function () {
  let modalBackdrop = null;
  let modalContainer = null;

  function initModal() {
    modalBackdrop = document.getElementById('project-modal');
    modalContainer = document.getElementById('modal-content-container');
    
    if (!modalBackdrop) return;

    // Close on backdrop click
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    });

    // Close button click listener
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  }

  function openProjectModal(projectId) {
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !modalContainer) return;

    const metricsHtml = project.metrics.map(m => `
      <div class="project-metric-item">
        <div class="project-metric-val">${m.value}</div>
        <div class="project-metric-lbl">${m.label}</div>
      </div>
    `).join('');

    const techHtml = project.techStack.map(t => `
      <span class="tech-pill">${t}</span>
    `).join('');

    const featuresHtml = project.caseStudy.keyFeatures.map(f => `
      <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; font-size:0.95rem; color:var(--text-secondary);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" style="flex-shrink:0; margin-top:3px;"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');

    modalContainer.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="badge badge-live" style="margin-bottom: 12px;">${project.categoryLabel}</span>
        <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 8px;">${project.title}</h2>
        <p style="color: var(--accent-secondary); font-weight: 600; font-size: 0.95rem;">${project.caseStudy.client}</p>
      </div>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 30px; border: 1px solid var(--border-medium); box-shadow: var(--shadow-md);">
        <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
      </div>

      <div class="project-metrics-row" style="margin-bottom: 30px; padding: 18px 24px; background: rgba(99, 102, 241, 0.08); border-color: rgba(99, 102, 241, 0.25);">
        ${metricsHtml}
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 32px;">
        <div style="background: rgba(255, 255, 255, 0.02); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 1.1rem; color: #EF4444; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            The Challenge
          </h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${project.caseStudy.challenge}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.02); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 1.1rem; color: #10B981; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            The Solution
          </h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${project.caseStudy.solution}</p>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 1.25rem; margin-bottom: 14px;">Key Deliverables & Innovations</h3>
        <ul style="list-style: none;">
          ${featuresHtml}
        </ul>
      </div>

      <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: var(--radius-md); padding: 20px; margin-bottom: 30px;">
        <h4 style="font-size: 1.05rem; color: var(--accent-secondary); margin-bottom: 6px;">Business Outcome & Impact</h4>
        <p style="font-size: 0.92rem; color: var(--text-primary);">${project.caseStudy.results}</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${techHtml}
        </div>
        <div style="display: flex; gap: 12px;">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <span>Live Interactive Demo</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <a href="#contact" onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow='auto';" class="btn btn-secondary btn-sm">
            <span>Build Similar Project</span>
          </a>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  window.openProjectModal = openProjectModal;
  window.closeModal = closeModal;

  document.addEventListener('DOMContentLoaded', initModal);
})();
