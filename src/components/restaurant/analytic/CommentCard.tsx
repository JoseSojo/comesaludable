import React from 'react';
import { Pie } from 'react-chartjs-2';
import { getCommentsAnalysisData } from '../../../infrastructure/data/data';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const CommentsChart: React.FC = () => {
  const data = getCommentsAnalysisData();
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const dataset = context.dataset;
            const total = dataset.data.reduce((acc: number, data: number) => acc + data, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
  };
  
  return (
    <div className="max-h-80 w-full flex justify-center">
      <Pie data={data} options={options} />
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        {/* <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-green-800 font-medium">Positive Comments</h3>
          <p className="text-2xl font-semibold text-green-700 mt-1">
            {data.datasets[0].data[0]}
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="text-red-800 font-medium">Negative Comments</h3>
          <p className="text-2xl font-semibold text-red-700 mt-1">
            {data.datasets[0].data[1]}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default CommentsChart;