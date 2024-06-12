import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/App.css';

const menu = [
    {
        text: '메인',
        path: '/main',
    },
    {
        text: '원료',
        children: [
            { text: '발주', path: '/raw-material/procurement', hasInput: true },
            { text: '입고', path: '/raw-material/incoming', hasInput: true },
            { text: '2차가공', path: '/raw-material/processing', hasInput: true },
        ],
    },
    {
        text: '제품',
        children: [
            { text: '재고현황', path: '/product/inventory' },
        ],
    },
    {
        text: '주문',
        children: [
            { text: '주문 등록', path: '/order/register', hasInput: true },
            { text: '작업지시서', path: '/order/work-order' },
            { text: '배송 사고', path: '/order/accident' },
        ],
    },
    {
        text: '결산',
        children: [
            { text: '금액', path: '/settlement/money' },
            { text: '매입 명세', path: '/settlement/details' },
            { text: '매출 명세', path: '/settlement/sales' },
        ],
    },
    {
        text: '기타',
        children: [
            { text: '거래처 관리', path: '/others/customer' },
            { text: '기타비용', path: '/others/costs' },
            { text: '지용/제품 추가', path: '/others/addproduct' },
        ],
    },
];

const Menu = () => {
    const renderMenu = (menuItems) => (
        <ul>
            {menuItems.map((item) => (
                <li key={item.path || item.text} className={!item.path ? 'no-click' : ''}>
                    {item.path ? (
                        <Link to={item.path}>{item.text}</Link>
                    ) : (
                        <span>{item.text}</span>
                    )}
                    {item.children && (
                        <ul>
                            {item.children.map((child) => (
                                <li key={child.path}>
                                    <Link to={child.path}>- {child.text}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="app-container">
            <div className="menu-container">
                {renderMenu(menu)}
                <div className="help-text">도움말</div>
            </div>
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
};

export default Menu;
