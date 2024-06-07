import React, { useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct

const SettlementSalesPage = () => {
    const [data, setData] = useState({}); // Initialize data with an empty object

    // Function to handle button click event
    const handleButtonClick = () => {
        // Here you would typically fetch your data from an API or a local source
        // For now, let's assume you have some dummy data
        const dummyData = {
            historyNumber: "123",
            region: "Region A",
            nonBurnedWeight: "10 kg",
            actualWeight: "800 g",
            processedWeight: "750 g",
            lossWeight: "50 g",
            remainingWeight: "700 g",
            productionCount: {
                gui: 20,
                bulgogi: 30,
                tangsuyuk: 15,
                bujeon: 10,
                gukgori: 25,
                gift: 5
            },
            total: 105,
            unitPrice: "1000 won",
            amount: "105000 won",
            productYield: "95%",
            lossRate: "5%",
            salesProfit: "5000 won",
            netProfit: "4000 won",
            profitRate: "4%"
        };

        // Update state with fetched data
        setData(dummyData);
    };

    return (
        <div className="incoming-page-container">
            <h2>매출명세 페이지</h2>
            <div className="input-container">
                <label htmlFor="purchaseOrderNumber">월별조회</label>
                <input type="text" id="purchaseOrderNumber"/>
                <button onClick={handleButtonClick}>조회</button>
            </div>

            {/* Display fetched data if available */}
            {data && (
                <table className="data-container">
                    <th>임시데이터 이력번호: {data.historyNumber}</th>
                    <th>부위: {data.region}</th>
                    <th>불주중랼(kg): {data.nonBurnedWeight}</th>
                    <th>실중량(g): {data.actualWeight}</th>
                    <th>손질 후 중량: {data.processedWeight}</th>
                    <th>손실중량: {data.lossWeight}</th>
                    <th>잔여량: {data.remainingWeight}</th>
                    <th>생산수(팩):</th>
                    <th>
                        <li>구이: {data.productionCount && data.productionCount.gui}</li>
                        <li>불고기: {data.productionCount && data.productionCount.bulgogi}</li>
                        <li>당체: {data.productionCount && data.productionCount.tangsuyuk}</li>
                        <li>부등: {data.productionCount && data.productionCount.bujeon}</li>
                        <li>국거리: {data.productionCount && data.productionCount.gukgori}</li>
                        <li>사은품: {data.productionCount && data.productionCount.gift}</li>
                        <li>합계: {data.total}</li>
                    </th>
                    <th>단가: {data.unitPrice}</th>
                    <th>금액: {data.amount}</th>
                    <th>제품수율: {data.productYield}</th>
                    <th>로스율: {data.lossRate}</th>
                    <th>판매이익: {data.salesProfit}</th>
                    <th>순이익: {data.netProfit}</th>
                    <th>수익율: {data.profitRate}</th>
                </table>
                
            )}
        </div>
    );
};

export default SettlementSalesPage;
