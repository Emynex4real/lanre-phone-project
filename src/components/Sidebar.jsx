import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, ShoppingCart, FileText, Wallet, ArrowLeftRight, 
  Ticket, Lock, Search, ChevronDown, Menu, X
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/order-social-services', icon: ShoppingCart, label: 'Order Social Services' },
    { 
      path: '/manage-orders', 
      icon: FileText, 
      label: 'Manage Orders',
      hasSubmenu: true,
      submenu: [
        { path: '/manage-orders/all', label: 'All Orders' },
        { path: '/manage-orders/pending', label: 'Pending' },
        { path: '/manage-orders/completed', label: 'Completed' }
      ]
    },
    { path: '/manage-deposit', icon: Wallet, label: 'Manage Deposit' },
    { path: '/transactions', icon: ArrowLeftRight, label: 'Transactions' },
    { path: '/support-ticket', icon: Ticket, label: 'Support Ticket' },
    { path: '/2fa-security', icon: Lock, label: '2FA Security' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-gray-900 font-bold text-xl">AB</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">ACCBOOSTER</h1>
              <p className="text-xs text-gray-400">V1.0</p>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search here..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-pink"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 pb-4 overflow-y-auto h-[calc(100vh-200px)]">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.hasSubmenu ? (
                <>
                  <button
                    onClick={() => setIsOrdersOpen(!isOrdersOpen)}
                    className={`
                      w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg mb-1
                      transition-colors ${
                        location.pathname.startsWith(item.path)
                          ? 'bg-primary-pink text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${isOrdersOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOrdersOpen && (
                    <div className="ml-4 mb-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`
                            block px-4 py-2 rounded-lg text-sm mb-1
                            transition-colors ${
                              isActive(subItem.path)
                                ? 'bg-primary-pink/20 text-primary-pink'
                                : 'text-gray-400 hover:bg-gray-800'
                            }
                          `}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg mb-1
                    transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-pink text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }
                  `}
                >
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Version */}
        <div className="absolute bottom-4 left-4 text-primary-pink text-sm font-bold">
          ACCBOOSTER V1.0
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
