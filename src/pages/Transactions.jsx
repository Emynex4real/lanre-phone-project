import { useState } from 'react';
import { Filter } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Transactions = () => {
  const [trxId, setTrxId] = useState('');
  const [type, setType] = useState('All');
  const [remark, setRemark] = useState('Any');
  const [dateRange, setDateRange] = useState('');
  const [transactions] = useState([
    {
      id: 'PN8JNWMNOQ4Z',
      transacted: '2025-12-27 12:11 PM',
      timeAgo: '1 day ago',
      amount: '+ 50.00 NGN',
      postBalance: '50.00 NGN',
      detail: 'Welcome and testing Bonus'
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <DashboardHeader />
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>
            </div>

            {/* Filters */}
            <div className="p-6 border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">TRX</label>
                  <input
                    type="text"
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
                  >
                    <option>All</option>
                    <option>Deposit</option>
                    <option>Withdrawal</option>
                    <option>Order</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Remark</label>
                  <select
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
                  >
                    <option>Any</option>
                    <option>Bonus</option>
                    <option>Payment</option>
                    <option>Refund</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="text"
                    placeholder="Start date - End date"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
                  />
                </div>
              </div>
              <button className="mt-4 w-full md:w-auto px-8 py-2 bg-primary-pink text-white rounded-lg hover:bg-primary-pink/90 flex items-center justify-center gap-2">
                <Filter size={18} />
                Filter
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-pink text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Trx</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Transacted</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Post Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{transaction.id}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-800">{transaction.transacted}</div>
                        <div className="text-xs text-gray-500">{transaction.timeAgo}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">{transaction.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{transaction.postBalance}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{transaction.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
