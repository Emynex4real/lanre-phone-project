import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import OtherServices from './pages/OtherServices';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Dashboard from './pages/Dashboard';
import OrderSocialServices from './pages/OrderSocialServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/other-services" element={<OtherServices />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order-social-services" element={<OrderSocialServices />} />
      </Routes>
    </Router>
  );
}

export default App;