"use client";
import React from "react";

import Label from "../ui/Label";

import Input from "../ui/Input";
import cn from "@/lib/Utils";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div
      className="max-w-md w-full mx-auto  rounded-2xl p-4 md:p-8  bg-[#DBD2F1] dark:bg-[#06030C] shadow-md shadow-primary"
      id="form"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
        Agendar Reunião
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Em até 12 horas, um dos nossos especialistas fará uma ligação para
        agendar a reunião mais importante com você.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Nome Completo" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="contato@latrix.com.br" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyName">Nome da Empresa</Label>
          <Input id="companyName" placeholder="Empresa" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" placeholder="(XX) XXXXX-XXXX" type="tel" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="sector">Setor da Empresa</Label>
          <Input id="sector" placeholder="Setor" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="objective">Objetivo</Label>
          <Input id="objective" placeholder="Qual seu objetivo?" type="text" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-primary dark:from-primary dark:to-accent to-accent block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Agendar &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
