/* ============================================================================
   WEDDING SITE — SCRIPTS (ANIMAÇÕES E INTERAÇÕES)
   ----------------------------------------------------------------------------
   Todo o conteúdo vem de js/config.js (window.WEDDING_CONFIG).
   Pontos de integração futura (Firebase / Supabase) estão sinalizados abaixo.
   ============================================================================ */

(function () {
  'use strict';

  const CFG = window.WEDDING_CONFIG || {};

  /* =========================================================================
     1. ÍCONES (inline SVG — linear, estilo feather)
     ======================================================================== */
  const ICONS = {
    heart:    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    ring:     '<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    gem:      '<path d="M4 3h2l3 7 3-7 3 7 3-7h2l2 9-6 9H4l-2-9 2-9z" stroke-linejoin="round"/>',
    rings:    '<circle cx="9.5" cy="11.5" r="5.5"/><circle cx="14.5" cy="11.5" r="5.5"/><path d="M12 1.4l1.8 2.8-1.8 2.8-1.8-2.8z"/>',
    alianca:  '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="5"/>',
    anel:     '<circle cx="12" cy="12" r="6.5"/><path d="M12 1.5 13.8 4.8 12 8 10.2 4.8z"/>',
    home:     '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    sparkles: '<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    music:    '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    camera:   '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    clock:    '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    car:      '<path d="M3 17l1.7-5.1A2 2 0 0 1 6.5 11h11a2 2 0 0 1 1.8 1.1L21 17"/><path d="M3 17h18v1.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="7" cy="14" r="1.2"/><circle cx="17" cy="14" r="1.2"/>',
    info:     '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    check:    '<path d="M20 6 9 17l-5-5"/>',
    send:     '<path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    gift:     '<path d="M20 12v10H4V12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
    'arrow-up':    '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    'arrow-left':  '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    x:        '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    play:     '<path d="M5 3l14 9-14 9V3z"/>',
    pause:    '<path d="M6 4h4v16H6z"/><path d="M14 4h4v16h-4z"/>',
    expand:   '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    spotify:  '<path fill="currentColor" stroke="none" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 4-1 7.4-.5 10.2 1.1.3.2.4.6.3 1zm1.5-3.3c-.3.4-.8.5-1.2.2-2.8-1.7-7.1-2.3-10.3-1.2-.5.1-1-.1-1.1-.6-.1-.5.1-1 .6-1.1 3.8-1.2 8.6-.5 11.9 1.5.4.3.4.8.1 1.2zm.1-3.4C15.9 8.3 9.6 8.1 6.5 9.2c-.6.2-1.2-.1-1.4-.7-.2-.6.1-1.2.7-1.4 3.6-1.2 10.5-1 14.6 1.8.5.4.6 1.1.2 1.6-.4.4-1 .5-1.5.1z"/>',
  };

  function icon(name, cls) {
    const path = ICONS[name] || ICONS.info;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls ? ' class="' + cls + '"' : ''} aria-hidden="true">${path}</svg>`;
  }

  /* =========================================================================
     2. MOTOR DE CONFIGURAÇÃO
     Lê o objeto WEDDING_CONFIG e preenche o DOM automaticamente.
     ======================================================================== */
  function get(path) {
    return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), CFG);
  }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function initConfigEngine() {
    // a) Texto direto
    document.querySelectorAll('[data-config]').forEach((el) => {
      const val = get(el.dataset.config);
      if (val === undefined) return;
      // Monograma: destaca o "&" para um acabamento mais elegante
      if (el.classList.contains('monogram') && String(val).includes('&')) {
        const parts = String(val).split('&');
        el.innerHTML = parts.map((p, i) => esc(p) + (i < parts.length - 1 ? ' <em>&amp;</em>' : '')).join('');
      } else {
el.innerHTML = esc(val);
      }
    });

    // b) Listas (foreach) — substitui o elemento por N clones preenchidos
    document.querySelectorAll('[data-config-foreach]').forEach((el) => {
      const items = get(el.dataset.configForeach) || [];
      const frag = document.createDocumentFragment();
      items.forEach((value) => {
        const clone = el.cloneNode(false);
        delete clone.dataset.configForeach;
        delete clone.dataset.icon;
        if (el.dataset.icon) clone.innerHTML = icon(el.dataset.icon) + '<span>' + esc(value) + '</span>';
        else clone.textContent = value;
        frag.appendChild(clone);
      });
      el.replaceWith(frag);
    });

    // c) Imagens
    document.querySelectorAll('[data-config-img]').forEach((el) => {
      const src = get(el.dataset.configImg);
      if (src) el.setAttribute('src', src);
    });

    // d) Atributos dinâmicos (ex.: href, placeholder)
    document.querySelectorAll('[data-config-attr]').forEach((el) => {
      el.dataset.configAttr.split('|').forEach((pair) => {
        const [attr, path] = pair.split(':');
        const val = get(path);
        if (val === undefined) return;
        if (attr === 'text') el.textContent = esc(val);
        else el.setAttribute(attr, val);
      });
    });

    // e) Ícones
    document.querySelectorAll('[data-icon]').forEach((el) => {
      el.innerHTML = icon(el.dataset.icon);
    });
  }

  /* =========================================================================
     3. COMPONENTES RENDERIZADOS A PARTIR DA CONFIG
     ======================================================================== */
  function renderCoupleCards() {
    const cards = [document.getElementById('coupleCard1'), document.getElementById('coupleCard2')];
    const partners = [CFG.couple.partner1, CFG.couple.partner2];
    partners.forEach((p, i) => {
      const card = cards[i];
      if (!card || !p) return;
      card.innerHTML = `
        <figure class="couple-card__photo">
          <img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" />
        </figure>
        <div class="couple-card__body">
          <h3 class="couple-card__name">${esc(p.name)}</h3>
          <p class="couple-card__role">${i === 0 ? 'A noiva' : 'O noivo'}</p>
          <dl class="couple-card__facts">
            <dt>Idade</dt><dd>${esc(p.age)} anos</dd>
            <dt>Nascimento</dt><dd>${esc(p.bornDate)}</dd>
            <dt>Cidade</dt><dd>${esc(p.bornCity)}</dd>
            <dt>Profissão</dt><dd>${esc(p.profession)}</dd>
          </dl>
          <p class="couple-card__desc">${esc(p.description)}</p>
        </div>`;
    });
  }

  function renderTimeline() {
    const list = document.getElementById('timelineList');
    if (!list) return;
    const events = CFG.timeline && CFG.timeline.events ? CFG.timeline.events : [];
    list.innerHTML = events.map((ev, i) => `
      <li class="timeline__item ${i % 2 === 0 ? 'reveal-l' : 'reveal-r'}">
        <span class="timeline__icon">${icon(ev.icon)}</span>
        <span class="timeline__date">${esc(ev.date)}</span>
        <h3 class="timeline__title">${esc(ev.title)}</h3>
        <p class="timeline__desc">${esc(ev.description)}</p>
      </li>`).join('');
  }

  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    const images = CFG.gallery && CFG.gallery.images ? CFG.gallery.images : [];
    grid.innerHTML = images.map((src, i) => `
      <figure class="gallery__item reveal" style="aspect-ratio:4/3" data-delay="${(i % 4)}" data-index="${i}">
        <img src="${esc(src)}" alt="${esc(CFG.gallery.alt)} — foto ${i + 1}" loading="lazy" />
        ${icon('expand')}
      </figure>`).join('');
  }

  function renderPalette() {
    const wrap = document.getElementById('paletteGroups');
    if (!wrap || !CFG.palette) return;
    const heads = [icon('ring'), icon('users'), icon('heart')];
    wrap.innerHTML = CFG.palette.groups.map((g, gi) => `
      <div class="palette__group reveal" data-delay="${gi}">
        <h3 class="palette__group-label">${heads[gi] || heads[0]} ${esc(g.label)}</h3>
        <p class="palette__group-desc">${esc(g.description)}</p>
        <div class="palette__colors">
          ${g.colors.map((c) => `
            <div class="palette__swatch">
              <span class="palette__swatch-circle" style="background:${esc(c.hex)}"></span>
              <span class="palette__swatch-name">${esc(c.name)}</span>
              <code class="palette__swatch-hex">${esc(c.hex)}</code>
            </div>`).join('')}
        </div>
      </div>`).join('');
  }

  function renderCeremony() {
    const wrap = document.getElementById('ceremonyCards');
    if (!wrap || !CFG.ceremony) return;
    wrap.innerHTML = CFG.ceremony.details.map((d) => `
      <div class="ceremony-card reveal" data-delay="0">
        <span class="ceremony-card__icon">${icon(d.icon)}</span>
        <div>
          <p class="ceremony-card__label">${esc(d.label)}</p>
          <p class="ceremony-card__text">${esc(d.text)}</p>
        </div>
      </div>`).join('');
  }

  function renderGifts() {
    const grid = document.getElementById('giftsGrid');
    if (!grid || !CFG.gifts) return;
    grid.innerHTML = CFG.gifts.items.map((g, i) => `
      <article class="gift-card reveal" data-delay="${(i % 3)}">
        <div class="gift-card__media">
          <img src="${esc(g.img)}" alt="${esc(g.name)}" loading="lazy" />
        </div>
        <div class="gift-card__body">
          <h3 class="gift-card__name">${esc(g.name)}</h3>
          <p class="gift-card__desc">${esc(g.description)}</p>
          <p class="gift-card__price">${esc(g.price)}</p>
          <a class="btn btn--gold gift-card__btn" href="${esc(g.link)}" target="_blank" rel="noopener">
            <span class="btn__icon">${icon('gift')}</span>
            ${esc(CFG.gifts.buttonLabel || 'Presentear')}
          </a>
        </div>
      </article>`).join('');
  }

  function renderFooter() {
    const social = document.getElementById('footerSocial');
    if (social && CFG.footer && CFG.footer.social) {
      social.innerHTML = CFG.footer.social.map((s) => `
        <li><a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${icon(s.icon)}</a></li>`).join('');
    }
    const year = document.getElementById('footerYear');
    if (year) year.textContent = new Date().getFullYear();
  }

  function initVenueMap() {
    const iframe = document.getElementById('venueMap');
    if (iframe && CFG.venue && CFG.venue.mapsQuery) {
      iframe.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(CFG.venue.mapsQuery) +
        '&z=15&output=embed';
    }
  }

  function renderMessageWall(data) {
    const wall = document.getElementById('messagesWall');
    if (!wall) return;
    wall.innerHTML = data.map((m) => `
      <article class="message-card" data-initial="${esc((m.name || '?').charAt(0).toUpperCase())}">
        <div class="message-card__head">
          <span class="message-card__name">${esc(m.name)}</span>
          <span class="message-card__date">${esc(m.date)}</span>
        </div>
        <p class="message-card__text">${esc(m.message)}</p>
      </article>`).join('');
  }

  /* =========================================================================
     4. PRÉ-LOADER
     ======================================================================== */
  function initPreloader() {
    const loader = document.getElementById('preloader');
    if (!loader) return;
    const done = () => loader.classList.add('is-done');
    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done);
    setTimeout(done, 3200); // segurança caso alguma imagem externa demore
  }

  /* =========================================================================
     5. HEADER, MENU MOBILE E SCROLLSPY
     ======================================================================== */
  function initHeader() {
    const header = document.getElementById('siteHeader');
    const nav = document.getElementById('siteNav');
    const toggle = document.getElementById('navToggle');
    const links = nav ? nav.querySelectorAll('.nav__link') : [];
    const sections = Array.from(links).map((l) => {
      const id = l.getAttribute('href').slice(1);
      return document.getElementById(id);
    });

    const onScroll = () => {
      const y = window.scrollY;
      if (header) header.classList.toggle('is-scrolled', y > 40);

      // Destaque automático da seção atual
      let currentId = 'inicio';
      sections.forEach((sec, i) => {
        if (sec && sec.getBoundingClientRect().top - 120 <= 0) {
          currentId = sec.id;
        }
      });
      links.forEach((l) => {
        const isActive = (l.getAttribute('href').slice(1) === currentId);
        l.classList.toggle('is-active', isActive);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Menu mobile
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
        nav.classList.toggle('is-open', !open);
      });
      document.addEventListener('click', (e) => {
        if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        }
      });
    }
    links.forEach((l) => {
      l.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  /* =========================================================================
     6. ANIMAÇÕES DE ENTRADA (REVEAL) NA ROLAGEM
     ======================================================================== */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  }

  /* =========================================================================
     7. HERO — PARALLAX SUAVE
     ======================================================================== */
  function initHeroParallax() {
    const bg = document.getElementById('heroBg');
    if (!bg) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) bg.style.transform = 'translateY(' + y * 0.25 + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* =========================================================================
     8. PROGRESSO DE ROLAGEM + VOLTAR AO TOPO
     ======================================================================== */
  function initScrollChrome() {
    const bar = document.querySelector('#scrollProgress span');
    const topBtn = document.getElementById('backToTop');
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = 'scaleX(' + p + ')';
      if (topBtn) topBtn.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* =========================================================================
     9. GALERIA + LIGHTBOX
     ======================================================================== */
  function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    if (!grid || !lightbox) return;

    const imgEl = document.getElementById('lightboxImg');
    const capEl = document.getElementById('lightboxCaption');
    let current = 0;

    function open(i) {
      const items = grid.querySelectorAll('.gallery__item');
      if (!items.length) return;
      current = i;
      sync();
      lightbox.hidden = false;
      requestAnimationFrame(() => lightbox.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { lightbox.hidden = true; }, 400);
    }

    function move(dir) {
      const items = grid.querySelectorAll('.gallery__item');
      current = (current + dir + items.length) % items.length;
      sync();
    }

    function sync() {
      const items = grid.querySelectorAll('.gallery__item');
      const img = items[current].querySelector('img');
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt;
      capEl.textContent = 'Foto ' + (current + 1) + ' de ' + items.length;
    }

    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery__item');
      if (item) open(Number(item.dataset.index));
    });

    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxPrev').addEventListener('click', () => move(-1));
    document.getElementById('lightboxNext').addEventListener('click', () => move(1));

    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    });
  }

  /* =========================================================================
     11. PLAYER DE ÁUDIO CUSTOMIZADO
     ======================================================================== */
  function fmtTime(s) {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  }

  function initAudio() {
    const audio = document.getElementById('audioEl');
    const playBtn = document.getElementById('audioPlay');
    const fill = document.getElementById('audioFill');
    const track = document.querySelector('.player__track');
    const cur = document.getElementById('audioCurrent');
    const dur = document.getElementById('audioDuration');
    const note = document.getElementById('audioNote');
    if (!audio || !playBtn) return;

    const src = CFG.music ? CFG.music.audioSrc : '';
    if (!src) {
      playBtn.disabled = true;
      playBtn.style.opacity = '.45';
      note.textContent = 'Adicione uma música em js/config.js → music.audioSrc para habilitar o player.';
      return;
    }
    audio.src = src;

    playBtn.innerHTML = icon('play');
    let playing = false;

    playBtn.addEventListener('click', () => {
      if (playing) { audio.pause(); } else { audio.play(); }
    });
    audio.addEventListener('play', () => { playing = true; playBtn.innerHTML = icon('pause'); });
    audio.addEventListener('pause', () => { playing = false; playBtn.innerHTML = icon('play'); });
    audio.addEventListener('timeupdate', () => {
      fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
      cur.textContent = fmtTime(audio.currentTime);
    });
    audio.addEventListener('loadedmetadata', () => {
      dur.textContent = fmtTime(audio.duration);
    });

    track.addEventListener('click', (e) => {
      const rect = track.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      if (isFinite(audio.duration)) {
        audio.currentTime = ratio * audio.duration;
        fill.style.width = (ratio * 100) + '%';
      }
    });
  }

  /* =========================================================================
     12. CONTAGEM REGRESSIVA + GOOGLE CALENDAR
     ======================================================================== */
  function initCountdown() {
    const target = new Date(CFG.wedding && CFG.wedding.dateISO).getTime();
    const els = {
      d: document.getElementById('cdDays'),
      h: document.getElementById('cdHours'),
      m: document.getElementById('cdMinutes'),
      s: document.getElementById('cdSeconds'),
    };
    if (!els.d) return;

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function tick() {
      const diff = Math.max(0, target - Date.now());
      els.d.textContent = pad(Math.floor(diff / 86400000));
      els.h.textContent = pad(Math.floor(diff / 3600000) % 24);
      els.m.textContent = pad(Math.floor(diff / 60000) % 60);
      els.s.textContent = pad(Math.floor(diff / 1000) % 60);
    }
    tick();
    setInterval(tick, 1000);
  }

  function formatCalendarDate(iso) {
    const d = new Date(iso);
    const p = (n) => String(n).padStart(2, '0');
    return p(d.getFullYear()) + p(d.getMonth() + 1) + p(d.getDate()) +
           'T' + p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
  }

  function initCalendarButton() {
    const btn = document.getElementById('saveCalendarBtn');
    if (!btn || !CFG.wedding) return;
    btn.addEventListener('click', () => {
      const w = CFG.wedding;
      const url =
        'https://calendar.google.com/calendar/render?action=TEMPLATE' +
        '&text=' + encodeURIComponent('Casamento — ' + CFG.couple.names) +
        '&dates=' + formatCalendarDate(w.dateISO) + '/' + formatCalendarDate(w.dateISO.replace(/T\d{2}:\d{2}/, 'T23:59')) +
        '&location=' + encodeURIComponent(w.venue + ', ' + w.city) +
        '&details=' + encodeURIComponent('Celebração de ' + CFG.couple.names + ' em ' + w.dateDisplay + '. Confirme sua presença no site do casamento.');
      window.open(url, '_blank', 'noopener');
    });
  }

  /* =========================================================================
     13. PERSISTÊNCIA LOCAL (RESERVA PARA FIREBASE/SUPABASE)
     ----------------------------------------------------------------------------
     Os dados de RSVP e recados hoje ficam em localStorage. Para trocar por
     Firebase/Supabase, substitua as funções load/save abaixo por chamadas
     ao banco — o restante da interface já está pronto.
     ======================================================================== */
  const store = {
    load(key, fallback) {
      try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
      catch (e) { return fallback; }
    },
    save(key, data) {
      try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { /* storage indisponível */ }
    },
  };

  /* ---------------------------------------------------------------------------
     13.1 RSVP
     --------------------------------------------------------------------------- */
  function setFieldError(field, message) {
    const wrapper = field.closest('.form__field');
    if (!wrapper) return;
    if (message) {
      wrapper.classList.add('has-error', 'is-shaking');
      let err = wrapper.querySelector('.form__error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'form__error';
        wrapper.appendChild(err);
      }
      err.textContent = message;
      setTimeout(() => wrapper.classList.remove('is-shaking'), 500);
    } else {
      wrapper.classList.remove('has-error', 'is-shaking');
    }
  }

  function initRsvp() {
    const form = document.getElementById('rsvpForm');
    const success = document.getElementById('rsvpSuccess');
    if (!form) return;

    const attendingGroup = document.getElementById('rsvpAttending');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = {
        nome: document.getElementById('rsvp-name'),
        sobrenome: document.getElementById('rsvp-lastname'),
        telefone: document.getElementById('rsvp-phone'),
        email: document.getElementById('rsvp-email'),
      };
      const attending = form.querySelector('input[name="presenca"]:checked');
      let ok = true;

      // Validação por campo
      setFieldError(fields.nome, fields.nome.value.trim().length < 2 ? 'Informe o seu nome.' : '');
      setFieldError(fields.sobrenome, fields.sobrenome.value.trim().length < 2 ? 'Informe o seu sobrenome.' : '');
      const phoneOk = /^[\d\s()\-+]{10,}$/.test(fields.telefone.value.trim());
      setFieldError(fields.telefone, phoneOk ? '' : 'Informe um telefone válido com DDD.');
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.value.trim());
      setFieldError(fields.email, emailOk ? '' : 'Informe um e-mail válido.');

      // Validação do grupo "Sim / Não"
      if (!attending) {
        let err = attendingGroup.parentElement.querySelector('.form__error:last-child');
        if (!err) {
          err = document.createElement('span');
          err.className = 'form__error';
          attendingGroup.closest('.form__fieldset').appendChild(err);
        }
        err.textContent = 'Selecione se poderá comparecer.';
        attendingGroup.closest('.form__fieldset').classList.add('has-error', 'is-shaking');
        ok = false;
      }

      // Feedback visual para valores corrigidos
      Object.values(fields).forEach((f) => f.addEventListener('input', () => setFieldError(f, '')));

      if (!ok || !Object.values(fields).every((f) => !f.closest('.form__field').classList.contains('has-error'))) {
        const firstErr = form.querySelector('.form__field.has-error input');
        if (firstErr) firstErr.focus();
        return;
      }

      // Persistência + ponto de integração backend
      const record = {
        id: Date.now(),
        nome: fields.nome.value.trim(),
        sobrenome: fields.sobrenome.value.trim(),
        telefone: fields.telefone.value.trim(),
        email: fields.email.value.trim(),
        presenca: attending.value,
        acompanhantes: document.getElementById('rsvp-guests').value,
        restricoes: document.getElementById('rsvp-diet').value.trim(),
        mensagem: document.getElementById('rsvp-message').value.trim(),
        criadoEm: new Date().toISOString(),
        /* TODO: enviar para Firebase/Supabase:
           db.collection('rsvp').add(record) */
      };
      const all = store.load('wedding:rsvp', []);
      all.push(record);
      store.save('wedding:rsvp', all);

      form.reset();
      success.hidden = false;
      success.innerHTML = '<strong>' + esc(CFG.rsvp.successTitle) + '</strong> ' + esc(CFG.rsvp.successText);
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Reexibe/atualiza a mensagem de sucesso se ainda houver dados
    if (CFG.rsvp && CFG.rsvp.successTitle) success.hidden = true;
  }

  /* ---------------------------------------------------------------------------
     13.2 RECADOS
     --------------------------------------------------------------------------- */
  function initMessages() {
    const form = document.getElementById('messageForm');
    const wall = document.getElementById('messagesWall');
    const textarea = document.getElementById('msg-text');
    const counter = document.getElementById('msgCounter');
    if (!form || !wall) return;

    let items = store.load('wedding:messages', CFG.messages && CFG.messages.samples ? CFG.messages.samples.slice() : []);
    renderMessageWall(items);

    textarea.addEventListener('input', () => {
      if (counter) counter.textContent = textarea.value.length + ' / 500';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('msg-name');
      const text = textarea;
      if (name.value.trim().length < 2) {
        setFieldError(name, 'Informe o seu nome.');
        name.focus();
        return;
      }
      if (text.value.trim().length < 2) {
        setFieldError(text, 'Escreva uma mensagem para os noivos.');
        text.focus();
        return;
      }
      const item = {
        name: name.value.trim(),
        message: text.value.trim().slice(0, 500),
        date: new Date().toLocaleDateString('pt-BR'),
      };
      /* TODO: enviar para Firebase/Supabase:
         db.collection('messages').add(item) */
      items = [item, ...items].slice(0, 30);
      store.save('wedding:messages', items);
      renderMessageWall(items);
      form.reset();
      if (counter) counter.textContent = '0 / 500';
      wall.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* =========================================================================
     14. INICIALIZAÇÃO
     ======================================================================== */
  function boot() {
    window.scrollTo(0, 0);
    initConfigEngine();
    renderCoupleCards();
    renderTimeline();
    renderGallery();
    renderPalette();
    renderCeremony();
    renderGifts();
    renderFooter();
    initVenueMap();
    renderMessageWall(store.load('wedding:messages', CFG.messages && CFG.messages.samples ? CFG.messages.samples.slice() : []));

    initPreloader();
    initHeader();
    initReveal();
    initHeroParallax();
    initScrollChrome();
    initGallery();
    initAudio();
    initCountdown();
    initCalendarButton();
    initRsvp();
    initMessages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();