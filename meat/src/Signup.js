// src/Login.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";



const Signup = () => {
    const [username, setUsername] = useState('');
    const [job, setJob] = useState('OM'); // 기본값 설정
    const [position, setPosition] = useState('U'); // 기본값 설정
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const navigate = useNavigate();

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
            // navigate('/Login');  // 회원가입 성공 시 /Login 경로로 이동
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
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Job:</label>
                    <select value={job} onChange={(e) => setJob(e.target.value)} required>
                        <option value="OM">주문담당자</option>
                        <option value="DM">해체담당자</option>
                        <option value="WM">입고담당자</option>
                    </select>
                </div>
                <div>
                    <label>Position:</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)} required>
                        <option value="A">관리자</option>
                        <option value="M">매니저</option>
                        <option value="U">사용자</option>
                    </select>
                </div>
                <button type="submit">회원 가입</button>
            </form>
            {error && <div style={{color: 'red'}}>{error}</div>}
            {success && <div style={{color: 'green'}}>{success}</div>}
        </div>
    );
};

export default Signup;
