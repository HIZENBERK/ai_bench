import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import QRCode from 'qrcode.react';
import '../css/ProductInventoryPage.css';

const WebcamBarcodeScanner = ({ onScanComplete, onInputChange }) => {
    const [productNumber, setProductNumber] = useState('');
    const webcamRef = useRef(null);
    const [scannedData, setScannedData] = useState(null);
    const [salesDeadline, setSalesDeadline] = useState('');
    const [consumptionDeadline, setConsumptionDeadline] = useState('');

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
                        const parsedData = JSON.parse(code.data);
                        setProductNumber(parsedData.productNumber);
                        onScanComplete(parsedData);
                    }
                }
            }
        }
        requestAnimationFrame(captureFrame);
    };

    useEffect(() => {
        captureFrame();
    }, []);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        onInputChange(id, value);
    };

    const handleDateChange = (date, id) => {
        if (id === 'salesDeadline') {
            setSalesDeadline(date);
            console.log(salesDeadline);
        } else if (id === 'consumptionDeadline') {
            setConsumptionDeadline(date);
            console.log(consumptionDeadline);
        }
    }

    return (
        <div>
            <div className="qrscan">
                <div className="qrscan1">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width="300"
                        height="150"
                    />

                    <QRCode
                        value={JSON.stringify({
                            productNumber: "PRD001"
                        })}
                        width="200"
                        height="200"
                    />
                </div>
            </div>
            <div className="input-section">
                <div className="input-group">
                    <label>
                        <input type="checkbox" name="productNumber" onChange={handleInputChange} /> 제품번호
                    </label>
                    <input
                        type="text"
                        name="productNumber"
                        readOnly
                        placeholder="QR 인식"
                        value={productNumber}
                        onChange={(e) => setProductNumber(e.target.value)}
                    />
                </div>
            </div>
            <div className="input-section">
                <div className="input-group">
                    <label>
                        <input type="checkbox" /> 제품번호
                    </label>
                    <input type="text" id="productNumber" onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" /> 판매기한
                    </label>
                    <input type="date" id="salesDeadline" placeholder="판매기한" aria-required="true" onChange={handleInputChange} />
                    {/*<Datepicker id="salesDeadline" name="salesDeadline" selectedDate={salesDeadline} onChange={handleInputChange} onChangeDate={handleDateChange} />*/}
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" /> 소비기한
                    </label>
                    <input type="date" placeholder="날짜를 선택해주세요" id="consumptionDeadline" onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" /> 작업자
                    </label>
                    <input type="text" id="worker" onChange={handleInputChange} />
                </div>
            </div>
        </div>
    );
};

export default WebcamBarcodeScanner;
