/* ============================================================
   SILVER CORPORATE — main.js
   Éléments communs : icônes, navigation, config, dialogues, formulaires.
   ============================================================ */
(function () {
  "use strict";
  var CFG = window.SC_CONFIG || {};

  /* ---------- Icônes (SVG inline, style unifié) ---------- */
  var P = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    printer: '<path d="M6 9V2h12v7"/><rect x="6" y="14" width="12" height="8"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',
    scan: '<path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><path d="M3 12h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    building: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01M9 13h.01M15 13h.01"/>',
    spark: '<path d="M12 3l2.1 5.9L20 11l-5.9 2.1L12 19l-2.1-5.9L4 11l5.9-2.1z"/>',
    group: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0114 0M16 4.5a3.5 3.5 0 010 7M18 21a7 7 0 00-3-5.7"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    handshake: '<path d="M11 17l2 2a1.4 1.4 0 002-2M14 14l2.5 2.5a1.4 1.4 0 002-2L15 11M2 11l4-4 5 1 3-1 6 6M22 11l-4-4M6 7l-4 4"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 13h20"/>',
    news: '<path d="M4 4h13a2 2 0 012 2v14H6a2 2 0 01-2-2zM19 8h2v10a2 2 0 01-2 2M8 8h7M8 12h7M8 16h4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    folder: '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>',
    graduation: '<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    linkedin: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>',
    youtube: '<path d="M22.5 6.4a2.8 2.8 0 00-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 00-2 2A29 29 0 001 12a29 29 0 00.5 5.6 2.8 2.8 0 002 2C5.2 20 12 20 12 20s6.8 0 8.5-.4a2.8 2.8 0 002-2A29 29 0 0023 12a29 29 0 00-.5-5.6z"/><path d="M9.7 15.5l5.8-3.5-5.8-3.5z"/>',
    tiktok: '<path d="M9 12a4 4 0 104 4V3a5 5 0 005 5"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true" ' + P + '>' + (ICONS[name] || ICONS.spark) + '</svg>'; }

  /* ---------- Utilitaires partagés (window.SC) ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function money(n) {
    return new Intl.NumberFormat("fr-FR").format(n) + " " + (CFG.devise || "FCFA");
  }
  function waLink(text) {
    var num = String(CFG.whatsappNumber || "").replace(/\D/g, "");
    if (!num) return "";
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(text || "");
  }
  function toast(msg) {
    var t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso || "";
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  function openDetail(html) {
    var dlg = document.getElementById("detail-dialog");
    if (!dlg) return;
    dlg.querySelector(".detail-body").innerHTML = html;
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  window.SC = { icon: icon, esc: esc, money: money, waLink: waLink, toast: toast, formatDate: formatDate, openDetail: openDetail, cfg: CFG };

  /* ---------- Initialisation ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    // Icônes déclaratives
    document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = icon(el.getAttribute("data-icon")); });

    // Logo manquant : repère neutre (le logo n'est jamais recréé)
    document.querySelectorAll("img[data-logo]").forEach(function (img) {
      function miss() {
        if (img.dataset.missing) return; img.dataset.missing = "1";
        var ph = document.createElement("span"); ph.className = "logo-missing";
        ph.textContent = "Logo à placer : assets/logo/logo.png"; ph.setAttribute("role", "img"); ph.setAttribute("aria-label", img.alt || "Logo");
        img.replaceWith(ph);
      }
      img.addEventListener("error", miss);
      if (img.complete && img.naturalWidth === 0) miss();
    });

    // Année dynamique
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    // Coordonnées issues de la config
    document.querySelectorAll("[data-config-email]").forEach(function (el) {
      el.textContent = CFG.email; el.setAttribute("href", "mailto:" + CFG.email);
    });
    document.querySelectorAll("[data-config-location]").forEach(function (el) { el.textContent = CFG.localisation; });

    // WhatsApp : actif seulement si un numéro est configuré
    var wa = waLink("Bonjour SILVER CORPORATE, je vous contacte depuis votre site.");
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      if (wa) { el.setAttribute("href", wa); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); el.removeAttribute("aria-disabled"); }
      else { el.setAttribute("aria-disabled", "true"); el.removeAttribute("href"); el.addEventListener("click", function (e) { e.preventDefault(); toast("Numéro WhatsApp bientôt disponible."); }); }
    });
    document.querySelectorAll("[data-whatsapp-note]").forEach(function (el) {
      el.textContent = wa ? "Cliquez pour nous écrire sur WhatsApp." : "Le numéro WhatsApp officiel sera affiché ici dès qu'il sera communiqué.";
    });

    // Jeunes Inspirés : bouton selon la config
    document.querySelectorAll("[data-jeunes-link]").forEach(function (el) {
      if (CFG.jeunesInspiresUrl) {
        el.setAttribute("href", CFG.jeunesInspiresUrl); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
        el.removeAttribute("aria-disabled"); el.textContent = "Visiter le site officiel Jeunes Inspirés";
      } else {
        el.setAttribute("aria-disabled", "true"); el.removeAttribute("href");
        el.textContent = "Site officiel bientôt disponible";
        el.addEventListener("click", function (e) { e.preventDefault(); });
      }
    });
    document.querySelectorAll("[data-jeunes-note]").forEach(function (el) {
      el.hidden = !!CFG.jeunesInspiresUrl;
    });

    // Réseaux sociaux : uniquement ceux renseignés
    var names = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", youtube: "YouTube", tiktok: "TikTok" };
    document.querySelectorAll("[data-social]").forEach(function (box) {
      var html = "";
      Object.keys(names).forEach(function (k) {
        var url = CFG.reseaux && CFG.reseaux[k];
        if (url) html += '<a href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + names[k] + '">' + icon(k) + '</a>';
      });
      box.innerHTML = html || '<span class="social-empty">Réseaux sociaux officiels : bientôt disponibles.</span>';
    });

    // Navigation mobile
    var toggle = document.getElementById("menu-toggle"), nav = document.getElementById("main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.innerHTML = icon(open ? "close" : "menu");
      });
      nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.innerHTML = icon("menu"); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.innerHTML = icon("menu"); toggle.focus(); } });
    }

    // Ombre de l'en-tête
    var header = document.querySelector(".site-header");
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

    // Apparition au défilement
    var els = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { el.classList.add("in"); }); }

    // Dialogue de détail : fermeture
    var dlg = document.getElementById("detail-dialog");
    if (dlg) {
      dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.closest("[data-close-dialog]")) dlg.close(); });
    }

    initTabs();
    initForms();
  });

  /* ---------- Onglets de formulaires (contact.html) ---------- */
  function initTabs() {
    var tabs = document.querySelectorAll('[role="tab"][data-panel]');
    if (!tabs.length) return;
    function show(id) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-panel") === id;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
      });
      document.querySelectorAll(".form-panel").forEach(function (p) { p.hidden = p.id !== id; });
    }
    tabs.forEach(function (t) { t.addEventListener("click", function () { var id = t.getAttribute("data-panel"); show(id); history.replaceState(null, "", "#" + id); }); });
    var hash = location.hash.replace("#", "");
    show(document.getElementById(hash) && document.getElementById(hash).classList.contains("form-panel") ? hash : tabs[0].getAttribute("data-panel"));
    window.addEventListener("hashchange", function () { var h = location.hash.replace("#", ""); var el = document.getElementById(h); if (el && el.classList.contains("form-panel")) show(h); });
  }

  /* ---------- Formulaires : validation + transmission réelle ----------
     Sans serveur, la transmission passe par l'application de messagerie
     (mailto) ou WhatsApp. Le site n'affirme JAMAIS qu'une demande est
     "envoyée" : il indique que l'application a été ouverte et que l'envoi
     n'est effectif qu'après validation par l'utilisateur. */
  function initForms() {
    var forms = document.querySelectorAll("form[data-form]");
    var q = new URLSearchParams(location.search);
    forms.forEach(function (form) {
      // Pré-remplissage via l'URL (?objet=..., ?message=...)
      q.forEach(function (v, k) { var f = form.elements[k]; if (f && !f.value && typeof v === "string") f.value = v.slice(0, 500); });

      var waBtn = form.querySelector('[data-channel="whatsapp"]');
      if (waBtn && !waLink("x")) { waBtn.disabled = true; waBtn.title = "Numéro WhatsApp non encore communiqué"; }

      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var channel = (e.submitter && e.submitter.getAttribute("data-channel")) || "email";
        var status = form.querySelector(".form-status");
        if (!validate(form)) { setStatus(status, "err", "Merci de corriger les champs signalés avant de continuer."); var first = form.querySelector(".invalid input,.invalid select,.invalid textarea"); if (first) first.focus(); return; }
        var title = form.getAttribute("data-title") || "Demande";
        var text = buildMessage(form, title);
        if (channel === "whatsapp") {
          var url = waLink(text);
          if (!url) { setStatus(status, "err", "Le numéro WhatsApp officiel n'est pas encore configuré. Utilisez l'envoi par e-mail."); return; }
          window.open(url, "_blank", "noopener");
          setStatus(status, "ok", "WhatsApp a été ouvert avec votre message. Votre demande n'est transmise qu'une fois le message envoyé depuis WhatsApp.");
        } else {
          var subject = "[SILVER CORPORATE] " + title;
          window.location.href = "mailto:" + CFG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
          setStatus(status, "ok", "Votre application de messagerie s'ouvre avec votre message prérempli. Votre demande n'est transmise qu'une fois l'e-mail envoyé depuis cette application. Si rien ne s'ouvre, écrivez-nous à " + CFG.email + ".");
        }
      });
      form.addEventListener("input", function (e) { var f = e.target.closest(".field"); if (f) { f.classList.remove("invalid"); var er = f.querySelector(".field-error"); if (er) er.textContent = ""; } });
    });
  }

  function validate(form) {
    var ok = true;
    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input,select,textarea");
      if (!input) return;
      var err = field.querySelector(".field-error"), msg = "";
      var v = (input.value || "").trim();
      if (input.required && !v) msg = "Ce champ est obligatoire.";
      else if (v && input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = "Adresse e-mail invalide.";
      else if (v && input.type === "tel" && !/^[+\d][\d\s().-]{5,}$/.test(v)) msg = "Numéro de téléphone invalide.";
      else if (v && input.minLength > 0 && v.length < input.minLength) msg = "Au moins " + input.minLength + " caractères.";
      field.classList.toggle("invalid", !!msg);
      if (err) err.textContent = msg;
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) ok = false;
    });
    return ok;
  }

  function buildMessage(form, title) {
    var lines = ["Bonjour SILVER CORPORATE,", "", "Objet : " + title, ""];
    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input,select,textarea"), label = field.querySelector("label");
      if (!input || !label) return;
      var v = (input.value || "").trim();
      if (v) lines.push(label.textContent.replace("*", "").trim() + " : " + v);
    });
    lines.push("", "Message envoyé depuis le site SILVER CORPORATE.");
    return lines.join("\n");
  }

  function setStatus(el, kind, msg) {
    if (!el) return;
    el.innerHTML = '<div class="notice notice-' + kind + '" role="' + (kind === "err" ? "alert" : "status") + '">' + esc(msg) + "</div>";
  }
})();