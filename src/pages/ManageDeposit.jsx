import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const ManageDeposit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deposits] = useState([]);

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
                <h1 className="text-2xl font-semibold text-gray-800">Deposit History</h1>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by Trx"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink w-80"
                    />
                    <button className="absolute right-0 top-0 h-full px-4 bg-primary-pink text-white rounded-r-lg hover:bg-primary-pink/90">
                      <Search size={20} />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary-pink text-primary-pink rounded-lg hover:bg-primary-pink hover:text-white transition-colors">
                    <Plus size={20} />
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-pink text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Gateway | Transaction</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Initiated</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Conversion</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                        Data not found
                      </td>
                    </tr>
                  ) : (
                    deposits.map((deposit) => (
                      <tr key={deposit.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800">{deposit.gateway}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{deposit.initiated}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{deposit.amount}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{deposit.conversion}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            deposit.status === 'Success' ? 'bg-green-100 text-green-700' :
                            deposit.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {deposit.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-primary-pink hover:underline text-sm">View</button>
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

export default ManageDeposit;
