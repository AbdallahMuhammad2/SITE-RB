import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const hasStarted = useRef(false);
  
  useEffect(() => {
    // Force counter to show final value if component unmounts
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        setCount(to); // Ensure final value is displayed
      }
    };
  }, [to]);
  
  useEffect(() => {
    if (!inView || hasStarted.current) return;
    
    hasStarted.current = true;
    
    // Ensure delay works properly
    const timer = setTimeout(() => {
      const startAnimation = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const elapsedTime = timestamp - startTimeRef.current;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        
        // Easing function for smoother animation
        const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);
        const easedProgress = easeOutQuad(progress);
        
        // Calculate current count value
        const currentCount = Math.floor(from + (to - from) * easedProgress);
        setCount(currentCount);
        
        // Continue animation if not complete
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(startAnimation);
        } else {
          setCount(to); // Ensure we end at exactly the target value
        }
      };
      
      frameRef.current = requestAnimationFrame(startAnimation);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [inView, from, to, duration, delay]);
  
  // Fallback mechanism - if counter doesn't trigger after 2s, force it to start
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (count === from && !hasStarted.current) {
        hasStarted.current = true;
        setCount(to);
      }
    }, (delay * 1000) + 2000); // Wait for delay plus 2 seconds before fallback
    
    return () => clearTimeout(fallbackTimer);
  }, [count, from, to, delay]);
  
  return <span ref={ref}>{count}</span>;
};

export default Counter;