import React from "react";
import TeamSelector from "./TeamSelector";
import WinRate from "./WinRate";
import Info from "./Info";

const Body = () => {
  return (
    <div className="grid grid-cols-3  gap-16 py-5 px-5 mx-auto">
      <section className="flex-col space-y-4 h-[600px]">
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] h-48 w-72"></div>
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] h-96 w-72"></div>
      </section>
      <section>
        {/* Seleccion de equipos */}
        <TeamSelector />
        {/* Win rate */}
        <WinRate />
        {/* Aditional information */}
        <Info />
      </section>
      <section className="flex-col space-y-4 h-[565px]">
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] w-72 h-1/3 "></div>
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] w-72 h-1/3 "></div>
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] w-72 h-1/3 "></div>
      </section>
    </div>
  );
};

export default Body;
