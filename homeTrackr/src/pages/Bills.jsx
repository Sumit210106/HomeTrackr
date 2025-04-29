import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaRegCalendarAlt, FaWallet } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Bills() {
    // Predefined categories for dropdown
    const categories = [
        "Electricity",
        "Water",
        "Internet",
        "Groceries",
        "Rent",
        "Insurance",
        "Mobile",
        "Miscellaneous"
    ];

    const initialBills = [
        { id: 1, name: "Electricity Bill", category: "Electricity", amount: 50, dueDate: "Apr 25, 2025", status: "Paid" },
        { id: 2, name: "Water Bill", category: "Water", amount: 30, dueDate: "Apr 20, 2025", status: "Unpaid" },
        { id: 3, name: "Internet Bill", category: "Internet", amount: 60, dueDate: "Apr 10, 2025", status: "Paid" },
    ];

    // States
    const [bills, setBills] = useState(initialBills);
    const [showDialog, setShowDialog] = useState(false);
    const [newBill, setNewBill] = useState({
        name: "",
        category: categories[0],
        amount: "",
        dueDate: ""
    });

    // Chart Data
    const chartData = {
        labels: categories,
        datasets: [{
            data: categories.map(category => 
                bills.filter(bill => bill.category === category).reduce((sum, bill) => sum + bill.amount, 0)
            ),
            backgroundColor: [
                'rgba(34, 193, 195, 0.8)',  // Teal
                'rgba(253, 187, 45, 0.8)',  // Yellow
                'rgba(255, 59, 48, 0.8)',   // Red
                'rgba(88, 86, 214, 0.8)',   // Violet
                'rgba(255, 138, 101, 0.8)', // Peach
                'rgba(52, 199, 89, 0.8)',   // Green
                'rgba(90, 200, 250, 0.8)',  // Light Blue
                'rgba(255, 94, 77, 0.8)'    // Coral
            ],
            borderColor: [
                'rgba(34, 193, 195, 1)',
                'rgba(253, 187, 45, 1)',
                'rgba(255, 59, 48, 1)',
                'rgba(88, 86, 214, 1)',
                'rgba(255, 138, 101, 1)',
                'rgba(52, 199, 89, 1)',
                'rgba(90, 200, 250, 1)',
                'rgba(255, 94, 77, 1)'
            ],
            borderWidth: 2,
            hoverOffset: 15
        }]
    };
    

    // Handlers
    const handleChange = (e) => {
        setNewBill({
            ...newBill,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = bills.length ? Math.max(...bills.map(bill => bill.id)) + 1 : 1;
        const addedBill = {
            id: newId,
            name: newBill.name,
            category: newBill.category,
            amount: Number(newBill.amount),
            dueDate: newBill.dueDate,
            status: "Unpaid"
        };
        setBills([addedBill, ...bills]);
        setNewBill({ name: "", category: categories[0], amount: "", dueDate: "" });
        setShowDialog(false);
    };

    // Get overdue bills (dueDate passed today)
    const overdueBills = bills.filter(bill => new Date(bill.dueDate) < new Date() && bill.status === "Unpaid");

    // Calculate total payments
    const totalPaid = bills.reduce((sum, bill) => 
        bill.status === "Paid" ? sum + bill.amount : sum, 0
    );
    
    const totalUnpaid = bills.reduce((sum, bill) => 
        bill.status === "Unpaid" ? sum + bill.amount : sum, 0
    );

    return (
        <div className="min-h-screen bg-gray-200 p-6">
            {/* Summary Cards */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Paid Card */}
                    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Total Paid</p>
                                <h3 className="text-2xl font-bold text-gray-800">₹ {totalPaid}</h3>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaWallet className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Pending Payments</p>
                                <h3 className="text-2xl font-bold text-gray-800">₹ {totalUnpaid}</h3>
                                <p className="text-xs text-red-500 mt-2">{overdueBills.length} bills overdue</p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-full">
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-100  rounded-2xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Next Payment Due</p>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {bills.find(bill => bill.status === "Unpaid") ? bills.find(bill => bill.status === "Unpaid").name : "All bills paid"}
                                </h3>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaRegCalendarAlt className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialog */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-1000 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-96">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Add New Bill
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newBill.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Category</label>
                                <select
                                    name="category"
                                    value={newBill.category}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={newBill.amount}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Due Date</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={newBill.dueDate}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowDialog(false)}
                                    className="px-6 py-2.5 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                                >
                                    Add Bill
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Table */}
                    <div className="lg:col-span-2 bg-gray-100 rounded-xl shadow-lg p-10">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Bill Management
                            </h1>
                            <button
                                onClick={() => setShowDialog(true)}
                                className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                            >
                                <CiCirclePlus size="24px" className="mr-2" />
                                <span>Add New</span>
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-xl border-4 border-gray-200 shadow-sm">
                            <table className="w-full border-collapse bg-gray-200 text-left">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Category</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Amount</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Due Date</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {bills.map((bill) => (
                                        <tr 
                                            key={bill.id} 
                                            className="hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                                    <span className="font-medium text-gray-900">{bill.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                                                    {bill.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-gray-900">₹ {bill.amount}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {bill.dueDate}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                                    bill.status === "Unpaid" 
                                                    ? 'bg-red-50 text-red-700' 
                                                    : 'bg-green-50 text-green-700'
                                                }`}>
                                                    {bill.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column - Charts and Overdue Bills */}
                    <div className="space-y-8">
                        {/* Category Distribution Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Distribution</h2>
                            <div className="h-64">
                                <Doughnut 
                                    data={chartData} 
                                    options={{
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                                labels: {
                                                    padding: 20,
                                                    usePointStyle: true,
                                                    font: {
                                                        size: 12,
                                                        family: "'Inter', sans-serif"
                                                    },
                                                    color: '#4B5563'
                                                }
                                            }
                                        },
                                        cutout: '75%',
                                        radius: '90%',
                                        animation: {
                                            animateScale: true,
                                            animateRotate: true
                                        }
                                    }} 
                                />
                            </div>
                        </div>

                        {/* Overdue Bills Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Overdue Bills</h2>
                            <div className="space-y-3">
                                {overdueBills.map(bill => (
                                    <div key={bill.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                                        <div>
                                            <span className="text-sm font-medium text-gray-800">{bill.name}</span>
                                            <p className="text-xs text-red-600 mt-1">Due: {bill.dueDate}</p>
                                        </div>
                                        <span className="text-sm font-semibold text-red-600">₹{bill.amount}</span>
                                    </div>
                                ))}
                                {overdueBills.length === 0 && (
                                    <p className="text-sm text-gray-500 text-center py-4">No overdue bills</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
