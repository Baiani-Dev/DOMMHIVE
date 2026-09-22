import React, { useEffect, useRef } from "react";

// --- IMPORTS ---
import img1 from "../assets/carrousel/carrousel-1/1.png";
import img2 from "../assets/carrousel/carrousel-1/2.png";
import img3 from "../assets/carrousel/carrousel-1/3.png";
import img4 from "../assets/carrousel/carrousel-1/4.png";
import img5 from "../assets/carrousel/carrousel-1/5.png";
import img6 from "../assets/carrousel/carrousel-1/6.png";
import img7 from "../assets/carrousel/carrousel-1/7.png";
import img8 from "../assets/carrousel/carrousel-1/8.png";

import img9 from "../assets/carrousel/carrousel-2/9.png";
import img10 from "../assets/carrousel/carrousel-2/10.png";
import img11 from "../assets/carrousel/carrousel-2/11.png";
import img12 from "../assets/carrousel/carrousel-2/12.png";
import img13 from "../assets/carrousel/carrousel-2/13.png";
import img14 from "../assets/carrousel/carrousel-2/14.png";
import img15 from "../assets/carrousel/carrousel-2/15.png";
import img16 from "../assets/carrousel/carrousel-2/16.png";

export const Marquee = () => {
  const locs = ["BAHIA > PA, PE, RS, SP, RJ", "BRASIL > CHILE, ARGENTINA, EUA, ALEMANHA"];

  const row1 = [
    { src: img1, type: 'normal' }, { src: img2, type: 'normal' },
    { src: img3, type: 'normal' }, { src: img4, type: 'small' },
    { src: img5, type: 'normal' }, { src: img6, type: 'normal' },
    { src: img7, type: 'normal' }, { src: img8, type: 'small' }
  ];

  const row2 = [
    { src: img9, type: 'small' },  { src: img10, type: 'normal' },
    { src: img11, type: 'normal' }, { src: img12, type: 'normal' },
    { src: img13, type: 'small' },  { src: img14, type: 'normal' },
    { src: img15, type: 'normal' }, { src: img16, type: 'normal' }
  ];

  const getImgClass = (type) => type === 'normal' 
    ? "h-[180px] md:h-[260px] w-auto object-contain" 
    : "h-[130px] md:h-[190px] w-auto object-contain";

  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  
  const position1Ref = useRef(0);
  const position2Ref = useRef(0);
  const velocity1Ref = useRef(0);
  const velocity2Ref = useRef(0);
  const lastX1Ref = useRef(0);
  const lastX2Ref = useRef(0);
  const isDragging1Ref = useRef(false);
  const isDragging2Ref = useRef(false);

  useEffect(() => {
    const marquee1 = marqueeRef1.current;
    const marquee2 = marqueeRef2.current;
    const baseSpeed = 0.4;

    if (marquee1) {
      const width1 = marquee1.scrollWidth / 3;
      position1Ref.current = -width1;
      marquee1.style.transform = `translateX(${position1Ref.current}px)`;
    }

    if (marquee2) {
      const width2 = marquee2.scrollWidth / 3;
      position2Ref.current = -width2;
      marquee2.style.transform = `translateX(${position2Ref.current}px)`;
    }

    const animate = () => {
      if (marquee1) {
        const currentSpeed = baseSpeed + velocity1Ref.current;
        position1Ref.current -= currentSpeed;
        const width = marquee1.scrollWidth / 3;
        if (position1Ref.current <= -width * 2) position1Ref.current += width;
        else if (position1Ref.current >= 0) position1Ref.current -= width;
        marquee1.style.transform = `translateX(${position1Ref.current}px)`;
        if (!isDragging1Ref.current) velocity1Ref.current *= 0.92;
      }

      if (marquee2) {
        const currentSpeed = baseSpeed + velocity2Ref.current;
        position2Ref.current += currentSpeed;
        const width = marquee2.scrollWidth / 3;
        if (position2Ref.current >= 0) position2Ref.current -= width;
        else if (position2Ref.current <= -width * 2) position2Ref.current += width;
        marquee2.style.transform = `translateX(${position2Ref.current}px)`;
        if (!isDragging2Ref.current) velocity2Ref.current *= 0.92;
      }
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Handlers para Marquee 1
  const handleMouseDown1 = (e) => {
    isDragging1Ref.current = true;
    lastX1Ref.current = e.clientX;
    if (containerRef1.current) containerRef1.current.style.cursor = 'grabbing';
  };

  const handleMouseMove1 = (e) => {
    if (!isDragging1Ref.current) return;
    const deltaX = e.clientX - lastX1Ref.current;
    position1Ref.current += deltaX;
    velocity1Ref.current = deltaX * 0.08;
    lastX1Ref.current = e.clientX;
  };

  const handleMouseUp1 = () => {
    isDragging1Ref.current = false;
    if (containerRef1.current) containerRef1.current.style.cursor = 'grab';
  };

  // Handlers para Marquee 2
  const handleMouseDown2 = (e) => {
    isDragging2Ref.current = true;
    lastX2Ref.current = e.clientX;
    if (containerRef2.current) containerRef2.current.style.cursor = 'grabbing';
  };

  const handleMouseMove2 = (e) => {
    if (!isDragging2Ref.current) return;
    const deltaX = e.clientX - lastX2Ref.current;
    position2Ref.current += deltaX;
    velocity2Ref.current = deltaX * 0.08;
    lastX2Ref.current = e.clientX;
  };

  const handleMouseUp2 = () => {
    isDragging2Ref.current = false;
    if (containerRef2.current) containerRef2.current.style.cursor = 'grab';
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col">
      
      {/* 1. TEXTO MARQUEE (TOP) - Fonte OCR A Std */}
      <div className="w-full pt-16 pb-4 overflow-hidden flex bg-black">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              {locs.map((l, idx) => (
                <span key={idx} className="mx-10 text-[11px] md:text-[13px] font-ocra tracking-[0.2em] uppercase text-white italic">
                  {l} <span className="ml-8 text-[#1010B5] not-italic">✱</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. CONTAINER DOS CARROUSÉIS */}
      <div className="flex-1 flex flex-col justify-center gap-2 md:gap-4 mt-10">
        <div 
          ref={containerRef1}
          className="flex w-full overflow-hidden items-end cursor-grab select-none"
          onMouseDown={handleMouseDown1}
          onMouseMove={handleMouseMove1}
          onMouseUp={handleMouseUp1}
          onMouseLeave={handleMouseUp1}
        >
          <div ref={marqueeRef1} className="flex gap-2 md:gap-3 items-end whitespace-nowrap will-change-transform">
            {[...row1, ...row1, ...row1].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 pointer-events-none">
                <img src={img.src} alt="" className={getImgClass(img.type)} draggable="false" />
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={containerRef2}
          className="flex w-full overflow-hidden items-end cursor-grab select-none"
          onMouseDown={handleMouseDown2}
          onMouseMove={handleMouseMove2}
          onMouseUp={handleMouseUp2}
          onMouseLeave={handleMouseUp2}
        >
          <div ref={marqueeRef2} className="flex gap-2 md:gap-3 items-end whitespace-nowrap will-change-transform">
            {[...row2, ...row2, ...row2].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 pointer-events-none">
                <img src={img.src} alt="" className={getImgClass(img.type)} draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FRASE CENTRALIZADA (BOTTOM) - Fonte OCR A Std */}
      <div className="w-full py-10 mb-4 flex flex-col items-center">
        <div className="w-16 h-[1px] bg-white/10 mb-6"></div>
        <p className="px-6 text-[9px] md:text-[12px] font-ocra tracking-[0.25em] uppercase text-center opacity-60">
          BAHIA &gt; PA, PE, RS, SP, RJ <span className="mx-4 text-[#1010B5] font-bold">//</span> BRASIL &gt; CHILE, ARGENTINA, EUA, ALEMANHA
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
};