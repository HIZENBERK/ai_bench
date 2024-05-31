import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./Login";
import Menu from "./Menu";
import Main from "./Main"
import ProcurementPage from "./ProcurementPage";
import IncomingPage from "./IncomingPage";
import ProcessingPage from "./ProcessingPage";
import RegisterPage from "./RegisterPage";
import ProductregisterPage from "./ProductregisterPage";
import ProductInventoryPage from "./ProductInventoryPage";
import WorkOderPage from "./WorkOderPage";
import SettlementSalesPage from "./SettlementSalesPage";
import OthersCustomerPage from "./OthersCustomerPage";
import OthersProductPage from './OthersProductPage';
import OthersAddproductPage from './OthersAddproductPage';
import OthersAddbusinesspartnerPage from './OthersAddbusinesspartnerPage';
import Signup from "./Signup";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<Menu />}>
                    <Route path="main" element={<Main />} />
                    <Route path="raw-material/procurement" element={<ProcurementPage />} />
                    <Route path="raw-material/incoming" element={<IncomingPage />} />
                    <Route path="raw-material/processing" element={<ProcessingPage />} />
                    <Route path="product/register" element={<ProductregisterPage />} />
                    <Route path="product/inventory" element={<ProductInventoryPage />} />
                    <Route path="order/register" element={<RegisterPage />} />
                    <Route path="order/work-order" element={<WorkOderPage />} />
                    <Route path="settlement/sales" element={<SettlementSalesPage/>} />
                    <Route path="others/customer" element={<OthersCustomerPage />} />
                    <Route path="others/product" element={<OthersProductPage />} />
                    <Route path="others/addproduct" element={<OthersAddproductPage />} />
                    <Route path="others/addbusinesspartner" element={<OthersAddbusinesspartnerPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
