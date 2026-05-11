/* FEMH Project File — interactive layer
   --------------------------------------------------
   - Filter chips: filter map tiles + project cards
   - Menu overlay: open / close, focus trap-lite
   - Sticky nav: shadow on scroll
   - Back-to-map: appears once user is past the map
   - Smooth-scroll handled by CSS (scroll-behavior)
   -------------------------------------------------- */
(function () {
  'use strict';

  /* ----- Sticky nav shadow ----- */
  const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 4) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Menu overlay ----- */
  const menuBtn = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');

  const openMenu = () => {
    if (!menuOverlay) return;
    menuOverlay.classList.add('is-open');
    menuOverlay.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (menuClose) menuClose.focus();
  };
  const closeMenu = () => {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('is-open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }
    document.body.style.overflow = '';
  };

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close when an in-menu link is clicked (the user is navigating away)
  if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        // small timeout so the hash change happens, then close
        setTimeout(closeMenu, 50);
      }
    });
  }

  /* ----- Filter chips ----- */
  const chips = Array.from(document.querySelectorAll('.chip'));
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const dividers = Array.from(document.querySelectorAll('.map-divider'));
  const noResults = document.getElementById('noResults');

  const matches = (el, filter) => {
    if (filter === 'all') return true;
    const tags = (el.getAttribute('data-tags') || '').split(/\s+/).filter(Boolean);
    return tags.includes(filter);
  };

  /* Populate chip counts dynamically from tile data-tags. */
  chips.forEach((chip) => {
    const slot = chip.querySelector('[data-chip-count]');
    if (!slot) return;
    const filter = chip.dataset.filter;
    const count = tiles.filter((t) => matches(t, filter)).length;
    slot.textContent = count;
  });

  const applyFilter = (filter) => {
    let visibleTiles = 0;

    tiles.forEach((tile) => {
      const show = matches(tile, filter);
      tile.classList.toggle('is-hidden', !show);
      if (show) visibleTiles++;
    });

    cards.forEach((card) => {
      card.classList.toggle('is-hidden', !matches(card, filter));
    });

    // Map divider for person-focussed: hide unless 'all' or 'people'
    dividers.forEach((d) => {
      const show = (filter === 'all' || filter === 'people');
      d.style.display = show ? '' : 'none';
    });

    // Empty state
    if (noResults) {
      noResults.classList.toggle('is-visible', visibleTiles === 0);
    }

    // Update chip active state
    chips.forEach((c) => c.classList.toggle('is-active', c.dataset.filter === filter));

    // Stash on history for shareable URLs
    try {
      const url = new URL(window.location.href);
      if (filter === 'all') url.searchParams.delete('filter');
      else url.searchParams.set('filter', filter);
      window.history.replaceState({}, '', url);
    } catch (_) { /* no-op */ }
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });

  // Apply filter from URL on load
  try {
    const params = new URL(window.location.href).searchParams;
    const initial = params.get('filter');
    if (initial && chips.some((c) => c.dataset.filter === initial)) {
      applyFilter(initial);
    }
  } catch (_) { /* no-op */ }

  /* ----- Back to map button ----- */
  const backBtn = document.getElementById('backToMap');
  const map = document.getElementById('map');
  if (backBtn && map) {
    let lastVisible = null;
    const update = () => {
      const mapBottom = map.getBoundingClientRect().bottom + window.scrollY;
      const visible = window.scrollY > mapBottom + 200;
      if (visible !== lastVisible) {
        backBtn.classList.toggle('is-visible', visible);
        lastVisible = visible;
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ----- Tile keyboard accessibility (Enter / Space) -----
     <a> elements already work with Enter; this just makes sure
     space-bar press behaves like a click on tiles. */
  tiles.forEach((tile) => {
    tile.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        tile.click();
      }
    });
  });

  /* ----- Soft section indicator in nav ----- */
  // (No DOM element to update; left intentionally minimal — the menu
  // overlay is the primary jumping mechanism.)
})();
