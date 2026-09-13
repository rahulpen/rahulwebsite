import React, { useCallback, useEffect, useRef } from 'react';
import './App.css';

// Assembled at runtime so the address never appears as a single literal in
// the shipped bundle or the initial DOM, defeating regex-based harvesters.
// Array joins are used because minifiers constant-fold plain string concatenation.
const EMAIL_PARTS = ['rahul', 'pen24', 'gmail', 'com'];
const buildEmail = () =>
  [EMAIL_PARTS.slice(0, 2).join('.'), EMAIL_PARTS.slice(2).join('.')].join(String.fromCharCode(64));
const buildMailto = () => ['mail', 'to', ':'].join('') + buildEmail();

const GITHUB_URL = 'https://github.com/rahulpen';
const LINKEDIN_URL = 'https://www.linkedin.com/in/rahul-pendyala-4a4060163/';

const Arrow: React.FC = () => (
  <svg
    className="link-arrow"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const App: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(hover: none)').matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty('--mx', `${e.clientX}px`);
        scene.style.setProperty('--my', `${e.clientY}px`);
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Attach the mailto href only once the visitor shows intent (hover, focus,
  // or click), so it is absent from the DOM a scraper sees on page load.
  const revealEmail = useCallback((e: React.SyntheticEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    if (!el.getAttribute('href')) {
      el.href = buildMailto();
      el.title = buildEmail();
    }
  }, []);

  return (
    <div className="scene" ref={sceneRef}>
      <div className="scene-light" aria-hidden="true" />
      <div className="scene-grain" aria-hidden="true" />

      <main className="page">
        <header className="topbar reveal" style={{ '--i': 0 } as React.CSSProperties}>
          <span className="mono">Rahul Pendyala</span>
          <span className="mono status">
            <span className="status-mark" aria-hidden="true" />
            Under Construction
          </span>
        </header>

        <section className="hero">
          <h1 className="display">
            <span className="display-line reveal" style={{ '--i': 1 } as React.CSSProperties}>
              Rahul
            </span>{' '}
            <span className="display-line display-serif reveal" style={{ '--i': 2 } as React.CSSProperties}>
              Pendyala
            </span>
          </h1>
          <p className="tagline reveal" style={{ '--i': 3 } as React.CSSProperties}>
            Software Engineer
          </p>
        </section>

        <footer className="bottombar">
          <nav className="links reveal" style={{ '--i': 4 } as React.CSSProperties} aria-label="Contact">
            <a
              className="link"
              role="link"
              tabIndex={0}
              onPointerEnter={revealEmail}
              onFocus={revealEmail}
              onClick={revealEmail}
              aria-label="Email Rahul Pendyala"
            >
              <span className="link-text">Email</span>
              <Arrow />
            </a>
            <a
              className="link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rahul Pendyala GitHub"
            >
              <span className="link-text">GitHub</span>
              <Arrow />
            </a>
            <a
              className="link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rahul Pendyala LinkedIn"
            >
              <span className="link-text">LinkedIn</span>
              <Arrow />
            </a>
          </nav>

          <p className="mono copyright reveal" style={{ '--i': 5 } as React.CSSProperties}>
            &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
