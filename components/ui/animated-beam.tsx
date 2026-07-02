'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState, useId } from 'react';
import Image from 'next/image';

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = 'rgba(255, 255, 255, 0.1)',
  pathWidth = 2,
  pathOpacity = 1,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
}: any) => {
  const [path, setPath] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const id = useId();

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPath(d);
      }
    };

    updatePath();
    
    const resizeObserver = new ResizeObserver(() => updatePath());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  if (!path) return null;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 z-0"
    >
      {/* Background Path */}
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={dotted ? '6 6' : 'none'}
      />
      {/* Animated Beam */}
      <motion.path
        d={path}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeWidth={pathWidth + 1}
        pathLength="100"
        initial={{
          strokeDashoffset: reverse ? -100 : 100,
        }}
        animate={{
          strokeDashoffset: reverse ? 100 : -100,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          strokeDasharray: '25 100',
        }}
      />
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0%" y1="0%" x2="100%" y2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={`z-10 flex h-12 w-12 items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  );
});

export const Icons = {
  typescript: () => <Image src="/typescript.png" alt="TypeScript" width={44} height={44} style={{ objectFit: 'contain' }} />,
  tailwindcss: () => <Image src="/vercel.png" alt="Vercel" width={44} height={44} style={{ objectFit: 'contain', filter: 'invert(1)' }} />,
  framer: () => <Image src="/claude.png" alt="Claude" width={44} height={44} style={{ objectFit: 'contain' }} />,
  logo: () => (
    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#b8ff57', textAlign: 'center', lineHeight: 1.2 }}>
      .web<br/>studio
    </span>
  ),
  gsap: () => <Image src="/aws.jpg" alt="AWS" width={44} height={44} style={{ objectFit: 'contain', borderRadius: '4px' }} />,
  nextjs: () => <Image src="/nextjs.jpg" alt="Next.js" width={44} height={44} style={{ objectFit: 'contain', borderRadius: '4px' }} />,
  reactjs: () => <Image src="/nodejs.jpg" alt="Node.js" width={44} height={44} style={{ objectFit: 'contain', borderRadius: '4px' }} />,
};
