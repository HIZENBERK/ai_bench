import React, { useState } from 'react';
import '../css/Pagination.css'; // Ensure the path is correct

const SettlementMoneyPage = () => {
    const [selectedYear, setSelectedYear] = useState(""); // State for selected year

    const years = ["2022", "2023", "2024", "2025"]; // Update with appropriate years

    // Function to handle year selection change
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Function to handle button click event
    const handleButtonClick = () => {
        // Here you would typically fetch your data from an API or a local source
        // For now, let's assume you have some dummy data
        const dummyData = {
            historyNumber: "456",
            region: "Region B",
            purchaseWeight: "20 kg",
            actualWeight: "15 kg",
            processedWeight: "12 kg",
            lossWeight: "3 kg",
            remainingWeight: "9 kg",
            productionCount: {
                gui: 25,
                bulgogi: 35,
                tangsuyuk: 20,
                bujeon: 15,
                gukgori: 30,
                gift: 10,
                total: 135
            },
            unitPrice: "1200 won",
            amount: "162000 won",
            productYield: "90%",
            lossRate: "4%",
            salesProfit: "7000 won",
            netProfit: "6000 won",
            profitRate: "5%"
        };

        // Update state with fetched data
        // setData(dummyData);
    };

    return (
        <div className="incoming-page-container">
            <h2>매출명세 페이지</h2>
            <div className="input-container">
                <label htmlFor="yearSelect">연도별 조회</label>
                <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                    <option value="">-- 선택 --</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <button onClick={handleButtonClick}>조회</button>
            </div>
        </div>
    );
};

export default SettlementMoneyPage;
