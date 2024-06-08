import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./Login";
import Menu from "./Menu";
import Main from "./Main";
import ProcurementPage from "./ProcurementPage";
import IncomingPage from "./IncomingPage";
import ProcessingPage from "./ProcessingPage";
import RegisterPage from "./RegisterPage";
import ProductregisterPage from "./ProductregisterPage";
import ProductInventoryPage from "./ProductInventoryPage";
import WorkOderPage from "./WorkOderPage";
import SettlementMoneyPage from "./SettlementMoneyPage";
import SettlementSalesPage from "./SettlementSalesPage";
import OthersCustomerPage from "./OthersCustomerPage";
import DeliveryaccidentPage from "./DeliveryaccidentPage";
import OthersProductPage from "./OthersProductPage";
import Signup from "./Signup";
import { AuthProvider } from '../component/AuthContext';
import Navbar from './Navbar';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Menu />}>
                        <Route path="main" element={<Main />} />
                        <Route path="raw-material/procurement" element={<ProcurementPage />} />
                        <Route path="raw-material/incoming" element={<IncomingPage />} />
                        <Route path="raw-material/processing" element={<ProcessingPage />} />
                        <Route path="product/register" element={<ProductregisterPage />} />
                        <Route path="product/inventory" element={<ProductInventoryPage />} />
                        <Route path="order/register" element={<RegisterPage />} />
                        <Route path="order/work-order" element={<WorkOderPage />} />
                        <Route path="order/accident" element={<DeliveryaccidentPage />} />
                        <Route path="/settlement/money" element={<SettlementMoneyPage />} />
                        <Route path="/settlement/purchase" element={<SettlementSalesPage />} />
                        <Route path="settlement/sales" element={<SettlementSalesPage />} />
                        <Route path="others/customer" element={<OthersCustomerPage />} />
                        <Route path="others/product" element={<OthersProductPage />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
