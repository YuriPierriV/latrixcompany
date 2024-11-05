import Navbar from "@/headers";
import { TextHoverEffect } from "@/ui/text-hover-effect";
import BackgroundBeams from "@/ui/background-beams";
import { GoogleGeminiEffect } from "@/ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";

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
      <Navbar></Navbar>
      <div className="h-[40rem] flex items-center justify-center">
        <BackgroundBeams />
      </div>
      <div
        className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
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
