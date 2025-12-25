import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingCard = ({ title, price, features, popular, buttonText, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className={`relative p-6 rounded-xl border transition-all ${
      popular 
        ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500/50 scale-105' 
        : 'bg-slate-800/40 border-white/5 hover:border-blue-500/30'
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} />
          Most Popular
        </div>
      </div>
    )}
    
    <div className="text-center">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="text-2xl font-bold text-blue-400 mb-4">{price}</div>
      
      <ul className="space-y-2 mb-6 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-2 rounded-lg font-medium transition ${
        popular
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-slate-700 text-white hover:bg-slate-600'
      }`}>
        {buttonText}
      </button>
    </div>
  </motion.div>
);

const GetStarted = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    newsletter: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const pricingPlans = [
    {
      title: "Starter",
      price: "Free",
      features: [
        "5 SMS credits",
        "Basic countries",
        "Email support",
        "Standard delivery"
      ],
      popular: false,
      buttonText: "Start Free"
    },
    {
      title: "Pro",
      price: "$29/month",
      features: [
        "500 SMS credits",
        "All 50+ countries",
        "Priority support",
        "Fast delivery",
        "API access"
      ],
      popular: true,
      buttonText: "Choose Pro"
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited SMS",
        "Custom integration",
        "Dedicated support",
        "SLA guarantee",
        "Advanced analytics"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get <span className="text-blue-500">Started</span> Today
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Create your account and start verifying accounts instantly. Choose the plan that fits your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-slate-800/40 p-8 rounded-2xl border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500 mt-1"
                        required
                      />
                      <span className="text-sm text-gray-300">
                        I agree to the{' '}
                        <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>
                        {' '}and{' '}
                        <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
                      </span>
                    </label>
                    
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-300">
                        Subscribe to our newsletter for updates and tips
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    Create Account
                    <ArrowRight size={20} />
                  </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 transition font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pricing Plans */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Choose Your Plan</h2>
              <div className="space-y-4">
                {pricingPlans.map((plan, i) => (
                  <PricingCard key={i} {...plan} delay={i * 0.1} />
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-8 p-6 bg-green-600/10 border border-green-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-4">Why Choose Uchenzylogs?</h3>
                <ul className="space-y-2 text-sm text-green-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    Instant SMS delivery (avg. 10 seconds)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    50+ countries available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    24/7 customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    No setup fees or hidden costs
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetStarted;