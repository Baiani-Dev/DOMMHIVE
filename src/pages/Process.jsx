import React, { useState } from "react";
import { motion } from "framer-motion";

export const Process = () => {
  const [combo, setCombo] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [foundCircles, setFoundCircles] = useState([]);

  const secretCode = ["O1", "O1", "O2", "O2", "O2"];

  const handleOClick = (id) => {
    const newCombo = [...combo, id].slice(-5);
    setCombo(newCombo);
    if (JSON.stringify(newCombo) === JSON.stringify(secretCode)) {
      setIsGameActive(true);
      setFoundCircles([]);
    }
  };

  const handleCircleClick = (id) => {
    if (!isGameActive) return;
    if (!foundCircles.includes(id)) {
      const updatedFound = [...foundCircles, id];
      setFoundCircles(updatedFound);
      if (updatedFound.length === 5) {
        setTimeout(() => {
          setIsGameActive(false);
          setFoundCircles([]);
          setCombo([]);
        }, 1000);
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  // Ajustei as posições para compensar o tamanho maior dos círculos
  const circleData = [
    { id: 0, name: "BRIEFING", pos: "-translate-y-44 md:-translate-y-56" },
    { id: 1, name: "CRIAÇÃO", pos: "-translate-x-36 -translate-y-12 md:-translate-x-56 md:-translate-y-16" },
    { id: 2, name: "PESQUISA", pos: "translate-x-36 -translate-y-12 md:translate-x-56 md:-translate-y-16" },
    { id: 3, name: "ESTRATÉGIA", pos: "-translate-x-28 translate-y-28 md:-translate-x-40 md:translate-y-44" },
    { id: 4, name: "ANÁLISE", pos: "translate-x-28 translate-y-28 md:translate-x-40 md:translate-y-44" },
  ];

  return (
    <section id="process" className="relative bg-white py-24 px-6 md:px-16 min-h-screen overflow-x-clip">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* COLUNA DA ESQUERDA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start lg:mt-0 z-10"
        >
          <div className="flex flex-col items-start w-fit">
            <motion.div variants={textVariants} className="text-left">
              {/* mb-10 adicionado para espaçamento entre título e texto */}
              <h2 className="text-4xl md:text-6xl font-loos-black leading-[0.8] tracking-tighter uppercase mb-10 select-none text-[#1010B5]">
                H
                <span className="cursor-pointer" onClick={() => handleOClick("O1")}>O</span>
                W WE R
                <span className="cursor-pointer" onClick={() => handleOClick("O2")}>O</span>
                LL
              </h2>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed font-bdo-reg text-[#1010B5]">
                UM PROCESSO DATA-DRIVEN EM QUE A <br />
                INFORMAÇÃO É O COMBUSTÍVEL DE TODA <br />
                CRIATIVIDADE.
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              transition={{ delay: 0.3 }}
              className="w-full flex justify-start mt-16 mb-16 md:mt-24 md:mb-24 ml-4 md:ml-30"
            >
              <span className="text-8xl md:text-[150px] font-bdo-reg leading-none text-[#1010B5] opacity-80">
                //
              </span>
            </motion.div>

            <motion.div variants={textVariants} transition={{ delay: 0.5 }} className="text-left">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed font-bdo-reg text-[#1010B5]">
                Só quem ousa criar com propósito <br />
                consegue grudar na memória de uma <br />
                geração que não aceita o superficial.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* COLUNA DA DIREITA */}
        <div className="relative flex items-center justify-center h-[650px] md:h-[600px] lg:mt-0">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center z-20 pointer-events-none text-[#1010B5] font-loos-black"
          >
            <span className="text-xl md:text-3xl block leading-tight tracking-tighter">
              {isGameActive ? "FIND THE" : "DOMM’S"}
            </span>
            <span className="text-xl md:text-3xl block leading-tight tracking-tighter">
              {isGameActive ? "WAY" : "WAY"}
            </span>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            {circleData.map((circle, i) => {
              const isFound = foundCircles.includes(circle.id);

              return (
                <motion.div
                  key={circle.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={circleVariants}
                  onClick={() => handleCircleClick(circle.id)}
                  animate={isGameActive ? {
                    rotateY: isFound ? 0 : 180,
                    backgroundColor: isFound ? "#1010B5" : "#1010B5",
                    scale: isFound ? 1 : 0.95,
                  } : {
                    rotateY: 0,
                    backgroundColor: "#ffffff",
                    scale: 1,
                  }}
                  className={`absolute transform ${circle.pos} border-[1px] border-[#1010B5] rounded-full w-36 h-36 md:w-52 md:h-52 flex items-center justify-center text-sm md:text-base transition-all duration-500 bg-white cursor-pointer group font-bdo-reg`}
                  style={{
                    color: isGameActive ? (isFound ? '#ffffff' : 'transparent') : '#1010B5'
                  }}
                >
                  <span className={isGameActive && !isFound ? "opacity-0" : "opacity-100 transition-opacity font-bold"}>
                    {circle.name}
                  </span>

                  {isGameActive && !isFound && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-3xl rotate-y-180">
                      ?
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};