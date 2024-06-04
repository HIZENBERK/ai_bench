import React from "react";
import DataTable from "../component/DataTable";
import PieChart from "../component/PieCharts";
import BarChart from "../component/BarChart";
import '../css/Main.css';

const headers = [
    { text: '부위', value: 'part' },
    { text: '용도', value: 'usage' },
    { text: '제품', value: 'product' },
    { text: '수량', value: 'quantity' }
];


const items = [
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '네모등심', product: '안심 스테이크 200g', quantity: '5' },
    { part: '차돌박이', usage: '볶음밥,찌개', product: '안심 스테이크 200g', quantity: '5' },
    { part: '차돌박이', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '불고기', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '소갈비', usage: '구이', product: '폭립 200g', quantity: '3' }
];

const headers2 = [
    { text: '', value: 'month' },
    { text: '월별 발주 중량', value: 'month_order_weight' },
    { text: '월별 실 중량', value: 'month_real_weight' },
    { text: '백분율', value: 'percent' }
];
const items2 = [
    { month:'1월', month_order_weight: 3000, month_real_weight: 3050},
    { month:'2월', month_order_weight: 4000, month_real_weight: 4150},
    { month: '3월', month_order_weight: 3300, month_real_weight: 3250 },
    { month: '4월', month_order_weight: 3400, month_real_weight: 3350 },
    { month:'5월', month_order_weight: 1500, month_real_weight: 1560},
].map(item => ({
    ...item,
    percent: ((item.month_real_weight / item.month_order_weight) * 100).toFixed(2)
}));

const Main = () => (
    <div>
        <div className="container">
            <div className="table-item">
                <div className="box">
                    <DataTable 
                        headers={headers} 
                        items={items} 
                    />
                </div>
            </div>
            <div className="item">
                <div className="box">
                    <PieChart 
                        items={items}
                    />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="item">
                <div className="box">
                    <BarChart
                        data={items2}
                    />
                </div>
            </div>
            <div className="table-item">
                <div className="box">
                    <DataTable
                        headers={headers2}
                        items={items2}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Main;