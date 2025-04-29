import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { FaRegClock, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Tasks() {
    const categories = [
        "Personal",
        "Work",
        "Shopping",
        "Health",
        "Home",
        "Study",
        "Exercise",
        "Other"
    ];

    const priorities = ["Low", "Medium", "High"];

    const initialTasks = [
        { id: 1, name: "Complete Project Report", category: "Work", priority: "High", dueDate: "2025-04-25", status: false, description: "Finish quarterly report" },
        { id: 2, name: "Gym Session", category: "Exercise", priority: "Medium", dueDate: "2025-04-20", status: true, description: "30 mins cardio" },
        { id: 3, name: "Buy Groceries", category: "Shopping", priority: "Low", dueDate: "2025-04-22", status: false, description: "Get weekly supplies" },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [showDialog, setShowDialog] = useState(false);
    const [newTask, setNewTask] = useState({
        name: "",
        category: categories[0],
        priority: "Medium",
        dueDate: "",
        description: "",
        status: false
    });

    const completedTasks = tasks.filter(task => task.status).length;
    const totalTasks = tasks.length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'High': return 'text-red-600 bg-red-50';
            case 'Medium': return 'text-yellow-600 bg-yellow-50';
            case 'Low': return 'text-green-600 bg-green-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
        setTasks([{ ...newTask, id: newId }, ...tasks]);
        setNewTask({
            name: "",
            category: categories[0],
            priority: "Medium",
            dueDate: "",
            description: "",
            status: false
        });
        setShowDialog(false);
    };

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: !task.status } : task
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-inter">
            <div className="max-w-7xl mx-auto">
                {/* Progress Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-handlee text-gray-800 mb-4">My Progress</h2>
                        <Box sx={{ width: "100%" }}>
                            <LinearProgress
                                variant="determinate"
                                value={percentage}
                                sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: "#f3f4f6",
                                    "& .MuiLinearProgress-bar": {
                                        background: "linear-gradient(90deg, #3b82f6, #06b6d4)"
                                    },
                                }}
                            />
                            <p className="text-sm font-handlee text-gray-600 text-center mt-2">
                                {completedTasks} of {totalTasks} tasks completed
                            </p>
                        </Box>
                    </div>
                </div>

                {/* Task Management Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Task List */}
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-handlee text-gray-800">
                                My Tasks
                            </h1>
                            <button
                                onClick={() => setShowDialog(true)}
                                className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow font-inter"
                            >
                                <CiCirclePlus size="20px" className="mr-2" />
                                <span>Add Task</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {tasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-100"
                                >
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => toggleTaskStatus(task.id)}
                                            className="text-lg"
                                        >
                                            {task.status ? (
                                                <FaCheckCircle className="text-green-500" />
                                            ) : (
                                                <FaRegCircle className="text-gray-400 hover:text-blue-500" />
                                            )}
                                        </button>
                                        <div>
                                            <h3 className={`font-handlee text-lg ${task.status ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                                                {task.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-inter">{task.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)} font-inter`}>
                                            {task.priority}
                                        </span>
                                        <span className="flex items-center text-sm text-gray-500 font-inter">
                                            <FaRegClock className="mr-2" />
                                            {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 font-inter">
                                            {task.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar - Task Statistics */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-xl font-handlee text-gray-800 mb-4">Overview</h2>
                            <div className="space-y-4 font-inter">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Tasks</span>
                                    <span className="font-semibold text-gray-800">{totalTasks}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Completed</span>
                                    <span className="font-semibold text-green-600">{completedTasks}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Pending</span>
                                    <span className="font-semibold text-yellow-600">{totalTasks - completedTasks}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Task Dialog - Update font styles */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                        <h2 className="text-2xl font-handlee text-gray-800 mb-6">Add New Task</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newTask.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    name="description"
                                    value={newTask.description}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        name="category"
                                        value={newTask.category}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                                    <select
                                        name="priority"
                                        value={newTask.priority}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {priorities.map(priority => (
                                            <option key={priority} value={priority}>{priority}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={newTask.dueDate}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowDialog(false)}
                                    className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                                >
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
