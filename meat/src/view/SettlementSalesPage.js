import React, { useState } from 'react';
import '../css/Pagination.css'; // Ensure the path is correct

const SettlementSalesPage = () => {
    const [data, setData] = useState(null); // Initialize data with null

    // Function to handle button click event
    const handleButtonClick = () => {
        // Here you would typically fetch your data from an API or a local source
        // For now, let's assume you have some dummy data
        const dummyData = {
            historyNumber: "456",
            region: "Region B",
            nonBurnedWeight: "20 kg",
            actualWeight: "1200 g",
            processedWeight: "1150 g",
            lossWeight: "50 g",
            remainingWeight: "1100 g",
            productionCount: {
                gui: 25,
                bulgogi: 35,
                tangsuyuk: 20,
                bujeon: 15,
                gukgori: 30,
                gift: 10
            },
            total: 135,
            unitPrice: "1200 won",
            amount: "162000 won",
            productYield: "90%",
            lossRate: "4%",
            salesProfit: "7000 won",
            netProfit: "6000 won",
            profitRate: "5%"
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
                    <thead>
                        <tr>
                            <th colSpan="2">임시데이터 이력번호: {data.historyNumber}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>부위</td>
                            <td>{data.region}</td>
                        </tr>
                        <tr>
                            <td>불주중랼(kg)</td>
                            <td>{data.nonBurnedWeight}</td>
                        </tr>
                        <tr>
                            <td>실중량(g)</td>
                            <td>{data.actualWeight}</td>
                        </tr>
                        <tr>
                            <td>손질 후 중량</td>
                            <td>{data.processedWeight}</td>
                        </tr>
                        <tr>
                            <td>손실중량</td>
                            <td>{data.lossWeight}</td>
                        </tr>
                        <tr>
                            <td>잔여량</td>
                            <td>{data.remainingWeight}</td>
                        </tr>
                        <tr>
                            <td>생산수(팩)</td>
                            <td>
                                <ul>
                                    <li>구이: {data.productionCount?.gui}</li>
                                    <li>불고기: {data.productionCount?.bulgogi}</li>
                                    <li>당체: {data.productionCount?.tangsuyuk}</li>
                                    <li>부등: {data.productionCount?.bujeon}</li>
                                    <li>국거리: {data.productionCount?.gukgori}</li>
                                    <li>사은품: {data.productionCount?.gift}</li>
                                    <li>합계: {data.total}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>단가</td>
                            <td>{data.unitPrice}</td>
                        </tr>
                        <tr>
                            <td>금액</td>
                            <td>{data.amount}</td>
                        </tr>
                        <tr>
                            <td>제품수율</td>
                            <td>{data.productYield}</td>
                        </tr>
                        <tr>
                            <td>로스율</td>
                            <td>{data.lossRate}</td>
                        </tr>
                        <tr>
                            <td>판매이익</td>
                            <td>{data.salesProfit}</td>
                        </tr>
                        <tr>
                            <td>순이익</td>
                            <td>{data.netProfit}</td>
                        </tr>
                        <tr>
                            <td>수익율</td>
                            <td>{data.profitRate}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SettlementSalesPage;
