import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const menu = [
  {
    text: '메인',
    path: '/',
  },
  {
    text: '원료',
    path: '/raw-material',
    children: [
      { text: '발주', path: '/raw-material/procurement', hasInput: true },
      { text: '입고', path: '/raw-material/incoming', hasInput: true },
      { text: '2차가공', path: '/raw-material/processing', hasInput: true },
    ],
  },
  {
    text: '제품',
    path: '/product',
    children: [
      { text: '제품 등록', path: '/product/register' },
      { text: '제품 조회', path: '/product/inventory' },
    ],
  },
  {
    text: '주문',
    path: '/order',
    children: [
      { text: '주문 등록', path: '/order/register', hasInput: true }, // Added hasInput property
      { text: '작업지시서', path: '/order/work-order' },
      { text: '배송 사고', path: '/order/accident' },
    ],
  },
  {
    text: '결산',
    path: '/settlement',
    children: [
      { text: '매입 명세', path: '/settlement/purchase' },
      { text: '매출 명세', path: '/settlement/sales' },
    ],
  },
  {
    text: '기타',
    path: '/others',
    children: [
      { text: '거래처 추가/삭제', path: '/others/customer' },
      { text: '제품 추가/삭제', path: '/others/product' },
    ],
  },
];

const ProcurementPage = () => (
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
  </div>
);

const IncomingPage = () => (
  <div className="incoming-page-container">
    <h2>입고 등록 페이지</h2>
    <div className="input-container">
      <label htmlFor="purchaseOrderNumber">발주번호</label>
      <input type="text" id="purchaseOrderNumber"/>
      <button>조회</button>
      <label htmlFor="item">입고품목</label>
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
    </div>
  </div>
);

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
      <input type="text" id="product2"/>
      <label htmlFor="price2" className="price-label">가격</label>
      <input type="text" id="price2"/>
    </div>
    <div className="input-container">
      <label htmlFor="orderer">주문자</label>
      <input type="text" id="orderer"/>
      <label htmlFor="product3" className="product-label">제품명</label>
      <input type="text" id="product3"/>
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


function App() {
  const generateMenuHTML = (menuItems) => {
    let html = '<ul>';
    menuItems.forEach((item) => {
      html += '<li>';
      html += `<a href="${item.path}">${item.text}</a>`;
      if (item.children && item.children.length > 0) {
        html += '<ul>';
        item.children.forEach((child) => {
          html += `<li><a href="${child.path}">- ${child.text}</a></li>`;
        });
        html += '</ul>';
      }
      html += '</li>';
    });
    html += '</ul>';
    return html;
  };

  const menuHTML = generateMenuHTML(menu);

  return (
    <Router>
      <div className="app-container">
        <div className="menu-container">
          <div dangerouslySetInnerHTML={{ __html: menuHTML }} />
          <div className="help-text">도움말</div>
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/raw-material/procurement" element={<ProcurementPage />} />
            <Route path="/raw-material/incoming" element={<IncomingPage />} /> 
            <Route path="/raw-material/processing" element={<ProcessingPage />} /> 
            <Route path="/order/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
