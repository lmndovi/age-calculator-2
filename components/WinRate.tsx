import React from "react";
import GoalPercentageTable from "./GoalPercentageTable";

const WinRate = () => {
  return (
    <div>
      <h1 className="text-xl font-bold pb-4">Win Rate</h1>
      <section className="flex space-x-6">
        <div className="flex-col rounded-xl bg-[rgba(255,255,255,0.1)] h-20 w-2/5 text-left p-3">
          <h2 className="text-3xl">45%</h2>
          <p className="text-xs text-[#52BF90]">Win (Local)</p>
        </div>
        <div className="rounded-xl bg-[rgba(255,255,255,0.1)] h-20 w-1/5 text-center p-3">
          <h2 className="text-3xl">25%</h2>
          <p className="text-xs text-[#FFF953]">Draw</p>
        </div>
        <div className="rounded-xl bg-[rgba(255,255,255,0.1)] h-20 w-2/5 text-right p-3">
          <h2 className="text-3xl">35%</h2>
          <p className="text-xs text-[#52BF90]">Win (Visitor)</p>
        </div>
      </section>
      <section>
        <GoalPercentageTable />
      </section>
    </div>
  );
};

export default WinRate;
