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
import AllOrders from './pages/AllOrders';
import MassOrders from './pages/MassOrders';
import PendingOrders from './pages/PendingOrders';
import ProcessingOrders from './pages/ProcessingOrders';
import CompletedOrders from './pages/CompletedOrders';
import CancelledOrders from './pages/CancelledOrders';
import RefundedOrders from './pages/RefundedOrders';
import ManageDeposit from './pages/ManageDeposit';
import Transactions from './pages/Transactions';
import SupportTicket from './pages/SupportTicket';
import TwoFactorAuth from './pages/TwoFactorAuth';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';

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
        <Route path="/manage-orders/all" element={<AllOrders />} />
        <Route path="/manage-orders/mass" element={<MassOrders />} />
        <Route path="/manage-orders/pending" element={<PendingOrders />} />
        <Route path="/manage-orders/processing" element={<ProcessingOrders />} />
        <Route path="/manage-orders/completed" element={<CompletedOrders />} />
        <Route path="/manage-orders/cancelled" element={<CancelledOrders />} />
        <Route path="/manage-orders/refunded" element={<RefundedOrders />} />
        <Route path="/manage-deposit" element={<ManageDeposit />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/support-ticket" element={<SupportTicket />} />
        <Route path="/2fa-security" element={<TwoFactorAuth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;