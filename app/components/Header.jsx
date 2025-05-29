import React, { useState } from 'react'
import { MenuOutlined, CloseOutlined, BellOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";

const Header = () => {
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 h-16 flex items-center justify-between px-6 relative z-40">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuOutlined className="text-gray-700 text-lg" />
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>

          {/* Center - Search Bar */}
          <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
              <BellOutlined className="text-gray-700 text-lg" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <SettingOutlined className="text-gray-700 text-lg" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ml-2">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>
        </header>
  )
}

export default Header