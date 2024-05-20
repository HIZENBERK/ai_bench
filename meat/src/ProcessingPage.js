import React from "react";

const ProcessingPage = () => (
    <div className="processing-page-container">
        <h2>2차가공 페이지</h2>
        <div className="input-container">
            <label htmlFor="rawMaterialNumber">원료 번호</label>
            <input type="text" id="rawMaterialNumber"/>
            <button>조회</button>
        </div>
        <div className="input-container">
            <label htmlFor="workingDay">작업일(요일)</label>
            <input type="text" id="workingDay"/>
            <label htmlFor="loss">로스</label>
            <input type="text" id="loss"/>
        </div>
        <div className="input-container">
            <label htmlFor="worker">작업자</label>
            <input type="text" id="worker"/>
            <label htmlFor="unitPrice">단가</label>
            <input type="text" id="unitPrice"/>
        </div>
        <div className="input-container">
            <label htmlFor="finalWeight">작업 후 중량</label>
            <input type="text" id="finalWeight"/>
            <label htmlFor="discountRate">할인율</label>
            <input type="text" id="discountRate"/>
        </div>
    </div>
);

export default ProcessingPage;