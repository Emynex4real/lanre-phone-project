import { useState } from 'react';
import { Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const SupportTicket = () => {
  const [tickets] = useState([]);

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
                <h1 className="text-2xl font-semibold text-gray-800">Support Tickets</h1>
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary-pink text-primary-pink rounded-lg hover:bg-primary-pink hover:text-white transition-colors">
                  <Plus size={20} />
                  New Ticket
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-pink text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Last Reply</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                        Data not found
                      </td>
                    </tr>
                  ) : (
                    tickets.map((ticket) => (
                      <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800">{ticket.subject}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            ticket.status === 'Open' ? 'bg-green-100 text-green-700' :
                            ticket.status === 'Answered' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                            ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">{ticket.lastReply}</td>
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

export default SupportTicket;
