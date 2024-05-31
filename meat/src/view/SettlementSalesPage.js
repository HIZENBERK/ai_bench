import React from "react";

const SettlementSalesPage = () => (
    <div className="incoming-page-container">
        <h2>입고 등록 페이지</h2>
        <div className="input-container">
            <label htmlFor="purchaseOrderNumber">월별조회</label>
            <input type="text" id="purchaseOrderNumber"/>
            <button>조회</button>
        </div>
    </div>
);

export default SettlementSalesPage;