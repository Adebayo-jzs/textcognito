'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A wrapper component that triggers CSS animations when the element scrolls into view.
 *
 * @param {'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'} animation - The animation type
 * @param {number} delay - Delay in ms before the animation starts
 * @param {number} duration - Duration in ms
 * @param {string} className - Additional classes
 * @param {number} threshold - Intersection Observer threshold (0-1)
 */
export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.15,
  once = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`aos-element ${animation} ${isVisible ? 'aos-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger wrapper — animates children with incrementing delays.
 */
export function StaggerChildren({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  baseDelay = 0,
  duration = 700,
  className = '',
  childClassName = '',
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={`aos-element ${animation} ${isVisible ? 'aos-visible' : ''} ${childClassName}`}
          style={{
            transitionDelay: `${baseDelay + i * staggerDelay}ms`,
            transitionDuration: `${duration}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
