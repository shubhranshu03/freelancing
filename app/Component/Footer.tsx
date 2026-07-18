'use client';

import React from 'react';

export const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        .footer-wrap {
          background: #000000;
          padding: 60px 44px 32px;
          font-family: 'Inter', sans-serif;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Brand row */
        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .footer-logo-box {
          width: 36px;
          height: 36px;
          background: #b8ff57;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }

        /* Main content row */
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .footer-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .footer-headline span {
          color: #b8ff57;
          font-weight: 700;
        }

        .footer-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .footer-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0 0 28px 0;
          max-width: 360px;
          text-decoration: none !important;
        }

        .footer-desc * {
          text-decoration: none !important;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #b8ff57;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 0 30px -8px rgba(184,255,87,0.5);
        }

        .footer-cta-btn:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(184,255,87,0.3);
        }

        /* Bottom bar */
        .footer-bottom {
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-copy {
          font-size: 11px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
        }

        .footer-credits-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-heart {
          color: #ff4757;
          display: inline-block;
          animation: hb 2s ease-in-out infinite;
        }

        @keyframes hb {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .footer-credits-row a {
          color: #b8ff57;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.08em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .footer-credits-row a:hover {
          text-decoration: underline;
        }

        .footer-x-icon {
          width: 10px;
          height: 10px;
          fill: #b8ff57;
          transition: fill 0.3s ease;
        }

        .footer-credits-row a:hover .footer-x-icon {
          fill: #fff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .footer-wrap { padding: 52px 36px 28px; }
          .footer-main { gap: 36px; }
        }

        @media (max-width: 768px) {
          .footer-wrap { padding: 44px 28px 24px; }
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-bottom: 32px;
          }
          .footer-desc { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }

        @media (max-width: 480px) {
          .footer-wrap { padding: 36px 20px 20px; }
          .footer-brand-row { margin-bottom: 28px; gap: 10px; }
          .footer-logo-box { width: 30px; height: 30px; }
          .footer-logo-text { font-size: 18px; }
          .footer-main { gap: 24px; padding-bottom: 24px; }
          .footer-headline { font-size: clamp(1.5rem, 7vw, 2rem); }
          .footer-desc { font-size: 13px; margin-bottom: 20px; }
          .footer-cta-btn { padding: 12px 24px; font-size: 11px; }
          .footer-bottom { padding-top: 18px; }
          .footer-copy { font-size: 10px; }
          .footer-credits-row { font-size: 10px; }
        }

        @media (max-width: 430px) {
          .footer-wrap { padding: 32px 16px 18px; }
          .footer-brand-row { margin-bottom: 24px; }
          .footer-logo-box { width: 28px; height: 28px; border-radius: 6px; }
          .footer-logo-text { font-size: 17px; }
          .footer-headline { font-size: clamp(1.4rem, 8vw, 1.9rem); }
          .footer-sub { font-size: 11px; }
          .footer-desc { font-size: 12px; line-height: 1.65; margin-bottom: 18px; }
          .footer-cta-btn { padding: 11px 22px; font-size: 11px; }
          .footer-bottom { padding-top: 16px; gap: 6px; }
          .footer-copy { font-size: 9px; }
          .footer-credits-row { font-size: 9px; }
        }

        @media (max-width: 375px) {
          .footer-wrap { padding: 28px 14px 16px; }
          .footer-headline { font-size: clamp(1.3rem, 9vw, 1.7rem); }
          .footer-cta-btn { padding: 10px 20px; }
        }
      `}</style>

      <footer className="footer-wrap">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand-row">
            <div className="footer-logo-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
            <span className="footer-logo-text">.webstudio</span>
          </div>

          {/* Main two-column */}
          <div className="footer-main">
            <div>
              <h2 className="footer-headline">
                A <span>Partnership.</span>
              </h2>
              <p className="footer-sub">We build together.</p>
            </div>

            <div>
              <h3 className="footer-headline" style={{ marginBottom: '16px' }}>
                Beyond <span>Expectations.</span>
              </h3>
              <p className="footer-desc">
                We build websites and web applications that are fast, modern, and
                conversion-focused. From idea to deployment, we create digital
                experiences that grow your business.
              </p>
              
              {/* Contact Information */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '8px',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a 
                    href="https://wa.me/918114878788" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#b8ff57', 
                      textDecoration: 'none', 
                      fontWeight: '500',
                      letterSpacing: '0.02em'
                    }}
                  >
                    +91 8114878788
                  </a>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a 
                    href="mailto:webstudio.hello@zohomail.in" 
                    style={{ 
                      color: '#b8ff57', 
                      textDecoration: 'none', 
                      fontWeight: '500',
                      letterSpacing: '0.02em'
                    }}
                  >
                    webstudio.hello@zohomail.in
                  </a>
                </div>
              </div>

              <button
                className="footer-cta-btn"
                onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 WebStudio. All rights reserved.</p>
            <div className="footer-credits-row">
              <span>Made with</span>
              <span className="footer-heart">❤</span>
              <span>by</span>
              <a href="https://x.com/shubhranshu2009" target="_blank" rel="noopener noreferrer">
                Shubhu
                <svg className="footer-x-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;