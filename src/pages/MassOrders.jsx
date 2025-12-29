import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const MassOrders = () => {
  const [massOrderText, setMassOrderText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle mass order submission
    console.log('Mass orders:', massOrderText);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <DashboardHeader />
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-800">Mass Order</h1>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place mass order (Press Enter button for every new order)
                  </label>
                  <textarea
                    value={massOrderText}
                    onChange={(e) => setMassOrderText(e.target.value)}
                    placeholder="service_id|link|quantity&#10;service_id|link|quantity&#10;service_id|link|quantity"
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink resize-none font-mono text-sm"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Format: service_id|link|quantity (one order per line)
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-pink text-white py-3 rounded-lg font-medium hover:bg-primary-pink/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MassOrders;
