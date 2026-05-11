/* FEMH Project File — interactive layer
   --------------------------------------------------
   - Filter chips: filter map folders + project cards
   - Folder drawer: hover-to-expand (desktop), tap-to-expand (touch)
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

  /* ----- Filter chips (folder drawer) ----- */
  const chips = Array.from(document.querySelectorAll('.chip'));
  const folders = Array.from(document.querySelectorAll('.folder'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const bands = Array.from(document.querySelectorAll('.band'));
  const noResults = document.getElementById('noResults');

  const matches = (el, filter) => {
    if (filter === 'all') return true;
    const tags = (el.getAttribute('data-tags') || '').split(/\s+/).filter(Boolean);
    return tags.includes(filter);
  };

  /* Populate chip counts dynamically from folder data-tags. */
  chips.forEach((chip) => {
    const slot = chip.querySelector('[data-chip-count]');
    if (!slot) return;
    const filter = chip.dataset.filter;
    const count = folders.filter((f) => matches(f, filter)).length;
    slot.textContent = count;
  });

  const applyFilter = (filter) => {
    let visibleFolders = 0;

    folders.forEach((folder) => {
      const show = matches(folder, filter);
      folder.classList.toggle('is-out', !show);
      if (show) visibleFolders++;
    });

    cards.forEach((card) => {
      card.classList.toggle('is-hidden', !matches(card, filter));
    });

    // Person-focussed "tape" band: only meaningful when at least one person folder shows.
    bands.forEach((band) => {
      const show = (filter === 'all' || filter === 'people');
      band.classList.toggle('is-out', !show);
    });

    // Empty state
    if (noResults) {
      noResults.classList.toggle('is-visible', visibleFolders === 0);
    }

    // Update chip active state
    chips.forEach((c) => {
      const isActive = c.dataset.filter === filter;
      c.classList.toggle('is-active', isActive);
      c.setAttribute('aria-pressed', String(isActive));
    });

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

  /* ----- Folder tap-to-expand on touch devices -----
     Desktop hover already opens folders. On touch (no hover) the first tap
     should reveal the description/bullets; the second tap navigates to the
     full project card. Detect via matchMedia(hover: none). */
  const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  if (isTouch) {
    folders.forEach((folder) => {
      folder.addEventListener('click', (e) => {
        if (!folder.classList.contains('is-open')) {
          e.preventDefault();
          // Close any other open folder
          folders.forEach((f) => { if (f !== folder) f.classList.remove('is-open'); });
          folder.classList.add('is-open');
        }
        // else: let the click navigate to #project-XX
      });
    });
    // Tap outside any folder closes everything.
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.folder')) {
        folders.forEach((f) => f.classList.remove('is-open'));
      }
    });
  }

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

  /* ----- Folder keyboard accessibility (Enter / Space) -----
     <a> elements already work with Enter; this just makes sure
     space-bar press behaves like a click on folders. */
  folders.forEach((folder) => {
    folder.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        folder.click();
      }
    });
  });

  /* ----- Soft section indicator in nav ----- */
  // (No DOM element to update; left intentionally minimal — the menu
  // overlay is the primary jumping mechanism.)
})();
