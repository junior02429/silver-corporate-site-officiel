/* ============================================================
   SILVER CORPORATE — js/layout.js
   Injecte les éléments communs à toutes les pages : en-tête, menu,
   pied de page, panier et fenêtre de détail.
   Pour modifier le menu ou le pied de page, éditez ce fichier UNIQUEMENT.
   Chaque page déclare son nom dans <body data-page="xxx.html">.
   ============================================================ */
(function () {
  "use strict";
  var NAV = [
    ["index.html", "Accueil"], ["groupe.html", "Groupe"], ["activites.html", "Activités"],
    ["services.html", "Services"], ["offres.html", "Offres"], ["projets.html", "Projets"],
    ["jeunes-inspires.html", "Jeunes Inspirés"], ["opportunites.html", "Opportunités"], ["actualites.html", "Actualités"]
  ];
  var SIGN = "Former • Inspirer • Transformer";
  var SLOGAN = "Des besoins réels aux solutions concrètes.";
  var page = document.body.getAttribute("data-page") || "";
  function ic(n) { return '<span data-icon="' + n + '" style="display:contents"></span>'; }
  function cur(h) { return h === page ? ' aria-current="page"' : ""; }

  var links = NAV.map(function (n) { return '<li><a href="' + n[0] + '"' + cur(n[0]) + ">" + n[1] + "</a></li>"; }).join("");
  var footLinks = NAV.concat([["contact.html", "Contact"]]).map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("");

  var header =
    '<a class="skip-link" href="#contenu">Aller au contenu</a>' +
    '<header class="site-header"><div class="container header-inner">' +
    '<a class="brand" href="index.html" aria-label="SILVER CORPORATE — accueil"><img data-logo src="assets/logo/logo.png" alt="Logo officiel SILVER CORPORATE"></a>' +
    '<nav class="main-nav" id="main-nav" aria-label="Navigation principale"><ul class="nav-list">' + links +
    '<li class="nav-contact-mobile"><a href="contact.html"' + cur("contact.html") + ">Contact</a></li></ul></nav>" +
    '<div class="header-actions">' +
    '<button type="button" class="cart-toggle" data-open-cart aria-label="Ouvrir le panier">' + ic("cart") + '<span class="cart-count" hidden>0</span></button>' +
    '<a class="btn btn-primary btn-sm btn-contact" href="contact.html">Nous contacter</a>' +
    '<button type="button" class="menu-toggle" id="menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="main-nav">' + ic("menu") + "</button>" +
    "</div></div></header>";

  var footer =
    '<footer class="site-footer"><div class="container"><div class="footer-grid">' +
    '<div><div class="footer-brand-card"><img data-logo src="assets/logo/logo.png" alt="Logo SILVER CORPORATE" loading="lazy"></div>' +
    "<p>Groupe entrepreneurial en développement. " + SIGN + ".</p>" +
    '<p style="font-family:Georgia,serif;font-style:italic;color:#fff">« ' + SLOGAN + " »</p></div>" +
    "<div><h4>Navigation</h4><ul>" + footLinks + "</ul></div>" +
    '<div><h4>Découvrir</h4><ul><li><a href="contact.html#devis">Demander un devis</a></li><li><a href="contact.html#partenariat">Devenir partenaire</a></li>' +
    '<li><a href="projets.html#investir">Investir et collaborer</a></li><li><a href="mentions-legales.html">Mentions légales</a></li>' +
    '<li><a href="mentions-legales.html#confidentialite">Confidentialité</a></li></ul></div>' +
    '<div><h4>Coordonnées</h4><ul><li><a data-config-email href="#">…</a></li><li data-config-location></li><li><a data-whatsapp href="#">WhatsApp</a></li></ul>' +
    '<div class="social" data-social style="margin-top:1rem"></div></div></div>' +
    '<div class="footer-bottom"><span>© <span data-year>2026</span> SILVER CORPORATE. Tous droits réservés.</span><span>' + SIGN + "</span></div></div></footer>" +
    '<div class="cart-overlay" id="cart-overlay"></div>' +
    '<aside class="cart-drawer" id="cart-drawer" aria-hidden="true" aria-label="Panier">' +
    '<div class="cart-head"><h2>Votre panier</h2><button type="button" class="icon-btn" id="cart-close" data-close-cart aria-label="Fermer le panier">' + ic("close") + "</button></div>" +
    '<div class="cart-body" id="cart-body"></div>' +
    '<div class="cart-foot" id="cart-foot" hidden><div class="cart-total"><span>Total</span><span id="cart-total">0</span></div>' +
    '<p class="muted" id="cart-quote-note" style="font-size:.85rem;margin:0" hidden></p>' +
    '<div class="field"><label for="cart-name">Votre nom <span class="req">*</span></label><input id="cart-name" type="text" autocomplete="name"></div>' +
    '<div class="field"><label for="cart-notes">Informations complémentaires</label><textarea id="cart-notes"></textarea></div>' +
    '<div class="cart-actions"><button type="button" class="btn btn-primary" id="cart-wa">Commander sur WhatsApp</button>' +
    '<button type="button" class="btn btn-blue" id="cart-mail">Commander par e-mail</button>' +
    '<button type="button" class="link-btn" id="cart-clear" style="justify-self:center">Vider le panier</button></div>' +
    '<div id="cart-status" style="margin-top:.6rem" aria-live="polite"></div></div></aside>' +
    '<dialog class="detail" id="detail-dialog" aria-label="Détail"><div class="detail-inner">' +
    '<button type="button" class="icon-btn detail-close" data-close-dialog aria-label="Fermer">' + ic("close") + "</button>" +
    '<div class="detail-body"></div></div></dialog>';

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
})();