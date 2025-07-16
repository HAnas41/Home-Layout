'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function HeaderContent() {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const strength = 25;

    const handleMouseMove = (e: MouseEvent) => {
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
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', resetPosition);

    // Cleanup
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <section className="bg-[#FF5349] text-white py-16 px-18 text-start">
      <h1 className="text-4xl font-bold leading-snug mb-6 max-[350px]:text-3xl">
        Stay Connected<br />
        Stay Social<br />
        Stay You!
      </h1>

      <p className="max-w-xl max-[900px]:w-[300px] max-[830px]:w-[500px] max-[650px]:w-[400px] max-[560px]:w-[350px] max-[490px]:w-[320px] max-[460px]:w-[300px] max-[440px]:w-[280px] max-[375px]:w-[220px] max-[355px]:w-[100%]">
        A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
        Whether you're looking to reconnect with old friends, build new relationships, or share what matters most — Mybindle is your name on the internet! 
      </p>

      <button
        ref={btnRef}
        className="bg-white text-[#FF5349] rounded px-6 py-2 mt-6 font-semibold shadow-md"
      >
        Get Started
      </button>
    </section>
  );
}

export default HeaderContent;
