// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // 로그인 로직을 여기에 추가할 수 있습니다.
        // 예: API 요청을 통해 사번과 비밀번호를 확인

        // 여기서는 단순히 메인 페이지로 이동하는 예시를 보여드립니다.
        if (employeeId && password) {
            navigate('/main');
        } else {
            alert('사번과 비밀번호를 입력하세요.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>로그인</h2>
            <div>
                <input
                    type="text"
                    placeholder="사번"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    style={{ padding: '10px', margin: '10px', width: '200px' }}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', margin: '10px', width: '200px' }}
                />
            </div>
            <div>
                <button onClick={handleLogin} style={{ padding: '10px 20px' }}>로그인</button>
            </div>
        </div>
    );
};

export default Login;
