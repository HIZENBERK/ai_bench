import React from "react";

const OthersAddbusinesspartnerPage = () => (
    <div className="procurement-page-container">
        <h2>거래처 추가 페이지</h2>
        <div className="input-container">
            <label htmlFor="orderDateTime">유형</label>
            <input type="text" id="orderDateTime"/>
            <label htmlFor="totalQuantity">거래처명</label>
            <div className="partner-search-container">
                <input type="text" id="totalQuantity"/>
                <button>검색</button>
            </div>
        </div>
    </div>
);

export default OthersAddbusinesspartnerPage;