import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaMoneyBill,
  FaShoppingBasket,
  FaFileInvoice,
  FaTasks,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Sidebar() {
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { title: "Expenses", icon: <FaMoneyBill />, path: "/expenses" },
    { title: "Pantry", icon: <FaShoppingBasket />, path: "/pantry" },
    { title: "Bills", icon: <FaFileInvoice />, path: "/bills" },
    { title: "Tasks", icon: <FaTasks />, path: "/tasks" },
  ];

  return (
    <div className="m-5 mt-8"> 
      <div className="w-64 h-[880px] bg-[#d6cfed] shadow-xl rounded-3xl flex flex-col justify-between p-6 ">
        {/* Top section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12 flex-col">
            <img src={logo} alt="logo" className="w-20 h-20 rounded-full shadow-md bg-white mt-4" />
            <span className=" mt-3 text-2xl font-bold text-gray-700">HomeTrackr</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            {Menus.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <div
                  className={`flex items-center gap-3 p-3 mt-3 rounded-xl transition-all cursor-pointer ${
                    location.pathname === menu.path
                      ? "bg-[#eef0fc] text-[#4c6ef5] font-medium shadow-sm"
                      : "text-gray-600 hover:bg-[#eef0fc] hover:text-[#4c6ef5]"
                  }`}
                >
                  <span className="text-lg">{menu.icon}</span>
                  <span className="text-md">{menu.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
