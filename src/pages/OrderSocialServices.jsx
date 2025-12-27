import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import { 
  Smartphone, Search, Copy, X, Plus,
  MoreHorizontal, Download, RefreshCw,
  Activity, Clock, CheckCircle
} from 'lucide-react';

const SERVICES = [
  { id: 'whatsapp', name: 'WhatsApp', price: 0.50, stock: 15420, icon: '🟢', category: 'Social', success_rate: 98.5 },
  { id: 'telegram', name: 'Telegram', price: 0.45, stock: 12301, icon: '🔵', category: 'Social', success_rate: 99.2 },
  { id: 'instagram', name: 'Instagram', price: 0.35, stock: 8900, icon: '🟣', category: 'Social', success_rate: 97.8 },
  { id: 'facebook', name: 'Facebook', price: 0.30, stock: 12000, icon: '🔵', category: 'Social', success_rate: 96.5 },
  { id: 'twitter', name: 'Twitter / X', price: 0.40, stock: 5400, icon: '⚫', category: 'Social', success_rate: 95.2 },
  { id: 'google', name: 'Google', price: 0.60, stock: 6100, icon: '🔴', category: 'Tech', success_rate: 99.8 },
  { id: 'microsoft', name: 'Microsoft', price: 0.55, stock: 4200, icon: '🔵', category: 'Tech', success_rate: 99.1 },
  { id: 'amazon', name: 'Amazon', price: 0.65, stock: 3100, icon: '🟠', category: 'Commerce', success_rate: 98.9 },
  { id: 'tiktok', name: 'TikTok', price: 0.25, stock: 7800, icon: '⚫', category: 'Social', success_rate: 94.3 },
  { id: 'discord', name: 'Discord', price: 0.20, stock: 9200, icon: '🟣', category: 'Gaming', success_rate: 97.1 },
];

const COUNTRIES = [
  { id: 'us', name: 'United States', code: '+1', flag: '🇺🇸', premium: true, reliability: 99.5 },
  { id: 'uk', name: 'United Kingdom', code: '+44', flag: '🇬🇧', premium: true, reliability: 99.2 },
  { id: 'ca', name: 'Canada', code: '+1', flag: '🇨🇦', premium: true, reliability: 98.8 },
  { id: 'de', name: 'Germany', code: '+49', flag: '🇩🇪', premium: true, reliability: 99.1 },
  { id: 'fr', name: 'France', code: '+33', flag: '🇫🇷', premium: true, reliability: 98.9 },
  { id: 'ng', name: 'Nigeria', code: '+234', flag: '🇳🇬', premium: false, reliability: 96.5 },
  { id: 'in', name: 'India', code: '+91', flag: '🇮🇳', premium: false, reliability: 95.8 },
  { id: 'id', name: 'Indonesia', code: '+62', flag: '🇮🇩', premium: false, reliability: 94.2 },
];

const STATS = [
  { label: 'Total Orders', value: '2,847', change: '+12.5%', trend: 'up', icon: Activity },
  { label: 'Success Rate', value: '98.2%', change: '+0.8%', trend: 'up', icon: CheckCircle },
  { label: 'Avg. Delivery', value: '8.3s', change: '-1.2s', trend: 'up', icon: Clock },
  { label: 'Active Numbers', value: '156', change: '+23', trend: 'up', icon: Smartphone },
];

