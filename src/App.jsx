import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importação dos Componentes
import { Hero } from "./pages/Hero";
import { CreativeIntensity } from "./pages/CreativeIntensity";
import { Vision } from "./pages/Vision";
import { BigStatement } from "./pages/BigStatement";
import { Marquee } from "./pages/Marquee";
import { Services } from "./pages/Services";
import { Process } from "./pages/Process";
import { Contact } from "./pages/Contact";

// Importação do SmoothScroll
import { SmoothScroll } from "./components/SmoothScroll";

// Registro Único do Plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Seleciona tanto sections quanto o footer do contato
    const sections = gsap.utils.toArray("section, footer");

    sections.forEach((section, i) => {
      section.style.zIndex = i;

      if (i < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=100%", // Isso define quanto tempo a seção fica parada
          pin: true,
          pinSpacing: false,
          scrub: true,
          snap: {
            snapTo: 1,
            duration: 0.6,
            delay: 0,
            ease: "power2.inOut"
          },
          invalidateOnRefresh: true,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="panel-container bg-black">
        <Hero />
        <CreativeIntensity />
        <Vision />
        <BigStatement />
        <Marquee />
        <Services />
        <Process />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;