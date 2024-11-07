"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const dataTimeline = [
  {
    title: "Preencha o formulário",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Dê o primeiro passo e apresente sua empresa. Vamos ajudar você a
          alcançar novos patamares.
        </p>
        <div className="text-neutral-800 dark:text-neutral-200">
          📝 Dados seguros e protegidos
        </div>
      </div>
    ),
  },
  {
    title: "Conversa com especialistas",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Em até 12 horas, nossa equipe entra em contato para entender seu
          negócio e suas metas.
        </p>
        <div className="text-neutral-800 dark:text-neutral-200">
          📅 Marque sua agenda
        </div>
      </div>
    ),
  },
  {
    title: "Planejamento sob medida",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Receba uma proposta estratégica com foco em resultados e
          fortalecimento de sua marca.
        </p>
        <div className="text-neutral-800 dark:text-neutral-200">
          🔍 Análise personalizada
        </div>
      </div>
    ),
  },
  {
    title: "Acompanhe o crescimento",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Implementamos e monitoramos o sucesso de sua marca, ajustando
          estratégias para alcançar os melhores resultados.
        </p>
        <div className="text-neutral-800 dark:text-neutral-200">
          🚀 Alavanque sua marca
        </div>
      </div>
    ),
  },
];

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full  font-sans md:px-5" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-5 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full  flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-md md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-blue-500 via-primary to-transparent from-[0%] via-[5%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default function Time() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
