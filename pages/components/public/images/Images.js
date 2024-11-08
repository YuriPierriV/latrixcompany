// images.js

// Dark theme images
import card_dark_1 from ".//card_dark_1.png";
import card_dark_2 from ".//card_dark_2.png";
import card_dark_3 from ".//card_dark_3.png";

// Light theme images
import card_white_1 from ".//card_white_1.png";
import card_white_2 from ".//card_white_2.png";
import card_white_3 from ".//card_white_3.png";

import dark from ".//dark.png";
import light from ".//light.png";

import foguete from ".//foguete.png";
import Image from "next/image";

import { useTheme } from "@/utils/ThemeContext";

export function Logo() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "light" ? light : dark}
      alt={"logo"}
      className="  w-auto max-h-[calc(100%_-_1.75rem)] h-[calc(100%_-_1.75rem)]  pe-2 md:pe-10 "
    />
  );
}

export {
  card_dark_1,
  card_dark_2,
  card_dark_3,
  card_white_1,
  card_white_2,
  card_white_3,
  foguete,
};

export default function Images() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
