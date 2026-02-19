import { useState, useEffect, useRef } from 'react';
import './UI.css';

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ value, suffix = '', label, started, isStatic }) => {
  const count = useCountUp(value, 2000, started && !isStatic);

  return (
    <div className="stat-item">
      <span className="stat-number">
        {isStatic ? value : count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const stats = [
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 3500, suffix: '+', label: 'Clientes activos' },
  { value: 100, suffix: '%', label: 'Independientes' },
  { value: 2004, suffix: '', label: 'Año de fundación', isStatic: true },
];

const StatsBar = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref}>
      {stats.map((stat, i) => (
        <StatItem key={i} {...stat} started={started} />
      ))}
    </section>
  );
};

export default StatsBar;
