import React, {useState} from 'react';
import { useAuth } from '../component/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/Navbar.css';
import axios from "axios";

const Navbar = () => {
    const {authState, logout} = useAuth(); // Destructure logout function from AuthContext
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const refreshToken = localStorage.getItem('refresh_token');
    const accessToken = localStorage.getItem('access_token');

    const handleLogout = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        console.log(refreshToken.toString());
        console.log(accessToken.toString());

        try {
            const response = await axios.post('http://localhost:8000/api/logout/', {
                refresh_token: refreshToken,
            });
            setSuccess(response.data.message);
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('access_token');
            logout(); // Call logout function to clear authentication state
            navigate('/'); // Redirect user to the login page
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || 'An error occurred.');
            } else if (error.request) {
                setError('No response from server.');
            } else {
                setError('An error occurred on settings');
            }
        }
    };
    return (
        <div className="navbar">
            <div className="navbar-content">
                {authState.isAuthenticated && (
                    <div className="navbar-auth">
                        <span className="navbar-empNo">{authState.username}님 환영합니다</span>
                        <button onClick={handleLogout} className="logout-button">로그아웃</button>
                        {error && <span className="logout-error">{error}</span>}
                        {success && <span className="logout-success">{success}</span>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
