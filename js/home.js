/**
 * HOME.JS — Renders chapter cards on the home page.
 * Reads from CHAPTERS (defined in chapters.js).
 */

(function () {
  'use strict';

  const mount = document.getElementById('chapters-mount');
  if (!mount || typeof CHAPTERS === 'undefined') return;

  // Sort chapters by order field
  const sorted = [...CHAPTERS].sort((a, b) => a.order - b.order);

  // Render each chapter card
  sorted.forEach((chapter, index) => {
    const card = chapter.status === 'published'
      ? renderPublishedCard(chapter, index + 1)
      : renderComingSoonCard(chapter, index + 1);

    card.classList.add('fade-up');
    card.style.transitionDelay = `${index * 80}ms`;
    card.setAttribute('role', 'listitem');
    mount.appendChild(card);
  });

  // Fade-up animation via IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  mount.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  /* ── PUBLISHED CARD ─────────────────────────────────────── */

  function renderPublishedCard(chapter, displayNumber) {
    const link = document.createElement('a');
    link.href = `chapter.html?id=${encodeURIComponent(chapter.id)}`;
    link.className = 'chapter-card chapter-card--published';
    link.setAttribute('aria-label', `Kapitel ${displayNumber}: ${chapter.title}`);

    // Chapter-specific accent color
    if (chapter.accentColor) {
      link.style.setProperty('--chapter-accent', chapter.accentColor);
    }

    link.innerHTML = `
      <div class="chapter-card__image">
        ${imageOrPlaceholder(chapter.cardImage, chapter.title)}
      </div>
      <div class="chapter-card__content">
        <div class="chapter-card__meta">
          <span class="chapter-card__number">Kapitel ${displayNumber}</span>
        </div>
        <h3 class="chapter-card__title">${escapeHtml(chapter.title)}</h3>
        <p class="chapter-card__subtitle">${escapeHtml(chapter.subtitle)}</p>
        <span class="chapter-card__cta" aria-hidden="true">
          Kapitel lesen
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    `;

    return link;
  }

  /* ── COMING SOON CARD ───────────────────────────────────── */

  function renderComingSoonCard(chapter, displayNumber) {
    const div = document.createElement('div');
    div.className = 'chapter-card chapter-card--coming-soon';
    div.setAttribute('aria-label', `Kapitel ${displayNumber}: ${chapter.title} — kommt bald`);

    div.innerHTML = `
      <div class="chapter-card__image">
        ${imageOrPlaceholder(chapter.cardImage, chapter.title)}
        <div class="chapter-card__overlay">
          <span class="badge badge--coming-soon">Kommt bald</span>
        </div>
      </div>
      <div class="chapter-card__content">
        <div class="chapter-card__meta">
          <span class="chapter-card__number">Kapitel ${displayNumber}</span>
        </div>
        <h3 class="chapter-card__title">${escapeHtml(chapter.title)}</h3>
      </div>
    `;

    return div;
  }

  /* ── HELPERS ─────────────────────────────────────────────── */

  function imageOrPlaceholder(src, title) {
    if (src) {
      return `<img src="${escapeHtml(src)}" alt="" loading="lazy" />`;
    }
    // Emoji placeholder per topic keyword
    const icon = topicIcon(title);
    return `<div class="chapter-card__image-placeholder" aria-hidden="true">${icon}</div>`;
  }

  function topicIcon(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('flugzeug') || t.includes('luft') || t.includes('sitz')) return '✈️';
    if (t.includes('supermarkt') || t.includes('lagerhaus')) return '🛒';
    if (t.includes('fern') || t.includes('box')) return '📺';
    if (t.includes('medizin') || t.includes('lebens')) return '💊';
    if (t.includes('auto')) return '🚗';
    return '✦';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

})();
