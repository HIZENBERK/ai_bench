import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const WebcamBarcodeScanner = () => {
    const webcamRef = useRef(null);
    const [barcode, setBarcode] = useState(null);

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
                    if (code.data !== barcode) {
                        console.log(code.data);
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
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="450"
                height="100"
            />
        </div>
    );
};

export default WebcamBarcodeScanner;
