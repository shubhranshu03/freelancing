'use client';

import React from 'react';

export const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .footer-container {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          color: #000;
          padding: 16px 32px;
          border-top: 1px solid rgba(0,0,0,0.08);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        
        .footer-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(184, 255, 87, 0.03), transparent);
          animation: shimmer 3s infinite;
          z-index: 1;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: baseline;
          position: relative;
          z-index: 2;
        }
        
        .footer-left h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 6vw, 3.8rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          margin-bottom: 32px;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGlow 4s ease-in-out infinite alternate;
          line-height: 1;
        }
        
        @keyframes textGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.1); }
        }
        
        .footer-brand {
          margin-top: 0;
          display: flex;
          align-items: center;
          gap: 16px;
          animation: slideInLeft 1s ease-out 0.5s both;
        }
        
        @keyframes slideInLeft {
          0% { 
            opacity: 0;
            transform: translateX(-30px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .footer-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .footer-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .footer-icon:hover::before {
          left: 100%;
        }
        
        .footer-icon:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .footer-brand-text {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.01em;
          position: relative;
        }
        
        .footer-brand-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #b8ff57, #a5ed49);
          transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .footer-brand:hover .footer-brand-text::after {
          width: 100%;
        }
        
        .footer-right {
          animation: slideInRight 1s ease-out 0.7s both;
        }
        
        @keyframes slideInRight {
          0% { 
            opacity: 0;
            transform: translateX(30px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .footer-right h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #000;
          margin-bottom: 18px;
          transition: color 0.6s ease;
        }
        
        .footer-right:hover h2 {
          color: #333;
        }
        
        .footer-description {
          max-width: 350px;
          font-family: 'Inter', sans-serif;
          color: #000;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out 0.9s both;
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .footer-cta {
          padding: 14px 28px;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          animation: fadeInUp 1s ease-out 1.1s both;
        }
        
        .footer-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(184, 255, 87, 0.3), transparent);
          transition: left 0.6s;
        }
        
        .footer-cta:hover::before {
          left: 100%;
        }
        
        .footer-cta:hover {
          background: #b8ff57;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          position: relative;
          z-index: 2;
          animation: fadeInUp 1s ease-out 1.3s both;
        }
        
        .footer-credits {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .footer-heart {
          color: #ff4757;
          font-weight: 700;
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .footer-success {
          font-weight: 600;
          background: linear-gradient(90deg, #b8ff57, #a5ed49);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Dark Mode */
        .dark .footer-container {
          background: linear-gradient(135deg, #09090b 0%, #18181b 100%);
          color: #fff;
          border-top-color: rgba(255,255,255,0.08);
        }
        
        .dark .footer-container::before {
          background: linear-gradient(90deg, transparent, rgba(184, 255, 87, 0.05), transparent);
        }
        
        .dark .footer-left h2 {
          background: linear-gradient(135deg, #fff 0%, #ccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .dark .footer-icon {
          background: linear-gradient(135deg, #fff 0%, #ccc 100%);
        }
        
        .dark .footer-right h2 {
          color: #fff;
        }
        
        .dark .footer-right:hover h2 {
          color: #ccc;
        }
        
        .dark .footer-description {
          color: #fff;
        }
        
        .dark .footer-cta {
          background: #fff;
          color: #000;
        }
        
        .dark .footer-cta:hover {
          background: #b8ff57;
          color: #000;
        }
        
        .dark .footer-bottom {
          border-top-color: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
        }
        
        /* Responsive Design for All Devices */
        @media (min-width: 1200px) {
          .footer-container { padding: 20px 40px; }
          .footer-content { gap: 20px; }
          .footer-left h2 { font-size: clamp(3rem, 8vw, 6rem); }
          .footer-right h2 { font-size: clamp(2.5rem, 6vw, 4.5rem); }
          .footer-brand { margin-top: 20px; }
          .footer-bottom { margin-top: 32px; }
        }
        
        @media (max-width: 1024px) {
          .footer-container { padding: 18px 28px; }
          .footer-content { 
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: left;
          }
          .footer-left h2 { font-size: clamp(2.2rem, 7vw, 3.8rem); }
          .footer-right h2 { font-size: clamp(2rem, 6vw, 3.2rem); }
          .footer-brand { margin-top: 18px; }
          .footer-description { font-size: 15px; margin-bottom: 18px; }
          .footer-bottom { 
            flex-direction: column;
            gap: 14px;
            margin-top: 28px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-container { padding: 16px 20px; }
          .footer-content { gap: 24px; }
          .footer-left h2 { font-size: clamp(1.8rem, 8vw, 3rem); }
          .footer-right h2 { font-size: clamp(1.6rem, 7vw, 2.5rem); }
          .footer-brand { margin-top: 16px; gap: 10px; }
          .footer-icon { width: 28px; height: 28px; }
          .footer-brand-text { font-size: 22px; }
          .footer-description { font-size: 14px; max-width: 100%; }
          .footer-cta { padding: 12px 24px; font-size: 11px; }
          .footer-bottom { margin-top: 24px; font-size: 8px; }
        }
        
        @media (max-width: 640px) {
          .footer-container { padding: 14px 18px; }
          .footer-content { gap: 20px; }
          .footer-left h2 { font-size: clamp(1.5rem, 9vw, 2.5rem); }
          .footer-right h2 { font-size: clamp(1.4rem, 8vw, 2.2rem); }
          .footer-brand { margin-top: 14px; gap: 8px; }
          .footer-icon { width: 24px; height: 24px; }
          .footer-brand-text { font-size: 20px; }
          .footer-description { font-size: 13px; line-height: 1.5; }
          .footer-cta { padding: 11px 22px; }
          .footer-bottom { margin-top: 20px; }
        }
        
        @media (max-width: 480px) {
          .footer-container { padding: 12px 16px; }
          .footer-content { gap: 18px; }
          .footer-left h2 { font-size: clamp(1.3rem, 10vw, 2.2rem); }
          .footer-right h2 { font-size: clamp(1.2rem, 9vw, 2rem); }
          .footer-brand { margin-top: 12px; }
          .footer-brand-text { font-size: 18px; }
          .footer-description { font-size: 12px; }
          .footer-cta { padding: 10px 20px; font-size: 10px; }
          .footer-bottom { margin-top: 18px; }
          .footer-credits { 
            flex-wrap: wrap; 
            justify-content: center;
            gap: 8px;
          }
        }
        
        @media (max-width: 430px) {
          .footer-container { padding: 8px 12px; }
          .footer-content { 
            grid-template-columns: 1fr;
            gap: 12px;
            align-items: start;
          }
          .footer-left h2 { 
            font-size: 1.2rem; 
            margin-bottom: 8px;
            line-height: 1.1;
          }
          .footer-right h2 { 
            font-size: 1.2rem; 
            margin-bottom: 10px;
            line-height: 1.1;
          }
          .footer-brand { margin-top: 0; gap: 6px; }
          .footer-icon { width: 18px; height: 18px; }
          .footer-brand-text { font-size: 14px; }
          .footer-description { 
            font-size: 9px; 
            margin-bottom: 8px;
            line-height: 1.3;
            max-width: 100%;
          }
          .footer-cta { padding: 6px 12px; font-size: 8px; }
          .footer-bottom { 
            margin-top: 12px; 
            font-size: 6px;
            flex-direction: column;
            gap: 4px;
            z-index: 100;
          }
          .footer-credits { 
            flex-wrap: wrap; 
            justify-content: center;
            gap: 3px;
          }
        }
        
        @media (max-width: 375px) {
          .footer-container { padding: 8px 10px; }
          .footer-content { gap: 14px; }
          .footer-left h2 { font-size: clamp(1rem, 12vw, 1.6rem); }
          .footer-right h2 { font-size: clamp(0.9rem, 11vw, 1.4rem); }
          .footer-brand-text { font-size: 14px; }
          .footer-description { font-size: 10px; }
          .footer-cta { padding: 7px 16px; }
          .footer-bottom { margin-top: 14px; }
        }
        
        @media (max-width: 320px) {
          .footer-container { padding: 6px 8px; }
          .footer-content { gap: 12px; }
          .footer-left h2 { font-size: clamp(0.9rem, 13vw, 1.4rem); }
          .footer-right h2 { font-size: clamp(0.8rem, 12vw, 1.2rem); }
          .footer-brand { gap: 6px; }
          .footer-icon { width: 18px; height: 18px; }
          .footer-brand-text { font-size: 12px; }
          .footer-description { font-size: 9px; }
          .footer-cta { padding: 6px 14px; font-size: 8px; }
          .footer-bottom { margin-top: 12px; font-size: 6px; }
        }
      `}</style>
      
      <footer className="footer-container dark:bg-zinc-950">
        <div className="footer-content">
          <div className="footer-left">
            <h2>A Partnership.</h2>
            <div className="footer-brand">
              <div className="footer-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white dark:fill-black"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" fill="currentColor" />
                  <path d="M2 12L12 17L22 12" fill="currentColor" />
                </svg>
              </div>
              <span className="footer-brand-text">WebStudio</span>
            </div>
          </div>

          <div className="footer-right">
            <h2>Beyond Expectations.</h2>
            <p className="footer-description">
              We build websites and web applications that are fast, modern, and conversion-focused. 
              From idea to deployment, we create digital experiences that grow your business.
            </p>
            <button 
              className="footer-cta"
              onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 WEBSTUDIO</p>
          <p>ALL RIGHTS RESERVED</p>
          <div className="footer-credits">
            <span>MADE WITH</span>
            <span className="footer-heart">❤</span>
            <span>BY</span>
            <a 
              href="https://x.com/martin745943021" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'underline', 
                textUnderlineOffset: '4px',
                color: '#000',
                fontWeight: '600'
              }}
            >
              MARTIN
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;