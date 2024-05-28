// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const Login = () => {
    const [empNo, setEmpNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleLogin =  async (e) => {
        // 로그인 로직을 여기에 추가할 수 있습니다.
        // 예: API 요청을 통해 사번과 비밀번호를 확인
        e.preventDefault();
        setError('');
        setSuccess('');
        if (empNo && password) {
            try {
                const response = await axios.post('http://localhost:8000/api/login/', {
                    empNo,
                    password
                });

                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                setSuccess(`Logged in successfully! Welcome ${response.data.username}`);
                navigate('/main')
            } catch (error) {
                if (error.response) {
                    // 서버가 4xx 혹은 5xx 응답을 보냈을 경우
                    setError(error.response.data.error || 'An error occurred.');
                } else if (error.request) {
                    // 요청이 전송되었으나 응답이 없을 경우
                    setError('No response from server.');
                } else {
                    // 요청 설정 중에 문제가 발생한 경우
                    setError('An error occurred on settings');
                }
            }
        } else {
            alert('사번과 비밀번호를 입력하세요.');
        }
    };
    const handleSignupNavigation = () => {
        navigate('/signup');
    };
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        placeholder="사번"
                        type="text"
                        value={empNo}
                        style={{padding: '10px', margin: '10px', width: '200px'}}
                        onChange={(e) => setEmpNo(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        style={{padding: '10px', margin: '10px', width: '200px'}}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" style={{padding: '10px 20px'}}>로그인</button>
            </form>
            {error && <div style={{color: 'red'}}>{error}</div>}
            {success && <div style={{color: 'green'}}>{success}</div>}
            <button onClick={handleSignupNavigation}>회원가입</button>
        </div>
    );
};

export default Login;
