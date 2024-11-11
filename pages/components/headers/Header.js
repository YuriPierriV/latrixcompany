"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar-menu";
import cn from "@/lib/Utils";

import ThemeToggleButton from "@/utils/Mode";
import {
  Logo,
  SocialMedia,
  TrafegoPago,
  LandingPage,
} from "@/public/images/Images";

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Logo></Logo>
        <MenuItem setActive={setActive} active={active} item="Serviços">
          <div className="text-sm grid xl:grid-cols-3 gap-10 p-4">
            <ProductItem
              title="Tráfego Pago"
              href="/"
              src={TrafegoPago()}
              description="Quer melhorar os acessos no seu site ou rede social? O tráfego pago pode ser uma ótima opção"
            />

            <ProductItem
              title="Social Media"
              href="/"
              src={SocialMedia()}
              description="Responsável por gerir a presença da sua marca ou pessoa nas redes sociais"
            />

            <ProductItem
              title="Landing Pages"
              href="/"
              src={LandingPage()}
              description="Página com o objetivo principal a conversão de visitantes em clientes"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Soluções">
          <div className="flex flex-col space-y-4 text-base">
            <HoveredLink href="/hobby">Estrategias</HoveredLink>
            <HoveredLink href="/individual">Identidade de Marca</HoveredLink>
            <HoveredLink href="/team">Marketing Digital</HoveredLink>
            <HoveredLink href="/enterprise">Consultoria e Análise</HoveredLink>
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
