/* =========================================================
   VOLUM — interactions
   ========================================================= */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  var CFG = window.VOLUM_CONFIG || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); }

  /* ---------- Header : solide au scroll, masqué en descendant ---------- */
  var header = $(".site-header");
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    if (!header) return;
    header.classList.toggle("is-solid", y > 40);
    if (!document.body.classList.contains("menu-open")) {
      header.classList.toggle("is-hidden", y > lastY && y > 400);
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = $(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      $(".mobile-menu").setAttribute("aria-hidden", open ? "false" : "true");
    });
    $$(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) toggle.click();
    });
  }

  /* ---------- Diaporama du hero ---------- */
  var slides = $$(".hero-slide");
  if (slides.length > 1) {
    var dotsWrap = $(".hero-dots");
    var caption = $(".hero-caption");
    var current = 0, timer;
    var dots = slides.map(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Image " + (i + 1));
      b.addEventListener("click", function () { go(i); });
      dotsWrap && dotsWrap.appendChild(b);
      return b;
    });
    function go(i) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      void dots[current].offsetWidth;
      dots[current].classList.add("is-active");
      if (caption) caption.textContent = slides[current].getAttribute("data-caption") || "";
      clearTimeout(timer);
      if (!reduceMotion) timer = setTimeout(function () { go(current + 1); }, 7000);
    }
    // charge les images suivantes après le premier rendu
    slides.forEach(function (s) { var img = $("img[data-src]", s); if (img) { img.src = img.getAttribute("data-src"); img.removeAttribute("data-src"); } });
    go(0);
  }

  /* ---------- Apparition au scroll ---------- */
  var revealEls = $$(".reveal, .reveal-img");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Compteurs ---------- */
  var counters = $$("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, end = parseFloat(el.getAttribute("data-count")), dur = 1600, t0 = null;
        cio.unobserve(el);
        if (reduceMotion) { el.textContent = end; return; }
        function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * e);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Filtres projets ---------- */
  var filters = $$(".filter");
  if (filters.length) {
    var cards = $$(".project-card[data-cat]");
    function applyFilter(cat) {
      filters.forEach(function (f) {
        var on = f.getAttribute("data-filter") === cat;
        f.classList.toggle("is-active", on);
        f.setAttribute("aria-pressed", on ? "true" : "false");
      });
      cards.forEach(function (c) {
        c.classList.toggle("is-hidden", cat !== "all" && c.getAttribute("data-cat").split(" ").indexOf(cat) === -1);
      });
    }
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        var cat = f.getAttribute("data-filter");
        applyFilter(cat);
        try { history.replaceState(null, "", cat === "all" ? location.pathname : "#" + cat); } catch (e) {}
      });
    });
    var initial = location.hash.replace("#", "");
    if (initial && filters.some(function (f) { return f.getAttribute("data-filter") === initial; })) applyFilter(initial);
  }

  /* ---------- Lightbox ---------- */
  var galleryLinks = $$(".gallery a");
  if (galleryLinks.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Visionneuse de photos");
    var icon = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="' + d + '"/></svg>'; };
    lb.innerHTML = '<img alt="">' +
      '<button class="lb-btn lb-close" type="button" aria-label="Fermer">' + icon("M6 6l12 12M18 6L6 18") + "</button>" +
      '<button class="lb-btn lb-prev" type="button" aria-label="Photo précédente">' + icon("M15 5l-7 7 7 7") + "</button>" +
      '<button class="lb-btn lb-next" type="button" aria-label="Photo suivante">' + icon("M9 5l7 7-7 7") + "</button>" +
      '<div class="lb-count"></div>';
    document.body.appendChild(lb);
    var lbImg = $("img", lb), lbCount = $(".lb-count", lb), idx = 0, lastFocus;
    function show(i) {
      idx = (i + galleryLinks.length) % galleryLinks.length;
      var a = galleryLinks[idx];
      lbImg.src = a.getAttribute("href");
      lbImg.alt = ($("img", a) || {}).alt || "";
      lbCount.textContent = (idx + 1) + " / " + galleryLinks.length;
    }
    function open(i) { lastFocus = document.activeElement; show(i); lb.classList.add("is-open"); document.body.style.overflow = "hidden"; $(".lb-close", lb).focus(); }
    function close() { lb.classList.remove("is-open"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    galleryLinks.forEach(function (a, i) { a.addEventListener("click", function (e) { e.preventDefault(); open(i); }); });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", function () { show(idx - 1); });
    $(".lb-next", lb).addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
    var tx = null;
    lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (tx === null) return;
      var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      tx = null;
    });
  }

  /* ---------- Avis Google ---------- */
  var track = $(".reviews-track");
  if (track) {
    var STAR = "★★★★★";
    var G_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>';

    function initials(name) {
      return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); }).join("");
    }
    function renderReviews(data) {
      var list = (data.reviews || []).filter(function (r) { return r.text; });
      if (!list.length) return;
      track.innerHTML = list.map(function (r) {
        var stars = STAR.slice(0, Math.round(r.rating || 5));
        var avatar = r.photo
          ? '<img class="review-avatar" src="' + esc(r.photo) + '" alt="" loading="lazy" referrerpolicy="no-referrer">'
          : '<span class="review-avatar" aria-hidden="true">' + esc(initials(r.author)) + "</span>";
        return '<article class="review">' +
          '<div class="review-stars" aria-label="' + (r.rating || 5) + ' étoiles sur 5">' + stars + "</div>" +
          "<blockquote>" + esc(r.text) + "</blockquote>" +
          '<div class="review-author">' + avatar +
          "<div><strong>" + esc(r.author) + "</strong><span>" + (r.when ? esc(r.when) + " · " : "") + (r.localGuide ? "Local Guide · " : "") + "Avis Google</span></div></div>" +
          "</article>";
      }).join("");
      var score = $("[data-rating]"), count = $("[data-rating-count]");
      if (score && data.rating) score.textContent = Number(data.rating).toFixed(1).replace(".", ",");
      if (count && data.count) count.textContent = data.count;
    }

    // 1) avis enregistrés
    renderReviews(window.VOLUM_AVIS || {});

    // 2) avis en direct via l'API Google Places (si une clé est configurée)
    if (CFG.GOOGLE_PLACES_API_KEY) {
      var headers = { "X-Goog-Api-Key": CFG.GOOGLE_PLACES_API_KEY, "Content-Type": "application/json" };
      var getPlaceId = CFG.GOOGLE_PLACE_ID
        ? Promise.resolve(CFG.GOOGLE_PLACE_ID)
        : fetch("https://places.googleapis.com/v1/places:searchText", {
            method: "POST",
            headers: Object.assign({ "X-Goog-FieldMask": "places.id" }, headers),
            body: JSON.stringify({ textQuery: CFG.GOOGLE_PLACE_QUERY, languageCode: "fr" })
          }).then(function (r) { return r.json(); }).then(function (j) { return j.places && j.places[0] && j.places[0].id; });
      getPlaceId.then(function (id) {
        if (!id) throw new Error("place introuvable");
        return fetch("https://places.googleapis.com/v1/places/" + encodeURIComponent(id) + "?languageCode=fr", {
          headers: Object.assign({ "X-Goog-FieldMask": "rating,userRatingCount,reviews" }, headers)
        });
      }).then(function (r) { return r.json(); }).then(function (p) {
        if (!p || !p.reviews) return;
        var live = p.reviews.map(function (r) {
          return {
            author: (r.authorAttribution && r.authorAttribution.displayName) || "Client",
            photo: r.authorAttribution && r.authorAttribution.photoUri,
            rating: r.rating,
            when: r.relativePublishTimeDescription,
            text: (r.originalText && r.originalText.text) || (r.text && r.text.text) || ""
          };
        });
        // on fusionne : avis en direct d'abord, puis les avis enregistrés non dupliqués
        var seen = {};
        live.forEach(function (r) { seen[r.author.toLowerCase()] = 1; });
        var saved = ((window.VOLUM_AVIS || {}).reviews || []).filter(function (r) { return !seen[r.author.toLowerCase()]; });
        renderReviews({ rating: p.rating, count: Math.max(p.userRatingCount || 0, (window.VOLUM_AVIS || {}).count || 0), reviews: live.concat(saved) });
      }).catch(function (e) { if (window.console) console.warn("Avis Google en direct indisponibles :", e.message); });
    }

    $$("[data-reviews-g]").forEach(function (el) { el.innerHTML = G_ICON; });

    // navigation : flèches + glisser à la souris
    var step = function () { var c = $(".review", track); return c ? c.getBoundingClientRect().width + 20 : 320; };
    var prev = $(".reviews-prev"), next = $(".reviews-next");
    prev && prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    next && next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    var down = false, startX = 0, startScroll = 0, moved = false;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = e.clientX; startScroll = track.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) { moved = true; track.classList.add("is-dragging"); }
      track.scrollLeft = startScroll - dx;
    });
    window.addEventListener("pointerup", function () { down = false; track.classList.remove("is-dragging"); });
    track.addEventListener("click", function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  }

  /* ---------- Carte (chargée au clic, RGPD) ---------- */
  $$("[data-load-map]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = btn.closest(".map-wrap");
      var iframe = document.createElement("iframe");
      iframe.src = CFG.GOOGLE_MAPS_EMBED;
      iframe.title = "Plan d'accès — Volum, Montarnaud";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    });
  });

  /* ---------- Liens dynamiques (Google, e-mail) ---------- */
  $$("[data-google-reviews]").forEach(function (a) { a.href = CFG.GOOGLE_REVIEWS_URL; });
  $$("[data-email]").forEach(function (el) {
    if (CFG.CONTACT_EMAIL) {
      el.hidden = false;
      var a = el.tagName === "A" ? el : $("a", el);
      if (a) { a.href = "mailto:" + CFG.CONTACT_EMAIL; a.textContent = CFG.CONTACT_EMAIL; }
    }
  });

  /* ---------- Formulaire de contact ---------- */
  var form = $("#contact-form");
  if (form) {
    var status = $(".form-status", form);
    var submit = $("button[type=submit]", form);
    // pré-remplissage du type de projet via ?projet=
    var qp = new URLSearchParams(location.search).get("projet");
    if (qp) { var opt = $('input[name="type"][value="' + qp + '"]', form); if (opt) opt.checked = true; }

    function setError(field, msg) {
      var wrap = field.closest(".field");
      if (!wrap) return;
      wrap.classList.toggle("has-error", !!msg);
      var err = $(".field-error", wrap);
      if (err) err.textContent = msg || "";
      field.setAttribute("aria-invalid", msg ? "true" : "false");
    }
    function validate() {
      var ok = true, first = null;
      $$("[required]", form).forEach(function (f) {
        var msg = "";
        if (f.type === "checkbox" && !f.checked) msg = "Merci d'accepter pour continuer.";
        else if (f.type !== "checkbox" && !f.value.trim()) msg = "Ce champ est requis.";
        else if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim())) msg = "Adresse e-mail invalide.";
        else if (f.type === "tel" && f.value && !/^[+\d][\d\s.\-()]{8,}$/.test(f.value.trim())) msg = "Numéro invalide.";
        setError(f, msg);
        if (msg) { ok = false; first = first || f; }
      });
      if (first) first.focus();
      return ok;
    }
    $$("input, textarea, select", form).forEach(function (f) {
      f.addEventListener("input", function () { if (f.closest(".has-error")) setError(f, ""); });
    });
    function showStatus(kind, html) {
      status.className = "form-status is-" + kind;
      status.innerHTML = html;
      status.setAttribute("tabindex", "-1");
      status.focus();
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if ($(".hp input", form) && $(".hp input", form).value) return; // robot
      if (!validate()) return;
      var data = new FormData(form);
      var phoneLink = '<a href="tel:' + CFG.PHONE_LINK + '">' + CFG.PHONE_DISPLAY + "</a>";

      if (CFG.FORM_ENDPOINT) {
        submit.disabled = true;
        var label = submit.innerHTML;
        submit.innerHTML = "Envoi en cours…";
        fetch(CFG.FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw new Error(r.status); return r; })
          .then(function () {
            form.reset();
            showStatus("success", "<strong>Merci, votre message a bien été envoyé.</strong><br>Jean-Yves Millet vous recontactera dans les meilleurs délais.");
          })
          .catch(function () {
            showStatus("error", "Une erreur est survenue lors de l'envoi. Vous pouvez nous joindre directement au " + phoneLink + ".");
          })
          .finally(function () { submit.disabled = false; submit.innerHTML = label; });
        return;
      }

      // Secours : messagerie du visiteur
      var lines = [];
      data.forEach(function (v, k) { if (v && k !== "_gotcha" && k !== "consent") lines.push(k.charAt(0).toUpperCase() + k.slice(1) + " : " + v); });
      if (CFG.CONTACT_EMAIL) {
        location.href = "mailto:" + CFG.CONTACT_EMAIL + "?subject=" + encodeURIComponent("Demande de projet — " + (data.get("nom") || "")) + "&body=" + encodeURIComponent(lines.join("\n"));
        showStatus("success", "Votre messagerie s'ouvre avec votre demande pré-remplie. Il ne vous reste qu'à l'envoyer.");
      } else {
        showStatus("error", "L'envoi en ligne n'est pas encore activé. Merci de contacter directement Jean-Yves Millet au " + phoneLink + ".");
      }
    });
  }

  /* ---------- Année du footer ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
