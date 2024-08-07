import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const aggregateData = (items) => {
    const result = items.reduce((acc, item) => {
        if (acc[item.part]) {
            acc[item.part] += parseInt(item.quantity, 10);
        } else {
            acc[item.part] = parseInt(item.quantity, 10);
        }
        return acc;
    }, {});

    return result;
};

const PieChart = ({ items }) => {

    const aggregatedData = aggregateData(items);

    const chartData = {
        labels: Object.keys(aggregatedData),
        datasets: [
            {
                data: Object.values(aggregatedData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    // 필요한 색상 추가
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    // 필요한 색상 추가
                ],
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;