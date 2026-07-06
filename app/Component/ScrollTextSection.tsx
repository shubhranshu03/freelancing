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

        /* Single responsive heading class using clamp — no Tailwind needed */
        .scroll-heading {
          font-size: clamp(2rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          display: inline;
        }
        .scroll-heading-accent {
          font-size: clamp(2rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #b8ff57;
          display: inline;
        }

        @media (max-width: 1024px) {
          .scroll-text-wrapper { padding: 0 40px; }
          .scroll-text-block { min-height: 35vh; }
        }
        @media (max-width: 768px) {
          .scroll-text-wrapper { padding: 0 28px; }
          .scroll-text-block { min-height: 28vh; }
        }
        @media (max-width: 480px) {
          .scroll-text-wrapper { padding: 0 20px; }
          .scroll-text-block { min-height: 22vh; }
        }
        @media (max-width: 430px) {
          .scroll-text-wrapper { padding: 0 16px; }
          .scroll-text-block { min-height: 20vh; }
        }
        @media (max-width: 375px) {
          .scroll-text-wrapper { padding: 0 14px; }
          .scroll-text-block { min-height: 18vh; }
        }
      `}</style>
    <div className="scroll-text-wrapper">
      {/* Block 1 — left aligned headline */}
      <div className="scroll-text-block">
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
          classname="scroll-heading"
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
          classname="scroll-heading-accent"
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
          classname="scroll-heading"
        />
      </div>

      {/* Block 2 — left aligned, letter by letter */}
      <div className="scroll-text-block">
        <TextAnimation
          as="p"
          letterAnime={true}
          text="Let's build "
          classname="scroll-heading"
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
          classname="scroll-heading-accent"
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
          classname="scroll-heading"
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

      {/* Block 3 — left aligned, slide from right */}
      <div className="scroll-text-block">
        <TextAnimation
          text="Fast. Modern. "
          direction="right"
          classname="scroll-heading"
        />
        <TextAnimation
          text="Conversion‑focused."
          direction="right"
          classname="scroll-heading-accent"
        />
      </div>

      {/* Block 4 — left aligned, slide from bottom, line by line */}
      <div className="scroll-text-block">
        <TextAnimation
          text="From idea, "
          direction="down"
          classname="scroll-heading"
        />
        <TextAnimation
          text="to design, "
          direction="down"
          classname="scroll-heading"
        />
        <TextAnimation
          text="to deployment"
          direction="down"
          classname="scroll-heading-accent"
        />
      </div>
    </div>
    </>
  );
}
