'use client';

import React from 'react';

interface WebFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
}

const WebFeatureCard: React.FC<WebFeatureCardProps> = ({
  title,
  description,
  icon,
  active,
}) => {
  return (
    <>
      <style>{`
        .feature-card {
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          border: 2px solid;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(184, 255, 87, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .feature-card:hover::before {
          left: 100%;
        }
        
        .feature-card-active {
          background: #000;
          border-color: #000;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-4px);
        }
        
        .feature-card-inactive {
          background: white;
          border-color: transparent;
          color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card-inactive:hover {
          border-color: rgba(184, 255, 87, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        
        .feature-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .feature-icon-active {
          color: #b8ff57;
        }
        
        .feature-icon-inactive {
          color: #000;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.2;
          font-family: 'Syne', sans-serif;
        }
        
        .feature-description {
          font-size: 1rem;
          margin-bottom: 32px;
          line-height: 1.5;
          flex: 1;
          font-family: 'Inter', sans-serif;
        }
        
        .feature-description-active {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .feature-description-inactive {
          color: #6b7280;
        }
        
        .feature-button {
          margin-top: auto;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 600;
          width: fit-content;
          transition: all 0.3s;
          font-size: 14px;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .feature-button-active {
          background: white;
          color: #000;
        }
        
        .feature-button-active:hover {
          background: #b8ff57;
          transform: scale(1.05);
        }
        
        .feature-button-inactive {
          background: #000;
          color: white;
        }
        
        .feature-button-inactive:hover {
          background: #b8ff57;
          color: #000;
          transform: scale(1.05);
        }
      `}</style>
      
      <div className={`feature-card ${active ? 'feature-card-active' : 'feature-card-inactive'}`}>
        <div className={`feature-icon ${active ? 'feature-icon-active' : 'feature-icon-inactive'}`}>
          {icon}
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className={`feature-description ${active ? 'feature-description-active' : 'feature-description-inactive'}`}>
          {description}
        </p>
        <button 
          className={`feature-button ${active ? 'feature-button-active' : 'feature-button-inactive'}`}
          onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}
        >
          Learn More
        </button>
      </div>
    </>
  );
};

export const WebFeatures = () => {
  const [activeCard, setActiveCard] = React.useState<number>(0); // Default first card active

  const handleCardClick = (cardIndex: number) => {
    setActiveCard(cardIndex);
  };

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
          <path d="M7 8h4M7 11h2"/>
          <rect x="13" y="7" width="4" height="5" rx="1"/>
        </svg>
      ),
      title: "Custom Web Development",
      description: "From landing pages to complex web applications, we build fast, scalable, and secure solutions tailored to your business needs."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      title: "UI/UX Design Excellence",
      description: "Creating intuitive and beautiful interfaces that provide exceptional user experiences and drive conversions for your business."
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and performance across all devices and platforms."
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Ongoing Support & Maintenance",
      description: "Comprehensive support and maintenance services to keep your website secure, updated, and performing at its best."
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .web-features-section {
          background: #000;
          padding: 80px 0;
          font-family: 'Inter', sans-serif;
          position: relative;
          z-index: 10;
          width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        
        .web-features-container {
          max-width: 1400px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          width: calc(100% - 32px);
          max-width: calc(100% - 32px);
          box-sizing: border-box;
        }
        
        .web-features-header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 64px;
          gap: 32px;
        }
        
        .web-features-content {
          flex: 1;
        }
        
        .web-features-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          color: white;
          max-width: 800px;
          font-family: 'Syne', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        
        .web-features-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          line-height: 1.6;
          font-weight: 400;
        }
        
        .web-features-cta {
          background: #b8ff57;
          color: #000;
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 600;
          transition: all 0.3s;
          font-size: 16px;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .web-features-cta:hover {
          background: #a5ed49;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(184, 255, 87, 0.3);
        }
        
        .web-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          justify-items: center;
          width: 100%;
        }
        
        /* Mobile Responsive */
        @media (min-width: 768px) {
          .web-features-header {
            flex-direction: row;
            align-items: center;
          }
        }
        
        @media (max-width: 768px) {
          .web-features-section { 
            padding: 60px 16px; 
          }
          .web-features-container { 
            padding: 24px 16px; 
            width: calc(100% - 32px);
            margin: 0 16px;
          }
          .web-features-header { margin-bottom: 40px; }
          .web-features-grid { 
            gap: 20px;
            grid-template-columns: 1fr;
            justify-items: center;
            max-width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .web-features-section { 
            padding: 40px 12px; 
          }
          .web-features-container { 
            padding: 20px 12px; 
            border-radius: 16px;
            width: calc(100% - 24px);
            margin: 0 12px;
          }
          .web-features-header { 
            margin-bottom: 28px; 
            gap: 20px; 
          }
          .web-features-grid { 
            grid-template-columns: 1fr;
            gap: 16px;
            justify-items: center;
            place-items: center;
          }
          .web-features-title {
            font-size: clamp(1.8rem, 8vw, 2.5rem);
          }
          .web-features-subtitle {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 430px) {
          .web-features-section { 
            padding: 30px 8px; 
          }
          .web-features-container { 
            padding: 16px 8px; 
            border-radius: 12px;
            width: calc(100% - 16px);
            margin: 0 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .web-features-header { 
            margin-bottom: 24px; 
            gap: 16px;
            width: 100%;
            text-align: center;
          }
          .web-features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            justify-items: center;
            place-items: center;
            width: 100%;
            max-width: 350px;
          }
          .web-features-title {
            font-size: clamp(1.5rem, 9vw, 2.2rem);
          }
          .web-features-subtitle {
            font-size: 0.9rem;
          }
          .web-features-cta {
            padding: 12px 24px;
            font-size: 14px;
          }
        }
        
        @media (max-width: 375px) {
          .web-features-section { 
            padding: 25px 6px; 
          }
          .web-features-container { 
            padding: 14px 6px; 
            width: calc(100% - 12px);
            margin: 0 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .web-features-header {
            text-align: center;
            width: 100%;
          }
          .web-features-grid {
            width: 100%;
            max-width: 320px;
            justify-items: center;
          }
          .web-features-title {
            font-size: clamp(1.3rem, 10vw, 2rem);
          }
          .web-features-subtitle {
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 320px) {
          .web-features-section { 
            padding: 20px 4px; 
          }
          .web-features-container { 
            padding: 12px 4px; 
            width: calc(100% - 8px);
            margin: 0 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .web-features-header {
            text-align: center;
            width: 100%;
          }
          .web-features-grid {
            width: 100%;
            max-width: 290px;
            justify-items: center;
          }
          .web-features-title {
            font-size: clamp(1.2rem, 11vw, 1.8rem);
          }
          .web-features-subtitle {
            font-size: 0.8rem;
          }
          .web-features-cta {
            padding: 10px 20px;
            font-size: 13px;
          }
        }
      `}</style>
      
      <section className="web-features-section">
        <div className="web-features-container">
          <div className="web-features-header">
            <div className="web-features-content">
              <h2 className="web-features-title">
                Crafting Digital Excellence
              </h2>
              <p className="web-features-subtitle">
                We deliver comprehensive web solutions that drive results, from initial concept to successful deployment and beyond.
              </p>
            </div>
            <button 
              className="web-features-cta"
              onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}
            >
              Start Your Project
            </button>
          </div>

          <div className="web-features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                onClick={() => handleCardClick(index)} 
                style={{ 
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '320px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <WebFeatureCard
                  active={activeCard === index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebFeatures;