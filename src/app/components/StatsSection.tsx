'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: 5000, suffix: '+', label: 'Patients Treated', icon: '👥' },
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: '🏅' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
  { value: 12, suffix: '', label: 'Specialist Doctors', icon: '🦷' },
];

function AnimatedCounter({ value, suffix, duration = 1800 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [started, value, duration]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary leading-none">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(91,192,222,0.15) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center text-center p-6 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm`}
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-white/70 mt-2 font-medium leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}