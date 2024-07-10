import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import QRCode from 'qrcode.react';
import '../css/ProductInventoryPage.css';

const WebcamBarcodeScanner = ({ onScanComplete }) => {
    const [productNumber, setProductNumber] = useState('');
    const [salesDeadline, setSalesDeadline] = useState('');
    const [consumptionDeadline, setConsumptionDeadline] = useState('');
    const [worker, setWorker] = useState('');
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
                        const parsedData = JSON.parse(code.data);
                        setProductNumber(parsedData.productNumber);
                        setSalesDeadline(parsedData.salesDeadline);
                        setConsumptionDeadline(parsedData.consumptionDeadline);
                        setWorker(parsedData.worker);
                        console.log(code.data);
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
                            productNumber: "PRD002",
                            salesDeadline: "2024-11-01",
                            consumptionDeadline: "2025-02-01",
                            worker: "Jane Smith"
                        })}
                        width="200"
                        height="200"
                    />
                </div>
            </div>
            <div className="input-section">
                <div className="input-group">
                    <label>
                        <input type="checkbox" />제품번호
                    </label>
                    <input
                        type="text"
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
                        <input type="checkbox" />제품번호
                    </label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" />판매기한
                    </label>
                    <input
                        type="text"
                        readOnly
                        value={salesDeadline}
                        onChange={(e) => setSalesDeadline(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" />소비기한
                    </label>
                    <input
                        type="text"
                        readOnly
                        value={consumptionDeadline}
                        onChange={(e) => setConsumptionDeadline(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" /> 작업자
                    </label>
                    <input
                        type="text"
                        readOnly
                        value={worker}
                        onChange={(e) => setWorker(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default WebcamBarcodeScanner;
