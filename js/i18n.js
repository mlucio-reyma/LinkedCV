const I18N = {
  current: "es",
  translations: {},
  supported: ["es", "en"],
  async init() {
    this.current = this.detectLanguage();
    await this.loadTranslations();
    this.applyTranslations();
    this.bindLanguageToggle();
  },
  safeGetStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  safeSetStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  },
  detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get("lang");
    if (this.supported.includes(paramLang)) {
      this.safeSetStorage("lang", paramLang);
      return paramLang;
    }
    const stored = this.safeGetStorage("lang");
    if (this.supported.includes(stored)) return stored;
    const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
    return browserLang;
  },
  async loadTranslations() {
    const [es, en] = await Promise.all([
      fetch("lang/es.json").then((res) => res.json()),
      fetch("lang/en.json").then((res) => res.json())
    ]);
    this.translations = { es, en };
  },
  getValue(path) {
    const value = path.split(".").reduce((obj, key) => (obj ? obj[key] : null), this.translations[this.current]);
    if (value !== null && value !== undefined) return value;
    const fallback = path.split(".").reduce((obj, key) => (obj ? obj[key] : null), this.translations.en);
    return fallback ?? path;
  },
  applyTranslations() {
    document.documentElement.lang = this.current;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = this.getValue(key);
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const mapping = el.getAttribute("data-i18n-attr");
      mapping.split("|").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const value = this.getValue(key);
        if (value) el.setAttribute(attr, value);
      });
    });

    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      const flag = toggle.querySelector(".lang-toggle__flag");
      const text = toggle.querySelector(".lang-toggle__text");
      if (flag && text) {
        flag.textContent = this.current === "es" ? "🇪🇸" : "🇬🇧";
        text.textContent = this.current.toUpperCase();
      }
    }

    document.querySelectorAll("[data-download-cv]").forEach((link) => {
      link.setAttribute("href", `assets/docs/CV_${this.current.toUpperCase()}.pdf`);
    });

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const descriptionValue = this.getValue("meta.description");
    if (descriptionValue) {
      metaDescription?.setAttribute("content", descriptionValue);
      ogDescription?.setAttribute("content", descriptionValue);
      twitterDescription?.setAttribute("content", descriptionValue);
    }

    document.body.dataset.toastCopy = this.getValue("toast.copySuccess");

    document.dispatchEvent(
      new CustomEvent("i18n:updated", {
        detail: {
          heroTagline: this.getValue("hero.tagline")
        }
      })
    );
  },
  switchLanguage() {
    this.current = this.current === "es" ? "en" : "es";
    this.safeSetStorage("lang", this.current);
    this.applyTranslations();
  },
  bindLanguageToggle() {
    const toggle = document.querySelector("[data-action=toggle-language]");
    if (!toggle) return;
    toggle.addEventListener("click", () => this.switchLanguage());
  }
};

document.addEventListener("DOMContentLoaded", () => {
  I18N.init().catch(() => {});
});
