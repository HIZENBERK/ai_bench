import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/Login.css';  // CSS 파일 경로
import { useAuth } from '../component/AuthContext'; // Import the context

const Login = () => {
    const [empNo, setEmpNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Use the login function from context

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (empNo && password) {
            try {
                const response = await axios.post('http://localhost:8000/api/login/', {
                    empNo,
                    password,
                });
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                login( response.data.empNo,response.data.username,response.data.job,response.data.position); // Update the auth state with the employee number
                setSuccess(`Logged in successfully! Welcome ${response.data.username}`);
                navigate('/main');
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.error || 'An error occurred.');
                } else if (error.request) {
                    setError('No response from server.');
                } else {
                    setError('An error occurred on settings');
                }
            }
            console.log()
        } else {
            alert('사번과 비밀번호를 입력하세요.');
        }
    };

    const handleSignupNavigation = () => {
        navigate('/signup');
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>로그인</h2>
                <form onSubmit={handleLogin}>
                    <div className="login-form-group">
                        <input
                            placeholder="사번"
                            type="text"
                            value={empNo}
                            className="login-input"
                            onChange={(e) => setEmpNo(e.target.value)}
                        />
                    </div>
                    <div className="login-form-group">
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            className="login-input"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                </form>
                {error && <div className="login-error">{error}</div>}
                {success && <div className="login-success">{success}</div>}
                <button onClick={handleSignupNavigation} className="signup-button">회원가입</button>
            </div>
        </div>
    );
};

export default Login;
