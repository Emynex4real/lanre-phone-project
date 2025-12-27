import { motion } from 'framer-motion';
import { Smartphone, Users, Code, CheckCircle, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceCard = ({ icon: Icon, title, desc, features, price, popular, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className={`relative p-8 rounded-2xl border transition-all ${
      popular 
        ? 'bg-gradient-to-b from-primary-pink/20 to-primary-pink/20 border-primary-pink/50' 
        : 'bg-background-white border border-gray-200 hover:border-primary-pink/30'
    }`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-primary-pink text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <Star size={14} />
          Most Popular
        </div>
      </div>
    )}
    
    <div className="w-16 h-16 rounded-lg bg-primary-pink/20 flex items-center justify-center mb-6">
      <Icon className="text-primary-pink" size={32} />
    </div>
    
    <h3 className="text-2xl font-bold text-text-dark mb-2">{title}</h3>
    <div className="text-3xl font-bold text-primary-pink mb-4">{price}</div>
    <p className="text-text-light mb-6">{desc}</p>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-text-dark">
          <CheckCircle size={16} className="text-primary-green flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-3 rounded-lg font-bold transition ${
      popular
        ? 'bg-primary-pink text-white hover:bg-primary-pink/90'
        : 'bg-gray-200 text-text-dark hover:bg-gray-300'
    }`}>
      Get Started
    </button>
  </motion.div>
);

const PlatformCard = ({ name, logo, countries, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="p-6 rounded-xl bg-background-white border border-gray-200 hover:border-primary-pink transition-all text-center"
  >
    <div className="w-16 h-16 rounded-lg bg-background-light flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">{logo}</span>
    </div>
    <h3 className="text-lg font-bold text-text-dark mb-2">{name}</h3>
    <p className="text-text-light text-sm">{countries} countries</p>
  </motion.div>
);

const OtherServices = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Basic SMS",
      price: "$0.10/SMS",
      desc: "Perfect for individual users who need occasional SMS verification.",
      features: [
        "Access to 20+ countries",
        "Standard delivery speed",
        "Basic support",
        "Pay-per-use pricing",
        "No monthly commitment"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Pro Package",
      price: "$29/month",
      desc: "Ideal for businesses and power users who need regular verification services.",
      features: [
        "Access to 50+ countries",
        "Priority delivery",
        "24/7 support",
        "500 SMS credits included",
        "API access",
        "Bulk operations"
      ],
      popular: true
    },
    {
      icon: Code,
      title: "Developer API",
      price: "$99/month",
      desc: "Full API access for developers and enterprises building verification systems.",
      features: [
        "Unlimited API calls",
        "All countries available",
        "Webhook support",
        "Custom integrations",
        "Priority support",
        "SLA guarantee",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "WhatsApp", logo: "📱", countries: "50+" },
    { name: "Telegram", logo: "✈️", countries: "45+" },
    { name: "Instagram", logo: "📷", countries: "40+" },
    { name: "Facebook", logo: "👥", countries: "50+" },
    { name: "Twitter", logo: "🐦", countries: "35+" },
    { name: "TikTok", logo: "🎵", countries: "30+" },
    { name: "Discord", logo: "🎮", countries: "25+" },
    { name: "LinkedIn", logo: "💼", countries: "40+" },
    { name: "Snapchat", logo: "👻", countries: "20+" },
    { name: "Google", logo: "🔍", countries: "50+" },
    { name: "Microsoft", logo: "🪟", countries: "45+" },
    { name: "Amazon", logo: "📦", countries: "35+" }
  ];

  const countries = [
    "🇺🇸 United States", "🇬🇧 United Kingdom", "🇨🇦 Canada", "🇳🇬 Nigeria",
    "🇩🇪 Germany", "🇫🇷 France", "🇮🇹 Italy", "🇪🇸 Spain",
    "🇦🇺 Australia", "🇯🇵 Japan", "🇰🇷 South Korea", "🇮🇳 India",
    "🇧🇷 Brazil", "🇲🇽 Mexico", "🇷🇺 Russia", "🇨🇳 China"
  ];

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
            Other <span className="text-primary-pink">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-light max-w-3xl mx-auto"
          >
            Choose the perfect plan for your SMS verification needs. From individual use to enterprise solutions.
          </motion.p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Choose Your Plan</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Flexible pricing options to suit every need, from casual users to enterprise clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Supported Platforms */}
      <div className="py-24 bg-background-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Supported Platforms</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              We support verification for all major platforms and services worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platforms.map((platform, i) => (
              <PlatformCard key={i} {...platform} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>

      {/* Available Countries */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Global Coverage</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Virtual numbers available from over 50 countries worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-background-white border border-gray-200 text-center hover:border-primary-pink transition-all"
              >
                <span className="text-text-dark">{country}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-text-light">And many more countries available...</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-pink to-primary-pink rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Choose your plan and start verifying accounts instantly with our reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-pink px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary-pink transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OtherServices;
