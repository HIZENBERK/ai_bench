import React, { useState } from 'react';
import axios from "axios";
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [job, setJob] = useState('OM');
    const [position, setPosition] = useState('U');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8000/api/signup/', {
                username,
                Job: job,
                Position: position
            });

            setSuccess(`가입이 완료되었습니다! 사원번호는 ${response.data.empNo}. 비밀번호는 ${response.data.password}. 분실 시 확인이 어렵습니다`);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || 'An error occurred.');
            } else if (error.request) {
                setError('No response from server.');
            } else {
                setError('An error occurred.');
            }
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <h2>회원 가입</h2>
                <form onSubmit={handleSignup}>
                    <div className="signup-form-group">
                        <label className="signup-label">Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="signup-input"
                        />
                    </div>
                    <div className="signup-form-group">
                        <label className="signup-label">Job:</label>
                        <select value={job} onChange={(e) => setJob(e.target.value)} required className="signup-input">
                            <option value="OM">주문담당자</option>
                            <option value="DM">해체담당자</option>
                            <option value="WM">입고담당자</option>
                        </select>
                    </div>
                    <div className="signup-form-group">
                        <label className="signup-label">Position:</label>
                        <select value={position} onChange={(e) => setPosition(e.target.value)} required className="signup-input">
                            <option value="A">관리자</option>
                            <option value="M">매니저</option>
                            <option value="U">사용자</option>
                        </select>
                    </div>
                    <button type="submit" className="signup-button">회원 가입</button>
                </form>
                {error && <div className="signup-error">{error}</div>}
                {success && <div className="signup-success">{success}</div>}
            </div>
        </div>
    );
};

export default Signup;