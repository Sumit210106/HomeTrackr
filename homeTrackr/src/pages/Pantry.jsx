import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pantry() {
    // Predefined categories for dropdown
    const categories = [
        "Grains",
        "Dairy",
        "Proteins",
        "Vegetables",
        "Fruits",
        "Spices",
        "Snacks",
        "Beverages"
    ];

    const initialItems = [
        { id: 1, name: "Rice", category: "Grains", quantity: 2, date: "Apr 14, 2025" },
        { id: 2, name: "Milk", category: "Dairy", quantity: 1, date: "Apr 10, 2025" },
        { id: 3, name: "Eggs", category: "Proteins", quantity: 12, date: "Apr 08, 2025" },
    ];

    // States
    const [items, setItems] = useState(initialItems);
    const [showDialog, setShowDialog] = useState(false);
    const [newItem, setNewItem] = useState({
        name: "",
        category: categories[0],
        quantity: ""
    });

    // Chart Data
    const chartData = {
        labels: categories,
        datasets: [{
            data: categories.map(category => 
                items.filter(item => item.category === category).length
            ),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FF6384',
                '#36A2EB'
            ]
        }]
    };

    // Handlers
    const handleChange = (e) => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const addedItem = {
            id: newId,
            name: newItem.name,
            category: newItem.category,
            quantity: Number(newItem.quantity),
            date: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setItems([addedItem, ...items]);
        setNewItem({ name: "", category: categories[0], quantity: "" });
        setShowDialog(false);
    };

    // Get low stock items (quantity <= 2)
    const lowStockItems = items.filter(item => item.quantity <= 2);

    return (
        <div className="min-h-screen bg-gray-200 p-8">
            {/* Dialog */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-1000 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-96">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Add New Pantry Item
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newItem.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Category</label>
                                <select
                                    name="category"
                                    value={newItem.category}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={newItem.quantity}
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
                                    Add Item
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
                                Pantry Management
                            </h1>
                            <button
                                onClick={() => setShowDialog(true)}
                                className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                            >
                                <CiCirclePlus size="24px" className="mr-2" />
                                <span>Add New</span>
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full border-collapse bg-white text-left">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Category</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Quantity</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Date Added</th>
                                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {items.map((item) => (
                                        <tr 
                                            key={item.id} 
                                            className="hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                                    <span className="font-medium text-gray-900">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`font-medium ${
                                                    item.quantity <= 2 ? 'text-red-600' : 'text-gray-900'
                                                }`}>
                                                    {item.quantity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {item.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                                    item.quantity <= 2 
                                                    ? 'bg-red-50 text-red-700' 
                                                    : 'bg-green-50 text-green-700'
                                                }`}>
                                                    {item.quantity <= 2 ? 'Low Stock' : 'In Stock'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column - Charts and Low Stock */}
                    <div className="space-y-8">
                        {/* Chart Card */}
                        <div className="bg-gray-100 rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Distribution</h2>
                            <div className="h-64">
                                <Pie data={chartData} options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>

                        {/* Low Stock Card */}
                        <div className="bg-gray-100 rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Low Stock Items</h2>
                            <div className="space-y-3">
                                {lowStockItems.map(item => (
                                    <div key={item.id} className="flex items-center justify-between p-3 bg-red-100 rounded-lg">
                                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                                        <span className="text-sm text-red-700">Qty: {item.quantity}</span>
                                    </div>
                                ))}
                                {lowStockItems.length === 0 && (
                                    <p className="text-sm text-gray-500">No items running low</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
