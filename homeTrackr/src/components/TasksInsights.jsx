import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { FaTasks } from "react-icons/fa";
import { FaSquareCheck, FaRegSquare } from 'react-icons/fa6';

function TasksInsights() {
  // original task list
  const [tasks, setTasks] = useState([
    { name: "Pack Lunch", dueDate: new Date(2025, 3, 25), status: false },
    { name: "Car Servicing", dueDate: new Date(2025, 3, 25), status: true },
  ]);
  
  const completedTasks = tasks.filter(task => task.status).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // toggle task completion status
  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    // main outer wala div 
    <div className='border border-white/40 rounded-xl sm:w-full h-125 mt-20 p-2 md:w-[500px] bg-gray-300'>
      <h1 className="text-black p-6 text-3xl ">Tasks Insights</h1>
      
      {/* main wrapper div-- flex ke liye */}
      <div className="flex flex-col justify-center items-center md:flex-col ">

        {/* progress bar wala div */}
        <div className="text-black  sm:w-100 h-30 p-4 ">
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{
                height: 15,
                borderRadius: 5,
                backgroundColor: "#2e2e2e",
                "& .MuiLinearProgress-bar": {
                  background: "linear-gradient(90deg, #06b6d4, #3b82f6)", // fancy gradient
                },
              }}
            />
            <p className="text-black text-center mt-2">
              {percentage}% Task Completed
            </p>
          </Box>
        </div>

        {/* pending task wala div */}
        <div className="text-black bg-gray-100 border border-white/40 rounded-xl md:w-[450px] sm:w-100 h-65 overflow-hidden p-2 ">
          {/* task icon and title */}
          <div className="flex items-center space-x-2 mb-2 p-4">
            <FaTasks />
            <h1 className="text-black">Pending Tasks</h1>
          </div>
              <div className="bg-gray-300 rounded-xl h-[160px] p-4 ml-2 mr-2">
          {/* task list */}
          <ul >
            {tasks.map((task, index) => (
              <li
              key={index}
              className="flex items-center p-2 text-black cursor-pointer"
              onClick={() => toggleTaskStatus(index)}
            >
              {/* Task name */}
              <span className="w-1/3">{task.name}</span>
            
              {/* Due Date in center */}
              <span className="w-1/3 text-center">{task.dueDate.toLocaleDateString()}</span>
            
              {/* Status Icon */}
              <span className="w-1/3 flex justify-end">
                {task.status ? (
                  <FaSquareCheck color="green" />
                ) : (
                  <FaRegSquare color="gray" />
                )}
              </span>
            </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksInsights;
