'use client';

import React, { useState } from 'react';

const services = [
  {
    id: 1,
    name: 'Landing Page',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h4M7 11h2"/>
        <rect x="13" y="7" width="4" height="5" rx="1"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Full Website',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Web App Dev',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'E-commerce',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Website Redesign',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'UI/UX Design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .services-section {
          position: relative;
          z-index: 10;
          padding: 80px 44px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .services-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 14px;
        }
        .services-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 64px;
          line-height: 1;
        }
        .services-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px 48px;
        }
        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          width: 120px;
          transition: transform 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-6px);
        }
        .service-icon-ring {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: border-color 0.3s ease, background 0.3s ease;
          background: rgba(255,255,255,0.03);
        }
        .service-item:hover .service-icon-ring {
          border-color: #b8ff57;
          background: rgba(184, 255, 87, 0.06);
        }
        .service-icon-ring svg {
          color: rgba(255,255,255,0.55);
          transition: color 0.3s ease;
        }
        .service-item:hover .service-icon-ring svg {
          color: #b8ff57;
        }
        .service-name {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-align: center;
          transition: color 0.3s ease;
          line-height: 1.5;
        }
        .service-item:hover .service-name {
          color: #fff;
        }
        /* outer glow pulse on hover */
        .service-item:hover .service-icon-ring::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(184,255,87,0.2);
          animation: pingOnce 0.6s ease forwards;
        }
        @keyframes pingOnce {
          0%   { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        /* Comprehensive Mobile Responsive Design */
        @media (min-width: 1200px) {
          .services-section { padding: 100px 50px; }
          .services-title { 
            font-size: clamp(3rem, 6vw, 5rem); 
            margin-bottom: 80px; 
          }
          .services-grid { gap: 40px 60px; }
          .service-item { width: 140px; }
          .service-icon-ring { width: 96px; height: 96px; }
          .service-icon-ring svg { width: 36px; height: 36px; }
          .service-name { font-size: 12px; }
        }
        
        @media (max-width: 1024px) {
          .services-section { padding: 80px 40px; }
          .services-title { margin-bottom: 60px; }
          .services-grid { gap: 32px 48px; }
          .service-item { width: 130px; }
          .service-icon-ring { width: 86px; height: 86px; }
        }
        
        @media (max-width: 768px) {
          .services-section { padding: 60px 30px; }
          .services-title { margin-bottom: 50px; }
          .services-grid { gap: 28px 36px; justify-content: center; }
          .service-item { width: 120px; }
          .service-icon-ring { width: 80px; height: 80px; }
          .service-icon-ring svg { width: 30px; height: 30px; }
          .service-name { font-size: 11px; }
        }
        
        @media (max-width: 640px) {
          .services-section { padding: 50px 25px; }
          .services-title { margin-bottom: 45px; }
          .services-grid { gap: 24px 32px; }
          .service-item { width: 110px; }
          .service-icon-ring { width: 76px; height: 76px; }
          .service-icon-ring svg { width: 28px; height: 28px; }
          .service-name { font-size: 10.5px; }
        }
        
        @media (max-width: 480px) {
          .services-section { padding: 40px 20px; }
          .services-title { margin-bottom: 40px; }
          .services-grid { gap: 20px 28px; justify-content: center; }
          .service-item { width: 100px; }
          .service-icon-ring { width: 70px; height: 70px; }
          .service-icon-ring svg { width: 26px; height: 26px; }
          .service-name { font-size: 10px; }
        }
        
        @media (max-width: 430px) {
          .services-section { padding: 35px 18px; }
          .services-title { margin-bottom: 35px; }
          .services-grid { gap: 18px 24px; }
          .service-item { width: 90px; }
          .service-icon-ring { width: 64px; height: 64px; }
          .service-icon-ring svg { width: 24px; height: 24px; }
          .service-name { font-size: 9px; line-height: 1.4; }
          .services-eyebrow { font-size: 10px; margin-bottom: 12px; }
        }
        
        @media (max-width: 375px) {
          .services-section { padding: 30px 16px; }
          .services-title { margin-bottom: 30px; }
          .services-grid { gap: 16px 20px; }
          .service-item { width: 85px; }
          .service-icon-ring { width: 60px; height: 60px; }
          .service-icon-ring svg { width: 22px; height: 22px; }
          .service-name { font-size: 8.5px; }
        }
        
        @media (max-width: 320px) {
          .services-section { padding: 25px 12px; }
          .services-title { margin-bottom: 25px; }
          .services-grid { gap: 14px 18px; }
          .service-item { width: 80px; }
          .service-icon-ring { width: 56px; height: 56px; }
          .service-icon-ring svg { width: 20px; height: 20px; }
          .service-name { font-size: 8px; }
          .services-eyebrow { font-size: 9px; margin-bottom: 10px; }
        }
      `}</style>

      <section className="services-section">
        <p className="services-eyebrow">What We Offer</p>
        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.id}
              className="service-item"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="service-icon-ring">
                {s.icon}
              </div>
              <span className="service-name">{s.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
