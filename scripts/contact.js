/**
 * Saurabh's Freelance Platform - Contact & Lead Handling
 */

(function () {
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const serviceSelect = document.getElementById('contact-service-type');
      const budgetSelect = document.getElementById('contact-budget');
      const messageInput = document.getElementById('contact-message');
      const submitBtn = document.getElementById('contact-submit-btn');

      // Simple validation
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Show loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        <span>Sending Inquiry...</span>
      `;

      // Simulate sending inquiry (2s)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('🎉 Thank you! Your message has been sent. Saurabh will respond within 4-6 hours.', 'success');
        form.reset();
      }, 1500);
    });
  }

  function showToast(message, type = 'success') {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      document.body.appendChild(toast);
    }

    const isSuccess = type === 'success';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: ${isSuccess ? '#0F172A' : '#7F1D1D'};
      color: #FFFFFF;
      border: 1px solid ${isSuccess ? '#10B981' : '#EF4444'};
      border-radius: 12px;
      padding: 16px 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      font-size: 0.95rem;
      font-weight: 500;
      z-index: 9999;
      max-width: 400px;
      display: flex;
      align-items: center;
      gap: 12px;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    toast.innerHTML = `
      <span>${isSuccess ? '✅' : '⚠️'}</span>
      <span>${message}</span>
    `;

    // Trigger animation
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 4500);
  }

  window.showToast = showToast;
  document.addEventListener('DOMContentLoaded', initContactForm);
})();
