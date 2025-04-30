import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getMenuConsumptionData } from '../../../infrastructure/data/data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MenuConsumptionChart: React.FC = () => {
  const data = getMenuConsumptionData();
  
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Sales',
        },
      },
    },
  };
  
  return <Bar data={data} options={options} height={300} />;
};

export default MenuConsumptionChart;