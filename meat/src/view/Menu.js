import React from 'react';
import '../css/App.css';
import {Link, Outlet} from 'react-router-dom';


const menu = [
    {
        text: '메인',
        path: '/main',
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
            { text: '주문 등록', path: '/order/register', hasInput: true },
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

const Menu = () => {
    const renderMenu = (menuItems) => (
        <ul>
            {menuItems.map((item) => (
                <li key={item.path}>
                    <Link to={item.path}>{item.text}</Link>
                    {item.children && item.children.length > 0 && (
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
