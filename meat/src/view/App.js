import React from 'react';
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
import OtherCostsPage from "./OtherCostsPage";
import OthersAddproductPage from "./OthersAddproductPage";
import PurchaseDetailsPage from "./PurchaseDetailsPage";
import Signup from "./Signup";
import { AuthProvider } from '../component/AuthContext';
import Navbar from './Navbar';
//import PrivateRoute from '../component/PrivateRoute';
import AccessDeniedPage from './AccessDeniedPage';

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
                        <Route path="/access-denied" element={<AccessDeniedPage />} />

                        <Route path="raw-material/procurement" element={<ProcurementPage />} />
                        
                        
                        {/* 기본. 접근제한 없음 */}
                        <Route path="raw-material/incoming" element={<IncomingPage />} />

                        {/* 1번 접근제한 */}
                        {/* <Route element={<PrivateRoute allowedJobs={['WM']} allowedPositions={['M']} />}>
                        <Route path="raw-material/incoming" element={<IncomingPage />} />
                        </Route> */}

                        {/* 2번 접근제한 */}
                        {/* <Route
                            path="/raw-material/incoming"
                            element={
                                <PrivateRoute
                                    allowedJobs={['WM']}
                                    allowedPositions={['U']}
                                    element={<IncomingPage />}
                                />
                            }
                        /> */}

                        <Route path="raw-material/processing" element={<ProcessingPage />} />
                        <Route path="product/register" element={<ProductregisterPage />} />
                        <Route path="product/inventory" element={<ProductInventoryPage />} />
                        <Route path="order/register" element={<RegisterPage />} />
                        <Route path="order/work-order" element={<WorkOderPage />} />
                        <Route path="order/accident" element={<DeliveryaccidentPage />} />
                        <Route path="settlement/money" element={<SettlementMoneyPage />} />
                        <Route path="settlement/purchase" element={<PurchaseDetailsPage />} />
                        <Route path="settlement/details" element={<SettlementSalesPage />} />
                        <Route path="settlement/sales" element={<PurchaseDetailsPage />} />
                        <Route path="others/addproduct" element={<OthersAddproductPage />} />
                        <Route path="others/costs" element={<OtherCostsPage />} />
                        <Route path="others/customer" element={<OthersCustomerPage />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
