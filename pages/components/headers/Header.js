"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar-menu";
import cn from "@/lib/Utils";
import Image from "next/image";
import lightImage from "../public/images/light.png";
import darkImage from "../public/images/dark.png";

import ThemeToggleButton from "@/utils/Mode";
import { useTheme } from "@/utils/ThemeContext";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const { theme } = useTheme();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Image
          src={theme === "light" ? lightImage : darkImage}
          alt={"logo"}
          className="  w-auto max-h-[calc(100%_-_1.75rem)] h-[calc(100%_-_1.75rem)]  pe-2 md:pe-10 "
        />
        <MenuItem setActive={setActive} active={active} item="Serviços">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/web-dev">Social Media</HoveredLink>
            <HoveredLink href="/interface-design">Tráfego Pago</HoveredLink>
            <HoveredLink href="/seo">Landing Page</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sobre">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4"></div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Método">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <div className="py-4">
          <ThemeToggleButton />
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
