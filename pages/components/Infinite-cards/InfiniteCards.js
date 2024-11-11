"use client";

import React from "react";
import { InfiniteMovingCards } from "@/ui/Infinite-moving-cards";
import { SiGoogleads } from "@icons-pack/react-simple-icons";
import { SiMeta } from "@icons-pack/react-simple-icons";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { SiYoutube } from "@icons-pack/react-simple-icons";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import { SiGoogleanalytics } from "@icons-pack/react-simple-icons";
import { SiThreads } from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-full  flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={socials} direction="right" speed="fast" />
      <InfiniteMovingCards items={socials} direction="left" speed="fast" />
    </div>
  );
}

const socials = [
  {
    name: "Google ads",
    logo: <SiGoogleads color="#4285F4" size={24} />,
  },
  {
    name: "Meta",
    logo: <SiMeta color="#0467DF" size={24} />,
  },
  {
    name: "Instagram",
    logo: <SiInstagram color="#E4405F" size={24} />,
  },
  {
    name: "Youtube",
    logo: <SiYoutube color="#FF0000" size={24} />,
  },
  {
    name: "Facebook",
    logo: <SiFacebook color="#0866FF" size={24} />,
  },
  {
    name: "linkedin",
    logo: <SiLinkedin color="#0A66C2" size={24} />,
  },
  {
    name: "googleanalytics",
    logo: <SiGoogleanalytics color="#E37400" size={24} />,
  },
  {
    name: "threads",
    logo: <SiThreads color="#000000" size={24} />,
  },
  {
    name: "X",
    logo: <SiX color="#000000" size={24} />,
  },
];

export default function Theme() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
