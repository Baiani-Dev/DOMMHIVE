import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import R from "../assets/R.svg?react";

export const Vision = () => {
  const [isRight, setIsRight] = useState(true);

  const toggleSide = () => setIsRight(!isRight);

  return (
    <section
      id="vision"
      className="relative w-full h-screen bg-[#1D4ED8] text-white flex flex-col overflow-hidden"
    >
      <div className="relative w-full px-[5%] mt-[18vh]">
        <motion.h2
          initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="font-loos text-[6vw] lg:text-[85px] leading-[0.9] font-medium max-w-[70%] ml-[15%]"
        >
          w/ Domm de olhar <br /> para frente.
        </motion.h2>

        {/* ÍCONE INTERATIVO */}
        <div className="absolute top-0 -mt-12 w-full h-full pointer-events-none" style={{ left: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isRight ? "right" : "left"}
              onClick={toggleSide}
              initial={{ opacity: 0, x: isRight ? 40 : -40, rotate: isRight ? 90 : -90 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: isRight ? 40 : -40, rotate: isRight ? 90 : -90 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "anticipate" }}
              className={`absolute flex items-center justify-start cursor-pointer pointer-events-auto h-full
                ${isRight ? "right-[10%]" : "left-[5%]"}`} /* Ajustado de 20% para 10% */
            >
              <R className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 fill-white hover:scale-110 transition-transform" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Grid de textos inferiores */}
      <div className="w-full px-[5%] mt-[18vh]">
        <div className="ml-[15%] grid grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-4"
          >
            <p className="font-ocra text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Construímos marcas que ressoam no agora e projetam o futuro,
              transformando cultura em conexão e visão em valor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="col-span-2 flex justify-center text-[40px] md:text-[60px] lg:text-[80px] font-ocra leading-none -mt-4"
          >
            //
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-4"
          >
            <p className="font-ocra text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Marcas jovens, criativas e vanguardistas que não apenas acompanham
              seu tempo, elas o definem. Conexões que viram legado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};