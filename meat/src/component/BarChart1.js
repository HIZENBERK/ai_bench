import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import 'chartjs-plugin-trendline';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: '주문 수량',
                data: data.map(item => item.order_quantity),
                backgroundColor: 'rgba(0, 0, 128, 0.8)',
                borderColor: 'rgba(0, 0, 128, 1)',
                borderWidth: 1,
            },
            {
                label: '발송수량',
                data: data.map(item => item.shipment_quantity),
                backgroundColor: 'rgba(255, 140, 0, 0.8)',
                borderColor: 'rgba(255, 140, 0, 1)',
                borderWidth: 1,
            },
            {
                label: '택배사고',
                data: data.map(item => (item.delivery_issue)),
                backgroundColor: 'rgba(0, 100, 0, 0.8)',
                borderColor: 'rgba(0, 100, 0, 1)',
                borderWidth: 1,
            }
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: false,
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
