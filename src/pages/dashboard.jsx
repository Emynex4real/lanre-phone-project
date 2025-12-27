import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import { 
  Wallet, DollarSign, ArrowLeftRight, Ticket, List, 
  RefreshCw, CheckCircle, XCircle, RotateCcw, ShoppingCart
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, bgColor, iconColor }) => (
  <div className={`${bgColor} rounded-xl p-6 text-white shadow-lg`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white/80 text-sm mb-2">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className={`${iconColor} p-4 rounded-lg bg-white/20`}>
        <Icon size={32} />
      </div>
    </div>
  </div>
);

const OrderStatusCard = ({ count, label, icon: Icon, bgColor, iconColor }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4">
      <div className={`${bgColor} p-4 rounded-lg`}>
        <Icon className={iconColor} size={28} />
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">{count}</p>
        <p className="text-gray-600 text-sm">{label}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        <DashboardHeader title="Dashboard" />
        
        {/* WhatsApp Banner */}
        <div className="bg-primary-green">
          <div className="px-6 py-3">
            <p className="text-white text-center text-sm">
              📢 Click here to join WhatsApp Channel for latest Updates.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard 
              title="Balance"
              value="₦0.00"
              icon={Wallet}
              bgColor="bg-gradient-to-br from-pink-500 to-pink-600"
              iconColor="text-white"
            />
            <StatCard 
              title="Total Spent"
              value="₦0.00"
              icon={DollarSign}
              bgColor="bg-gradient-to-br from-green-500 to-green-600"
              iconColor="text-white"
            />
            <StatCard 
              title="Total Transactions"
              value="1"
              icon={ArrowLeftRight}
              bgColor="bg-gradient-to-br from-red-500 to-red-600"
              iconColor="text-white"
            />
          </div>

          {/* Second Row Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard 
              title="Total service"
              value="513"
              icon={List}
              bgColor="bg-gradient-to-br from-purple-500 to-purple-600"
              iconColor="text-white"
            />
            <StatCard 
              title="Total Deposit"
              value="₦0.00"
              icon={Wallet}
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
              iconColor="text-white"
            />
            <StatCard 
              title="Total Tickets"
              value="0"
              icon={Ticket}
              bgColor="bg-gradient-to-br from-yellow-400 to-yellow-500"
              iconColor="text-white"
            />
          </div>

          {/* Order Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <OrderStatusCard 
              count="0"
              label="Pending Order"
              icon={RefreshCw}
              bgColor="bg-orange-100"
              iconColor="text-orange-600"
            />
            <OrderStatusCard 
              count="0"
              label="Processing Order"
              icon={RefreshCw}
              bgColor="bg-teal-100"
              iconColor="text-teal-600"
            />
            <OrderStatusCard 
              count="0"
              label="Complete Order"
              icon={CheckCircle}
              bgColor="bg-green-100"
              iconColor="text-green-600"
            />
            <OrderStatusCard 
              count="0"
              label="Refund Order"
              icon={RotateCcw}
              bgColor="bg-gray-100"
              iconColor="text-gray-600"
            />
            <OrderStatusCard 
              count="0"
              label="Cancelled Order"
              icon={XCircle}
              bgColor="bg-red-100"
              iconColor="text-red-600"
            />
            <OrderStatusCard 
              count="0"
              label="Total Order"
              icon={ShoppingCart}
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                to="/order-social-services"
                className="bg-primary-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-pink/90 transition text-center"
              >
                Order Services
              </Link>
              <Link 
                to="/manage-deposit"
                className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-green/90 transition text-center"
              >
                Add Funds
              </Link>
              <Link 
                to="/manage-orders"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-center"
              >
                View Orders
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
