import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Padronizei a classe de texto para ambos os blocos
  const headingClass = "text-6xl md:text-[80px] leading-[0.75] tracking-tighter uppercase font-loos-black text-white";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-screen flex flex-col items-center bg-black overflow-hidden"
    >
      {/* BARREIRA DE CORES INFINITA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1010B5]">
          <div className="absolute -top-[100vh] left-0 w-full h-[100vh] bg-[#1010B5]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black">
          <div className="absolute -bottom-[100vh] left-0 w-full h-[100vh] bg-black" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full h-full mx-auto flex flex-col">

        {/* --- UNIVERSO AZUL --- */}
        <div className="h-1/2 w-full px-6 md:px-16 flex flex-col justify-end pt-0 pb-12">
          <div className="relative reveal">
            <h2 className={headingClass}>
              FALE<br />
              COM A<br />
              DOMM!
            </h2>
            <span className="block text-6xl md:text-[80px] leading-[0.75] text-white font-bdo-reg mt-2 md:mt-4 opacity-80">
              //
            </span>
          </div>
        </div>

        {/* --- UNIVERSO PRETO --- */}
        {/* Adicionado pt-16 md:pt-24 para afastar o texto do teto azul */}
        <div className="h-1/2 w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-24 pb-20">
          <div className="flex flex-col justify-start h-full">
            <div className="reveal">
              <h3 className={headingClass}>
                JOIN <br/>
                THE<br/>
                HIVE ;)
              </h3>
            </div>
          </div>
          
          <div className="flex flex-col justify-end md:items-end">
             {/* Espaço para links futuros */}
          </div>
        </div>
      </div>
    </section>
  );
};