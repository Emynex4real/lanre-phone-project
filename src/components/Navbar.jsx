import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-text-dark">
            account<span className="text-primary-pink">booster</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-text-light hover:text-primary-pink transition">Features</Link>
            <Link to="/services" className="text-text-light hover:text-primary-pink transition">Services</Link>
            <Link to="/other-services" className="text-text-light hover:text-primary-pink transition">Other Services</Link>
            <Link to="/how-it-works" className="text-text-light hover:text-primary-pink transition">How It Works</Link>
            <Link to="/login" className="text-text-light hover:text-primary-pink transition">Login</Link>
            <Link to="/get-started" className="bg-primary-pink text-white px-4 py-2 rounded-lg hover:bg-primary-pink/90 transition">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/features" className="block text-text-light hover:text-primary-pink transition">Features</Link>
            <Link to="/services" className="block text-text-light hover:text-primary-pink transition">Services</Link>
            <Link to="/other-services" className="block text-text-light hover:text-primary-pink transition">Other Services</Link>
            <Link to="/how-it-works" className="block text-text-light hover:text-primary-pink transition">How It Works</Link>
            <Link to="/login" className="block text-text-light hover:text-primary-pink transition">Login</Link>
            <Link to="/get-started" className="block bg-primary-pink text-white px-4 py-2 rounded-lg hover:bg-primary-pink/90 transition w-fit">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;