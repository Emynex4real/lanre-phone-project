import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Upload, Mail, MapPin, Home } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'emynex4real@gmail.com',
    address: '',
    state: '',
    zipCode: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
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
                <h1 className="text-lg font-bold text-white">Profile Settings</h1>
                <p className="text-pink-100 text-xs mt-0.5">Manage your account information</p>
              </div>
              <Link
                to="/change-password"
                className="px-3 py-1.5 bg-white text-primary-pink rounded-md hover:shadow-md transition-all text-xs font-medium"
              >
                Password Settings
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
                          <User size={36} className="text-primary-pink" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 hover:bg-white/20 transition-colors">
                        <div className="flex justify-between items-center text-xs">
                          <span className="opacity-90">Name</span>
                          <span className="font-semibold">username</span>
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

                {/* Right Section - Profile Form */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                      <User size={18} className="text-primary-pink" />
                      Profile Information
                    </h2>
                    <p className="text-gray-500 text-xs mt-0.5">Update your personal details</p>
                  </div>
                  
                  {/* Image Upload */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div className="w-32 h-24 bg-white rounded-md flex items-center justify-center shadow-sm">
                        <span className="text-gray-400 text-2xl font-light">350×300</span>
                      </div>
                      <div className="flex-1 w-full">
                        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
                          <Upload size={16} />
                          Upload Image
                        </button>
                        <p className="text-[10px] text-gray-500 mt-1.5 text-center">
                          Supported: <strong>jpeg, jpg.</strong> Resized to 350x350px
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        <Mail size={12} className="text-gray-400" />
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        <Home size={12} className="text-gray-400" />
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                        placeholder="Enter your address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                          <MapPin size={12} className="text-gray-400" />
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          placeholder="Enter state"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                          placeholder="Enter zip code"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-pink focus:border-transparent transition-all"
                        placeholder="Enter city"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-pink to-pink-600 hover:from-pink-600 hover:to-primary-pink text-white py-2.5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg mt-4"
                    >
                      Save Changes
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

export default Profile;
