import React from "react";
import DataTable from "./DataTable";
import PieChart from "./PieCharts";
import './Main.css';

const headers = [
    {
        text: '부위',
        value: 'part'
    },
    {
        text: '용도',
        value: 'usage'
    },
    {
        text: '제품',
        value: 'product'
    },
    {
        text: '수량',
        value: 'quantity'
    }
];
const items = [
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    },
    {
        part: '채끝',
        usage: '구이',
        product: '안심 스테이크 200g',
        quantity: '5'
    }
];

const data = [300, 50, 100, 40, 120, 80];
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];



const Main = () => (
    <div>
        <div className="Main-container">
            <div className="item">
                <DataTable 
                    headers={headers} 
                    items={items} /* items props 보내기 */
                />
            </div>
            <div className="item">
                <PieChart 
                    data={data} 
                    labels={labels} />
            </div>              
        </div>
        <div className="Main-container">
            <div className="item">

            </div>
            <div className="item">
                <DataTable
                    headers={headers}
                    items={items} /* items props 보내기 */
                />
            </div>              
        </div>
    </div>
    
    
);

export default Main;