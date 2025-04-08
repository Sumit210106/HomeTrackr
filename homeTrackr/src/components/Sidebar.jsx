import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaMoneyBill,
  FaShoppingBasket,
  FaFileInvoice,
  FaTasks,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { title: "Expenses", icon: <FaMoneyBill />, path: "/expenses" },
    { title: "Pantry", icon: <FaShoppingBasket />, path: "/pantry" },
    { title: "Bills", icon: <FaFileInvoice />, path: "/bills" },
    { title: "Tasks", icon: <FaTasks />, path: "/tasks" },
  ];

  return (
    <div className="flex ">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-[#0E0E10] h-max-screen p-5 pt-8 relative duration-300 shadow-2xl`}
      >
        {/* Toggle button */}
        <div
          className="absolute -right-4 top-10 w-9 h-9 bg-[#1F1F23] text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </div>

        {/* Logo Section */}
        <div className="flex items-center gap-x-4 mb-10">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-12 rounded-full shadow-xl ${
              open && "rotate-[360deg]"
            }`}
            alt="logo"
          />
          {open && (
            <h1 className="font-bold text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]">
              HomeTrackr
            </h1>
          )}
        </div>

        {/* Menu items */}
        <ul className="space-y-3">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-4 p-3 rounded-lg cursor-pointer hover:bg-[#1F1F23] hover:text-white hover:shadow-lg transition-all ${
                  location.pathname === menu.path
                    ? "bg-[#1F1F23] shadow-lg text-white"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]"
                }`}
              >
                <span className="text-lg text-white">{menu.icon}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
