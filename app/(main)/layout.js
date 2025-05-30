'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { MenuOutlined, CloseOutlined, BellOutlined, SettingOutlined, SearchOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <AntdRegistry>
      <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Enhanced Header */}
        <header className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 h-18 flex items-center justify-between px-6 sticky top-0 z-40 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-2xl translate-x-12 -translate-y-12"></div>

          <div className="relative z-10 flex items-center justify-between gap-6 flex-1">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/20"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle sidebar"
              >
                <MenuOutlined className="text-slate-700 text-lg" />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Admin Dashboard
                  </h1>
                  <p className="text-xs text-slate-500 font-medium">Management Portal</p>
                </div>
              </div>
            </div>

            {/* Center Section - Search */}
            <div className="hidden  ">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <SearchOutlined className="absolute left-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-xl border border-slate-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search button for mobile */}
              <button className="md:hidden p-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/20">
                <SearchOutlined className="text-slate-700 text-lg" />
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  className="p-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/20 relative group"
                  aria-label="Notifications"
                >
                  <BellOutlined className="text-slate-700 text-lg group-hover:text-blue-600 transition-colors duration-300" />
                  {notificationCount > 0 && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">{notificationCount}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur opacity-40 animate-ping"></div>
                    </div>
                  )}
                </button>
              </div>

              {/* Settings */}
              <button
                className="p-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/20 group"
                aria-label="Settings"
              >
                <SettingOutlined className="text-slate-700 text-lg group-hover:text-blue-600 transition-colors duration-300 group-hover:rotate-45" />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-3 p-2 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/20 group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">U</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-800">Admin User</p>
                    <p className="text-xs text-slate-500">Super Admin</p>
                  </div>
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-200/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">U</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Admin User</p>
                          <p className="text-sm text-slate-500">admin@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100/50 transition-colors duration-200 text-left">
                        <UserOutlined className="text-slate-500" />
                        <span className="text-slate-700">Profile Settings</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100/50 transition-colors duration-200 text-left">
                        <SettingOutlined className="text-slate-500" />
                        <span className="text-slate-700">Account Settings</span>
                      </button>
                      <hr className="my-2 border-slate-200/50" />
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors duration-200 text-left group">
                        <LogoutOutlined className="text-slate-500 group-hover:text-red-500" />
                        <span className="text-slate-700 group-hover:text-red-600">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Sidebar */}
          <div className="hidden md:block relative">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Overlay */}
          {mounted && sidebarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeSidebar}
              />

              <div className="relative w-80 h-full transform transition-transform duration-300 ease-out">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={closeSidebar}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colors duration-200"
                    aria-label="Close sidebar"
                  >
                    <CloseOutlined className="text-white text-lg" />
                  </button>
                </div>
                <Sidebar isMobile={true} onClose={closeSidebar} />
              </div>
            </div>
          )}

          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="p-6">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 min-h-[calc(100vh-8rem)] relative overflow-hidden">
                {/* Content area decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
                <div className="relative z-10 p-6">
                  {children || (
                    <div className="text-center py-16">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
                          <span className="text-white text-3xl">🎉</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                        Welcome to Admin Panel
                      </h2>
                      <p className="text-slate-600 text-lg max-w-md mx-auto">
                        Select a menu item from the sidebar to get started with managing your application.
                      </p>
                      <div className="mt-8 flex justify-center gap-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Click outside handler for profile dropdown */}
        {profileDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setProfileDropdownOpen(false)}
          />
        )}
      </div>
    </AntdRegistry>
  );
};

export default MainLayout;