
'use client';
import { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 3, label: 'Libraries', suffix: '' },
    { value: 16, label: 'Jackets Distributed', suffix: 'K' },
    { value: 16, label: 'Beneficiary students', suffix: 'K' },
    { value: 29, label: 'Districts Reached', suffix: '+' },
    { value: 7, label: 'Disaster Relief Operation', suffix: '' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-3xl shadow-2xl p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                isVisible={isVisible}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


type Props = {
    value: number;
    label: string;
    suffix: string;
    isVisible: boolean;
    delay: number;
}
const StatItem = ({ value, label, suffix, isVisible, delay }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(increment * currentStep));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-3">
        {count}{suffix}
      </div>
      <div className="text-emerald-50 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsCounter;