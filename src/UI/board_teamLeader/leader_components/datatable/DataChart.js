import React from 'react';
import PolarChart from './PolarChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DataChart = ({tasksStatus}) => {
  console.log(tasksStatus.active) 
    const data = {
        labels: [ 'Active',  'Completed', 'Pending'],
        datasets: [
          {
            label: 'Tasks',
            data: [tasksStatus.active,tasksStatus.completed,tasksStatus.pending],
            backgroundColor: [
              'rgb(0,128,128)',
              'rgb(60, 179, 113)',
              'orange',
         
            ],
            borderColor: [
              'rgb(0,128,128)',
              'rgb(60, 179, 113)',
              'orange',
          
            ],
            borderWidth: 1,
          },
        ],
      };
 

  return React.createElement(Doughnut, { data: data });
};

export default DataChart;
