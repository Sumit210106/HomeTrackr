import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  let labels = ["Grains", "Dairy", "Snacks", "Spices", "Beverages"];

  const data = {
    labels,
    datasets: [
        {
          label: 'Items Stock',
          data: [25, 18, 14, 9, 12],
          backgroundColor: 'rgba(54, 162, 235, 0.3)',  
          borderColor: 'rgba(54, 162, 235, 1)',       
          borderWidth: 1, 
        }
      ],
  };

function PantryInsights() {
    const notificationsData = ['notification1','notification2'];
  return (
    <div>
        return (
            <div className='px-4 flex justify-center md:justify-start'>
             
              {/* main outer div */}
              <div className="bg-blaxk shadow-xl flex flex-col h-auto w-full md:w-150 border border-gray-100/80 rounded-lg mt-8 mb-5 p-6">
                <h1 className='text-white text-2xl mb-6'>Pantry Insights</h1>
                
                {/* chart wale div */}
                <div className="flex flex-col md:flex-row gap-6 gap-y-4 mb-6 items-center md:items-stretch">
                  
                  {/* Bar chart chart wala div */}
                  <div className="bg-black text-white rounded-lg border border-white/40 w-72 md:w-150 h-100 flex flex-col items-center justify-center">
                    <Bar data={data} options={options}/>
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
                          notificationsData.map((item) => {
                            return (
                              <li key={item}>{item}</li>
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
    </div>
  )
}

export default PantryInsights