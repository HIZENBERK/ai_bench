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
                backgroundColor: 'rgba(0, 0, 128, 0.8)',
                borderColor: 'rgba(0, 0, 128, 1)',
                borderWidth: 1,
            },
            {
                label: '실중량',
                data: data.map(item => item.month_real_weight),
                backgroundColor: 'rgba(255, 140, 0, 0.8)',
                borderColor: 'rgba(255, 140, 0, 1)',
                borderWidth: 1,
            },
            {
                label: '오차',
                type: 'line',
                data: data.map(item => (item.month_real_weight)),
                fill: true,
                backgroundColor: 'rgba(0, 100, 0, 0.8)',
                borderColor: 'rgba(0, 100, 0, 1)',
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

export default BarChart;
