 
"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { MenuOutlined, CloseOutlined, BellOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <AntdRegistry>
      <div className="h-screen flex flex-col bg-gray-50">
        {/* Enhanced Header */}
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
              Mern Developer Test
            </h1>
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

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Sidebar */}
          <div className="hidden md:block relative">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Overlay */}
          {mounted && sidebarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeSidebar}
              />
              
              {/* Sidebar */}
              <div className="relative w-80 h-full transform transition-transform duration-300 ease-out">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={closeSidebar}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colors duration-200"
                  >
                    <CloseOutlined className="text-white text-lg" />
                  </button>
                </div>
                <Sidebar isMobile={true} onClose={closeSidebar} />
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <div className="p-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[calc(100vh-8rem)]">
                <div className="p-6">
                  {children || (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl">🎉</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Admin Panel</h2>
                      <p className="text-gray-600">Select a menu item from the sidebar to get started.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AntdRegistry>
  );
};

export default MainLayout;