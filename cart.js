/* ============================================================
   SILVER CORPORATE — cart.js : panier et commande WhatsApp / e-mail
   Persistance : localStorage (tolérant aux navigateurs qui le bloquent).
   ============================================================ */
(function () {
  "use strict";
  var KEY = "sc_cart_v1";
  var items = load();

  function load() { try { var d = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(d) ? d : []; } catch (e) { return []; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* stockage indisponible : le panier reste en mémoire */ } }
    function service(id) {
    var s = (window.SC_SERVICES || []).filter(function (x) { return x.id === id; })[0];
    if (s) return s;
    var o = (window.SC_OFFERS || []).filter(function (x) { return x.id === id; })[0];
    return o ? { id: o.id, name: "Pack " + o.name, price: o.price, unit: "le pack" } : null;
  }
  function add(id, qty) {
    if (!service(id)) return;
    var it = items.filter(function (i) { return i.id === id; })[0];
    if (it) it.qty = Math.min(999, it.qty + (qty || 1)); else items.push({ id: id, qty: qty || 1 });
    save(); render();
  }
  function setQty(id, qty) {
    if (qty < 1) return remove(id);
    items.forEach(function (i) { if (i.id === id) i.qty = Math.min(999, qty); });
    save(); render();
  }
  function remove(id) { items = items.filter(function (i) { return i.id !== id; }); save(); render(); }
  function clear() { items = []; save(); render(); }
  function count() { return items.reduce(function (n, i) { return n + i.qty; }, 0); }

  function totals() {
    var total = 0, quoteCount = 0;
    items.forEach(function (i) {
      var s = service(i.id); if (!s) return;
      if (typeof s.price === "number") total += s.price * i.qty; else quoteCount++;
    });
    return { total: total, quoteCount: quoteCount };
  }

  function buildOrderText(name, notes) {
    var S = window.SC, t = totals();
    var lines = ["Bonjour SILVER CORPORATE, je souhaite passer la commande suivante :", ""];
    lines.push("Nom du client : " + name, "");
    items.forEach(function (i) {
      var s = service(i.id); if (!s) return;
      var unit = typeof s.price === "number" ? S.money(s.price) + " " + (s.unit ? "(" + s.unit + ")" : "") : "prix sur devis";
      var sub = typeof s.price === "number" ? " = " + S.money(s.price * i.qty) : "";
      lines.push("- " + s.name + " | Quantité : " + i.qty + " | Prix unitaire : " + unit.trim() + sub);
    });
    lines.push("");
    lines.push("Total (prestations tarifées) : " + S.money(t.total));
    if (t.quoteCount) lines.push("(" + t.quoteCount + " prestation(s) sur devis non incluse(s) dans ce total)");
    if (notes) lines.push("", "Informations complémentaires : " + notes);
    return lines.join("\n");
  }

  function render() {
    var S = window.SC;
    var n = count();
    document.querySelectorAll(".cart-count").forEach(function (b) { b.textContent = n; b.hidden = n === 0; });
    var body = document.getElementById("cart-body"); if (!body) return;
    var foot = document.getElementById("cart-foot");
    if (!items.length) {
      body.innerHTML = '<div class="cart-empty"><p><strong>Votre panier est vide.</strong></p><p>Ajoutez des prestations depuis le catalogue.</p><a class="btn btn-outline btn-sm" href="services.html">Voir le catalogue</a></div>';
      foot.hidden = true; return;
    }
    foot.hidden = false;
    var html = "";
    items.forEach(function (i) {
      var s = service(i.id); if (!s) return;
      var unit = typeof s.price === "number" ? S.money(s.price) + (s.unit ? " / " + S.esc(s.unit) : "") : "Prix sur devis";
      var sub = typeof s.price === "number" ? S.money(s.price * i.qty) : "—";
      html += '<div class="cart-item"><div><h3>' + S.esc(s.name) + '</h3><div class="unit">' + unit + '</div></div>' +
        '<div style="text-align:right"><strong>' + sub + '</strong></div>' +
        '<div class="qty" role="group" aria-label="Quantité de ' + S.esc(s.name) + '">' +
        '<button type="button" data-qty="-1" data-id="' + S.esc(s.id) + '" aria-label="Diminuer">−</button><span aria-live="polite">' + i.qty + '</span>' +
        '<button type="button" data-qty="1" data-id="' + S.esc(s.id) + '" aria-label="Augmenter">+</button></div>' +
        '<div style="text-align:right"><button type="button" class="link-btn" data-remove="' + S.esc(s.id) + '">Retirer</button></div></div>';
    });
    body.innerHTML = html;
    var t = totals();
    document.getElementById("cart-total").textContent = S.money(t.total);
    var note = document.getElementById("cart-quote-note");
    note.hidden = !t.quoteCount;
    note.textContent = t.quoteCount ? t.quoteCount + " prestation(s) sur devis non comprise(s) dans le total." : "";
    var wa = document.getElementById("cart-wa");
    if (wa) { wa.disabled = !S.waLink("x"); wa.title = wa.disabled ? "Numéro WhatsApp non encore communiqué" : ""; }
  }

  function openCart() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
    document.getElementById("cart-drawer").setAttribute("aria-hidden", "false");
    var c = document.getElementById("cart-close"); if (c) c.focus();
  }
  function closeCart() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
    document.getElementById("cart-drawer").setAttribute("aria-hidden", "true");
  }

  function checkout(channel) {
    var S = window.SC, status = document.getElementById("cart-status");
    var nameEl = document.getElementById("cart-name"), name = (nameEl.value || "").trim();
    var notes = (document.getElementById("cart-notes").value || "").trim();
    function msg(kind, text) { status.innerHTML = '<div class="notice notice-' + kind + '" role="' + (kind === "err" ? "alert" : "status") + '">' + S.esc(text) + "</div>"; }
    if (!items.length) return msg("err", "Votre panier est vide.");
    if (name.length < 2) { nameEl.focus(); return msg("err", "Merci d'indiquer votre nom."); }
    var text = buildOrderText(name, notes);
    if (channel === "whatsapp") {
      var url = S.waLink(text);
      if (!url) return msg("err", "Le numéro WhatsApp officiel n'est pas encore configuré. Utilisez l'envoi par e-mail.");
      window.open(url, "_blank", "noopener");
      msg("ok", "WhatsApp a été ouvert avec votre commande. Elle n'est transmise qu'une fois le message envoyé depuis WhatsApp.");
    } else {
      var email = S.cfg.email;
      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent("[SILVER CORPORATE] Commande de " + name) + "&body=" + encodeURIComponent(text);
      msg("ok", "Votre application de messagerie s'ouvre avec la commande préremplie. Elle n'est transmise qu'une fois l'e-mail envoyé. Sinon, écrivez à " + email + ".");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-add]");
      if (a) { add(a.getAttribute("data-add")); window.SC.toast("Ajouté au panier"); return; }
      if (e.target.closest("[data-open-cart]")) { openCart(); return; }
      if (e.target.closest("[data-close-cart]") || e.target.id === "cart-overlay") { closeCart(); return; }
      var q = e.target.closest("[data-qty]");
      if (q) { var id = q.getAttribute("data-id"), it = items.filter(function (i) { return i.id === id; })[0]; if (it) setQty(id, it.qty + parseInt(q.getAttribute("data-qty"), 10)); return; }
      var r = e.target.closest("[data-remove]"); if (r) { remove(r.getAttribute("data-remove")); return; }
      if (e.target.closest("#cart-clear")) { clear(); return; }
      if (e.target.closest("#cart-wa")) { checkout("whatsapp"); return; }
      if (e.target.closest("#cart-mail")) { checkout("email"); return; }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });
    window.addEventListener("storage", function (e) { if (e.key === KEY) { items = load(); render(); } });
  });

  window.SC_Cart = { add: add, remove: remove, setQty: setQty, clear: clear, count: count, totals: totals, items: function () { return items.slice(); }, buildOrderText: buildOrderText };
})();
