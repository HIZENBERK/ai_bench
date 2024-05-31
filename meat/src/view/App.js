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
                    <Route path="order/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
