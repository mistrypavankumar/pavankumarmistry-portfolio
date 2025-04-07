import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions, ChartEvent, ActiveElement } from "chart.js";

import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

// Define interface for the imported JSON data
interface IssueStats {
  open: number;
  closed: number;
}

const IssueChart: React.FC = () => {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        label: "Issues",
        data: [
          (IssueData as IssueStats).open,
          (IssueData as IssueStats).closed,
        ],
        backgroundColor: ["#28a745", "#d73a49"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
    onClick: (event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log(`Clicked on ${data.labels?.[index]}`);
      }
    },
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <h2 className="text-xl text-secondary my-10">Issue Distribution</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default IssueChart;
