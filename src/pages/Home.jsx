import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, Shield, TrendingUp, Zap, Globe, MessageSquare, 
  ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background-light text-text-dark font-sans selection:bg-primary-blue selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-pink/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-primary-pink/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-2 px-4 rounded-full bg-primary-pink/10 border border-primary-pink/20 text-primary-pink text-sm font-semibold mb-6">
              🚀 Trusted by 10,000+ users worldwide
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-dark tracking-tight leading-tight mb-8">
              Boost Your Social Media <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-primary-pink/80">
                Growth & Engagement
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-text-light mb-10">
              Get real followers, likes, views, and comments for Instagram, TikTok, YouTube, Twitter, and more. 
              Instant delivery, affordable prices, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-started" className="bg-primary-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-pink/90 transition-all flex items-center gap-2 shadow-lg">
                Start Growing Now <ChevronRight size={20} />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg text-primary-pink border-2 border-primary-pink hover:bg-primary-pink hover:text-white transition-all backdrop-blur-sm">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Mini Feature Grid */}
      <div className="bg-white py-20 border-t border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Delivery", desc: "Orders start within minutes, results delivered fast." },
              { icon: TrendingUp, title: "Real Growth", desc: "High-quality followers, likes, and views from real accounts." },
              { icon: Shield, title: "Safe & Secure", desc: "100% secure payment and account protection guaranteed." }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-background-light rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <f.icon className="text-primary-pink mb-4" size={32} />
                <h3 className="text-xl font-bold text-text-dark">{f.title}</h3>
                <p className="text-text-light mt-2">{f.desc}</p>
              </motion.div>
            ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary-pink to-primary-pink/90 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Skyrocket Your Online Presence?</h2>
           <p className="text-white/90 mb-8 max-w-2xl mx-auto relative z-10">Join thousands of influencers and marketers who trust Uchenzylogs for their social media growth.</p>
           <Link 
             to="/get-started"
             className="bg-white text-primary-pink px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg relative z-10 inline-block"
           >
             Create Free Account
           </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;