import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "chart.js";

import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

// Registering necessary chart elements
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);

function ExpenseInsights() {
    
  // Doughnut chart data and options
  const dataDoughnut = {
    labels : ['Groceries','Utilities & Bills','Transportation','Healthcare','Education','Miscellaneous'],
    datasets : [{
      label : 'Category-wise Split',
      data : [10000,20000,12222,12342,73892,29013],
      backgroundColor: [
        'rgba(255, 153, 172, 0.5)', // Very light red, transparent
        'rgba(126, 203, 255, 0.5)', // Very light blue, transparent
        'rgba(255, 224, 130, 0.5)', // Very light yellow, transparent
        'rgba(127, 239, 239, 0.5)', // Very light teal, transparent
        'rgba(199, 168, 255, 0.5)', // Very light violet, transparent
        'rgba(255, 181, 112, 0.5)'  // Very light orange, transparent
      ],
      borderColor: [
       '#CC204E', // Dark red
  '#0074B7', // Dark blue
  '#CC9A00', // Dark yellow
  '#009999', // Dark teal
  '#6633CC', // Dark violet
  '#CC7000'  // Dark orange
      ],
    }]
  };

  const optionsDoughnut = {
    plugins: {datalabels: 
      {color: '#fff',font: {weight: 'bold',size: 14},
        formatter: (value) => {
          return value;
        }
      },
      legend: {position: 'bottom',labels: {color: 'white'}}
    }
  };

  // Line chart data and options
  const dataLine = {
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets : [{
      label : 'Monthly Spend',
      data: [2000, 3500, 2800, 4200, 4500, 1800, 3100, 2200, 3900, 5000, 2700, 4200], // Random spend data
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {position: 'top'},
      title: {display: true,
        // text: 'Monthly Spending'
      },
    },
    scales: {
      x: {title: {display: true,text: 'Months'}},
      y: {title: {display: true,text: 'Spending'}}
    }
  };

// temp data abhi ke liye 
  const notificationData = ['notification1','notification2'];

  return (
    <div className='px-4 flex justify-center md:justify-start'>
     
      {/* main outer div */}
      <div className="bg-blaxk shadow-xl flex flex-col h-auto w-full md:w-220 border border-gray-100/80 rounded-lg mt-8 mb-5 p-6">
        <h1 className='text-white text-2xl mb-6'>Expense Insights</h1>
        
        {/* chart wale div */}
        <div className="flex flex-col md:flex-row gap-6 gap-y-4 mb-6 items-center md:items-stretch">
          
          {/* Doughnut chart wala div */}
          <div className="bg-slate-800 text-white rounded-lg border border-white/40 w-72 md:w-1/2 h-100 flex flex-col items-center justify-center overflow-hidden">
          {/* <h1>Category wise Expense</h1> */}
            <Doughnut data={dataDoughnut} options = {optionsDoughnut} />
          </div>
          
          {/* line chart wala div */}
          <div className="bg-slate-800 text-white rounded-lg border border-white/40 w-72 md:w-[600px] h-100 flex flex-col items-center justify-center">
            <Line data = {dataLine} options={optionsLine}/>
          </div>
        </div>
        
        {/* notification wala div */}
        <div className="text-white border border-white/40 rounded-lg flex p-3">
          <div >
          <div className="flex items-center space-x-2 mb-2">
            <IoIosNotifications />
            <h1 className="text-white">Notifications</h1>
          </div>
            
            <div className="border border-white/40 rounded-lg p-2">
              <ul>
                {
                  notificationData.map((item) => {
                    return (
                      <li>{item}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseInsights;
