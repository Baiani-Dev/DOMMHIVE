import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
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

  const servicesList = [
    { title: "Consultoria de Branding", fontClass: "font-bdo-reg" },
    { title: "Estratégia de Marca", fontClass: "font-bdo-bold" },
    { title: "Identidade Visual", fontClass: "font-bdo-bold" },
    { title: "Produção de Conteúdo", fontClass: "font-bdo-reg" },
    { title: "Produção Audiovisual", fontClass: "font-bdo-reg" },
    { title: "Gerenciamento de Redes", fontClass: "font-bdo-bold" },
    { title: "Campanha Publicitária", fontClass: "font-bdo-reg" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
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
        <div className="h-1/2 w-full px-6 md:px-16 flex flex-col justify-between pt-0 pb-8">
          <div className="relative reveal">
            <h2 className="text-5xl md:text-[100px] leading-[0.8] tracking-tighter uppercase text-white -mt-2 md:mt-8 font-bdo-reg">
              WH4T<br /> WE’RE <br /> COOK1NG?
            </h2>
          </div>
          <div className="relative reveal">
            <p className="text-xs md:text-lg max-w-3xl text-white opacity-90 leading-snug uppercase tracking-[0.15em] mb-4 font-bdo-reg">
              O QUE FAZEMOS POR AQUI? <br />QUAIS SOLUÇÕES DESENVOLVEMOS NA HIVE?
            </p>
          </div>
        </div>

        {/* --- UNIVERSO PRETO --- */}
        {/* ADICIONADO pt-12 (mobile) e pt-24 (desktop) para descer o título SERVIÇOS */}
        <div className="h-1/2 w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-16 pb-20">
          
          <div className="flex flex-col justify-between h-full">
            <div className="reveal">
              <h3 className="text-white text-4xl md:text-5xl uppercase font-loos-black">
                SERVIÇOS
              </h3>
              <p className="text-white text-xs md:text-sm mt-2 uppercase tracking-widest opacity-60 font-bdo-reg">
                FROM <br />STRATEGY 2 ACTION
              </p>
            </div>

            <p className="text-white text-base md:text-lg leading-tight opacity-60 reveal mb-6 font-bdo-light">
              Desenvolvemos e conectamos<br /> soluções para marcas que não <br />aceitam mais do mesmo.
            </p>
          </div>

          {/* LISTA: Com Blur Interativo */}
          <div className="flex flex-col justify-center md:items-end">
            <ul className="text-white text-left md:text-right flex flex-col gap-1 md:gap-2 group/list">
              {servicesList.map((item, index) => (
                <li 
                  key={index}
                  className={`${item.fontClass} text-lg md:text-[22px] uppercase italic tracking-tighter text-white transition-all duration-500 cursor-default
                              hover:!opacity-100 hover:!blur-none hover:scale-105 md:hover:-translate-x-3
                              group-hover/list:opacity-20 group-hover/list:blur-[4px]`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};