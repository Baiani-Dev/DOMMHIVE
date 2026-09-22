import { motion } from "framer-motion";
import Abelha from "../assets/Abelha.svg?react";

export const CreativeIntensity = () => {
  // Configuração para animar as letras uma a uma no título
  const titleLetters = "INTENSIDADE CRIATIVA".split("");

  return (
    <section className="relative w-full h-screen bg-black text-white flex flex-col overflow-hidden">
      
      {/* TEXTO SUPERIOR - Título com animação Stagger */}
      <div className="w-full px-[5%] mt-[12vh]"> 
        <motion.h2
          className="font-loos uppercase text-[7vw] lg:text-[70px] leading-none font-medium tracking-tight whitespace-nowrap flex"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.03, // Efeito cascata
                ease: "easeOut" 
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* ABELHA CENTRAL - Animação de Floating (Flutuar) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow flex items-center justify-center"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0], // Sobe e desce
            rotate: [0, 2, 0, -2, 0] // Leve balanço
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Abelha className="w-[180px] md:w-[280px] lg:w-[320px] h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      {/* TEXTO INFERIOR - Revelação suave com Mask Reveal */}
      <div className="w-full px-[5%] mb-[8vh]">
        <div className="overflow-hidden"> {/* Container para o efeito de "surgir do chão" */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="font-ocra text-left text-[14px] md:text-[18px] lg:text-[22px] leading-[1.4] w-full max-w-none"
          >
            Somos a Hive que transforma ousadia em estratégia, criando marcas que falam com quem molda o amanhã.
            <br />
            Nossa energia movimenta conexões autênticas, construindo envolvências que grudam na memória e no coração.
          </motion.p>
        </div>
      </div>
    </section>
  );
};