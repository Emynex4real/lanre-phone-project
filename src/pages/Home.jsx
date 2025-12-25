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
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
              🚀 Trusted by 10,000+ users worldwide
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Dominate Social Media with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Instant SMS Verification
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
              Get disposable virtual numbers for WhatsApp, Telegram, Twitter, and more. 
              Instant delivery, privacy protected, and unbeatable growth tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-started" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2">
                Start Verifying Now <ChevronRight size={20} />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Mini Feature Grid */}
      <div className="bg-slate-900 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Codes", desc: "Receive OTPs in less than 10 seconds." },
              { icon: Globe, title: "Global Access", desc: "Numbers from 150+ countries." },
              { icon: Shield, title: "Secure & Private", desc: "Your data is never shared." }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                <f.icon className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
                <p className="text-gray-400 mt-2">{f.desc}</p>
              </div>
            ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Skyrocket Your Online Presence?</h2>
           <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">Join thousands of influencers and marketers who trust Uchenzylogs for their verification needs.</p>
           <Link 
             to="/get-started"
             className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg relative z-10 inline-block"
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