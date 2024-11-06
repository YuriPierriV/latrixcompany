import Navbar from "@/headers";
import { TextHoverEffect } from "@/ui/text-hover-effect";
import BackgroundBeams from "@/ui/background-beams";
import { GoogleGeminiEffect } from "@/ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/ui/hero-highlight";

import React from "react";

function Inicio() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.3], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.3], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.3], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.3], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.3], [0, 1.2]);

  return (
    <main>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>

      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-2 md:text-3xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Porque Sua Marca Merece{" "}
          <Highlight className="text-black dark:text-white">
            se Destacar
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <div
        className="h-[200vh] w-full bg-white dark:bg-black dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </main>
  );
}

export default Inicio;
