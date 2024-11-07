import React from "react";
import BackgroundBeams from "@/ui/Background-beams";

const CardTitle = ({ children, imgSrc, title, description }) => {
  return (
    <div className="flex  flex-col ">
      <div className="z-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const CardContainer = ({ children }) => {
  return (
    <div className="flex container gap-0 mx-auto relative max-w-7xl -mt-20 border border-primary/[0.2] dark:primary/[0.5] shadow-primary shadow-md  rounded-xl p-10">
      <BackgroundBeams className="absolute inset-0 z-0 rounded-xl" />
      <div className="z-10">{children}</div>
    </div>
  );
};

export { CardTitle, CardContainer };
