 
"use client";
import React from "react";
import Link from "next/link";
import { UserOutlined, ShoppingOutlined, DashboardOutlined } from "@ant-design/icons";

const Sidebar = ({ isMobile = false, onClose }) => {
  const menuItems = [
    // {
    //   href: "/dashboard",
    //   icon: <DashboardOutlined className="text-xl" />,
    //   label: "Dashboard",
    // },
    {
      href: "/user-management",
      icon: <UserOutlined className="text-xl" />,
      label: "User Management",
    },
    {
      href: "/product-inventory",
      icon: <ShoppingOutlined className="text-xl" />,
      label: "Product Inventory",
    },
  ];

  return (
    <aside className={`${isMobile ? 'w-full' : 'w-64'} h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl`}>
      <div className="p-6">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Panel
          </h2>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={isMobile ? onClose : undefined}
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-x-1 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              <span className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                {item.icon}
              </span>
              <span className="font-medium group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">U</span>
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-slate-400">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;