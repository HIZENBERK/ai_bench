import React from "react";

const IncomingPage = () => (
    <div className="incoming-page-container">
        <h2>입고 등록 페이지</h2>
        <div className="input-container">
            <label htmlFor="purchaseOrderNumber">발주번호</label>
            <input type="text" id="purchaseOrderNumber"/>
            <button>조회</button>
            <label htmlFor="item" className="item-label">입고품목</label>
            <input type="text" id="item"/>
        </div>
        <div className="input-container">
            <label htmlFor="arrivalDateTime">입고일시</label>
            <input type="text" id="arrivalDateTime"/>
            <label htmlFor="historyNumber">이력번호</label>
            <input type="text" id="historyNumber"/>
        </div>
        <div className="input-container">
            <label htmlFor="receiver">입고자 명</label>
            <input type="text" id="receiver"/>
            <label htmlFor="unitPrice">입고단가</label>
            <input type="text" id="unitPrice"/>
        </div>
        <div className="input-container">
            <label htmlFor="actualWeight">실 중량</label>
            <input type="text" id="actualWeight"/>
        </div>
        <div className="input-container">
            <label htmlFor="actualPurchasePrice">실 매입가</label>
            <input type="text" id="actualPurchasePrice"/>
            <button>등록</button>
        </div>
    </div>
);

export default IncomingPage;