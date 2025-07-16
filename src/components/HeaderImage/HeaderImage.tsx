'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

function HeaderImage() {
  const leftBadgeRef = useRef<HTMLDivElement | null>(null);
  const rightBadgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 🔺 Animate Left Badge
    if (leftBadgeRef.current) {
      gsap.fromTo(
        leftBadgeRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }

    // 🔻 Animate Right Badge
    if (rightBadgeRef.current) {
      gsap.fromTo(
        rightBadgeRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  return (
    <div className="relative px-8 mt-10 md:mt-24 w-fit">
      
      {/* 🔺 Top Left Badge (Animated) */}
      <div
        ref={leftBadgeRef}
        className="absolute top-7 left-2 bg-white text-[#FF5349] px-4 py-5 rounded shadow-lg font-semibold text-sm max-[1180px]:p-3"
      >
        🔥 Seamless Connections
      </div>

      {/* 📱 Phone Image */}
      <Image
        src="/images/Mob.png"
        alt="App Preview"
        width={300}
        height={600}
        className="rounded-lg max-[1040px]:w-[400px] max-[1040px]:h-[500px] max-[900px]:w-[500px] max-[820px]:w-[500px] max-[650px]:w-[450px]"
      />

      {/* 🔻 Bottom Right Badge (Animated) */}
      <div
        ref={rightBadgeRef}
        className="absolute bottom-28 right-6 bg-white text-[#FF5349] px-4 py-5 rounded shadow-lg font-semibold text-sm max-[1180px]:p-3"
      >
        🌎 Discover & Explore
      </div>
    </div>
  );
}

export default HeaderImage;
