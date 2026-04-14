/**
 * CHAPTER.JS — Renders a single chapter page.
 * Reads ?id=... from the URL, finds the chapter in CHAPTERS,
 * and renders hero + all body blocks + next chapter teaser.
 */

(function () {
  'use strict';

  if (typeof CHAPTERS === 'undefined') return;

  // ── URL ROUTING ────────────────────────────────────────────

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const chapter = CHAPTERS.find(c => c.id === id);

  // Not found or coming-soon → redirect to home
  if (!chapter || chapter.status === 'coming-soon') {
    window.location.replace('index.html');
    return;
  }

  // Chapter number = its position among published chapters, sorted by order
  const publishedSorted = CHAPTERS
    .filter(c => c.status === 'published')
    .sort((a, b) => a.order - b.order);
  const chapterNumber = publishedSorted.findIndex(c => c.id === id) + 1;

  // ── META / TITLE ────────────────────────────────────────────

  document.title = `${chapter.title} — You won the Time Lottery`;

  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) metaDesc.setAttribute('content', chapter.subtitle || '');

  const ogTitle = document.getElementById('og-title');
  if (ogTitle) ogTitle.setAttribute('content', chapter.title);

  const ogDesc = document.getElementById('og-description');
  if (ogDesc) ogDesc.setAttribute('content', chapter.subtitle || '');

  // ── ACCENT COLORS ───────────────────────────────────────────

  if (chapter.accentColor) {
    document.documentElement.style.setProperty('--chapter-accent', chapter.accentColor);
    // Derive a lighter tint (naive: just use the light variant of the closest base)
    // For simplicity we set a semi-transparent version
    document.documentElement.style.setProperty('--chapter-accent-light',
      hexToRgba(chapter.accentColor, 0.12));
  }

  // ── BUILD PAGE ──────────────────────────────────────────────

  const mount = document.getElementById('chapter-mount');
  if (!mount) return;

  const loading = document.getElementById('chapter-loading');
  if (loading) loading.remove();

  // Find next chapter
  const nextChapter = chapter.nextChapterId
    ? CHAPTERS.find(c => c.id === chapter.nextChapterId && c.status === 'published')
    : null;

  mount.innerHTML = `
    ${renderHero(chapter, chapterNumber)}
    ${renderHeader(chapter)}
    ${renderBody(chapter)}
    ${nextChapter ? renderNextChapter(nextChapter) : ''}
  `;

  initAudioPlayers();

  // ── BLOCK RENDERERS ─────────────────────────────────────────

  function renderHero(ch, num) {
    const imageHtml = ch.heroImage
      ? `<img class="chapter-hero__img" src="${esc(ch.heroImage)}" alt="" />`
      : `<div class="chapter-hero__placeholder" aria-hidden="true">${topicIcon(ch.title)}</div>`;

    return `
      <section class="chapter-hero" aria-label="Kapitelkopfbild">
        ${imageHtml}
        <div class="chapter-hero__gradient" aria-hidden="true"></div>
        <div class="chapter-hero__content">
          <div class="container">
            <div class="chapter-hero__meta">
              <span class="chapter-hero__number">Kapitel ${num}</span>
            </div>
            <h1 class="chapter-hero__title">${esc(ch.title)}</h1>
          </div>
        </div>
      </section>
    `;
  }

  function renderHeader(ch) {
    return '';
  }

  function renderBody(ch) {
    const blocksHtml = (ch.body || []).map(renderBlock).join('\n');
    return `
      <article class="chapter-body">
        <div class="container">
          <div class="chapter-body__inner">
            ${blocksHtml}
          </div>
        </div>
      </article>
    `;
  }

  function renderBlock(block) {
    switch (block.type) {
      case 'intro':
        return `<p class="block-intro">${md(block.text)}</p>`;

      case 'heading':
        return `<h2 class="block-heading">${esc(block.text)}</h2>`;

      case 'paragraph':
        return `<p class="block-paragraph">${md(block.text)}</p>`;

      case 'image':
        return `
          <figure class="block-image">
            <img class="block-image__img" src="${esc(block.src)}" alt="${esc(block.alt || '')}" loading="lazy" />
            ${block.caption ? `<figcaption class="block-image__caption">${esc(block.caption)}</figcaption>` : ''}
          </figure>
        `;

      case 'list': {
        const tag = block.ordered ? 'ol' : 'ul';
        const items = (block.items || [])
          .map(item => `<li>${md(item)}</li>`)
          .join('');
        return `<${tag} class="block-list">${items}</${tag}>`;
      }

      case 'pullquote':
        return `
          <blockquote class="block-pullquote">
            <p class="block-pullquote__text">${md(block.text)}</p>
            ${block.attribution
              ? `<span class="block-pullquote__attribution">${esc(block.attribution)}</span>`
              : ''}
          </blockquote>
        `;

      case 'video':
        return `
          <div class="block-video">
            <div class="block-video__wrapper">
              <iframe
                class="block-video__iframe"
                src="${esc(block.embedUrl)}"
                title="${block.caption ? esc(block.caption) : 'Video'}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            ${block.caption ? `<p class="block-video__caption">${esc(block.caption)}</p>` : ''}
          </div>
        `;

      case 'podcast':
        return `
          <a class="block-podcast" href="${esc(block.url)}" target="_blank" rel="noopener noreferrer"
             aria-label="Podcast öffnen: ${esc(block.label)}">
            <div class="block-podcast__icon" aria-hidden="true">🎧</div>
            <div class="block-podcast__content">
              <p class="block-podcast__label">${esc(block.label)}</p>
              ${block.description ? `<p class="block-podcast__description">${esc(block.description)}</p>` : ''}
            </div>
            <svg class="block-podcast__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        `;

      case 'audio': {
        const imgHtml = block.image
          ? `<div class="block-audio__image"><img src="${esc(block.image)}" alt="" loading="lazy" /></div>`
          : '';
        const idAttr = block.isPodcast ? ' id="chapter-podcast"' : '';
        const podcastBtn = !block.isPodcast
          ? `<a href="#chapter-podcast" class="block-podcast-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
               Zum Podcast des Kapitels
             </a>`
          : '';
        return `
          <div class="block-audio" data-audio-player${idAttr}>
            <div class="block-audio__card">
              ${imgHtml}
              <div class="block-audio__content">
                <div class="block-audio__header">
                  <span class="block-audio__tag">Jetzt hören</span>
                  <p class="block-audio__label">${esc(block.label || 'Kapitel anhören')}</p>
                </div>
                <div class="block-audio__controls">
                  <button class="block-audio__play-btn" data-audio-play aria-label="Abspielen">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-icon-play>
                      <path d="M5 3.5l13 6.5-13 6.5V3.5z" fill="currentColor"/>
                    </svg>
                  </button>
                  <div class="block-audio__timeline">
                    <div class="block-audio__progress" data-audio-progress>
                      <div class="block-audio__progress-fill" data-audio-fill style="width:0%"></div>
                    </div>
                    <div class="block-audio__times">
                      <span data-audio-current>0:00</span>
                      <span data-audio-total>--:--</span>
                    </div>
                  </div>
                </div>
                <div class="block-audio__speed">
                  <span class="block-audio__speed-label">Tempo</span>
                  <button class="block-audio__speed-btn" data-audio-speed="0.75">0.75x</button>
                  <button class="block-audio__speed-btn is-active" data-audio-speed="1">1x</button>
                  <button class="block-audio__speed-btn" data-audio-speed="1.25">1.25x</button>
                  <button class="block-audio__speed-btn" data-audio-speed="1.5">1.5x</button>
                  <button class="block-audio__speed-btn" data-audio-speed="2">2x</button>
                </div>
                <audio data-audio-el src="${esc(block.src)}" preload="metadata"></audio>
              </div>
            </div>
          </div>
          ${podcastBtn}
        `;
      }

      case 'closing':
        return `<p class="block-closing">${md(block.text)}</p>`;

      default:
        return '';
    }
  }

  function renderNextChapter(next) {
    const imageHtml = next.cardImage
      ? `<img src="${esc(next.cardImage)}" alt="" loading="lazy" />`
      : `<div class="next-chapter__placeholder" aria-hidden="true">${topicIcon(next.title)}</div>`;

    return `
      <section class="next-chapter" aria-label="Nächstes Kapitel">
        <div class="container">
          <div class="next-chapter__inner">
            <p class="next-chapter__label">Weiter lesen</p>
            <a class="next-chapter__card" href="chapter.html?id=${esc(next.id)}"
               aria-label="Nächstes Kapitel: ${esc(next.title)}">
              <div class="next-chapter__image">
                ${imageHtml}
              </div>
              <div class="next-chapter__content">
                <p class="next-chapter__topic">${esc(next.topic)}</p>
                <p class="next-chapter__title">${esc(next.title)}</p>
              </div>
              <svg class="next-chapter__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // ── AUDIO PLAYER ────────────────────────────────────────────

  function initAudioPlayers() {
    var players = mount.querySelectorAll('[data-audio-player]');
    players.forEach(function (player) {
      var audio      = player.querySelector('[data-audio-el]');
      var playBtn    = player.querySelector('[data-audio-play]');
      var fill       = player.querySelector('[data-audio-fill]');
      var progressBar = player.querySelector('[data-audio-progress]');
      var currentEl  = player.querySelector('[data-audio-current]');
      var totalEl    = player.querySelector('[data-audio-total]');
      var speedBtns  = player.querySelectorAll('[data-audio-speed]');
      if (!audio || !playBtn) return;

      function fmt(s) {
        var m = Math.floor(s / 60);
        var sec = Math.floor(s % 60);
        return m + ':' + (sec < 10 ? '0' : '') + sec;
      }

      var playIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 3.5l13 6.5-13 6.5V3.5z" fill="currentColor"/></svg>';
      var pauseIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="3" width="4" height="14" rx="1" fill="currentColor"/><rect x="12" y="3" width="4" height="14" rx="1" fill="currentColor"/></svg>';

      audio.addEventListener('loadedmetadata', function () {
        if (totalEl) totalEl.textContent = fmt(audio.duration);
      });

      audio.addEventListener('timeupdate', function () {
        if (!audio.duration) return;
        var pct = (audio.currentTime / audio.duration) * 100;
        if (fill) fill.style.width = pct + '%';
        if (currentEl) currentEl.textContent = fmt(audio.currentTime);
      });

      audio.addEventListener('ended', function () {
        playBtn.setAttribute('aria-label', 'Abspielen');
        playBtn.innerHTML = playIcon;
        if (fill) fill.style.width = '0%';
        if (currentEl) currentEl.textContent = '0:00';
      });

      playBtn.addEventListener('click', function () {
        if (audio.paused) {
          audio.play();
          playBtn.setAttribute('aria-label', 'Pause');
          playBtn.innerHTML = pauseIcon;
        } else {
          audio.pause();
          playBtn.setAttribute('aria-label', 'Abspielen');
          playBtn.innerHTML = playIcon;
        }
      });

      if (progressBar) {
        progressBar.addEventListener('click', function (e) {
          if (!audio.duration) return;
          var rect = progressBar.getBoundingClientRect();
          var pct = (e.clientX - rect.left) / rect.width;
          audio.currentTime = Math.max(0, Math.min(1, pct)) * audio.duration;
        });
      }

      speedBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          audio.playbackRate = parseFloat(btn.dataset.audioSpeed);
          speedBtns.forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
        });
      });
    });
  }

  // ── HELPERS ─────────────────────────────────────────────────

  // Inline markdown: **bold** and *italic* — HTML is escaped first for safety
  function md(str) {
    if (!str) return '';
    return esc(str)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function topicIcon(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('flugzeug') || t.includes('sitz') || t.includes('luft')) return '✈️';
    if (t.includes('supermarkt') || t.includes('lagerhaus')) return '🛒';
    if (t.includes('fern') || t.includes('box')) return '📺';
    if (t.includes('medizin') || t.includes('lebens')) return '💊';
    if (t.includes('auto')) return '🚗';
    return '✦';
  }

  function hexToRgba(hex, alpha) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return `rgba(107, 154, 139, ${alpha})`;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

})();
