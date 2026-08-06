/* =========================================================================
   GHAITH GHRAIRI — PORTFOLIO
   script.js — vanilla JS interactions (no framework, no dependencies)
   ========================================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------- Loader -------------------------------- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (!loader) return;
    setTimeout(function () {
      loader.classList.add("is-hidden");
      setTimeout(function () { loader.style.display = "none"; }, 650);
    }, 450);
  });

  /* -------------------------------- Footer year --------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------------------------------- Navbar scroll state -------------------- */
  var navbar = document.getElementById("navbar");
  function onScrollNav() {
    if (window.scrollY > 40) navbar.classList.add("is-scrolled");
    else navbar.classList.remove("is-scrolled");
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  /* -------------------------------- Mobile nav toggle ----------------------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* -------------------------------- Scroll-spy (nav + side-nav) ------------- */
  var sections = ["hero", "about", "skills", "journey", "projects", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var navAnchors = document.querySelectorAll(".nav-links a[data-nav]");
  var sideVias = document.querySelectorAll("#side-nav .via");

  function setActive(id) {
    navAnchors.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === id);
    });
    sideVias.forEach(function (v) {
      v.classList.toggle("is-active", v.getAttribute("data-target") === id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  sideVias.forEach(function (via) {
    via.addEventListener("click", function () {
      var target = document.getElementById(via.getAttribute("data-target"));
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* -------------------------------- Reveal on scroll ------------------------ */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -------------------------------- Hero typed roles ------------------------ */
  var roles = ["Embedded Systems Engineer", "IoT Developer", "Electronics Enthusiast"];
  var typedEl = document.getElementById("typedRole");

  function typeLoop() {
    if (!typedEl) return;
    var roleIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      var current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = roles[0];
    } else {
      typeLoop();
    }
  }

  /* -------------------------------- Back to top ----------------------------- */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-shown", window.scrollY > 560);
    }, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* -------------------------------- Project modals --------------------------- */
  var openTriggers = document.querySelectorAll("[data-modal-open]");
  var lastFocused = null;

  function openModal(key) {
    var modal = document.getElementById("modal-" + key);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  openTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-modal-open"));
    });
  });

  document.querySelectorAll("[data-modal]").forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    overlay.querySelectorAll("[data-modal-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { closeModal(overlay); });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.is-open").forEach(closeModal);
    }
  });

  /* -------------------------------- Placeholder-link toast -------------------- */
  var toast = null;
  function showToast(msg) {
    if (!toast) {
      toast = document.createElement("div");
      toast.style.cssText =
        "position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);" +
        "background:#0b1226;border:1px solid rgba(120,170,255,.25);color:#eef2fb;" +
        "font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 18px;" +
        "border-radius:10px;z-index:600;opacity:0;transition:opacity .3s, transform .3s;pointer-events:none;";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(function () {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2400);
  }

  document.querySelectorAll("[data-placeholder-link]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showToast("Placeholder link — add the real URL in index.html");
    });
  });

  /* -------------------------------- Contact form (no backend) ----------------- */
  var form = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var subject = form.subject.value.trim() || "Portfolio contact from " + (name || "website visitor");
      var message = form.message.value.trim();

      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      var mailto =
        "mailto:ghrairighaith249@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (formSuccess) formSuccess.classList.add("is-shown");
      window.location.href = mailto;
    });
  }
})();
