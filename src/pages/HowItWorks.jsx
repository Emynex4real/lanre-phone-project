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
      <div className="w-20 h-20 rounded-full bg-primary-pink flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-[0_0_30px_rgba(189,47,102,0.4)]">
        {step}
      </div>
      <div className="w-16 h-16 rounded-lg bg-background-white border border-gray-200 flex items-center justify-center mb-4">
        <Icon className="text-primary-pink" size={24} />
      </div>
      <h3 className="text-xl font-bold text-text-dark mb-3">{title}</h3>
      <p className="text-text-light mb-4">{desc}</p>
      <ul className="text-sm text-gray-500 space-y-1">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={12} className="text-primary-green" />
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
      desc: "Choose the platform and service you want to boost.",
      icon: Search,
      details: [
        "Instagram, TikTok, YouTube & more",
        "Followers, likes, views, comments",
        "Real-time availability check"
      ]
    },
    {
      step: "03",
      title: "Place Order",
      desc: "Enter your details and complete secure payment.",
      icon: Copy,
      details: [
        "Instant order confirmation",
        "Multiple payment options",
        "100% secure checkout"
      ]
    },
    {
      step: "04",
      title: "Watch Growth",
      desc: "See results delivered to your account in real-time.",
      icon: MessageSquare,
      details: [
        "Orders start within minutes",
        "Track progress in dashboard",
        "24/7 customer support"
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Simple 4-Step Process</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Grow your social media accounts in under a minute with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-pink via-primary-pink to-primary-pink z-0"></div>

          {steps.map((step, i) => (
            <StepCard key={i} {...step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoDemo = () => (
  <div className="py-24 bg-gradient-to-br from-primary-pink/5 to-primary-pink/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">See It In Action</h2>
        <p className="text-text-light max-w-2xl mx-auto">
          Watch how easy it is to boost your social media with Uchenzylogs.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="aspect-video bg-white rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-primary-pink/5"></div>
          <button className="relative z-10 w-20 h-20 rounded-full bg-primary-pink/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-pink/30 transition-all group shadow-lg">
            <Play className="text-primary-pink ml-1 group-hover:scale-110 transition-transform" size={32} />
          </button>
          <div className="absolute bottom-4 left-4 text-text-dark">
            <div className="text-sm text-text-light">Demo Video</div>
            <div className="text-lg font-semibold">How to Place Your First Order</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Most orders start within 5-10 minutes. Delivery speed depends on the service, but typically completes within a few hours."
    },
    {
      q: "Are the followers/likes real?",
      a: "Yes, we provide high-quality engagement from real accounts. All services are safe and comply with platform guidelines."
    },
    {
      q: "What happens if I don't receive my order?",
      a: "If your order doesn't complete, you can request a refund or replacement at no extra cost. We offer 24/7 support."
    },
    {
      q: "Which platforms do you support?",
      a: "We support Instagram, TikTok, YouTube, Twitter, Facebook, Vimeo, and many more. Check our services page for the full list."
    },
    {
      q: "Is my account safe?",
      a: "Yes, we never ask for your password. All services are delivered safely without risking your account security."
    },
    {
      q: "Do you offer bulk or reseller services?",
      a: "Yes, we offer bulk packages and reseller programs for agencies and businesses. Contact our sales team for custom pricing."
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-text-light">
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
              className="p-6 rounded-xl bg-background-white border border-gray-200"
            >
              <h3 className="text-lg font-bold text-text-dark mb-3">{faq.q}</h3>
              <p className="text-text-light">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
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
            How It <span className="text-primary-pink">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-light max-w-3xl mx-auto"
          >
            Boost your social media presence in minutes with our simple process. Get followers, likes, views, and more.
          </motion.p>
        </div>
      </div>

      <ProcessFlow />
      <VideoDemo />
      <FAQ />

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-pink to-primary-pink/90 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Ready to Try It Yourself?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
            Join thousands of users who trust our platform for fast and reliable social media growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-primary-pink px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2 justify-center shadow-lg">
              Get Started Now
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary-pink transition">
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