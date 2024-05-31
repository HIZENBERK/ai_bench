import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import 'chartjs-plugin-trendline';

// Chart.js의 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: '주문 중량',
                data: data.map(item => item.month_order_weight),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: '실중량',
                data: data.map(item => item.month_real_weight),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: '오차',
                type: 'line',
                data: data.map(item => (item.month_real_weight)),
                fill: true,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                pointRadius: 0,
                trendlineLinear: {
                    style: "rgba(255,105,180, .8)",
                    lineStyle: "dotted",
                    width: 2
                }
            }
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

    // return (
    //     <div>
    //         <Bar data={chartData} options={options} />
    //     </div>
    // );


export default BarChart;
