'use client';

import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

interface TextAnimationProps {
  text: string;
  classname?: string;
  variants?: { hidden: Variants[string]; visible: Variants[string] };
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  letterAnime?: boolean;
  lineAnime?: boolean;
  direction?: 'left' | 'right' | 'down' | 'up';
}

const defaultWordVariants = (direction: string): { hidden: object; visible: object } => {
  const offsets: Record<string, object> = {
    left:  { x: -60, opacity: 0, filter: 'blur(6px)' },
    right: { x:  60, opacity: 0, filter: 'blur(6px)' },
    down:  { y:  60, opacity: 0, filter: 'blur(6px)' },
    up:    { y: -60, opacity: 0, filter: 'blur(6px)' },
  };
  return {
    hidden: offsets[direction] ?? { y: 40, opacity: 0, filter: 'blur(6px)' },
    visible: { x: 0, y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
  };
};

export default function TextAnimation({
  text,
  classname = '',
  variants,
  as: Tag = 'h2',
  letterAnime = false,
  lineAnime = false,
  direction = 'up',
}: TextAnimationProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: false, margin: '-80px' });

  const resolvedVariants = variants ?? defaultWordVariants(direction);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: letterAnime ? 0.03 : lineAnime ? 0.12 : 0.06 },
    },
  };

  const units = letterAnime ? text.split('') : lineAnime ? text.split(',') : text.split(' ');

  const MotionTag = motion[Tag as keyof typeof motion] as React.ElementType;

  return (
    <MotionTag
      ref={ref}
      className={classname}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label={text}
    >
      {units.map((unit: string, i: number) => (
        <span key={i} className="inline-block">
          <motion.span
            className="inline-block"
            variants={resolvedVariants as Variants}
          >
            {/* Prevent spaces from collapsing to 0 width in letterAnime */}
            {unit === ' ' ? '\u00A0' : unit}
            {lineAnime && i < units.length - 1 ? ',' : ''}
          </motion.span>
          {/* Natural space between words — no double gap */}
          {!letterAnime && i < units.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
