import { useState } from 'react';
import { Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const CancelledOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders] = useState([]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <DashboardHeader />
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-800">Cancelled Orders</h1>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink w-80"
                  />
                  <button className="absolute right-0 top-0 h-full px-4 bg-primary-pink text-white rounded-r-lg hover:bg-primary-pink/90">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Link</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Start Counter</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Remains</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="px-6 py-12 text-center text-gray-500">
                        Data not found
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.service}</td>
                        <td className="px-6 py-4 text-sm text-blue-600 hover:underline">
                          <a href={order.link} target="_blank" rel="noopener noreferrer">
                            {order.link}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.quantity}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.startCounter}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.remains}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{order.date}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                            Cancelled
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CancelledOrders;