const StatCard = ({ stat }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        <div className="flex items-center mt-2">
          <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {stat.change}
          </span>
          <span className="text-gray-500 text-sm ml-1">vs last month</span>
        </div>
      </div>
      <div className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
        <stat.icon className={`w-6 h-6 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
      </div>
    </div>
  </div>
);

const ServiceCard = ({ service, isSelected, onClick }) => (
  <div 
    onClick={onClick}
    className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
      isSelected ? 'border-primary-pink bg-primary-pink/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'
    }`}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{service.icon}</span>
        <div>
          <h3 className="font-semibold text-gray-900">{service.name}</h3>
          <p className="text-xs text-gray-500">{service.category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-900">${service.price}</p>
        <p className="text-xs text-green-600">{service.success_rate}%</p>
      </div>
    </div>
    <div className="flex items-center justify-between text-xs text-gray-500">
      <span>{service.stock.toLocaleString()} available</span>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Active</span>
      </div>
    </div>
  </div>
);

const CountryCard = ({ country, isSelected, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-lg border transition-all text-left w-full ${
      isSelected ? 'border-primary-pink bg-primary-pink/5' : 'border-gray-200 bg-white hover:border-gray-300'
    }`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg">{country.flag}</span>
        <div>
          <p className="font-medium text-gray-900 text-sm">{country.name}</p>
          <p className="text-xs text-gray-500">{country.code}</p>
        </div>
      </div>
      <div className="text-right">
        {country.premium && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Premium</span>}
        <p className="text-xs text-gray-500 mt-1">{country.reliability}%</p>
      </div>
    </div>
  </button>
);

const OrderCard = ({ order }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{order.service.icon}</span>
        <div>
          <h3 className="font-semibold text-gray-900">{order.service.name}</h3>
          <p className="text-sm text-gray-500">{order.country.flag} {order.country.name} • #{order.id}</p>
        </div>
      </div>
      <button className="p-2 text-gray-400 hover:text-gray-600">
        <MoreHorizontal size={16} />
      </button>
    </div>

    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-lg text-gray-900">{order.number}</span>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-md transition-colors">
          <Copy size={16} />
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {order.status === 'waiting' ? (
          <>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-600 font-medium">Waiting for SMS</span>
          </>
        ) : (
          <>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 font-medium">Code Received</span>
          </>
        )}
      </div>
      {order.code && (
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono font-bold">
          {order.code}
        </div>
      )}
    </div>
  </div>
);

const OrderSocialServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeOrders, setActiveOrders] = useState([]);
  const [searchService, setSearchService] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  
  const filteredServices = SERVICES.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchService.toLowerCase());
    const matchesCategory = filterCategory === 'all' || s.category.toLowerCase() === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(SERVICES.map(s => s.category.toLowerCase()))];

  const handleBuy = () => {
    if (!selectedService || !selectedCountry) return;
    
    const newOrder = {
      id: Math.floor(Math.random() * 100000),
      service: selectedService,
      country: selectedCountry,
      number: `${selectedCountry.code} ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000}`,
      code: null,
      status: 'waiting',
      timestamp: new Date(),
    };

    setActiveOrders([newOrder, ...activeOrders]);
    
    setTimeout(() => {
      setActiveOrders(currentOrders => 
        currentOrders.map(order => 
          order.id === newOrder.id ? { ...order, code: Math.floor(Math.random() * 900000) + 100000, status: 'received' } : order
        )
      );
    }, Math.random() * 8000 + 3000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        <DashboardHeader title="Order Social Services" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {STATS.map((stat, i) => <StatCard key={i} stat={stat} />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Service</h2>
                
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search services..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-pink focus:border-transparent"
                      value={searchService}
                      onChange={(e) => setSearchService(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-2 mb-4 overflow-x-auto">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                        filterCategory === cat ? 'bg-primary-pink text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>

                {!selectedService ? (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredServices.map(service => (
                      <ServiceCard 
                        key={service.id}
                        service={service}
                        isSelected={false}
                        onClick={() => setSelectedService(service)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary-pink/10 border border-primary-pink/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{selectedService.icon}</span>
                        <div>
                          <div className="font-medium text-gray-900">{selectedService.name}</div>
                          <div className="text-sm text-gray-500">{selectedService.category}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedService(null);
                          setSelectedCountry(null);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Country</h3>
                      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                        {COUNTRIES.map(country => (
                          <CountryCard 
                            key={country.id}
                            country={country}
                            isSelected={selectedCountry?.id === country.id}
                            onClick={() => setSelectedCountry(country)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedService && selectedCountry && (
                  <button 
                    onClick={handleBuy}
                    className="w-full mt-6 bg-primary-pink text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-pink/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={18} />
                    Purchase Number (${selectedService.price})
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Active Orders</h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <RefreshCw size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download size={16} />
                    </button>
                  </div>
                </div>

                {activeOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No active orders</h3>
                    <p className="text-gray-500">Select a service and country to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <AnimatePresence>
                      {activeOrders.map(order => (
                        <motion.div 
                          key={order.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <OrderCard order={order} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderSocialServices;
