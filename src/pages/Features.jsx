import { motion } from 'framer-motion';
import { Globe, Zap, Shield, TrendingUp, Smartphone, MessageSquare, Clock, Users, Lock, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeatureCard = ({ icon: Icon, title, desc, features, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-background-white border border-gray-200 hover:border-primary-pink transition-all"
  >
    <div className="w-16 h-16 rounded-lg bg-primary-pink/20 flex items-center justify-center mb-6">
      <Icon className="text-primary-pink" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-text-dark mb-4">{title}</h3>
    <p className="text-text-light mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-text-dark">
          <CheckCircle size={16} className="text-primary-green flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Features = () => {
  const features = [
    { 
      icon: Globe, 
      title: "Global Virtual Numbers", 
      desc: "Access authentic virtual phone numbers from over 50+ countries worldwide for seamless verification.",
      features: [
        "Numbers from USA, UK, Canada, Nigeria, and 50+ more countries",
        "High-quality, non-VoIP numbers for better acceptance rates",
        "Instant number allocation with no waiting time",
        "Support for all major platforms and services"
      ]
    },
    { 
      icon: Zap, 
      title: "Lightning Fast Delivery", 
      desc: "Our automated system ensures you receive OTP codes instantly without any delays.",
      features: [
        "Average delivery time under 10 seconds",
        "Real-time SMS reception and display",
        "Automatic retry system for failed deliveries",
        "24/7 automated service availability"
      ]
    },
    { 
      icon: Shield, 
      title: "Maximum Privacy & Security", 
      desc: "Your identity and data remain completely anonymous and secure with our advanced protection systems.",
      features: [
        "Zero personal data collection or storage",
        "End-to-end encrypted communications",
        "Anonymous account creation options",
        "GDPR compliant data handling"
      ]
    },
    { 
      icon: TrendingUp, 
      title: "Social Media Growth Tools", 
      desc: "Specialized tools and services designed to help you scale your social media presence organically.",
      features: [
        "Multi-platform account verification",
        "Bulk verification services available",
        "Growth analytics and tracking",
        "Safe and compliant growth strategies"
      ]
    },
    { 
      icon: Smartphone, 
      title: "Developer-Friendly API", 
      desc: "Robust REST API that allows developers to integrate SMS verification directly into their applications.",
      features: [
        "RESTful API with comprehensive documentation",
        "Multiple programming language SDKs",
        "Webhook support for real-time notifications",
        "Rate limiting and usage analytics"
      ]
    },
    { 
      icon: MessageSquare, 
      title: "24/7 Expert Support", 
      desc: "Our dedicated support team is available around the clock to assist with any questions or issues.",
      features: [
        "Live chat support available 24/7",
        "Comprehensive knowledge base and tutorials",
        "Priority support for premium users",
        "Multi-language support team"
      ]
    },
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Active Users" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: Clock, number: "<10s", label: "Average Delivery" },
    { icon: Lock, number: "99.9%", label: "Uptime" },
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
            Powerful Features for
            <span className="text-primary-pink"> Modern Verification</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-light max-w-3xl mx-auto"
          >
            Discover why thousands of users trust Uchenzylogs for their SMS verification and social media growth needs.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-pink/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-pink" size={24} />
                </div>
                <div className="text-3xl font-bold text-text-dark mb-2">{stat.number}</div>
                <div className="text-text-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Everything You Need</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Our comprehensive feature set ensures you have all the tools necessary for successful verification and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-pink to-primary-pink rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who rely on our platform for their verification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-pink px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary-pink transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;