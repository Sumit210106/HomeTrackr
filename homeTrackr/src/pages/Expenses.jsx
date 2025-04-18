import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Expense() {
  const requests = [
    {
      id: 1,
      subject: "Grocery Shopping",
      category: "Groceries",
      users: ["avatar1", "avatar2"],
      status: "Approved",
      price: "120",
      date: "Apr 14, 2025",

    },
    {
      id: 2,
      subject: "Electricity Bill",
      category: "Utilities",
      users: ["avatar3"],
      status: "Pending",
      price: "85",
      date: "Apr 10, 2025",

    },
    {
      id: 2,
      subject: "Electricity Bill",
      category: "Utilities",
      users: ["avatar3"],
      status: "Pending",
      price: "85",
      date: "Apr 10, 2025",

    },
    {
      id: 2,
      subject: "Electricity Bill",
      category: "Utilities",
      users: ["avatar3"],
      status: "Pending",
      price: "85",
      date: "Apr 10, 2025",

    },
    {
      id: 3,
      subject: "Movie Night",
      category: "Entertainment",
      users: ["avatar4", "avatar5"],
      status: "Approved",
      price: "45",
      date: "Apr 08, 2025",

    },
    {
      id: 4,
      subject: "Online Course",
      category: "Education",
      users: ["avatar6"],
      status: "Postponed",
      price: "199",
      date: "Apr 05, 2025",

    },
    {
      id: 5,
      subject: "Water Filter Repair",
      category: "Maintenance",
      users: ["avatar7"],
      status: "Approved",
      price: "60",
      date: "Apr 02, 2025",

    },
    {
      id: 6,
      subject: "Birthday Cake",
      category: "Celebration",
      users: ["avatar8", "avatar9"],
      status: "Approved",
      price: "40",
      date: "Apr 01, 2025",

    }
  ];

  // Sample data for the chart
  const chartData = [
    { name: 'Sept', value: 150 },
    { name: 'Oct', value: 200 },
    { name: 'Nov', value: 270 }
  ];

  // Category breakdown data
  const categories = [
    { name: "Education", count: 78, percentage: "33%" },
    { name: "Groceries", count: 64, percentage: "26%" },
    { name: "Entertainment", count: 44, percentage: "19%" },
    { name: "Utilities", count: 30, percentage: "12%" },
    { name: "Other", count: 22, percentage: "10%" }
  ];

  // Status colors
  const statusColors = {
    "Approved": "bg-green-100 text-green-600",
    "Pending": "bg-yellow-100 text-yellow-600",
    "Postponed": "bg-gray-100 text-gray-600"
  };

  return (
    <div className="bg-gray-200 p-3 sm:p-6 min-h-screen rounded-xl mx-2 my-2 sm:m-6">
      <div className="max-w-6xl mx-auto">
        {/* Main container */}
        <div className="bg-gray-100x rounded-lg shadow-sm overflow-hidden">
          {/* Header with search */}
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">EXPENSE</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row">
            {/* Left: Request list */}
            <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r">
              {/* Table headers - hidden on small screens */}
              <div className="hidden lg:grid grid-cols-12 text-md text-gray-500 font-medium p-4 border-b">
                <div className="col-span-3">Item & Category</div>
                <div className="col-span-2">Family Members</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1"></div>
              </div>

              {/* Request rows */}
              {requests.map((request) => (
                <div key={request.id} className="border-b hover:bg-gray-50">
                  {/* Desktop view */}
                  <div className="hidden lg:grid grid-cols-12 text-sm p-4 items-center">
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                          {request.category === "Groceries" && <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>}
                          {request.category === "Utilities" && <div className="w-4 h-4 bg-red-500 rounded-sm"></div>}
                          {request.category === "Entertainment" && <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>}
                          {request.category === "Education" && <div className="w-4 h-4 bg-green-500 rounded-sm"></div>}
                          {request.category === "Maintenance" && <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>}
                          {request.category === "Celebration" && <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{request.subject}</div>
                          <div className="text-xs text-gray-500">{request.category}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex -space-x-2">
                        {request.users.map((user, idx) => (
                          <div key={idx} className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className={`px-3 py-1 rounded-full text-xs ${statusColors[request.status]}`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="col-span-2 font-medium">{request.price}</div>
                    <div className="col-span-2 text-gray-500">
                      <div>{request.date}</div>

                    </div>
                    <div className="col-span-1 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                          <circle cx="8" cy="2.5" r="1.5" />
                          <circle cx="8" cy="8" r="1.5" />
                          <circle cx="8" cy="13.5" r="1.5" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Mobile/tablet view - card style layout */}
                  <div className="lg:hidden p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                          {request.category === "Groceries" && <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>}
                          {request.category === "Utilities" && <div className="w-4 h-4 bg-red-500 rounded-sm"></div>}
                          {request.category === "Entertainment" && <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>}
                          {request.category === "Education" && <div className="w-4 h-4 bg-green-500 rounded-sm"></div>}
                          {request.category === "Maintenance" && <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>}
                          {request.category === "Celebration" && <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{request.subject}</div>
                          <div className="text-xs text-gray-500">{request.category}</div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${statusColors[request.status]}`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mt-3">
                      <div>
                        <div className="text-gray-500 mb-1">Amount</div>
                        <div className="font-medium">{request.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Date</div>
                        <div>{request.date}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Users</div>
                        <div className="flex -space-x-2">
                          {request.users.map((user, idx) => (
                            <div key={idx} className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary */}
            <div className="w-full lg:w-1/3 p-4 md:p-6">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Short summary</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold mr-2">238</span>
                  <span className="text-sm text-gray-500">requests</span>
                  <button className="ml-auto text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <circle cx="8" cy="2.5" r="1.5" />
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="8" cy="13.5" r="1.5" />
                    </svg>
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div className="bg-green-400" style={{ width: '80%' }}></div>
                    <div className="bg-yellow-400" style={{ width: '15%' }}></div>
                    <div className="bg-gray-400" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Category breakdown</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name} className="flex justify-between items-center">
                      <div className="text-sm font-medium">{category.name}</div>
                      <div className="text-sm text-gray-500">{category.percentage}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar chart */}
              <div className="w-full h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
