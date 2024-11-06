import Navbar from "@/headers";
import { TextHoverEffect } from "@/ui/text-hover-effect";
import BackgroundBeams from "@/ui/background-beams";
import { GoogleGeminiEffect } from "@/ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/ui/hero-highlight";
import { CardTitle, CardContainer } from "@/card/Card";

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
      <section id="hero">
        <HeroHighlight className="grid xl:grid-cols-2 gap-10 container mx-auto">
          <div className="space-y-4 items-center">
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
              className="text-2xl px-2 md:text-3xl xl:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center xl:text-left mx-auto uppercase xl:leading-tight"
            >
              Porque Sua Marca Merece <br />
              <Highlight className="text-black dark:text-white">
                se Destacar
              </Highlight>
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-xl text-neutral-600 dark:text-neutral-300 text-center xl:text-left max-w-xl mx-auto xl:ml-0 mt-4 px-2"
            >
              Com criatividade e estratégia, a Latrix posiciona sua marca no
              mercado de forma memorável. Nosso propósito é simples: fazer a sua
              marca ser vista, lembrada e amada. Alcançamos o público certo,
              impulsionando marcas a atingirem seu potencial máximo.
            </motion.p>
            <div className="text-center xl:text-left mt-6 px-2">
              <button className="px-6 py-2 text-white bg-primary hover:bg-accent rounded-md transition duration-300">
                Vamos Conversar
              </button>
            </div>
          </div>
        </HeroHighlight>
      </section>

      <div className="container min-w-full h-full flex justify-center bg-[#212529] ">
        <CardContainer>
          <CardTitle
            title="Dê o Próximo Passo para Impulsionar Sua Marca"
            description="Preencha o formulário em menos de um minuto."
          />
        </CardContainer>
      </div>

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
