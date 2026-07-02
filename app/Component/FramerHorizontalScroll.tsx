'use client';
import {
  type MotionProps,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
import { useEffect, useRef, useState } from 'react';

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}
export const items = [
  { id: 1, url: '/w1.jpg' },
  { id: 2, url: '/w2.jpg' },
  { id: 3, url: '/w3.jpg' },
  { id: 4, url: '/w4.jpg' },
  { id: 5, url: '/w5.jpg' },
  { id: 6, url: '/w6.jpg' },
  { id: 7, url: '/w7.jpg' },
  { id: 8, url: '/w8.jpg' },
  { id: 9, url: '/w9.jpg' },
  { id: 10, url: '/w10.jpg' },
  { id: 11, url: '/w11.jpg' },
  { id: 12, url: '/w12.jpg' },
  { id: 13, url: '/w13.jpg' },
  { id: 14, url: '/w14.jpg' },
  { id: 15, url: '/w15.jpg' },
  { id: 16, url: '/w16.jpg' },
  { id: 20, url: '/20.jpg' },
  { id: 21, url: '/21.jpg' },
  { id: 22, url: '/22.jpg' },
  { id: 23, url: '/23.jpg' },
  { id: 24, url: '/24.jpg' },
  { id: 25, url: '/25.jpg' },
  { id: 26, url: '/26.jpg' },
];

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: '#008299' },
    partial: { backgroundColor: '#ffffff' },
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: false },
};

export default function FramerHorizontalScroll() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(mainRef);
  //   const { ref, start, end } = useRefScrollProgress(mainRef)
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  console.log(carouselEndPosition);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  useEffect(() => {
    window.addEventListener('scroll', () => console.log(carouselEndPosition));
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>{`
        .hz-scroll-cards {
          height: 300px;
          width: 300px;
          overflow: hidden;
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
        }

        @media (max-width: 1024px) {
          .hz-scroll-cards { height: 260px; width: 260px; }
        }
        @media (max-width: 768px) {
          .hz-scroll-cards { height: 220px; width: 220px; }
          .hz-footer-curved { height: 140px; border-top-left-radius: 60%; border-top-right-radius: 60%; }
          .hz-footer-btn { padding: 16px 32px; font-size: 13px; }
          .hz-footer-title {
            font-size: 14vw;
            transform: translateY(0) !important;
            margin-bottom: -20px;
          }
        }
        @media (max-width: 480px) {
          .hz-scroll-cards { height: 180px; width: 180px; }
          .hz-footer-curved { height: 100px; border-top-left-radius: 50%; border-top-right-radius: 50%; }
          .hz-footer-btn { padding: 14px 28px; font-size: 12px; }
          .hz-footer-title {
            font-size: 16vw;
            margin-bottom: -16px;
          }
        }
      `}</style>
      <section ref={mainRef}>
        <div className='w-full mx-auto' style={{ height: '300vh' }}>
          <div className='sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden'>
            <motion.div ref={carouselRef} className='flex gap-5 md:gap-10' style={{ x }}>
              {items.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className='hz-scroll-cards group relative overflow-hidden bg-muted'
                >
                  <motion.img
                    key={item.id}
                    className='w-full shrink-0 h-full object-cover'
                    src={item?.url}
                    alt={'img'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <footer className='hz-footer-wrap group relative mt-16 md:mt-32 overflow-visible pb-0'>
        <h1 className='hz-footer-title group-hover:translate-y-4 translate-y-10 md:translate-y-20 transition-all duration-500 ease-out'>
          .webstudio
        </h1>
        <section className='hz-footer-curved h-36 md:h-48'>
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
