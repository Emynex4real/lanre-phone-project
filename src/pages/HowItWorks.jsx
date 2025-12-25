import { motion } from 'framer-motion';
import { UserPlus, Search, Copy, MessageSquare, CheckCircle, ArrowRight, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StepCard = ({ step, title, desc, icon: Icon, details, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
        {step}
      </div>
      <div className="w-16 h-16 rounded-lg bg-slate-800/60 flex items-center justify-center mb-4">
        <Icon className="text-blue-400" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
      <ul className="text-sm text-gray-500 space-y-1">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={12} className="text-green-500" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProcessFlow = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      desc: "Sign up in seconds with just your email address.",
      icon: UserPlus,
      details: [
        "No personal information required",
        "Instant account activation",
        "Secure registration process"
      ]
    },
    {
      step: "02", 
      title: "Select Service",
      desc: "Choose your country and the platform you want to verify.",
      icon: Search,
      details: [
        "50+ countries available",
        "All major platforms supported",
        "Real-time availability check"
      ]
    },
    {
      step: "03",
      title: "Get Number",
      desc: "Receive your virtual number instantly.",
      icon: Copy,
      details: [
        "Instant number allocation",
        "Copy with one click",
        "Number valid for 20 minutes"
      ]
    },
    {
      step: "04",
      title: "Receive SMS",
      desc: "Get your verification code in real-time.",
      icon: MessageSquare,
      details: [
        "Average delivery under 10 seconds",
        "Automatic refresh",
        "Multiple attempts if needed"
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple 4-Step Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get your SMS verification code in under a minute with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 z-0"></div>

          {steps.map((step, i) => (
            <StepCard key={i} {...step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoDemo = () => (
  <div className="py-24 bg-slate-800/30">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See It In Action</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Watch how easy it is to get your verification code with Uchenzylogs.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="aspect-video bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <button className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all group">
            <Play className="text-white ml-1 group-hover:scale-110 transition-transform" size={32} />
          </button>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm opacity-75">Demo Video</div>
            <div className="text-lg font-semibold">How to Get Your First SMS</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      q: "How long does it take to receive an SMS?",
      a: "Most SMS messages are delivered within 10 seconds. In rare cases, it may take up to 2 minutes depending on the carrier."
    },
    {
      q: "What happens if I don't receive the SMS?",
      a: "If you don't receive an SMS within 5 minutes, you can request a refund or try a different number at no extra cost."
    },
    {
      q: "Can I use the same number multiple times?",
      a: "Each number is single-use for security reasons. You'll need to get a new number for each verification."
    },
    {
      q: "Which countries and services do you support?",
      a: "We support over 50 countries and all major platforms including WhatsApp, Telegram, Instagram, Facebook, and many more."
    },
    {
      q: "Is my data safe and private?",
      a: "Yes, we don't store any personal information. All SMS messages are automatically deleted after 24 hours."
    },
    {
      q: "Do you offer bulk services?",
      a: "Yes, we offer bulk verification services for businesses. Contact our sales team for custom pricing."
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Got questions? We've got answers to help you get started quickly.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-800/40 border border-white/5"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            How It <span className="text-blue-500">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Getting your SMS verification code is simple and fast. Follow our easy 4-step process.
          </motion.p>
        </div>
      </div>

      <ProcessFlow />
      <VideoDemo />
      <FAQ />

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try It Yourself?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for fast and reliable SMS verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2 justify-center">
              Get Started Now
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;