'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function SmileContent() {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const strength = 25;

    const handleMouseMove = (e: MouseEvent) => {
      if (!btn) return;

      const bounds = btn.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(btn, {
        x: x / strength,
        y: y / strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const resetPosition = () => {
      if (!btn) return;

      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    btn?.addEventListener('mousemove', handleMouseMove);
    btn?.addEventListener('mouseleave', resetPosition);

    return () => {
      btn?.removeEventListener('mousemove', handleMouseMove);
      btn?.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-[600px] px-[40px] text-white">
      <h1 className="font-bold text-5xl pt-10">
        Be the Reason <br /> Someone Smiles Today!
      </h1>
      <p className="pt-4">
        Your generosity can change lives. Every donation brings hope, support, and
        a brighter future. Give today and make a difference!
      </p>
      <button
        ref={btnRef}
        className="bg-white text-[#FF5349] rounded px-6 py-2 mt-6 font-semibold shadow-md"
      >
        Donate Now
      </button>
    </div>
  );
}

export default SmileContent;
