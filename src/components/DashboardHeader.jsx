import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserCircle, Lock, LogOut, MessageCircle, ChevronDown } from 'lucide-react';

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* WhatsApp Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 flex items-center justify-center gap-2 cursor-pointer hover:from-green-600 hover:to-green-700 transition-all duration-300">
        <MessageCircle size={16} className="animate-pulse" />
        <span className="text-xs font-medium">Click here to join Whatsapp Channel for latest Updates.</span>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] shadow-md sticky top-0 z-30">
        <div className="px-4 py-2.5">
          <div className="flex items-center justify-end gap-3">
            {/* Watch Tutorial Videos Button */}
            <button className="bg-gradient-to-r from-primary-pink to-pink-600 hover:from-pink-600 hover:to-primary-pink text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
              Watch Tutorial Videos
            </button>

            {/* User Profile */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-white/10 px-2 py-1.5 rounded-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <User size={16} className="text-blue-900" />
                </div>
                <div className="text-left text-white">
                  <p className="text-xs font-semibold">Emynex</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-green-300">Online</span>
                  </div>
                </div>
                <ChevronDown 
                  size={14} 
                  className={`text-white transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-900">Emynex</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">emynex4real@gmail.com</p>
                  </div>
                  <button
                    onClick={() => { navigate('/profile'); setIsDropdownOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <UserCircle size={14} className="text-gray-400" />
                    <span className="font-medium">Profile Settings</span>
                  </button>
                  <button
                    onClick={() => { navigate('/change-password'); setIsDropdownOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Lock size={14} className="text-gray-400" />
                    <span className="font-medium">Change Password</span>
                  </button>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 transition-colors rounded-b-lg"
                  >
                    <LogOut size={14} />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Customer Support Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 z-50 hover:scale-105 group"
      >
        <span className="hidden sm:inline text-xs">Customer Support</span>
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          <MessageCircle size={18} className="text-green-500" />
        </div>
      </a>
    </>
  );
};

export default DashboardHeader;
