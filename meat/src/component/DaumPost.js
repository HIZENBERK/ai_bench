import React from 'react';
import DaumPostcode from "react-daum-postcode";
import '../css/Pagination.css';

const PopupPostCode = (props) => {
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        props.onSelect(fullAddress);
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }

    return(
        <div className="postCodeStyle">
            <DaumPostcode onComplete={handlePostCode} />
            <div className="">
                <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
            </div>
        </div>
    )
}

export default PopupPostCode;