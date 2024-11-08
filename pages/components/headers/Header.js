"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar-menu";
import cn from "@/lib/Utils";

import ThemeToggleButton from "@/utils/Mode";
import { Logo } from "@/public/images/Images";

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Logo></Logo>
        <MenuItem setActive={setActive} active={active} item="Serviços">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/web-dev">Social Media</HoveredLink>
            <HoveredLink href="/interface-design">Tráfego Pago</HoveredLink>
            <HoveredLink href="/seo">Landing Page</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Método">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/hobby">Nosso Processo</HoveredLink>
            <HoveredLink href="/individual">Método Personalizado</HoveredLink>
            <HoveredLink href="/team">Tecnologia e Inovação</HoveredLink>
            <HoveredLink href="/enterprise">
              Acompanhamento e Ajustes
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Sobre">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/hobby">Missão e Visão</HoveredLink>
            <HoveredLink href="/individual">Nossos Valores</HoveredLink>
            <HoveredLink href="/team">Cases de Sucesso</HoveredLink>
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
