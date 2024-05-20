import React from "react";

const RegisterPage = () => (
    <div className="register-page-container">
        <h2>주문 등록 페이지</h2>
        <div className="input-container">
            <label htmlFor="weekday">등록일(요일)</label>
            <input type="text" id="weekday"/>
            <label htmlFor="product1" className="product-label">제품명</label>
            <input type="text" id="product1"/>
            <label htmlFor="price1" className="price-label">가격</label>
            <input type="text" id="price1"/>
        </div>
        <div className="input-container">
            <label htmlFor="category">구분</label>
            <input type="text" id="category"/>
            <label htmlFor="product2" className="product-label">제품명</label>
            <input type="text" id="product2" className="product-input"/>
            <label htmlFor="price2" className="price-label">가격</label>
            <input type="text" id="price2"/>
        </div>
        <div className="input-container">
            <label htmlFor="orderer">주문자</label>
            <input type="text" id="orderer"/>
            <label htmlFor="product3" className="product-label">제품명</label>
            <input type="text" id="product3" className="product-input"/>
            <label htmlFor="price3" className="price-label">가격</label>
            <input type="text" id="price3"/>
        </div>
        <div className="input-container">
            <label htmlFor="address">주소</label>
            <input type="text" id="address"/>
        </div>
        <div className="input-container">
            <label htmlFor="contact">연락처</label>
            <input type="text" id="contact"/>
        </div>
        <div className="input-container">
            <label htmlFor="register">주문등록자</label>
            <input type="text" id="register"/>
        </div>
    </div>
);

export default RegisterPage;