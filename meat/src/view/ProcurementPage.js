import React from "react";

const ProcurementPage = () => {

    const handleRegisterNavigation = async (e) => {

    }

    return (
        <div className="procurement-page-container">
            <h2>발주 등록 페이지</h2>
            <div className="input-container">
                <label htmlFor="orderDateTime">발주일시</label>
                <input type="text" id="orderDateTime"/>
                <label htmlFor="totalQuantity">발주중량</label>
                <input type="text" id="totalQuantity"/>
            </div>
            <div className="input-container">
                <label htmlFor="ordererID">발주자(사번)명</label>
                <input type="text" id="ordererID"/>
                <label htmlFor="expectedDeliveryDate">입고 예정일</label>
                <input type="text" id="expectedDeliveryDate"/>
            </div>
            <div className="input-container">
                <label htmlFor="part">부위</label>
                <input type="text" id="part"/>
                <label htmlFor="supplier">거래처</label>
                <input type="text" id="supplier"/>
            </div>
            <div className="input-container">
                <label htmlFor="orderAmount">발주금액</label>
                <input type="text" id="orderAmount"/>
            </div>
            <button onClick={handleRegisterNavigation} className="register-button">등록</button>
        </div>
    )
};

export default ProcurementPage;