"use client";

import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

interface League {
  name: string;
  teams: string[];
}

interface LeagueSelectorFormProps {
  leagues: League[];
}

const LeagueSelectorForm: React.FC<LeagueSelectorFormProps> = ({ leagues }) => {
  const [selectedLeague, setSelectedLeague] = useState<string>("Peru Liga 1");
  const [localTeam, setLocalTeam] = useState<string>(
    "Universitario de Deportes"
  );
  const [visitorTeam, setVisitorTeam] = useState<string>("Alianza Lima");

  const handleLeagueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLeague(e.target.value);
    setLocalTeam(""); // Reset local team when league changes
    setVisitorTeam(""); // Reset visitor team when league changes
  };

  const handleLocalTeamChange = (team: string) => {
    setLocalTeam(team);
  };

  const handleVisitorTeamChange = (team: string) => {
    setVisitorTeam(team);
  };

  return (
    <div className="flex flex-col  space-y-4">
      <div className="flex-col space-y-1 flex-1">
        <label htmlFor="league" className="text-xs font-semibold">
          Select a league:
        </label>
        <select
          id="league"
          name="league"
          value={selectedLeague}
          onChange={handleLeagueChange}
          className="rounded-xl py-2 px-5 w-full bg-[rgba(255,255,255,0.06)] text-xs"
        >
          <option value="">
            <ArrowDownIcon />
          </option>
          {leagues.map((league) => (
            <option
              key={league.name}
              value={league.name}
              className="text-black"
            >
              {league.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <div>
          <label className="text-xs font-semibold">Local:</label>
          <select
            value={localTeam}
            onChange={(e) => handleLocalTeamChange(e.target.value)}
            className="rounded-xl py-2 px-5 w-full bg-[rgba(255,255,255,0.06)] text-xs border border-[#61D340]"
          >
            <option value="" disabled selected>
              Select a team
            </option>
            {selectedLeague &&
              leagues
                .find((league) => league.name === selectedLeague)
                ?.teams.map((team) => (
                  <option key={team} value={team} className="text-black">
                    {team}
                  </option>
                ))}
          </select>
        </div>

        <h2 className="relative top-2 p-2 text-md">vs</h2>

        <div>
          <label className="text-xs font-semibold">Visitor:</label>
          <select
            value={visitorTeam}
            onChange={(e) => handleVisitorTeamChange(e.target.value)}
            className="rounded-xl py-2 px-5 w-full bg-[rgba(255,255,255,0.06)] text-xs border border-[#FB804B]"
          >
            <option value="" disabled selected>
              Select a team
            </option>
            {selectedLeague &&
              leagues
                .find((league) => league.name === selectedLeague)
                ?.teams.map((team) => (
                  <option key={team} value={team} className="text-black">
                    {team}
                  </option>
                ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LeagueSelectorForm;
