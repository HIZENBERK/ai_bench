import React from "react";
import DataTable from "./DataTable";
import PieChart from "./PieCharts";
import BarChart from "./BarChart";
import './Main.css';

const headers = [
    { text: '부위', value: 'part' },
    { text: '용도', value: 'usage' },
    { text: '제품', value: 'product' },
    { text: '수량', value: 'quantity' }
];

const items = [
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' },
    { part: '채끝', usage: '구이', product: '안심 스테이크 200g', quantity: '5' }

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
                    <DataTable 
                        headers={headers} 
                        items={items} 
                    />
                </div>
            </div>
            <div className="item">
                <div className="box">
                    <BarChart 
                        data={data} 
                        labels={labels} 
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Main;
