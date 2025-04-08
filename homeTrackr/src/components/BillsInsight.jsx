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
    <div className="px-4 flex justify-center md:justify-start w-90">
      {/* Main outer div */}
      <div className="bg-black shadow-xl flex flex-col h-auto w-full md:w-220 border border-gray-100/80 rounded-lg mt-8 mb-5 p-6">
        <h1 className="text-white text-2xl mb-6">Bills Insights</h1>

        {/* Chart container */}
        <div className="flex flex-col md:flex-row gap-6 gap-y-4 mb-6 items-center md:items-stretch mt-7">
        <Pie data={dataPie} />
        </div>
        {/* Notification container */}
        <div className="text-white border border-white/40 rounded-lg flex p-3 mt-18">
          <div>
            <div className="flex items-center space-x-2 mb-2">
                        <IoIosNotifications color="red"/>
                        <h1 className="text-red-500">Upcoming Bills</h1>
            </div>
            <div className="border border-white/40 rounded-lg p-2">
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
