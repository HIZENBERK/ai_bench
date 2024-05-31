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
const headers2 = [
    { text: '', value: 'month' },
    { text: '월별 발주 중량', value: 'month_order_weight' },
    { text: '월별 실 중량', value: 'month_real_weight' },
    { text: '백분율', value: 'percent' }
];

const items = [
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '네모등심', product: '안심 스테이크 200g', quantity: '5' },
    { part: '차돌박이', usage: '볶음밥,찌개', product: '안심 스테이크 200g', quantity: '5' },
    { part: '차돌박이', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '부채살', usage: '불고', product: '안심 스테이크 200g', quantity: '5' }
];
const mOrderWei = 2000
const mRealWei = 2012
const items2 = [
    { month:'1월', month_order_weight: mOrderWei, month_real_weight: mRealWei, percent: mRealWei/mOrderWei},
    { month:'2월', month_order_weight: mOrderWei, month_real_weight: mRealWei, percent: mRealWei/mOrderWei},
    { month:'3월', month_order_weight: mOrderWei, month_real_weight: mRealWei, percent: mRealWei/mOrderWei},
    { month:'4월', month_order_weight: mOrderWei, month_real_weight: mRealWei, percent: mRealWei/mOrderWei},
    { month:'5월', month_order_weight: mOrderWei, month_real_weight: mRealWei, percent: mRealWei/mOrderWei},
    ];

const data = [300, 50, 100, 40, 120, 80];
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

const Main = () => (
    <div>
        <div className="container">
            <div className="item">
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
                        data={data} 
                        labels={labels} 
                    />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="item">
                <div className="box">
                    <BarChart
                        data={data}
                        labels={labels}
                    />
                </div>
            </div>
            <div className="item">
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
