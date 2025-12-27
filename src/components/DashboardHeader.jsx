import React from 'react';
import { Bell, User } from 'lucide-react';

const DashboardHeader = ({ title = 'Dashboard' }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">User Account</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-pink to-primary-pink/80 flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
