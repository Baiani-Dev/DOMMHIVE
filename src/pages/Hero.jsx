import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import HighDomm from "../assets/HighDomm.svg?react";
import SmallDomm from "../assets/smallDomm.svg?react";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const xGigante = useTransform(smoothX, [-500, 500], [20, -20]);
  const yGigante = useTransform(smoothY, [-500, 500], [15, -15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#1010B5] text-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute z-20 pointer-events-none left-[86px] top-[60px] w-[230px]"
      >
        <SmallDomm className="w-full h-auto" />
      </motion.div>

      <div className="relative w-full flex items-center justify-center pointer-events-none">
        <motion.div style={{ x: xGigante, y: yGigante }} className="w-full max-w-[90vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <HighDomm className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};