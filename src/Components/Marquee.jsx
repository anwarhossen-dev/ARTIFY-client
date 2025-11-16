'use client';
import React, { HTMLAttributes } from 'react';
import FastMarquee, { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import { cn } from '@/lib/utils'; // adjust this path if needed

// Base container
export const Marquee = ({ className, ...props }) => (
  <div className={cn('relative w-full overflow-hidden', className)} {...props} />
);

// Scrolling content
export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}) => (
  <FastMarquee loop={loop} autoFill={autoFill} pauseOnHover={pauseOnHover} {...props} />
);

// Gradient fade overlay
export const MarqueeFade = ({ className, side, ...props }) => (
  <div
    className={cn(
      'absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent',
      side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
      className
    )}
    {...props}
  />
);

// Single marquee item
export const MarqueeItem = ({ className, ...props }) => (
  <div className={cn('mx-2 flex-shrink-0 object-contain', className)} {...props} />
);
