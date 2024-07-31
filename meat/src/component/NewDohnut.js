// Import necessary components
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const usage = [
    {label: '구이', value:3},
    {label: '네모등심', value:3},
    {label: '볶음밥,찌개', value:3},
    {label: '구이', value:3},
    {label: '불고기', value:3},
    {label: '구이', value:3},

];

const part = {
    '채끝' : 3,
    '차돌박이': 3,
    '부채살': 3,
};

const product =[
    {label: '안심스테이크 200g', value: 3},
    {label: '안심스테이크 200g', value: 3},
    {label: '안심스테이크 200g', value: 3},
    {label: '안심스테이크 200g', value: 3},
    {label: '안심스테이크 200g', value: 3},
    {label: '안심스테이크 200g', value: 3}
];

const quantity = [
    {label: '10' , value:5},
    {label: '5' , value:5},
    {label: '5' , value:5},
    {label: '5' , value:5},
    {label: '5' , value:5},
    {label: '10' , value:5},
]


const data = {
    labels: [
        ...Object.keys(part),
        ...usage.map(p => p.label),
        ...product.map(p => p.label),
        ...quantity.map(p => p.label)],
    datasets: [
        {
            labels: quantity.map(p => p.label),
            data: Object.values(quantity),
            backgroundColor: ['#36A2EB', '#36A2EB', '#FF6384','#FF6384','#456789','#456789'],
            hoverBackgroundColor: ['#5f9ea0', '#5f9ea0', '#724820','#724820','#123456','#123456'],
            hoverOffset: 4,
            cutout: '20%'
        },
        {
            labels: product.map(p => p.label),
            data: Object.values(product),
            backgroundColor: ['#36A2EB', '#36A2EB', '#FF6384','#FF6384','#456789','#456789'],
            hoverBackgroundColor: ['#5f9ea0', '#5f9ea0', '#724820','#724820','#123456','#123456'],
            hoverOffset: 4,
            cutout: '20%',
        },
        {
            labels: usage.map(p => p.label),
            data: Object.values(product),
            backgroundColor: ['#36A2EB', '#36A2EB', '#FF6384','#FF6384','#456789','#456789'],
            hoverBackgroundColor: ['#5f9ea0', '#5f9ea0', '#724820','#724820','#123456','#123456'],
            hoverOffset: 4,
            cutout: '20%',
        },
        {
            labels: Object.keys(part),
            data: Object.values(part),
            backgroundColor: ['#36A2EB', '#FF6384', '#456789'],
            hoverBackgroundColor: ['#5f9ea0', '#724820', '#123456'],
            hoverOffset: 4,
            cutout: '20%'
        }
    ]
};

const options = {
    plugins: {
        legend: {
            display: false,
            padding: 10,
        },
        datalabels: {
            align: "center",
            formatter: function (value, context) {
                return context.dataset.labels[context.dataIndex];
            },
            color: "#fff",
            font: {
                weight: "bold",
                size: 13,
            },
        },
        position: "top",
        tooltip: {
            callbacks: {
                title: function(context) {
                    return context[0].dataset.labels[context[0].dataIndex];
                }
            }
        }
    }
};

const SunburstChart = () => {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default SunburstChart;


