import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">uchenzy<span className="text-blue-500">logs</span></div>
            <p className="text-gray-400 max-w-sm">
              The #1 platform for virtual SMS verification and social media growth. 
              Secure, fast, and reliable.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-blue-400">Virtual Numbers</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Social Boost</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">API Access</Link></li>
              <li><Link to="/get-started" className="hover:text-blue-400">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Uchenzylogs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;