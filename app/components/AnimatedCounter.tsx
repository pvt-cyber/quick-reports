// app/components/AnimatedCounter.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="inline-flex items-baseline">
      {prefix && <span className="mr-1">{prefix}</span>}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration * 0.5 }}
        key={current}
        className="font-bold"
      >
        {current.toLocaleString()}
      </motion.span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
}
