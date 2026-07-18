'use client';

import React from 'react';

const services = [
  { id: 1, name: 'Web Design &\nDevelopment' },
  { id: 2, name: 'UI/UX\nDesign' },
  { id: 3, name: 'E-commerce\nDevelopment' },
  { id: 4, name: 'Performance\nOptimization' },
  { id: 5, name: 'Search Engine\nOptimization' },
  { id: 6, name: 'Web App\nDevelopment' },
  { id: 7, name: 'Website\nMaintenance' },
  { id: 8, name: 'Brand Identity\nDesign' },
  { id: 9, name: 'Custom Software\nDevelopment' },
];

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .new-services-section {
          background: #000;
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
          position: relative;
          z-index: 10;
          width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        
        .new-services-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }
        
        .new-services-header {
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .new-services-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
        }
        
        .services-arrow-circle {
          width: clamp(60px, 12vw, 100px);
          height: clamp(60px, 12vw, 100px);
          background: #b8ff57;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .services-arrow-circle svg {
          width: clamp(24px, 5vw, 40px);
          height: clamp(24px, 5vw, 40px);
          color: #000;
        }
        
        .services-divider {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          margin: 40px 0 60px 0;
        }
        
        .new-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .new-service-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          border: 2px solid transparent;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .new-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: #b8ff57;
          border-radius: 0 16px 0 100%;
          transition: all 0.3s ease;
        }
        
        .new-service-card:hover::before {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
        
        .new-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(184, 255, 87, 0.2);
          border-color: #b8ff57;
        }
        
        .new-service-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #000;
          line-height: 1.3;
          margin: 0;
          position: relative;
          z-index: 2;
          white-space: pre-line;
          transition: color 0.3s ease;
        }
        
        .new-service-card:hover .new-service-title {
          color: #000;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .new-services-section { 
            padding: 60px 16px; 
          }
          
          .new-services-header {
            margin-bottom: 40px;
            gap: 15px;
          }
          
          .services-divider {
            margin: 30px 0 40px 0;
          }
          
          .new-services-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            max-width: 500px;
          }
          
          .new-services-grid .new-service-card:nth-child(9) {
            grid-column: 1 / -1;
            max-width: 240px;
            margin: 0 auto;
          }
          
          .new-service-card {
            padding: 20px 16px;
            min-height: 100px;
          }
          
          .new-service-title {
            font-size: 1rem;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .new-services-section { 
            padding: 50px 12px; 
          }
          
          .new-services-header {
            margin-bottom: 35px;
            gap: 12px;
            flex-direction: column;
          }
          
          .services-divider {
            margin: 25px 0 35px 0;
          }
          
          .new-services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            max-width: 400px;
          }
          
          .new-services-grid .new-service-card:nth-child(9) {
            grid-column: 1 / -1;
            max-width: 190px;
            margin: 0 auto;
          }
          
          .new-service-card {
            padding: 18px 14px;
            border-radius: 12px;
            min-height: 90px;
          }
          
          .new-service-card::before {
            width: 40px;
            height: 40px;
            border-radius: 0 12px 0 100%;
          }
          
          .new-service-card:hover::before {
            border-radius: 12px;
          }
          
          .new-service-title {
            font-size: 0.9rem;
            text-align: center;
          }
        }
        
        @media (max-width: 430px) {
          .new-services-section { 
            padding: 40px 10px; 
          }
          
          .new-services-header {
            margin-bottom: 30px;
            gap: 10px;
          }
          
          .services-divider {
            margin: 20px 0 30px 0;
          }
          
          .new-services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            max-width: 350px;
          }
          
          .new-services-grid .new-service-card:nth-child(9) {
            grid-column: 1 / -1;
            max-width: 170px;
            margin: 0 auto;
          }
          
          .new-service-card {
            padding: 16px 12px;
            min-height: 85px;
          }
          
          .new-service-title {
            font-size: 0.85rem;
            text-align: center;
          }
        }
        
        @media (max-width: 375px) {
          .new-services-section { 
            padding: 35px 8px; 
          }
          
          .new-services-header {
            margin-bottom: 25px;
          }
          
          .new-services-grid {
            grid-template-columns: 1fr 1fr;
            max-width: 320px;
            gap: 10px;
          }
          
          .new-services-grid .new-service-card:nth-child(9) {
            grid-column: 1 / -1;
            max-width: 155px;
            margin: 0 auto;
          }
          
          .new-service-card {
            padding: 14px 10px;
            min-height: 80px;
          }
          
          .new-service-title {
            font-size: 0.8rem;
            text-align: center;
          }
        }
        
        @media (max-width: 320px) {
          .new-services-section { 
            padding: 30px 6px; 
          }
          
          .new-services-header {
            margin-bottom: 20px;
          }
          
          .new-services-grid {
            grid-template-columns: 1fr 1fr;
            max-width: 280px;
            gap: 8px;
          }
          
          .new-services-grid .new-service-card:nth-child(9) {
            grid-column: 1 / -1;
            max-width: 135px;
            margin: 0 auto;
          }
          
          .new-service-card {
            padding: 12px 8px;
            min-height: 75px;
          }
          
          .new-service-title {
            font-size: 0.75rem;
            text-align: center;
          }
        }
      `}</style>

      <section className="new-services-section">
        <div className="new-services-container">
          <div className="new-services-header">
            <h2 className="new-services-title">OUR</h2>
            <div className="services-arrow-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </div>
          
          <h2 className="new-services-title" style={{ marginBottom: 0 }}>SERVICES</h2>
          
          <div className="services-divider"></div>
          
          <div className="new-services-grid">
            {services.map((service) => (
              <div key={service.id} className="new-service-card">
                <h3 className="new-service-title">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
