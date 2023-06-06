import React from 'react';
import { Bar } from 'react-chartjs-2';

const PChart = () => {
    const data = {
        labels: ['Projects', 'Members', 'Tasks'],
        datasets: [
          {
            label: 'Number',
            data: [10, 5, 15],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
      return <Bar data={data} options={options} />;
};




export default PChart