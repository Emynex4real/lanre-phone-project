import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = (field) => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password changed');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <DashboardHeader />
        <main className="p-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-pink to-pink-600 p-4 flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                  <Shield size={20} />
                  Change Password
                </h1>
                <p className="text-pink-100 text-xs mt-0.5">Update your account password</p>
              </div>
              <Link
                to="/profile"
                className="px-3 py-1.5 bg-white text-primary-pink rounded-md hover:shadow-md transition-all text-xs font-medium"
              >
                Profile Settings
              </Link>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Left Section - User Card */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary-pink to-pink-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                          <span className="text-gray-400 text-[10px]">350x300</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 hover:bg-white/20 transition-colors">
                        <div className="flex justify-between items-center text-xs">
                          <span className="opacity-90">Name</span>
                          <span className="font-semibold">Username</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 hover:bg-white/20 transition-colors">
                        <div className="flex justify-between items-center text-xs">
                          <span className="opacity-90">Username</span>
                          <span className="font-semibold">Emynex</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 hover:bg-white/20 transition-colors">
                        <div className="flex justify-between items-center text-xs">
                          <span className="opacity-90">Email</span>
                          <span className="font-semibold text-[10px]">emynex4real@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Password Form */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                      <Lock size={18} className="text-primary-pink" />
                      Security Settings
                    </h2>
                    <p className="text-gray-500 text-xs mt-0.5">Ensure your account is using a strong password</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Current Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                        <input
                          type={showPasswords.current ? 'text' : 'password'}
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                          placeholder="Enter current password"
                          className="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => togglePassword('current')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.current ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        New Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                        <input
                          type={showPasswords.new ? 'text' : 'password'}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          placeholder="Enter new password"
                          className="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => togglePassword('new')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.new ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">Password must be at least 8 characters long</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Confirm New Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                        <input
                          type={showPasswords.confirm ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm new password"
                          className="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => togglePassword('confirm')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.confirm ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-2 border-blue-500 p-2.5 rounded-md">
                      <div className="flex items-start gap-2">
                        <Shield className="text-blue-500 mt-0.5" size={14} />
                        <div>
                          <h4 className="text-xs font-semibold text-blue-900 mb-0.5">Password Security Tips</h4>
                          <ul className="text-[10px] text-blue-700 space-y-0.5">
                            <li>• Use a mix of uppercase and lowercase letters</li>
                            <li>• Include numbers and special characters</li>
                            <li>• Avoid common words or personal information</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-pink to-pink-600 hover:from-pink-600 hover:to-primary-pink text-white py-2.5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg mt-4"
                    >
                      Update Password
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

export default ChangePassword;
