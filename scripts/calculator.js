/**
 * Saurabh's Freelance Platform - Real-Time Project Cost Calculator (INR / ₹)
 */

(function () {
  const BASE_PRICES = {
    'landing': { price: 24999, name: 'Starter MVP / Landing Page', days: '5 - 7 Days' },
    'saas': { price: 59999, name: 'Full-Stack Custom SaaS Web App', days: '2 - 3 Weeks' },
    'ecommerce': { price: 44999, name: 'Headless E-Commerce Store', days: '10 - 14 Days' },
    'ai': { price: 79999, name: 'Custom AI Agent & Automation', days: '3 - 4 Weeks' }
  };

  const FEATURE_PRICES = {
    'auth': { price: 7500, name: 'Authentication & Roles (RBAC)' },
    'payments': { price: 10000, name: 'Payment Gateway (UPI / Cards)' },
    'ai-feature': { price: 15000, name: 'LLM / AI Model Integration' },
    'analytics': { price: 12000, name: 'Real-time Analytics Dashboard' },
    'seo-perf': { price: 6000, name: '95+ Lighthouse Speed & SEO' },
    'multilang': { price: 8500, name: 'Multi-language (i18n)' }
  };

  function formatINR(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

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
        screenExtra = (screens - 5) * 3000;
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
        priceOutput.textContent = formatINR(totalPrice);
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
            <span>${formatINR(baseInfo.price)}</span>
          </li>
        `;

        if (screenExtra > 0) {
          breakdownHtml += `
            <li class="calc-breakdown-item">
              <span>Extra Scope (${screens} screens)</span>
              <span>+${formatINR(screenExtra)}</span>
            </li>
          `;
        }

        if (featuresTotal > 0) {
          breakdownHtml += `
            <li class="calc-breakdown-item">
              <span>Selected Add-ons (${selectedFeaturesList.length})</span>
              <span>+${formatINR(featuresTotal)}</span>
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
            <span class="gradient-text">${formatINR(totalPrice)}</span>
          </li>
        `;

        breakdownContainer.innerHTML = breakdownHtml;
      }

      // Store current estimate in window for booking autofill
      window.CURRENT_ESTIMATE = {
        type: baseInfo.name,
        screens: screens,
        features: selectedFeaturesList,
        price: formatINR(totalPrice),
        timeline: speedTimeline
      };
    }

    // Attach listeners for Project Cost Estimator
    typeInputs.forEach(i => i.addEventListener('change', calculate));
    if (screenSlider) screenSlider.addEventListener('input', calculate);
    featureCheckboxes.forEach(c => c.addEventListener('change', calculate));
    if (speedSelect) speedSelect.addEventListener('change', calculate);

    // Initial cost calculation
    calculate();

    // =========================================================================
    // DUAL-MODE SWITCHER (Cost Estimator vs Business ROI Calculator)
    // =========================================================================
    const btnCost = document.getElementById('mode-btn-cost');
    const btnRoi = document.getElementById('mode-btn-roi');
    const costPanel = document.getElementById('project-cost-calculator');
    const roiPanel = document.getElementById('project-roi-calculator');

    if (btnCost && btnRoi && costPanel && roiPanel) {
      btnCost.addEventListener('click', () => {
        btnCost.classList.add('active');
        btnRoi.classList.remove('active');
        costPanel.style.display = 'grid';
        roiPanel.style.display = 'none';
      });

      btnRoi.addEventListener('click', () => {
        btnRoi.classList.add('active');
        btnCost.classList.remove('active');
        costPanel.style.display = 'none';
        roiPanel.style.display = 'grid';
        calculateRoi();
      });
    }

    // =========================================================================
    // BUSINESS ROI & TIME SAVINGS CALCULATOR LOGIC (KrGo Beat Feature)
    // =========================================================================
    const roiTeamSlider = document.getElementById('roi-team-slider');
    const roiHoursSlider = document.getElementById('roi-hours-slider');
    const roiRateSlider = document.getElementById('roi-rate-slider');

    const roiTeamDisplay = document.getElementById('roi-team-val');
    const roiHoursDisplay = document.getElementById('roi-hours-val');
    const roiRateDisplay = document.getElementById('roi-rate-val');

    const roiOutputSavings = document.getElementById('roi-output-savings');
    const roiOutputHours = document.getElementById('roi-output-hours');
    const roiOutputEfficiency = document.getElementById('roi-output-efficiency');

    function calculateRoi() {
      if (!roiTeamSlider || !roiHoursSlider || !roiRateSlider) return;

      const team = parseInt(roiTeamSlider.value, 10);
      const hours = parseInt(roiHoursSlider.value, 10);
      const rate = parseInt(roiRateSlider.value, 10);

      if (roiTeamDisplay) roiTeamDisplay.textContent = `${team} ${team === 1 ? 'Member' : 'Members'}`;
      if (roiHoursDisplay) roiHoursDisplay.textContent = `${hours} Hours / Week`;
      if (roiRateDisplay) roiRateDisplay.textContent = `₹${rate.toLocaleString('en-IN')} / Hour`;

      // 75% average reduction in manual repetitive tasks via custom web apps & automation
      const monthlyHoursSaved = Math.round(team * hours * 4.33 * 0.75);
      const annualFinancialSavings = Math.round(monthlyHoursSaved * 12 * rate);
      const efficiencyGain = Math.min(85, Math.max(60, Math.round(hours * 3.8)));

      if (roiOutputSavings) {
        roiOutputSavings.textContent = formatINR(annualFinancialSavings);
      }
      if (roiOutputHours) {
        roiOutputHours.textContent = `${monthlyHoursSaved.toLocaleString('en-IN')} hrs`;
      }
      if (roiOutputEfficiency) {
        roiOutputEfficiency.textContent = `+${efficiencyGain}%`;
      }

      window.CURRENT_ROI_ESTIMATE = {
        team: team,
        hours: hours,
        rate: rate,
        hoursSaved: monthlyHoursSaved,
        annualSavings: formatINR(annualFinancialSavings),
        efficiency: `+${efficiencyGain}%`
      };
    }

    if (roiTeamSlider) roiTeamSlider.addEventListener('input', calculateRoi);
    if (roiHoursSlider) roiHoursSlider.addEventListener('input', calculateRoi);
    if (roiRateSlider) roiRateSlider.addEventListener('input', calculateRoi);

    // Initial ROI calculation
    calculateRoi();

    // "Book This Scope" CTA autofill handler
    const bookBtn = document.getElementById('calc-book-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const messageInput = document.getElementById('contact-message');
        const subjectSelect = document.getElementById('contact-service-type');
        const budgetSelect = document.getElementById('contact-budget');
        const nameInput = document.getElementById('contact-name');

        if (window.CURRENT_ESTIMATE && messageInput) {
          messageInput.value = `Hi Saurabh, I configured a custom project estimate via your calculator:\n\n` +
            `• Project Type: ${window.CURRENT_ESTIMATE.type}\n` +
            `• Scope: ${window.CURRENT_ESTIMATE.screens} screens\n` +
            `• Add-ons: ${window.CURRENT_ESTIMATE.features.length ? window.CURRENT_ESTIMATE.features.join(', ') : 'None'}\n` +
            `• Estimated Budget: ${window.CURRENT_ESTIMATE.price}\n` +
            `• Preferred Timeline: ${window.CURRENT_ESTIMATE.timeline}\n\n` +
            `Let's schedule a kickoff call to discuss next steps!`;

          // Sync service select
          if (subjectSelect) {
            if (window.CURRENT_ESTIMATE.type.includes('SaaS')) {
              subjectSelect.value = 'Custom SaaS / MVP';
            } else if (window.CURRENT_ESTIMATE.type.includes('AI')) {
              subjectSelect.value = 'AI Integration';
            } else if (window.CURRENT_ESTIMATE.type.includes('E-Commerce')) {
              subjectSelect.value = 'Headless E-Commerce';
            } else {
              subjectSelect.value = 'Full-Stack Web App';
            }
          }

          // Sync budget select
          if (budgetSelect) {
            const rawPrice = parseInt(window.CURRENT_ESTIMATE.price.replace(/[^0-9]/g, ''), 10);
            if (rawPrice < 50000) {
              budgetSelect.value = '₹20,000 - ₹50,000';
            } else if (rawPrice < 100000) {
              budgetSelect.value = '₹50,000 - ₹1,00,000';
            } else if (rawPrice < 250000) {
              budgetSelect.value = '₹1,00,000 - ₹2,50,000';
            } else {
              budgetSelect.value = '₹2,50,000+';
            }
          }
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (nameInput) nameInput.focus();
            if (window.showToast) {
              window.showToast('🎯 Scope & estimated quote transferred! Fill in your contact info.', 'success');
            }
          }, 600);
        }
      });
    }

    // "Automate These Workflows" ROI CTA handler
    const roiBookBtn = document.getElementById('roi-book-btn');
    if (roiBookBtn) {
      roiBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const messageInput = document.getElementById('contact-message');
        const subjectSelect = document.getElementById('contact-service-type');
        const nameInput = document.getElementById('contact-name');

        if (window.CURRENT_ROI_ESTIMATE && messageInput) {
          messageInput.value = `Hi Saurabh, I calculated our team's potential savings via your Business ROI Calculator:\n\n` +
            `• Team Size: ${window.CURRENT_ROI_ESTIMATE.team} staff members\n` +
            `• Repetitive Manual Work: ${window.CURRENT_ROI_ESTIMATE.hours} hrs/week/person\n` +
            `• Projected Time Saved: ${window.CURRENT_ROI_ESTIMATE.hoursSaved} hrs/month\n` +
            `• Projected Annual Cost Savings: ${window.CURRENT_ROI_ESTIMATE.annualSavings}\n` +
            `• Expected Efficiency Uplift: ${window.CURRENT_ROI_ESTIMATE.efficiency}\n\n` +
            `I'd like to explore how custom web software and workflow automation can achieve these results for our company.`;

          if (subjectSelect) {
            subjectSelect.value = 'Enterprise ERP & Portal';
          }
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (nameInput) nameInput.focus();
            if (window.showToast) {
              window.showToast('📈 Business ROI calculation transferred! Send your inquiry.', 'success');
            }
          }, 600);
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initCalculator);
})();
