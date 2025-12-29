import { useState } from 'react';
import { Copy, HelpCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const TwoFactorAuth = () => {
  const [otp, setOtp] = useState('');
  const setupKey = '6YGGCBZPWZMJ5QDN';

  const handleCopy = () => {
    navigator.clipboard.writeText(setupKey);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otp);
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
              <h1 className="text-2xl font-semibold text-gray-800">2FA Setting</h1>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section - Add Account */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Your Account</h2>
                  <p className="text-gray-600 mb-6">
                    Use the QR code or setup key on your Google Authenticator app to add your account.
                  </p>

                  {/* QR Code Placeholder */}
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="" alt="QR Code" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Setup Key */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Setup Key</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={setupKey}
                        readOnly
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-mono"
                      />
                      <button
                        onClick={handleCopy}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        title="Copy to clipboard"
                      >
                        <Copy size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Help Section */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <HelpCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        <strong className="block mb-1">Help</strong>
                        <p>
                          Google Authenticator is a multifactor app for mobile devices. It generates timed codes used during the 2-step verification process. To use Google Authenticator, install the Google Authenticator application on your mobile device.{' '}
                          <a href="#" className="text-blue-600 hover:underline">Download</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Enable 2FA */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Enable 2FA Security</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Google Authenticator OTP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
                        required
                      />
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
