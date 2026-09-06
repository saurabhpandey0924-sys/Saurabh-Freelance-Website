/**
 * Saurabh's Freelance Platform - Real-Time Project Cost Calculator
 */

(function () {
  const BASE_PRICES = {
    'landing': { price: 999, name: 'Starter MVP / Landing Page', days: '5 - 7 Days' },
    'saas': { price: 2499, name: 'Full-Stack Custom SaaS Web App', days: '2 - 3 Weeks' },
    'ecommerce': { price: 1899, name: 'Headless E-Commerce Store', days: '10 - 14 Days' },
    'ai': { price: 3499, name: 'Custom AI Agent & Automation', days: '3 - 4 Weeks' }
  };

  const FEATURE_PRICES = {
    'auth': { price: 300, name: 'Authentication & Roles (RBAC)' },
    'payments': { price: 400, name: 'Stripe / Payment Gateway' },
    'ai-feature': { price: 600, name: 'LLM / AI Model Integration' },
    'analytics': { price: 450, name: 'Real-time Analytics Dashboard' },
    'seo-perf': { price: 250, name: '95+ Lighthouse Speed & SEO' },
    'multilang': { price: 350, name: 'Multi-language (i18n)' }
  };

  function initCalculator() {
    const calcWrapper = document.getElementById('project-cost-calculator');
    if (!calcWrapper) return;

    const typeInputs = document.querySelectorAll('input[name="calc-project-type"]');
    const screenSlider = document.getElementById('calc-screens-slider');
    const screenDisplay = document.getElementById('calc-screens-val');
    const featureCheckboxes = document.querySelectorAll('input[name="calc-feature"]');
    const speedSelect = document.getElementById('calc-speed-select');

    function calculate() {
      // 1. Get Base Project Type
      let selectedType = 'saas';
      typeInputs.forEach(input => {
        if (input.checked) selectedType = input.value;
      });
      const baseInfo = BASE_PRICES[selectedType] || BASE_PRICES['saas'];
      let totalPrice = baseInfo.price;

      // 2. Extra Screens Multiplier
      const screens = screenSlider ? parseInt(screenSlider.value, 10) : 5;
      if (screenDisplay) screenDisplay.textContent = `${screens} ${screens === 1 ? 'Screen / Page' : 'Screens / Pages'}`;
      
      let screenExtra = 0;
      if (screens > 5) {
        screenExtra = (screens - 5) * 120;
        totalPrice += screenExtra;
      }

      // 3. Selected Features
      let featuresTotal = 0;
      const selectedFeaturesList = [];
      featureCheckboxes.forEach(chk => {
        if (chk.checked && FEATURE_PRICES[chk.value]) {
          featuresTotal += FEATURE_PRICES[chk.value].price;
          selectedFeaturesList.push(FEATURE_PRICES[chk.value].name);
        }
      });
      totalPrice += featuresTotal;

      // 4. Speed Multiplier
      let speedMultiplier = 1;
      let speedTimeline = baseInfo.days;
      if (speedSelect && speedSelect.value === 'rush') {
        speedMultiplier = 1.25;
        totalPrice = Math.round(totalPrice * speedMultiplier);
        speedTimeline = 'Expedited Sprint (Priority Delivery)';
      }

      // 5. Update UI Output
      const priceOutput = document.getElementById('calc-output-price');
      const timelineOutput = document.getElementById('calc-output-timeline');
      const breakdownContainer = document.getElementById('calc-output-breakdown');

      if (priceOutput) {
        priceOutput.textContent = `$${totalPrice.toLocaleString()}`;
      }

      if (timelineOutput) {
        timelineOutput.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Estimated Timeline: ${speedTimeline}
        `;
      }

      if (breakdownContainer) {
        let breakdownHtml = `
          <li class="calc-breakdown-item">
            <span>Base (${baseInfo.name})</span>
            <span>$${baseInfo.price.toLocaleString()}</span>
          </li>
        `;

        if (screenExtra > 0) {
          breakdownHtml += `
            <li class="calc-breakdown-item">
              <span>Extra Scope (${screens} screens)</span>
              <span>+$${screenExtra.toLocaleString()}</span>
            </li>
          `;
        }

        if (featuresTotal > 0) {
          breakdownHtml += `
            <li class="calc-breakdown-item">
              <span>Selected Add-ons (${selectedFeaturesList.length})</span>
              <span>+$${featuresTotal.toLocaleString()}</span>
            </li>
          `;
        }

        if (speedMultiplier > 1) {
          breakdownHtml += `
            <li class="calc-breakdown-item" style="color:var(--accent-warning);">
              <span>Priority Rush Sprint (+25%)</span>
              <span>Included</span>
            </li>
          `;
        }

        breakdownHtml += `
          <li class="calc-breakdown-item total">
            <span>Estimated Investment</span>
            <span class="gradient-text">$${totalPrice.toLocaleString()}</span>
          </li>
        `;

        breakdownContainer.innerHTML = breakdownHtml;
      }

      // Store current estimate in window for booking autofill
      window.CURRENT_ESTIMATE = {
        type: baseInfo.name,
        screens: screens,
        features: selectedFeaturesList,
        price: `$${totalPrice.toLocaleString()}`,
        timeline: speedTimeline
      };
    }

    // Attach listeners
    typeInputs.forEach(i => i.addEventListener('change', calculate));
    if (screenSlider) screenSlider.addEventListener('input', calculate);
    featureCheckboxes.forEach(c => c.addEventListener('change', calculate));
    if (speedSelect) speedSelect.addEventListener('change', calculate);

    // Initial calculation
    calculate();

    // "Book This Scope" CTA autofill handler
    const bookBtn = document.getElementById('calc-book-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const messageInput = document.getElementById('contact-message');
        const subjectSelect = document.getElementById('contact-service-type');

        if (window.CURRENT_ESTIMATE && messageInput) {
          messageInput.value = `Hi Saurabh, I configured a custom project estimate via your calculator:\n\n` +
            `• Project Type: ${window.CURRENT_ESTIMATE.type}\n` +
            `• Scope: ${window.CURRENT_ESTIMATE.screens} screens\n` +
            `• Add-ons: ${window.CURRENT_ESTIMATE.features.length ? window.CURRENT_ESTIMATE.features.join(', ') : 'None'}\n` +
            `• Estimated Budget: ${window.CURRENT_ESTIMATE.price}\n` +
            `• Preferred Timeline: ${window.CURRENT_ESTIMATE.timeline}\n\n` +
            `Let's schedule a kickoff call to discuss next steps!`;
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initCalculator);
})();
