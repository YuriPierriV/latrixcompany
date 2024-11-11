import React from "react";
import cn from "@/lib/Utils";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { InfiniteMovingCardsDemo } from "@/Infinite-cards/InfiniteCards";
import { Logo_src, conversao, meta, engajamento } from "@/public/images/Images";

export function Servicos() {
  const features = [
    {
      title: "Estratégias de Marca Personalizadas",
      description:
        "Criamos estratégias únicas para impulsionar sua marca no mercado, conectando-a com o público-alvo de forma autêntica e impactante.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Design Visual e Identidade de Marca",
      description:
        "Desenvolvemos uma identidade visual que reflete a essência da sua marca, com designs que comunicam seus valores e criam conexões duradouras.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Marketing Digital e Publicidade",
      description:
        "Utilizamos dados e tecnologia para criar campanhas de marketing digital e anúncios que destacam sua marca e alcançam o público certo.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Consultoria e Análise de Desempenho",
      description:
        "Acompanhamos e analisamos o desempenho de suas campanhas para garantir que sua marca esteja sempre à frente e atingindo resultados.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-5 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Transforme sua Marca com Soluções Inovadoras
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Da estratégia de marca ao marketing digital, a Latrix oferece todas as
          ferramentas para elevar a presença da sua empresa no mercado. Explore
          nossos serviços e alcance o sucesso.
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <h1 className="text-black dark:text-white">
        Esse ta foda de pensar em algo
      </h1>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full    mx-auto bg-white dark:bg-neutral-900   h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Quero que minha marca seja lembrada. Algo que as pessoas reconheçam de
          cara.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={Logo_src().src}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 object-contain"
        />
        <p className="text-xs text-neutral-500">
          Com certeza! Vamos criar um visual marcante e autêntico, feito para
          conectar com seu público.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Gosto da ideia de uma identidade que mostre nossos valores.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={Logo_src().src}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 object-contain"
        />
        <p className="text-xs text-neutral-500">
          Vamos alinhar cada detalhe – cores, fontes, e estilo – para
          representar exatamente quem vocês são.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Perfeito! Mal posso esperar para ver o resultado.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[2rem] max-h-[18rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row gap-8"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white  dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <Image
          src={engajamento.src}
          alt="engajamento"
          height="300"
          width="300"
          className=" h-auto w-full object-cover rounded-t-2xl"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4  ">
          Engajamento
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Baixo
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white  dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start">
        <Image
          src={conversao.src}
          alt="engajamento"
          height="300"
          width="300"
          className=" h-auto w-full object-cover rounded-t-2xl"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Conversão
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Alta
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white  dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <Image
          src={meta.src}
          alt="engajamento"
          height="300"
          width="300"
          className=" h-auto w-full object-cover rounded-t-2xl"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Metas
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Regular
        </p>
      </motion.div>
    </motion.div>
  );
};
