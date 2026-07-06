'use client';
import React from 'react';

export default function FramerHorizontalScroll() {
  return (
    <>
      <style>{`
        .hz-footer-wrap {
          padding: 80px 0 0;
        }
        .hz-footer-title {
          font-size: 16vw;
          line-height: 100%;
          text-transform: uppercase;
          font-weight: 600;
          text-align: center;
          background: linear-gradient(to bottom, #e5e5e5, #525252);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.5s ease-out;
          margin-bottom: 80px;
        }
        .hz-footer-curved {
          background: black;
          width: 100%;
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top-left-radius: 100%;
          border-top-right-radius: 100%;
          padding: 100px 20px 60px;
          min-height: 200px;
        }
        .hz-footer-btn {
          padding: 20px 40px;
          background-color: #b8ff57;
          color: #000;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 40px -10px rgba(184,255,87,0.5);
          transition: all 0.3s ease;
        }
        .hz-footer-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px -5px rgba(184,255,87,0.7);
        }

        /* Comprehensive Mobile Responsive */
        @media (min-width: 1200px) {
          .hz-footer-wrap { padding: 100px 0 0; }
          .hz-footer-title { 
            font-size: clamp(8rem, 14vw, 12rem); 
            margin-bottom: 100px;
          }
          .hz-footer-curved { 
            padding: 120px 40px 80px;
            min-height: 240px;
          }
          .hz-footer-btn { 
            padding: 24px 48px; 
            font-size: 16px; 
          }
        }

        @media (max-width: 1024px) {
          .hz-footer-wrap { padding: 70px 0 0; }
          .hz-footer-title { 
            font-size: clamp(6rem, 15vw, 10rem);
            margin-bottom: 70px;
          }
          .hz-footer-curved { 
            padding: 90px 30px 50px;
            border-top-left-radius: 80%;
            border-top-right-radius: 80%;
            min-height: 180px;
          }
          .hz-footer-btn { 
            padding: 18px 36px; 
            font-size: 13px; 
          }
        }

        @media (max-width: 768px) {
          .hz-footer-wrap { padding: 60px 0 0; }
          .hz-footer-title { 
            font-size: clamp(4rem, 16vw, 8rem);
            margin-bottom: 60px;
          }
          .hz-footer-curved { 
            padding: 80px 20px 50px;
            border-top-left-radius: 60%; 
            border-top-right-radius: 60%;
            min-height: 160px;
          }
          .hz-footer-btn { 
            padding: 16px 32px; 
            font-size: 13px; 
          }
        }

        @media (max-width: 640px) {
          .hz-footer-wrap { padding: 50px 0 0; }
          .hz-footer-title { 
            font-size: clamp(3rem, 18vw, 6rem);
            margin-bottom: 50px;
          }
          .hz-footer-curved { 
            padding: 60px 18px 40px;
            min-height: 140px;
          }
          .hz-footer-btn { 
            padding: 14px 28px; 
            font-size: 12px; 
          }
        }

        @media (max-width: 480px) {
          .hz-footer-wrap { padding: 40px 0 0; }
          .hz-footer-title { 
            font-size: clamp(2.5rem, 20vw, 5rem);
            margin-bottom: 40px;
          }
          .hz-footer-curved { 
            padding: 60px 16px 40px;
            border-top-left-radius: 50%; 
            border-top-right-radius: 50%;
            min-height: 120px;
          }
          .hz-footer-btn { 
            padding: 14px 28px; 
            font-size: 12px; 
          }
        }

        @media (max-width: 430px) {
          .hz-footer-wrap { padding: 35px 0 0; }
          .hz-footer-title { 
            font-size: clamp(2rem, 22vw, 4rem);
            margin-bottom: 35px;
          }
          .hz-footer-curved { 
            padding: 50px 14px 35px;
            min-height: 110px;
          }
          .hz-footer-btn { 
            padding: 12px 24px; 
            font-size: 11px; 
          }
        }

        @media (max-width: 375px) {
          .hz-footer-wrap { padding: 30px 0 0; }
          .hz-footer-title { 
            font-size: clamp(1.8rem, 24vw, 3.5rem);
            margin-bottom: 30px;
          }
          .hz-footer-curved { 
            padding: 45px 12px 30px;
            min-height: 100px;
          }
          .hz-footer-btn { 
            padding: 11px 22px; 
            font-size: 10px; 
          }
        }

        @media (max-width: 320px) {
          .hz-footer-wrap { padding: 25px 0 0; }
          .hz-footer-title { 
            font-size: clamp(1.5rem, 26vw, 3rem);
            margin-bottom: 25px;
          }
          .hz-footer-curved { 
            padding: 40px 10px 25px;
            min-height: 90px;
          }
          .hz-footer-btn { 
            padding: 10px 20px; 
            font-size: 9px; 
            letter-spacing: 0.05em;
          }
        }
      `}</style>
      
      <footer className='hz-footer-wrap group relative mt-16 md:mt-32 overflow-visible pb-0'>
        <h1 className='hz-footer-title'>
          .webstudio
        </h1>
        <section className='hz-footer-curved'>
          <button
            className='hz-footer-btn'
            onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}
          >
            Book Now
          </button>
        </section>
      </footer>
    </>
  );
}