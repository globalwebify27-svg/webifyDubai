/**
 * GLOBAL WEBIFY — JAVASCRIPT
 * Standalone vanilla JS for navigation, 3D sequential text roll, and interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // 1. SEQUENTIAL 3D TEXT ROLL ANIMATION
  // =========================================================================
  const lineOneEl = document.getElementById("text-roll-line1");
  const lineTwoEl = document.getElementById("text-roll-line2");
  const lineThreeEl = document.getElementById("text-roll-line3");

  const DURATION = 0.45;     // seconds per char flip
  const STAGGER = 0.035;     // seconds between characters
  const EXIT_OFFSET = 0.12;  // seconds offset between enter & exit flip

  function setupTextRoll(el, startDelay) {
    if (!el) return 0;
    const text = el.textContent.trim();
    el.textContent = "";

    const chars = text.split("");
    chars.forEach((char, i) => {
      const charWrap = document.createElement("span");
      charWrap.className = "text-roll-char";

      const enterSpan = document.createElement("span");
      enterSpan.className = "roll-enter";
      enterSpan.textContent = char === " " ? "\u00A0" : char;
      const enterDelay = startDelay + i * STAGGER;
      enterSpan.style.animationDelay = `${enterDelay}s`;
      enterSpan.style.animationDuration = `${DURATION}s`;

      const exitSpan = document.createElement("span");
      exitSpan.className = "roll-exit";
      exitSpan.textContent = char === " " ? "\u00A0" : char;
      const exitDelay = startDelay + i * STAGGER + EXIT_OFFSET;
      exitSpan.style.animationDelay = `${exitDelay}s`;
      exitSpan.style.animationDuration = `${DURATION}s`;

      const ghostSpan = document.createElement("span");
      ghostSpan.className = "roll-ghost";
      ghostSpan.textContent = char === " " ? "\u00A0" : char;

      charWrap.appendChild(enterSpan);
      charWrap.appendChild(exitSpan);
      charWrap.appendChild(ghostSpan);
      el.appendChild(charWrap);
    });

    // Return the timestamp when the last character finishes
    const lastCharIndex = chars.length - 1;
    return startDelay + lastCharIndex * STAGGER + EXIT_OFFSET + DURATION;
  }

  // Chain line 1, then line 2, then line 3
  const lineOneFinishTime = setupTextRoll(lineOneEl, 0.1);
  const lineTwoFinishTime = setupTextRoll(lineTwoEl, lineOneFinishTime * 0.45);
  setupTextRoll(lineThreeEl, lineTwoFinishTime * 0.8);

  // =========================================================================
  // 1B. 3D FLIP TEXT LOOP ANIMATION (Pill Badge)
  // =========================================================================
  const textLoopEl = document.getElementById("text-loop-item");
  if (textLoopEl) {
    const loopPhrases = [
      "next big move",
      "scalable growth",
      "digital breakthrough",
      "business future"
    ];
    let loopIndex = 0;

    setInterval(() => {
      textLoopEl.classList.add("flip-out");
      setTimeout(() => {
        loopIndex = (loopIndex + 1) % loopPhrases.length;
        textLoopEl.textContent = loopPhrases[loopIndex];
        textLoopEl.classList.remove("flip-out");
        textLoopEl.classList.add("flip-in");

        // Trigger reflow to apply flip-in
        void textLoopEl.offsetWidth;
        textLoopEl.classList.remove("flip-in");
      }, 400);
    }, 2800);
  }

  // =========================================================================
  // 2. NAVBAR SCROLL EFFECT
  // =========================================================================
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // =========================================================================
  // 3. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    // Close when clicking any menu link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  // =========================================================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });
});



  // =========================================================================
  // 5. LEAD FORM SUBMISSION & THANK YOU STATE
  // =========================================================================
  window.selectService = function(serviceName) {
    const leadSection = document.getElementById("lead-form");
    if (leadSection) {
      leadSection.scrollIntoView({ behavior: "smooth" });
    }
    const messageInput = document.getElementById("lead-message");
    if (messageInput) {
      messageInput.value = `Hi, I am interested in ${serviceName}. Please provide a quotation and project roadmap.`;
    }
  };

  // Math Captcha Logic
  let captchaNum1 = 7;
  let captchaNum2 = 9;
  const captchaN1El = document.getElementById("captcha-n1");
  const captchaN2El = document.getElementById("captcha-n2");
  const captchaInputEl = document.getElementById("captcha-input");
  const captchaErrorEl = document.getElementById("captcha-error-msg");
  const btnRefreshCaptcha = document.getElementById("btn-refresh-captcha");

  function refreshCaptcha() {
    captchaNum1 = Math.floor(Math.random() * 9) + 1;
    captchaNum2 = Math.floor(Math.random() * 9) + 1;
    if (captchaN1El) captchaN1El.textContent = captchaNum1;
    if (captchaN2El) captchaN2El.textContent = captchaNum2;
    if (captchaInputEl) captchaInputEl.value = "";
    if (captchaErrorEl) captchaErrorEl.style.display = "none";
  }

  if (btnRefreshCaptcha) {
    btnRefreshCaptcha.addEventListener("click", refreshCaptcha);
  }
  refreshCaptcha();

  const leadForm = document.getElementById("lead-capture-form");
  const thankYouView = document.getElementById("lead-thank-you-view");
  const userNamePlaceholder = document.getElementById("lead-user-name");
  const userEmailPlaceholder = document.getElementById("lead-user-email");
  const resetFormBtn = document.getElementById("btn-reset-lead-form");

  if (leadForm && thankYouView) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (captchaInputEl) {
        const val = parseInt(captchaInputEl.value.trim(), 10);
        if (val !== captchaNum1 + captchaNum2) {
          if (captchaErrorEl) captchaErrorEl.style.display = "block";
          return;
        }
      }

      const submitBtn = leadForm.querySelector(".btn-submit-quote");
      if (submitBtn) {
        submitBtn.textContent = "Sending Request...";
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        const nameVal = document.getElementById("lead-name")?.value || "Partner";
        const emailVal = document.getElementById("lead-email")?.value || "your email";

        if (userNamePlaceholder) userNamePlaceholder.textContent = nameVal;
        if (userEmailPlaceholder) userEmailPlaceholder.textContent = emailVal;

        leadForm.style.display = "none";
        thankYouView.classList.add("active");
      }, 500);
    });

    if (resetFormBtn) {
      resetFormBtn.addEventListener("click", () => {
        leadForm.reset();
        refreshCaptcha();
        const submitBtn = leadForm.querySelector(".btn-submit-quote");
        if (submitBtn) {
          submitBtn.innerHTML = `<span>GET FREE QUOTE</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
          submitBtn.disabled = false;
        }
        thankYouView.classList.remove("active");
        leadForm.style.display = "block";
      });
    }
  }

  // =========================================================================
  // 6. POPUP QUOTE MODAL CONTROLLER
  // =========================================================================
  const quoteModal = document.getElementById("quote-modal");
  const modalForm = document.getElementById("modal-quote-form");
  const modalThankYou = document.getElementById("modal-thank-you");
  const modalCapN1 = document.getElementById("modal-cap-n1");
  const modalCapN2 = document.getElementById("modal-cap-n2");
  const modalCapAns = document.getElementById("modal-cap-ans");
  const modalCapError = document.getElementById("modal-cap-error");
  const modalSubmitBtn = document.getElementById("modal-submit-btn");
  const modalMessageInput = document.getElementById("modal-message");

  let modalNum1 = 7;
  let modalNum2 = 9;

  window.refreshModalCaptcha = function() {
    modalNum1 = Math.floor(Math.random() * 9) + 1;
    modalNum2 = Math.floor(Math.random() * 9) + 1;
    if (modalCapN1) modalCapN1.textContent = modalNum1;
    if (modalCapN2) modalCapN2.textContent = modalNum2;
    if (modalCapAns) modalCapAns.value = "";
    if (modalCapError) modalCapError.style.display = "none";
  };

  window.openQuoteModal = function(serviceName) {
    if (!quoteModal) return;
    refreshModalCaptcha();
    if (modalForm) {
      modalForm.reset();
      modalForm.style.display = "block";
    }
    if (modalThankYou) {
      modalThankYou.classList.remove("active");
    }
    if (modalSubmitBtn) {
      modalSubmitBtn.innerHTML = `<span>GET FREE QUOTE</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
      modalSubmitBtn.disabled = false;
    }
    if (serviceName && modalMessageInput) {
      modalMessageInput.value = `Hi, I am interested in ${serviceName}. Please share a quote and roadmap.`;
    }
    quoteModal.classList.add("active");
    quoteModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  window.closeQuoteModal = function() {
    if (!quoteModal) return;
    quoteModal.classList.remove("active");
    quoteModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  window.handleModalBackdropClick = function(e) {
    if (e.target === quoteModal) {
      closeQuoteModal();
    }
  };

  window.handleModalSubmit = function(e) {
    e.preventDefault();
    if (modalCapAns) {
      const val = parseInt(modalCapAns.value.trim(), 10);
      if (val !== modalNum1 + modalNum2) {
        if (modalCapError) modalCapError.style.display = "block";
        return;
      }
    }

    if (modalSubmitBtn) {
      modalSubmitBtn.innerHTML = `<span>SENDING...</span>`;
      modalSubmitBtn.disabled = true;
    }

    setTimeout(() => {
      const name = document.getElementById("modal-name")?.value || "Valued Client";
      const tyNameEl = document.getElementById("modal-ty-name");
      if (tyNameEl) tyNameEl.textContent = name;

      if (modalForm) modalForm.style.display = "none";
      if (modalThankYou) modalThankYou.classList.add("active");
    }, 500);
  };

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && quoteModal && quoteModal.classList.contains("active")) {
      closeQuoteModal();
    }
  });

  // Attach click to any element with .btn-open-quote-modal
  document.querySelectorAll(".btn-open-quote-modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openQuoteModal();
    });
  });

  // Update selectService so it also opens the modal
  const originalSelectService = window.selectService;
  window.selectService = function(serviceName) {
    if (typeof openQuoteModal === "function") {
      openQuoteModal(serviceName);
    } else if (originalSelectService) {
      originalSelectService(serviceName);
    }
  };

  // Auto-open quote modal after 6 seconds (between 5 and 7 seconds)
  setTimeout(() => {
    if (quoteModal && !quoteModal.classList.contains("active")) {
      openQuoteModal();
    }
  }, 6000);

  window.setMobileBottomActive = function(el) {
    document.querySelectorAll(".mobile-bottom-item").forEach((item) => {
      item.classList.remove("active");
    });
    if (el) el.classList.add("active");
  };

  // =========================================================================
  // COUNTRY CODE DROPDOWN SELECTOR (Lead Form & Quote Modal)
  // =========================================================================
  const COUNTRIES_LIST = [
    { name: "United Arab Emirates (Dubai)", code: "AE", dial: "+971", flag: "🇦🇪" },
    { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
    { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
    { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
    { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
    { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
    { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
    { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
    { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
    { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
    { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
    { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
    { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
    { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
    { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
    { name: "Sweden", code: "SE", dial: "+46", flag: "🇸🇪" },
    { name: "Norway", code: "NO", dial: "+47", flag: "🇳🇴" },
    { name: "Denmark", code: "DK", dial: "+45", flag: "🇩🇰" },
    { name: "Finland", code: "FI", dial: "+358", flag: "🇫🇮" },
    { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
    { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
    { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
    { name: "South Korea", code: "KR", dial: "+82", flag: "🇰🇷" },
    { name: "Hong Kong", code: "HK", dial: "+852", flag: "🇭🇰" },
    { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
    { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
    { name: "Philippines", code: "PH", dial: "+63", flag: "🇵🇭" },
    { name: "Thailand", code: "TH", dial: "+66", flag: "🇹🇭" },
    { name: "Vietnam", code: "VN", dial: "+84", flag: "🇻🇳" },
    { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
    { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
    { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
    { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
    { name: "Israel", code: "IL", dial: "+972", flag: "🇮🇱" },
    { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
    { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
    { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
    { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
    { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
    { name: "Austria", code: "AT", dial: "+43", flag: "🇦🇹" },
    { name: "Poland", code: "PL", dial: "+48", flag: "🇵🇱" },
    { name: "Czech Republic", code: "CZ", dial: "+420", flag: "🇨🇿" },
    { name: "Romania", code: "RO", dial: "+40", flag: "🇷🇴" },
    { name: "Hungary", code: "HU", dial: "+36", flag: "🇭🇺" },
    { name: "Greece", code: "GR", dial: "+30", flag: "🇬🇷" },
    { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
    { name: "Mexico", code: "MX", dial: "+52", flag: "🇲🇽" },
    { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
    { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
    { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
    { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
    { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
    { name: "Sri Lanka", code: "LK", dial: "+94", flag: "🇱🇰" },
    { name: "Nepal", code: "NP", dial: "+977", flag: "🇳🇵" },
  ];

  function initCountryDropdown(wrapperId, btnId, flagSelector, dialSelector) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const btn = document.getElementById(btnId);
    const searchInput = wrapper.querySelector(".country-search-input");
    const optionsContainer = wrapper.querySelector(".country-options-list");
    let selectedCode = "AE";

    function renderList(query = "") {
      const q = query.toLowerCase().trim();
      const filtered = COUNTRIES_LIST.filter(
        (c) =>
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.dial.includes(q) ||
          c.code.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        optionsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; font-size: 12.5px; color: #9ca3af;">No countries found</div>`;
        return;
      }

      optionsContainer.innerHTML = filtered
        .map(
          (c) => `
        <button type="button" class="country-option-item ${c.code === selectedCode ? "selected" : ""}" data-code="${c.code}" data-dial="${c.dial}" data-flag="${c.flag}">
          <div class="country-option-left">
            <span class="flag">${c.flag}</span>
            <span class="name">${c.name}</span>
          </div>
          <span class="country-option-dial">${c.dial}</span>
        </button>
      `
        )
        .join("");

      optionsContainer.querySelectorAll(".country-option-item").forEach((item) => {
        item.addEventListener("click", () => {
          const code = item.dataset.code;
          const dial = item.dataset.dial;
          const flag = item.dataset.flag;
          selectedCode = code;

          const flagEl = btn.querySelector(flagSelector);
          const dialEl = btn.querySelector(dialSelector);
          if (flagEl) flagEl.textContent = flag;
          if (dialEl) dialEl.textContent = dial;

          wrapper.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          if (searchInput) searchInput.value = "";
          renderList();
        });
      });
    }

    renderList();

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains("open");
      // Close other country selects
      document.querySelectorAll(".country-select-wrapper.open").forEach((w) => {
        w.classList.remove("open");
        const b = w.querySelector(".country-select-btn");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        wrapper.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 60);
        }
      }
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        renderList(e.target.value);
      });
      searchInput.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  initCountryDropdown("lead-country-select-wrap", "lead-country-btn", ".country-flag", ".country-dial");
  initCountryDropdown("modal-country-select-wrap", "modal-country-btn", ".country-flag", ".country-dial");

  // Rotating Hero Words
  const rotatingEl = document.getElementById("hero-rotating-word");
  if (rotatingEl) {
    const words = ["Software", "Applications", "CRM Systems", "Websites", "Digital Platforms"];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % words.length;
      rotatingEl.style.opacity = "0";
      rotatingEl.style.transform = "translateY(12px)";
      setTimeout(() => {
        rotatingEl.textContent = words[idx];
        rotatingEl.style.opacity = "1";
        rotatingEl.style.transform = "translateY(0)";
      }, 180);
    }, 2800);
  }
});
