//메인
import React, {useState} from "react";
import DataTable from "../component/DataTable";
import BarChart from "../component/BarChart";
import BarChart1 from "../component/BarChart1";
import BarChart2 from "../component/BarChart2";
import '../css/Main.css';
import BasicSunburst from '../component/BasicSunburst';
import SunburstWithTooltips from "../component/SunburstWithTooltips";

const headers = [
    { text: '부위', value: 'part' },
    { text: '용도', value: 'usage' },
    { text: '제품', value: 'product' },
    { text: '수량', value: 'quantity' }
];


const items = [
    {part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '채끝', usage: '네모등심', product: '안심 스테이크 200g', quantity: '5' },
    {part: '차돌박이', usage: '볶음밥,찌개', product: '안심 스테이크 200g', quantity: '5' },
    {part: '차돌박이', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '부채살', usage: '불고기', product: '안심 스테이크 200g', quantity: '5' },
    {part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '부채살', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    {part: '소갈비', usage: '구이', product: '폭립 200g', quantity: '3' }
];


const headers2 = [
    { text: '', value: 'month' },
    { text: '월별 발주 중량', value: 'month_order_weight' },
    { text: '월별 실 중량', value: 'month_real_weight' },
    { text: '백분율', value: 'percent' }
];

const items2 = [
    { month:'1월', month_order_weight: 2000, month_real_weight: 2012},
    { month:'2월', month_order_weight: 2000, month_real_weight: 1928},
    { month:'3월', month_order_weight: 1000, month_real_weight: 1017},
    { month:'4월', month_order_weight: 6500, month_real_weight: 6492},
    { month:'5월', month_order_weight: 1500, month_real_weight: 1560},
].map(item => ({
    ...item,
    percent: ((item.month_real_weight / item.month_order_weight) * 100).toFixed(2)
}));

const headers3 = [
    { text: '', value: 'month' },
    { text: '주문수량', value: 'order_quantity' },
    { text: '택배사고', value: 'delivery_issue' },
    { text: '발송수량', value: 'shipment_quantity' }
];

const items3 = [
    { month: '1월', order_quantity: 100, delivery_issue: 2, shipment_quantity: 102 },
    { month: '2월', order_quantity: 101, delivery_issue: 3, shipment_quantity: 104 },
    { month: '3월', order_quantity: 102, delivery_issue: 3, shipment_quantity: 105 },
    { month: '4월', order_quantity: 103, delivery_issue: 0, shipment_quantity: 103 },
    { month: '5월', order_quantity: 104, delivery_issue: 5, shipment_quantity: 106 }
];

const headers4 = [
    { text: '', value: 'month' },
    { text: '2022년', value: 'new_name_for_2022' },
    { text: '2023년', value: 'new_name_for_2023' },
    { text: '2024년', value: 'new_name_for_2024' }
];

const items4 = [
    { month: '1월', new_name_for_2022: 100, new_name_for_2023: 110, new_name_for_2024: 120 },
    { month: '2월', new_name_for_2022: 110, new_name_for_2023: 120, new_name_for_2024: 130 },
    { month: '3월', new_name_for_2022: 100, new_name_for_2023: 130, new_name_for_2024: 105 },
    { month: '4월', new_name_for_2022: 120, new_name_for_2023: 300, new_name_for_2024: 250 },
    { month: '5월', new_name_for_2022: 130, new_name_for_2023: 400, new_name_for_2024: 300 }
];

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
                    <BasicSunburst
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

        <div className="container">
            <div className="table-item">
                <div className="box">
                    <DataTable
                        headers={headers3}
                        items={items3}
                    />
                </div>
            </div>
            <div className="item">
                <div className="box">
                    <BarChart1
                        data={items3}
                    />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="item">
                <div className="box">
                    <BarChart2
                        data={items4}
                    />
                </div>
            </div>
            <div className="table-item">
                <div className="box">
                    <DataTable
                        headers={headers4}
                        items={items4}
                    />
                </div>
            </div>
        </div>

    </div>
);

export default Main;