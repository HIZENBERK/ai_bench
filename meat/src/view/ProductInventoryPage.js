import React from "react";

const ProductInventoryPage = () => (
    <div className="procurement-page-container">
        <h2>제고 현황 페이지</h2>
        <div className="input-container">
            <label htmlFor="orderDateTime">순번</label>
            <input type="text" id="orderDateTime"/>
            <label htmlFor="totalQuantity">등록일(요일)</label>
            <input type="text" id="totalQuantity"/>
        </div>
        <div className="input-container">
            <label htmlFor="ordererID">제품번호</label>
            <input type="text" id="ordererID"/>
            <label htmlFor="expectedDeliveryDate">부자재</label>
            <input type="text" id="expectedDeliveryDate"/>
        </div>
        <div className="input-container">
            <label htmlFor="part">이력번호</label>
            <input type="text" id="part"/>
            <label htmlFor="supplier">제품명</label>
            <input type="text" id="supplier"/>
        </div>
        <div className="input-container">
            <label htmlFor="orderAmount">작업자</label>
            <input type="text" id="orderAmount"/>
            <label htmlFor="orderAmo">판매기한</label>
            <input type="text" id="orderAmo"/>
        </div>
        <div className="input-container">
            <label htmlFor="orderAmount">소비기한</label>
            <input type="text" id="orderAmount"/>
            <label htmlFor="orderAmo">잔여수량</label>
            <input type="text" id="orderAmo"/>
        </div>
        <div className="input-container">
            <label htmlFor="orderAmount">판가격(부가세)</label>
            <input type="text" id="orderAmount"/>
            <label htmlFor="orderAmo">수정/삭제</label>
            <input type="text" id="orderAmo"/>
        </div>
        <button>등록</button>
    </div>
);

export default ProductInventoryPage;