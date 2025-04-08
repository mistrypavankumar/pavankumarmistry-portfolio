import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import PullRequestData from "../../shared/opensource/pull_requests.json";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PullRequestData {
  open: number;
  merged: number;
  closed: number;
}

const PullRequestChart: React.FC = () => {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        label: "Pull Requests",
        data: [
          PullRequestData.open,
          PullRequestData.merged,
          PullRequestData.closed,
        ],
        backgroundColor: ["#FF0000FF", "#00BCFF", "#FFFB00FF"],
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
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log(`Clicked on ${data.labels?.[index]}`);
      }
    },
  };

  return (
    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      <h2 className="text-xl text-secondary my-10">
        Pull Request Distribution
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PullRequestChart;
