import Navbar from "@/headers/Header";
import React, { useEffect, useState } from "react";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

import { HeroHighlight, Highlight } from "@/ui/Hero-highlight";

import { CardTitle, CardContainer } from "@/card/Card";
import { Card, Carousel } from "@/ui/Apple-cards-carousel";
import { Timeline } from "@/ui/Timeline";
import { dataTimeline } from "@/ui/Timeline";

import { useTheme } from "@/utils/ThemeContext";

import Form from "@/form/Form";

import {
  card_dark_1,
  card_white_1,
  card_dark_2,
  card_dark_3,
  card_white_2,
  card_white_3,
  foguete,
} from "@/public/images/Images";

function Inicio() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { theme } = useTheme();

  const data = [
    {
      category: "Tráfego pago",
      title: "Bom pra krl",
      src: theme === "light" ? card_white_1 : card_dark_1,
      content: <DummyContent />,
    },
    {
      category: "Social media",
      title: "Felipe na tora",
      src: theme === "light" ? card_white_2 : card_dark_2, // Usando o theme para definir o src
      content: <DummyContent />,
    },
    {
      category: "Landing pages",
      title: "Toma",
      src: theme === "light" ? card_white_3 : card_dark_3,
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <section id="hero">
        <HeroHighlight className="grid xl:grid-cols-2 gap-4 min-h-full  container mx-auto">
          <div className="items-center grid grid-cols-1 justify-center pt-24  xl:py-20 gap-4">
            <div className=" p-0">
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
                className="text-2xl  md:text-3xl xl:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center xl:text-left  uppercase xl:leading-tight"
              >
                Porque Sua Marca Merece <br />
                <Highlight className="text-black dark:text-white">
                  se Destacar
                </Highlight>
              </motion.h1>
            </div>

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
            <div className="text-center xl:text-left   pb-5">
              <button className="px-6 py-2 text-white bg-primary hover:bg-accent rounded-md transition duration-300 teste">
                Vamos Conversar
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={foguete}
              alt={"foguete"}
              className="  w-auto min-h-full h-full pb-20  xl:py-20"
            />
          </div>
        </HeroHighlight>
      </section>

      <div className="container min-w-full h-full flex justify-center bg-slate-200 dark:bg-[#212529] ">
        <CardContainer>
          <div className="grid xl:grid-cols-2 gap-3">
            <div className="flex flex-col gap-0 w-full">
              <CardTitle
                title="Dê o Próximo Passo para Impulsionar Sua Marca"
                description="Preencha o formulário em menos de um minuto."
              />
              <Timeline data={dataTimeline} className="flex-1 " />
            </div>
            <div className="row-span-2">
              <Form className="h-full w-full " />
            </div>
          </div>
        </CardContainer>
      </div>
      <div className="w-full h-full py-20  bg-slate-200 dark:bg-[#212529]">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Nossos serviços
        </h2>
        <Carousel items={cards} />
      </div>
    </main>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

export default Inicio;
