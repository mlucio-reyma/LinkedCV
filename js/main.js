const SELECTORS = {
  navLinks: ".nav__link",
  navMenu: ".nav__menu",
  navToggle: ".nav__toggle",
  backToTop: ".back-to-top",
  sections: ".section",
  cards: ".card",
  skillBars: ".skill-bar__fill",
  copyEmail: "[data-copy-email]",
  toast: ".toast",
  hero: ".hero",
  heroTagline: "#hero-tagline"
};

const state = {
  typingTimeout: null
};

const easeOutQuad = (t) => t * (2 - t);

const smoothScrollTo = (target, duration = 500) => {
  if (!target) return;
  const headerOffset = document.querySelector(".header")?.offsetHeight || 0;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset + 4;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuad(progress);
    window.scrollTo(0, startPosition + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const initSmoothScroll = () => {
  document.querySelectorAll(SELECTORS.navLinks).forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      smoothScrollTo(target, 500);
      closeMobileMenu();
    });
  });
};

const toggleMobileMenu = () => {
  const menu = document.querySelector(SELECTORS.navMenu);
  const toggle = document.querySelector(SELECTORS.navToggle);
  if (!menu || !toggle) return;
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
};

const closeMobileMenu = () => {
  const menu = document.querySelector(SELECTORS.navMenu);
  const toggle = document.querySelector(SELECTORS.navToggle);
  if (!menu || !toggle) return;
  if (menu.classList.contains("is-open")) {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
};

const initMobileMenu = () => {
  const toggle = document.querySelector(SELECTORS.navToggle);
  if (!toggle) return;
  toggle.addEventListener("click", toggleMobileMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
};

const initBackToTop = () => {
  const btn = document.querySelector(SELECTORS.backToTop);
  if (!btn) return;
  btn.addEventListener("click", () => smoothScrollTo(document.body, 500));
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  });
};

const initIntersectionAnimations = () => {
  const elements = [...document.querySelectorAll(SELECTORS.sections), ...document.querySelectorAll(SELECTORS.cards)];
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
};

const initSkillBars = () => {
  const bars = document.querySelectorAll(SELECTORS.skillBars);
  if (!bars.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute("data-level") || "0";
          bar.style.width = `${level}%`;
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );
  bars.forEach((bar) => observer.observe(bar));
};

const showToast = (message) => {
  const toast = document.querySelector(SELECTORS.toast);
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 2500);
};

const initCopyEmail = () => {
  const button = document.querySelector(SELECTORS.copyEmail);
  if (!button) return;
  const email = "mluccio@malrdev.com";
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast(document.body.dataset.toastCopy || "Email copiado");
    } catch (error) {
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      tempInput.remove();
      showToast(document.body.dataset.toastCopy || "Email copiado");
    }
  });
};

const typeText = (element, text) => {
  if (!element) return;
  element.textContent = "";
  if (state.typingTimeout) clearTimeout(state.typingTimeout);
  let index = 0;
  const speed = 20;
  const type = () => {
    element.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      state.typingTimeout = setTimeout(type, speed);
    }
  };
  type();
};

const initTyping = () => {
  const el = document.querySelector(SELECTORS.heroTagline);
  if (!el) return;
  typeText(el, el.textContent.trim());
  document.addEventListener("i18n:updated", (event) => {
    const text = event.detail?.heroTagline;
    if (text) typeText(el, text);
  });
};

const initParallax = () => {
  const hero = document.querySelector(SELECTORS.hero);
  if (!hero) return;
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.2;
    hero.style.backgroundPosition = `center ${offset}px`;
  });
};

const initScrollSpy = () => {
  const sections = document.querySelectorAll(SELECTORS.sections);
  const links = document.querySelectorAll(SELECTORS.navLinks);
  if (!sections.length || !links.length) return;
  const sectionMap = [...sections].map((section) => ({
    id: section.getAttribute("id"),
    top: section.offsetTop
  }));

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + (document.querySelector(".header")?.offsetHeight || 0) + 8;
    let currentId = sectionMap[0]?.id;
    sectionMap.forEach((section) => {
      if (scrollPos >= section.top) currentId = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
    });
  });
};

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initMobileMenu();
  initBackToTop();
  initIntersectionAnimations();
  initSkillBars();
  initCopyEmail();
  initTyping();
  initParallax();
  initScrollSpy();
  registerServiceWorker();
});
