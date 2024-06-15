import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

// 도넛 차트 컴포넌트
const DonutChart = ({ items }) => {
    // 데이터를 part -> usage -> product 순으로 계층적으로 합산
    const aggregatedData = aggregateData(items);

    // 차트 데이터 구성
    const chartData = {
        labels: Object.keys(aggregatedData),
        datasets: [
            {
                label: '부위별 수량',
                data: Object.values(aggregatedData),
                backgroundColor: generateColors(Object.keys(aggregatedData)),
                borderColor: generateColors(Object.keys(aggregatedData), 1),
                borderWidth: 1,
            }
        ]
    };

    // 차트 옵션
    const chartOptions = {
        cutoutPercentage: 60, // 도넛 중앙 구멍 크기 조절
        plugins: {
            doughnutlabel: {
                labels: [
                    {
                        text: '부위', // 내부 도넛 차트의 레이블 텍스트
                        font: {
                            size: '20'
                        }
                    }
                ]
            }
        }
    };

    return (
        <div>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

// 데이터 합계 계산 함수
const aggregateData = (items) => {
    const result = {};

    // 부위 -> usage -> product 계층적으로 데이터 합산
    items.forEach(item => {
        const { part, usage, product, quantity } = item;
        
        if (!result[part]) {
            result[part] = {};
        }
        if (!result[part][usage]) {
            result[part][usage] = {};
        }
        if (!result[part][usage][product]) {
            result[part][usage][product] = 0;
        }
        
        result[part][usage][product] += parseInt(quantity, 10);
    });

    return result;
};

// 부위에 따라 지정된 색상 반환하는 함수
const generateColors = (parts, opacity = 0.6) => {
    const colors = parts.map(part => {
        switch (part) {
            case '채끝':
                return `rgba(54, 162, 235, ${opacity})`; // 파란색
            case '차돌박이':
                return `rgba(255, 159, 64, ${opacity})`; // 주황색
            case '부채살':
                return `rgba(75, 192, 192, ${opacity})`; // 초록색
            case '소갈비':
                return `rgba(255, 99, 132, ${opacity})`; // 핑크색
            default:
                return `rgba(153, 102, 255, ${opacity})`; // 기본 색상 (보조)
        }
    });

    return colors;
};

export default DonutChart;
