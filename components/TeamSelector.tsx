import React from "react";

import LeagueSelectorForm from "./LeagueSelectorForm";

const TeamSelector = () => {
  const leagues = [
    {
      name: "England Premier League",
      teams: [
        "Arsenal",
        "Manchester City",
        "Chelsea",
        "Liverpool",
        "Manchester United",
      ],
    },
    {
      name: "France Ligue Un",
      teams: ["Paris Saint Germain", "Marseille", "Nice", "Toulouse", "Rennes"],
    },
    {
      name: "Italy Serie A",
      teams: ["AC Milan", "Inter Milan", "Napoli", "Udinese", "Fiorentina"],
    },
    {
      name: "Spain La Liga",
      teams: [
        "Real Madrid",
        "FC Barcelona",
        "Real Betis",
        "Valencia",
        "Atletico Madrid",
      ],
    },
    {
      name: "Peru Liga 1",
      teams: [
        "Universitario de Deportes",
        "Alianza Lima",
        "Sporting Cristal",
        "Sport Boys",
        "Cusco FC",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold pb-4">Selección de equipos</h1>
      <div>
        <LeagueSelectorForm leagues={leagues} />
      </div>
    </div>
  );
};

export default TeamSelector;
