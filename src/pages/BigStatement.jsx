import { motion } from "framer-motion";
import { useRef } from "react";

// Imports
import BigStatement1 from "../assets/BigStatement 1.svg?react";
import BigStatement2 from "../assets/BigStatement 2.svg?react";
import Asterisco1 from "../assets/Asterisco.svg?react";
import Asterisco2 from "../assets/Asterisco 2.svg?react";

export const BigStatement = () => {
  const constraintsRef = useRef(null);

  // Variantes para o container (gerencia o tempo entre as palavras)
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Variantes para cada palavra (Efeito de Reveal moderno)
  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (ajuste fino de luxo)
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const textClass = "text-[8.5vw] md:text-[85px] lg:text-[105px] uppercase font-loos leading-[0.90] tracking-normal select-none whitespace-nowrap";

  // Helper para não repetir código de animação em cada palavra
  const AnimatedWord = ({ children, className = "" }) => (
    <div className="overflow-hidden inline-block py-1"> 
      <motion.span variants={wordVariants} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </div>
  );

  return (
    <section
      ref={constraintsRef}
      className="relative w-full h-screen bg-white flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative w-fit px-4"
      >
        
        {/* CAMADA 1: O TEXTO */}
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <div className="flex gap-4">
            <AnimatedWord className={`${textClass} text-black`}>Marcas</AnimatedWord>
            <AnimatedWord className={`${textClass} text-[#1010B5]`}>Que</AnimatedWord>
          </div>

          <div className="flex items-center pl-[20vw] md:pl-[560px]">
            <AnimatedWord className={`${textClass} text-black`}>Definem</AnimatedWord>
          </div>

          <div className="ml-12 md:ml-[180px] lg:ml-[285px] flex gap-3">
             <AnimatedWord className={`${textClass} text-[#1010B5]`}>O</AnimatedWord>
             <AnimatedWord className={`${textClass} text-[#1010B5]`}>seu</AnimatedWord>
             <AnimatedWord className={`${textClass} text-[#1010B5]`}>tempo.</AnimatedWord>
          </div>

          <div className="flex gap-3">
            <AnimatedWord className={`${textClass} text-[#1010B5]`}>Conexões</AnimatedWord>
            <AnimatedWord className={`${textClass} text-[#1010B5]`}>que</AnimatedWord>
          </div>

          <AnimatedWord className={`${textClass} text-[#1010B5]`}>Viram.</AnimatedWord>

          <div className="ml-[30%] md:ml-[500px] lg:ml-[620px]">
             <AnimatedWord className={`${textClass} text-black`}>
                Legado<span className="text-[#1010B5]">.</span>
             </AnimatedWord>
          </div>
        </div>

        {/* CAMADA 2: ELEMENTOS FLUTUANTES (OVERLAY) */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* SVG 1 */}
          <motion.div 
            variants={wordVariants} // Aparece junto com a cadência das palavras
            className="absolute top-[14%] left-[-15%] w-[20vw] md:w-[450px] pointer-events-auto"
          >
            <motion.div variants={floatVariants} animate="animate">
              <BigStatement1 className="w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* ASTERISCO 1 */}
          <motion.div 
            variants={wordVariants}
            drag dragConstraints={constraintsRef} 
            className="absolute top-[16%] left-[16%] md:left-[480px] w-14 h-14 md:w-20 md:h-24 z-50 pointer-events-auto cursor-grab"
          >
            <Asterisco1 className="w-full h-full text-[#1010B5]" />
          </motion.div>

          {/* SVG 2 */}
          <motion.div 
            variants={wordVariants}
            className="absolute top-[50%] left-[38%] md:left-[1010px] w-[20vw] md:w-[370px] pointer-events-auto"
          >
            <motion.div variants={floatVariants} animate="animate">
              <BigStatement2 className="w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* ASTERISCO 2 */}
          <motion.div 
            variants={wordVariants}
            drag dragConstraints={constraintsRef} 
            className="absolute top-[73%] left-[58%] md:left-[740px] lg:left-[883px] w-14 h-14 md:w-20 md:h-24 z-50 pointer-events-auto cursor-grab"
          >
            <Asterisco2 className="w-full h-full text-[#1010B5]" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};