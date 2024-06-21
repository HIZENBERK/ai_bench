import React, {useState} from 'react';
import { useAuth } from '../component/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import axios from "axios";

const Navbar = () => {
    const { authState, logout, LogoutSuccess, setLogoutSuccess } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    
    const refreshToken = localStorage.getItem('refresh_token');


    const handleLogout = async () => {
        setError('');
        setLogoutSuccess('');

        try {
            console.log(localStorage.getItem('access_token'));
            const response = await axios.post('http://localhost:8000/api/logout/', { refresh_token: refreshToken }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            setLogoutSuccess(response.data.message || '로그아웃 성공!');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            logout(); // Update the auth state to logged out
            navigate('/'); // Redirect to the login page
        } catch (error) {
            if (error.response) {
                setError(`로그아웃 실패: ${error.response.data.error || '알 수 없는 오류'}`);
                console.log(error.response.data);
            } else if (error.request) {
                setError('서버로부터 응답이 없습니다.');
            } else {
                setError('설정 오류가 발생했습니다.');
            }
        }

        // try {
        //     const refreshToken = localStorage.getItem('refresh_token');

        //     if (!refreshToken) {
        //         setError('로그아웃 실패: 로그인 되어 있지 않습니다.');
        //         return;
        //     }

        //     const response = await axios.post(
        //         'http://localhost:8000/api/logout/',
        //         { refresh_token: refreshToken },
        //         { withCredentials: true } // CORS 요청을 위해 credentials 설정 추가
        //     );

        //     if (response.status === 205) {
        //         setSuccess(response.data.message);
        //         localStorage.removeItem('refresh_token');
        //         localStorage.removeItem('access_token');
        //         logout();
        //         navigate('/login'); // Redirect to the login page
        //     } else {
        //         setError('로그아웃 실패: 서버에서 유효하지 않은 응답을 받았습니다.');
        //     }
        // } catch (error) {
        //     console.log(error.response); // 오류 응답 객체 콘솔 출력
        //     if (error.response) {
        //         setError(`로그아웃 실패: ${error.response.data.error || '알 수 없는 오류'}`);
        //     } else if (error.request) {
        //         setError('로그아웃 실패: 서버로부터 응답이 없습니다.');
        //     } else {
        //         setError('로그아웃 실패: 클라이언트 측에서 오류가 발생했습니다.');
        //     }
        // }
    };


    return (
        <div className="navbar">
            <div className="navbar-content">
                {authState.isAuthenticated && (
                    <div className="navbar-auth">
                        <span className="navbar-empNo">{authState.username}님 환영합니다</span>
                        <button onClick={handleLogout} className="logout-button">로그아웃</button>
                        {error && <span className="logout-error">{error}</span>}
                        {LogoutSuccess && <span className="logout-success">{LogoutSuccess}</span>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
