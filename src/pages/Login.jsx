import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-background-light text-text-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome <span className="text-primary-pink">Back</span>
            </h1>
            <p className="text-text-light">
              Sign in to your account to continue using our services
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-background-white p-8 rounded-2xl border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background-light border border-gray-300 rounded-lg text-text-dark placeholder-text-light focus:outline-none focus:border-primary-pink transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-background-light border border-gray-300 rounded-lg text-text-dark placeholder-text-light focus:outline-none focus:border-primary-pink transition"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light hover:text-text-dark transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-text-dark">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-primary-pink hover:text-primary-pink/80 transition">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary-pink text-white py-3 rounded-lg font-bold hover:bg-primary-pink/90 transition flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight size={20} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-text-light text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full bg-background-light border border-gray-300 text-text-dark py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-3">
                <span className="text-xl">🔍</span>
                Continue with Google
              </button>
              <button className="w-full bg-background-light border border-gray-300 text-text-dark py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-3">
                <span className="text-xl">📘</span>
                Continue with Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-text-light">
                Don't have an account?{' '}
                <Link to="/get-started" className="text-primary-pink hover:text-primary-pink/80 transition font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Security Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-4 bg-primary-pink/10 border border-primary-pink/20 rounded-lg"
          >
            <p className="text-sm text-primary-pink text-center">
              🔒 Your data is protected with enterprise-grade security
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;