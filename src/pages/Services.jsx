import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, ShoppingCart, Star, Crown, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceTable = ({ title, services, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Section Header */}
      <div className="bg-gradient-to-r from-primary-pink to-primary-pink/80 p-6">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-white" size={24} />}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button className="ml-auto text-white/80 hover:text-white text-sm flex items-center gap-1">
            <Eye size={16} />
            View All
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-primary-pink text-white">
        <div className="grid grid-cols-7 gap-4 p-4 font-bold text-sm">
          <div>Service ID</div>
          <div className="col-span-2">Service</div>
          <div>Price Per 1k</div>
          <div>Min</div>
          <div>Max</div>
          <div>Make Order</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {services.map((service, index) => (
          <div key={service.id} className="grid grid-cols-7 gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-600">{service.id}</div>
            <div className="col-span-2 text-sm text-gray-800">{service.name}</div>
            <div className="text-sm font-bold text-primary-pink">{service.price}</div>
            <div className="text-sm text-gray-600">{service.min.toLocaleString()}</div>
            <div className="text-sm text-gray-600">{service.max.toLocaleString()}</div>
            <div className="flex flex-col gap-1">
              <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded flex items-center justify-center gap-1">
                <Eye size={12} />
                Details
              </button>
              <button className="text-xs bg-primary-pink hover:bg-primary-pink/90 text-white px-3 py-1 rounded flex items-center justify-center gap-1">
                <ShoppingCart size={12} />
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // All services data organized by categories
  const servicesData = {
    "Vimeo": [
      { id: 801, name: "Vimeo Views [100K] [100K/D] [0-2H] ⚡️⚡️⚡️⭐", price: "₦1,980.00", min: 100, max: 10000000 },
      { id: 802, name: "Vimeo HQ Views [50K] [50K/D] [0-1H] [INSTANT] ⚡️⚡️⚡️⭐", price: "₦2,475.00", min: 5000, max: 1000000 },
      { id: 803, name: "Vimeo Followers [1K] [0-1H] ⚡️⭐", price: "₦15,468.75", min: 100, max: 500000 }
    ],
    "♛ INSTAGRAM COMMENTS": [
      { id: 491, name: "Instagram Custom Comments | Max 5K | start time : 0-5 min | speed: 10k/day | non drop | Exclusive service", price: "₦7,722.00", min: 10, max: 10000 },
      { id: 492, name: "Instagram Random Comments | Supper Cheap", price: "₦7,722.00", min: 10, max: 20000 },
      { id: 493, name: "Instagram Comments Likes [Like on comment] [50 - 4K] [slow]", price: "₦17,325.00", min: 20, max: 5000 },
      { id: 494, name: "Instagram Comments [5 - 1K] [Super Fast] [HQ]", price: "₦19,593.75", min: 20, max: 1000 },
      { id: 495, name: "Instagram Comments [Custom]", price: "₦8,250.00", min: 20, max: 1000 },
      { id: 496, name: "Instagram Comments [5 - 800] [High Quality ] [Fast] ⭐", price: "₦26,812.50", min: 5, max: 1000 },
      { id: 497, name: "Instagram Comments [Emoji]", price: "₦37,125.00", min: 5, max: 1000 }
    ],
    "♛ INSTAGRAM VIEWS": [
      { id: 483, name: "Instagram Views [20 - 300K] Per Day] [INSTANT - FAST]", price: "₦4.29", min: 100, max: 10000000 },
      { id: 484, name: "Instagram Views [10K - Unlimited] [SuperFast 500k/day] [Start 0-6hrs]", price: "₦35.64", min: 100, max: 2147483647 },
      { id: 485, name: "Instagram Views + Reach + Impressions [Video + TV + Reel]", price: "₦7.92", min: 500, max: 5000000 },
      { id: 486, name: "Instagram Views [500 - 2.5M] [Cheapest] [Video+TV+Reel]", price: "₦7.26", min: 100, max: 10000000 },
      { id: 487, name: "Instagram Views + Impressions [RANDOM] [500 - 2.5M]", price: "₦483.12", min: 100, max: 1000000 },
      { id: 488, name: "Instagram Views + Impressions [RANDOM] [PROFILE VISITS] [500 - 2.5M]", price: "₦483.12", min: 100, max: 1000000 },
      { id: 489, name: "Instagram Views [100 - 100K] [Fast] [Recommended]", price: "₦2,392.50", min: 100, max: 100000000 },
      { id: 490, name: "Instagram Views [100 - 60K] [ Superfast - INSTANT]", price: "₦2,392.50", min: 100, max: 100000000 }
    ],
    "♛ INSTAGRAM TV VIEWS | LIKES": [
      { id: 498, name: "Instagram TV Views [200K/Hour]", price: "₦6.60", min: 100, max: 20000000 },
      { id: 499, name: "Instagram TV Views [100 - 1M] [INSTANT - INSTANT]", price: "₦22.77", min: 100, max: 2147483647 },
      { id: 500, name: "Instagram TV Likes | Max: 300K | Mix | Day 50K", price: "₦89.28", min: 10, max: 300000 },
      { id: 501, name: "Instagram TV Likes | 25K | [500-1K/Hour]", price: "₦104.78", min: 10, max: 20000 },
      { id: 502, name: "Instagram TV Likes | 20K | [5-10K/Hour]", price: "₦298.53", min: 20, max: 30000 },
      { id: 503, name: "Instagram TV Likes | 100K | [10-15K/Hour]", price: "₦2,062.50", min: 20, max: 100000 }
    ],
    "⚡️⚡️ PROMOTION [Cheap Services]": [
      { id: 242, name: "Instagram Views [Video+Reels] [Cheap - Supper Fast]", price: "₦3.96", min: 100, max: 2147483647 },
      { id: 243, name: "Instagram Views [Speed 50K/Hour] [10K/Hour] [Working After Update]", price: "₦35.64", min: 100, max: 2147483647 },
      { id: 244, name: "[Emergency] Instagram Views Speed 100K Day | Non Drop |", price: "₦10.56", min: 100, max: 50000000 },
      { id: 245, name: "Instagram Likes Max [100 - 30K ] [Instant - Start ] [Cheapest Likes in Market]", price: "₦569.25", min: 10, max: 1000000 },
      { id: 246, name: "Instagram Likes | 100K/Day | Old Acc | Non Drop", price: "₦62.00", min: 10, max: 10000000 },
      { id: 247, name: "Instagram Likes speed 50k/D | start time : 0-10 min | FAST | NON drop S2", price: "₦546.48", min: 10, max: 100000 },
      { id: 248, name: "Instagram Likes [ 1k/hour] [ No refill - less drop]", price: "₦133.92", min: 10, max: 500000 },
      { id: 249, name: "Instagram Likes [Max 5k] [Instant Start] [Stable likes - HQ ]", price: "₦759.00", min: 10, max: 500000 },
      { id: 250, name: "Instagram Likes [Instant Start Finish] [ Recommended]", price: "₦139.50", min: 10, max: 500000 },
      { id: 251, name: "Instagram Impressions [100 - 1M] [BULK ORDER]", price: "₦206.25", min: 10, max: 15000 }
    ],
    "✮ Twitter Followers": [
      { id: 697, name: "Twitter NFT Followers | Female Profile | Drop rate 0-5% |", price: "₦17,494.95", min: 100, max: 100000 },
      { id: 698, name: "Twitter Followers [Max 250K] ⏰ Instant Daily 50-100K ♻️ R30", price: "₦31,416.00", min: 10, max: 30000 },
      { id: 699, name: "Twitter Real Followers | Max: 500K | Very Low Drop | 30 Days Refill | HQ Accounts", price: "₦21,852.60", min: 100, max: 500000 },
      { id: 700, name: "Twitter Followers | Max: 500K | Very Low Drop | 15 Days Refill | HQ Accounts", price: "₦17,798.55", min: 100, max: 500000 },
      { id: 701, name: "Twitter HQ Real Followers [10K] [500-1K/D - R30] [Natural Increase]", price: "₦42,124.50", min: 10, max: 30000 },
      { id: 702, name: "Twitter Followers [Max 50K] ♻️ R30 - Good Followes - Less drop", price: "₦22,845.90", min: 100, max: 25000 },
      { id: 703, name: "Twitter Followers [Max 100K] ♻️ R30 low drop", price: "₦23,839.20", min: 100, max: 500000 },
      { id: 704, name: "Twitter Real Followers | Max: 500K | 30 Days Refill | SuperInstant | Refill button", price: "₦27,812.40", min: 10, max: 20000 },
      { id: 705, name: "Twitter Followers [5K] [5K/D - R30] [Instant - No Drop] [Owner server]", price: "₦27,812.40", min: 100, max: 20000 }
    ],
    "🎵 TIKTOK VIEWS": [
      { id: 193, name: "Tik Tok Views [3K - 1B] [Unlimited] [No refill]", price: "₦1.65", min: 100, max: 100000000 },
      { id: 194, name: "TikTok Video Views | Max: 100M | Day 10M", price: "₦31.68", min: 100, max: 100000000 },
      { id: 195, name: "TikTok Views | Max: Unlimited | Working | Day 20M", price: "₦8.25", min: 100, max: 2147483647 },
      { id: 196, name: "TikTok Video Views | Max 100M | Instant | Day 50M", price: "₦1.65", min: 100, max: 100000000 },
      { id: 197, name: "Tiktok Views [5M] [Super Fast] [speed 10m daily start 0-2h]", price: "₦8.58", min: 100, max: 10000000 },
      { id: 198, name: "Tik Tok Views [1K - 1M] [Speed 1M/Day] [Always working]", price: "₦67.32", min: 100, max: 50000000 },
      { id: 200, name: "Tiktok Views [10M] [Instant Start ] [50-100K/Hour]", price: "₦118.80", min: 100, max: 1000000000 }
    ],
    "⭕️ YOUTUBE VIEWS [GUARANTEED]": [
      { id: 515, name: "Youtube views Suggested Views | Speed 500 - 2K+/D | 60 Days Guarantee", price: "₦2,884.20", min: 100, max: 1000000 },
      { id: 516, name: "New ⚡️ Youtube Views | 1M | 1-2K/D - R∞ | Instant Start | Non Drop", price: "₦2,994.75", min: 100, max: 1000000 },
      { id: 517, name: "Youtube Views [ 3K-5K day ] [ R365] [Accept Short and Long] [Recommend]", price: "₦3,301.65", min: 100, max: 100000000 },
      { id: 518, name: "Youtube Views [ Native 1k Minimum ] [ speed 30k-50k/day ] [ Start time : 0-10 Minutes ] [ Lifetime ]", price: "₦3,131.04", min: 100, max: 10000000 },
      { id: 519, name: "Youtube Views [300 - 5K] [Lifetime Guaranted] [5~10k/day]", price: "₦3,267.00", min: 100, max: 100000000 },
      { id: 520, name: "YouTube Views | 📤 Source : External + Browse Features | 💧 Non Drop | 🚀 Speed 500 Per Day | ♻️ Lifetime Refill", price: "₦3,564.00", min: 100, max: 10000000 },
      { id: 521, name: "Youtube Views [Bonus Likes] - Speed 5-8K/Day | Lifetime Guarantee [ Recommended#1]", price: "₦3,368.97", min: 100, max: 10000000 }
    ]
  };

  // Filter services based on search term
  const filteredServices = useMemo(() => {
    if (!searchTerm) return servicesData;
    
    const filtered = {};
    Object.entries(servicesData).forEach(([category, services]) => {
      const matchingServices = services.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.id.toString().includes(searchTerm) ||
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingServices.length > 0) {
        filtered[category] = matchingServices;
      }
    });
    return filtered;
  }, [searchTerm, servicesData]);

  const getCategoryIcon = (category) => {
    if (category.includes('INSTAGRAM')) return Star;
    if (category.includes('TWITTER') || category.includes('Twitter')) return Zap;
    if (category.includes('TIKTOK')) return Crown;
    if (category.includes('YOUTUBE')) return Eye;
    return Star;
  };

  return (
    <div className="min-h-screen bg-background-light text-text-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary-pink">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-light max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your SMS verification needs. From individual use to enterprise solutions.
          </motion.p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search all services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary-pink transition shadow-lg"
          />
        </div>
      </div>

      {/* Services Tables */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {Object.entries(filteredServices).map(([category, services]) => (
          <ServiceTable 
            key={category}
            title={category}
            services={services}
            icon={getCategoryIcon(category)}
          />
        ))}
        
        {Object.keys(filteredServices).length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Services;