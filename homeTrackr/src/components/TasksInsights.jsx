import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { FaTasks } from "react-icons/fa";
import { FaSquareCheck, FaRegSquare } from 'react-icons/fa6';

function TasksInsights() {
  // original task list
  const [tasks, setTasks] = useState([
    { name: "Pack Lunch", status: false },
    { name: "Car Servicing", status: true },
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
    <div className='border border-white/40 rounded-lg w-full h-120 mt-20'>
      <h1 className="text-white p-6 text-2xl">Tasks Insights</h1>
      
      {/* main wrapper div-- flex ke liye */}
      <div className="flex flex-col justify-center items-center md:flex-col">

        {/* progress bar wala div */}
        <div className="text-white w-150 h-30 p-4">
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
            <p className="text-white text-center mt-2">
              {percentage}% Task Completed
            </p>
          </Box>
        </div>

        {/* pending task wala div */}
        <div className="text-white border border-white/40 rounded-lg w-160 h-65 overflow-hidden ">
          {/* task icon and title */}
          <div className="flex items-center space-x-2 mb-2 p-4">
            <FaTasks />
            <h1 className="text-white">Pending Tasks</h1>
          </div>

          {/* task list */}
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 mb-2 p-4 text-white cursor-pointer"
                onClick={() => toggleTaskStatus(index)}
              >
                <span className="flex-1">{task.name}</span>
                {task.status ? (
                  <FaSquareCheck color="green" />
                ) : (
                  <FaRegSquare color="gray" />
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default TasksInsights;
