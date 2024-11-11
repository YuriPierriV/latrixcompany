import React from "react";
import Image from "next/image";

import { Logo } from "@/public/images/Images";

const Footer = () => {
  return (
    <footer>
      <div className="container w-auto  m-auto ">
        <div className=" px-4 text-white flex flex-col">
          <div className="grid grid-cols-2">
            <div className="w-full text-6xl font-bold col-span-1 gap-3 space-y-8">
              <h1 className="w-full ">
                Como podemos ajudar a transformar sua marca?
              </h1>
              <p className="w-full  text-gray-400 text-base">
                Na Latrix, sabemos o poder de uma marca bem construída. Estamos
                prontos para criar uma estratégia personalizada que ajudará sua
                empresa a se destacar no mercado e alcançar resultados reais.
              </p>
            </div>
            <div className="flex  flex-col md:flex-row justify-center items-center md:justify-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="inline-flex gap-3 items-center px-4 py-2 text-base font-medium text-gray-900 bg-primary border border-gray-900 rounded-s-lg hover:bg-accent hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-accent focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-accent dark:focus:bg-gray-700"
                >
                  <svg
                    className="h-5 fill-[#8e8e8e]"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                  </svg>
                  Ligar
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-base gap-3 font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    className="h-6 fill-[#8e8e8e]"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                  Whatsapp
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-base gap-3 font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    className="h-5 fill-[#8e8e8e]"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
                  </svg>
                  Email
                </button>
              </div>
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
                    Soluções
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Estrategias de Marca Personalizadas
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Design Visual e Identidade de Marca
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Marketing Digital e Publicidade
                  </a>
                  <a className="  cursor-pointer text-gray-600 hover:text-white ">
                    Consultoria e Análise de Desempenho
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
                className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
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
