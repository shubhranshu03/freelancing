'use client';

import { motion, useSpring } from 'framer-motion';
import React, { type MouseEvent, useRef, useState } from 'react';

interface ImageItem {
  img: string;
  label: string;
  tag: string;
}

function ImageReveal2() {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>({
    src: '',
    alt: '',
    opacity: 0,
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
      img: '/o5.jpg',
      label: 'Web Designing',
      tag: 'Service',
    },
    {
      img: '/03.jpg',
      label: 'UI/UX Design',
      tag: 'Service',
    },
    {
      img: '/o2.jpg',
      label: 'Website Redesign',
      tag: 'Service',
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };

  return (
    <>
      <style>{`
        .img-reveal-section {
          position: relative;
          padding: 0 44px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .img-reveal-section .img-reveal-label {
          font-size: 4.5rem;
          font-weight: 700;
          margin: 0;
        }
        .img-reveal-section .img-reveal-row {
          width: 100%;
          padding: 20px 0;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          color: #fff;
        }
        .img-reveal-section .img-reveal-tag {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .img-reveal-section .img-reveal-dot {
          width: 10px;
          height: 10px;
          background: #b8ff57;
          display: inline-block;
          border-radius: 2px;
        }
        
        /* Comprehensive Mobile Responsive Design */
        @media (min-width: 1200px) {
          .img-reveal-section { padding: 0 60px; }
          .img-reveal-section .img-reveal-label { font-size: 5.5rem; }
          .img-reveal-section .img-reveal-row { padding: 25px 0; }
          .img-reveal-section .img-reveal-tag { font-size: 0.9rem; gap: 10px; }
          .img-reveal-section .img-reveal-dot { width: 12px; height: 12px; }
        }
        
        @media (max-width: 1024px) {
          .img-reveal-section { padding: 0 40px; }
          .img-reveal-section .img-reveal-label { font-size: 4rem; }
          .img-reveal-section .img-reveal-row { padding: 18px 0; }
        }
        
        @media (max-width: 768px) {
          .img-reveal-section { padding: 0 30px; }
          .img-reveal-section .img-reveal-label { font-size: 3.2rem; }
          .img-reveal-section .img-reveal-tag { font-size: 0.8rem; }
          .img-reveal-section .img-reveal-floating { display: none !important; }
          .img-reveal-section .img-reveal-row { padding: 16px 0; }
        }
        
        @media (max-width: 640px) {
          .img-reveal-section { padding: 0 25px; }
          .img-reveal-section .img-reveal-label { font-size: 2.8rem; }
          .img-reveal-section .img-reveal-tag { font-size: 0.75rem; gap: 6px; }
          .img-reveal-section .img-reveal-dot { width: 9px; height: 9px; }
          .img-reveal-section .img-reveal-row { padding: 14px 0; }
        }
        
        @media (max-width: 480px) {
          .img-reveal-section { padding: 0 20px; }
          .img-reveal-section .img-reveal-label { font-size: 2.2rem; }
          .img-reveal-section .img-reveal-row { padding: 14px 0; }
          .img-reveal-section .img-reveal-tag { font-size: 0.7rem; gap: 6px; }
          .img-reveal-section .img-reveal-dot { width: 8px; height: 8px; }
        }
        
        @media (max-width: 430px) {
          .img-reveal-section { padding: 0 18px; }
          .img-reveal-section .img-reveal-label { font-size: 1.9rem; }
          .img-reveal-section .img-reveal-row { padding: 12px 0; }
          .img-reveal-section .img-reveal-tag { font-size: 0.65rem; gap: 5px; }
          .img-reveal-section .img-reveal-dot { width: 7px; height: 7px; }
        }
        
        @media (max-width: 375px) {
          .img-reveal-section { padding: 0 16px; }
          .img-reveal-section .img-reveal-label { font-size: 1.7rem; }
          .img-reveal-section .img-reveal-row { padding: 11px 0; }
          .img-reveal-section .img-reveal-tag { font-size: 0.6rem; }
        }
        
        @media (max-width: 320px) {
          .img-reveal-section { padding: 0 12px; }
          .img-reveal-section .img-reveal-label { font-size: 1.5rem; }
          .img-reveal-section .img-reveal-row { padding: 10px 0; }
          .img-reveal-section .img-reveal-tag { font-size: 0.55rem; gap: 4px; }
          .img-reveal-section .img-reveal-dot { width: 6px; height: 6px; }
        }
      `}</style>
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className='img-reveal-section'
      style={{
        fontFamily: 'Syne, sans-serif',
      }}
    >
      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className='img-reveal-row'
        >
          <p className='img-reveal-label'>{item.label}</p>
          <span className='img-reveal-tag'>
            {item.tag}
            <span className='img-reveal-dot' />
          </span>
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className='img-reveal-floating rounded-lg object-cover absolute top-0 left-0 pointer-events-none'
        style={{
          width: '300px',
          height: '220px',
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
          transition: 'opacity 0.2s ease-in-out',
          zIndex: 50,
        }}
      />
    </section>
    </>
  );
}

export default ImageReveal2;
