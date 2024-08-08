import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/Login.css';  // CSS 파일 경로
import { useAuth } from '../component/AuthContext';
import jsQR from "jsqr";
import Webcam from "react-webcam";

const Login = () => {
    const [empNo, setEmpNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Use the login function from context
    const { setLogoutSuccess } = useAuth();
    const webcamRef = useRef(null);
    const [scannedData, setScannedData] = useState(null);

    const isValidJSON = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };

    const captureFrame = () => {
        if (webcamRef.current) {
            const video = webcamRef.current.video;
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    if (code.data !== scannedData && isValidJSON(code.data)) {
                        setScannedData(code.data);
                    }
                }
            }
        }
        requestAnimationFrame(captureFrame);
    };

    useEffect(() => {
        captureFrame();
    }, []);

    useEffect(() => {
        if (scannedData) {
            const parsedData = JSON.parse(scannedData);
            setEmpNo(parsedData.empNo);
            setPassword(parsedData.password);
            handleLogin1(parsedData.empNo,parsedData.password);
        }
    }, [scannedData]);

    const handleLogin1 = async (empNoParam, passwordParam) => {
        setError('');
        setSuccess('');

        const empNoToUse = empNoParam || empNo;
        const passwordToUse = passwordParam || password;

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        if (empNoToUse && passwordToUse) {
            try {
                const response = await axios.post('http://localhost:8000/api/login/', {
                    empNo : empNoToUse,
                    password : passwordToUse,
                });
                console.log('access:', response.data.access);
                console.log('refresh_token:', response.data.refresh);
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                login(response.data.empNo, response.data.username, response.data.job, response.data.position);
                setSuccess(`Logged in successfully! Welcome ${response.data.username}`);
                setLogoutSuccess('');
                if (response.data.job === 'DM' || (response.data.position === 'A' || response.data.position === 'M')) {
                    navigate('/raw-material/processing');
                }
                if (response.data.job === 'OM' || (response.data.position === 'A' || response.data.position === 'M')) {
                    navigate('/main');
                }
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.error || 'An error occurred.');
                } else if (error.request) {
                    setError('No response from server.');
                } else {
                    setError('An error occurred on settings');
                }
            }
        } else {
            alert('사번과 비밀번호를 입력하세요.');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        handleLogin1();
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
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="250"
                height="250"
                style={{ marginLeft: "40px" }}
            />
        </div>
    );
};

export default Login;
