import React from "react";
import Image from "next/image";

import { Logo } from "@/public/images/Images";

const Footer = () => {
  return (
    <footer>
      <div className="w-full pt-10 flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-6xl font-bold col-span-2">
            <h1 className="w-full ">
              Como podemos ajudar a transformar sua marca?
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full  text-gray-400">
              Na Latrix, sabemos o poder de uma marca bem construída. Estamos
              prontos para criar uma estratégia personalizada que ajudará sua
              empresa a se destacar no mercado e alcançar resultados reais.
            </p>
            <div className="w-fit pt-6 md:pt-0">
              <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center text-nowrap">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 pt-16 mb-12  justify-between">
              <div className="">
                <Logo></Logo>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <a className="  cursor-pointer text-gray-600 hover:text-white uppercase font-bold pb-2">
                    Serviços
                  </a>
                  <a className=" cursor-pointer text-gray-600 hover:text-white ">
                    Social Media
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Tráfego Pago
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Landing Page
                  </a>
                </div>

                <div className="flex flex-col">
                  <a className="  cursor-pointer text-gray-600 hover:text-white uppercase font-bold pb-2">
                    Método
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Nosso Processo
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Método Personalizado
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Tecnologia e Inovação
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Acompanhamento e Ajustes
                  </a>
                </div>
                <div className="flex flex-col">
                  <a className="  cursor-pointer text-gray-600 hover:text-white uppercase font-bold pb-2">
                    Sobre
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Missão e Visão
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Nossos Valores
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Cases de Sucesso
                  </a>
                </div>
              </div>
            </div>
            <hr className="border-gray-600" />
            <div className="flex flex-row space-x-8 items-center justify-center mt-12">
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>

            <p className="w-full text-center my-12 text-gray-600">
              Copyright © 2024 Latrix Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
