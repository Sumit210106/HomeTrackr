import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function BillsInsight() {
    const dataPie = {
        labels: ['Paid', 'Unpaid'],
        datasets: [
          {
            label: 'Bills Insights',
            data: [12, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    const notificationsData = ['notification1','notification2'];

  return (
    <div className="px-4 flex justify-center md:justify-start md:w-50 w-[550px]">
      {/* Main outer div */}
      <div className="bg-gray-300 shadow-xl flex flex-col h-auto w-full md:w-200 border border-gray-100/80 rounded-lg mt-8 mb-5 p-8">
        <h1 className="text-black text-3xl mb-6">Bills Insights</h1>

        {/* Chart container */}
        <div className="flex flex-col sm:flex-col md:flex-row gap-4 sm:gap-4 md:gap-6 items-center sm:items-center md:items-stretch mt-7 bg-gray-100 p-4 sm:p-4 md:p-8 rounded-xl md:h-90 sm:h-auto w-full">

        <Pie data={dataPie} />
        </div>
        {/* Notification container */}
        <div className="text-black bg-gray-100 border border-white/40 rounded-lg flex p-3 mt-30">
          <div>
            <div className="flex items-center space-x-2 mb-2">
                        <IoIosNotifications color="red"/>
                        <h1 className="text-red-500">Upcoming Bills</h1>
            </div>
            <div className="bg-gray-300 border border-white/40 rounded-lg p-2 md:w-[320px]">
              <ul>
                {
                    notificationsData.map((item) => {
                        return (
                            <li key={item} className="text-red-500">{item}</li>
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

export default BillsInsight;
