import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  direction = "up", 
  className = "",
  suffix = "" 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number from string like "100+", "4+", "15+"
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const nonNumericSuffix = suffix || value.replace(/\d+/, '');

  const motionVal = useMotionValue(direction === "down" ? targetNumber : 0);
  const springVal = useSpring(motionVal, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(targetNumber);
    }
  }, [isInView, motionVal, targetNumber]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${nonNumericSuffix}`;
      }
    });
  }, [springVal, nonNumericSuffix]);

  return <span ref={ref} className={className}>{value}</span>;
}
