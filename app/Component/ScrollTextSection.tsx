'use client';

import TextAnimation from '@/components/ui/scroll-text';
import React from 'react';

export default function ScrollTextSection() {
  return (
    <>
      <style>{`
        .scroll-text-wrapper {
          position: relative;
          z-index: 10;
          font-family: 'Syne', sans-serif;
          color: #fff;
          padding: 0 44px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .scroll-text-block {
          min-height: 40vh;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .scroll-text-center {
          justify-content: center;
          text-align: center;
        }
        .scroll-text-right {
          justify-content: flex-end;
          text-align: right;
        }
        @media (max-width: 1024px) {
          .scroll-text-wrapper { padding: 0 30px; }
        }
        @media (max-width: 768px) {
          .scroll-text-wrapper { padding: 0 20px; }
          .scroll-text-block { min-height: 30vh; }
        }
        @media (max-width: 480px) {
          .scroll-text-wrapper { padding: 0 16px; }
          .scroll-text-block { min-height: 25vh; }
        }
      `}</style>
    <div className="scroll-text-wrapper">
      {/* Block 1 — centred headline */}
      <div className="scroll-text-block scroll-text-center">
        <TextAnimation
          text="Great "
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'easeOut', duration: 0.6 },
            },
          }}
          classname="text-4xl md:text-5xl xl:text-7xl font-bold capitalize"
        />
        <TextAnimation
          text="websites "
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'easeOut', duration: 0.6 },
            },
          }}
          classname="text-4xl md:text-5xl xl:text-7xl font-bold capitalize text-[#b8ff57]"
        />
        <TextAnimation
          text="start here."
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'easeOut', duration: 0.6 },
            },
          }}
          classname="text-4xl md:text-5xl xl:text-7xl font-bold capitalize"
        />
      </div>

      {/* Block 2 — left aligned, letter by letter */}
      <div className="scroll-text-block">
        <TextAnimation
          as="p"
          letterAnime={true}
          text="Let's build "
          classname="text-4xl md:text-6xl xl:text-7xl font-bold lowercase"
          variants={{
            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            },
          }}
        />
        <TextAnimation
          as="p"
          letterAnime={true}
          text="something "
          classname="text-4xl md:text-6xl xl:text-7xl font-bold lowercase text-[#b8ff57]"
          variants={{
            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            },
          }}
        />
        <TextAnimation
          as="p"
          letterAnime={true}
          text="brilliant."
          classname="text-4xl md:text-6xl xl:text-7xl font-bold lowercase"
          variants={{
            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            },
          }}
        />
      </div>

      {/* Block 3 — right aligned, slide from right */}
      <div className="scroll-text-block scroll-text-right">
        <TextAnimation
          text="Fast. Modern. "
          direction="right"
          classname="text-4xl md:text-6xl xl:text-7xl font-bold capitalize"
        />
        <TextAnimation
          text="Conversion‑focused."
          direction="right"
          classname="text-4xl md:text-6xl xl:text-7xl font-bold capitalize text-[#b8ff57]"
        />
      </div>

      {/* Block 4 — centred, slide from bottom, line by line */}
      <div className="scroll-text-block scroll-text-center">
        <TextAnimation
          text="From idea, "
          direction="down"
          classname="text-4xl md:text-6xl xl:text-7xl font-bold capitalize"
        />
        <TextAnimation
          text="to design, "
          direction="down"
          classname="text-4xl md:text-6xl xl:text-7xl font-bold capitalize"
        />
        <TextAnimation
          text="to deployment"
          direction="down"
          classname="text-4xl md:text-6xl xl:text-7xl font-bold capitalize text-[#b8ff57]"
        />
      </div>
    </div>
    </>
  );
}
