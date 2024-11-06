import React from "react";
import BackgroundBeams from "@/ui/background-beams";

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
    <div className="flex container mx-auto relative max-w-7xl -mt-20 border border-black/[0.2] dark:border-white/[0.2] rounded-xl ">
      <BackgroundBeams className="absolute inset-0 z-0 rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center   ">
        {children}
      </div>
    </div>
  );
};

export { CardTitle, CardContainer };
