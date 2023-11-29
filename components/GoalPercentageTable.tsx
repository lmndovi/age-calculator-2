import React from "react";

const GoalPercentageTable = () => {
  const data = [
    { label: "+0.5 goles HT", percentage: "70%" },
    { label: "+1.5 goles FT", percentage: "80%" },
    { label: "+2.5 goles FT", percentage: "65%" },
    { label: "BTTS", percentage: "70%" },
  ];

  return (
    <table className="table-auto">
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className=" px-2 py-2">{item.label}</td>
            <td className="px-14 py-2 text-[#61D340]">{item.percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoalPercentageTable;
