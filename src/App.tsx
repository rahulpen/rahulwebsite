import React, { useState } from 'react';
import './App.css';
import linkedinLogo from './img/LI-In-Bug.png';

export const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rahul.pen24@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="site-wrapper">
      <main className="content">
        <header className="header">
          <h1 className="name">Rahul Pendyala</h1>
          <p className="role">Software Engineer</p>

          <div className="contact-row">
            <button
              type="button"
              className="copy-email-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <span>{copied ? 'Copied' : 'rahul.pen24@gmail.com'}</span>
            </button>

            <a
              href="https://github.com/rahulpen"
              target="_blank"
              rel="noopener noreferrer"
              className="link-pill"
              aria-label="Rahul Pendyala GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-pendyala-4a4060163/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-pill"
              aria-label="Rahul Pendyala LinkedIn"
            >
              <img className="linkedin-thumb" src={linkedinLogo} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        <footer className="footer">
          <p className="footer-status">Under Construction</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
