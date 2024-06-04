import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/Navbar.css';

const Navbar = () => {
    const { authState, logout } = useAuth(); // Destructure logout function from AuthContext
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogout = () => {
        logout(); // Call logout function to clear authentication state
        navigate('/'); // Redirect user to the login page
    };

    return (
        <div className="navbar">
            <div className="navbar-content">
                {authState.isAuthenticated && (
                    <div className="navbar-auth">
                        <span className="navbar-empNo">{authState.empNo}님 환영합니다</span>
                        <button onClick={handleLogout} className="logout-button">로그아웃</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
