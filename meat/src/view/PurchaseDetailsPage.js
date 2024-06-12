import React, { useState } from 'react';
import Pagination from '../component/Pagination'; // Make sure the path is correct
import '../css/Pagination.css'; // Ensure this path is correct

const SettlementSalesPage = () => {
    const [data] = useState([
        { id: 213885962, year: 2021, part: "부위1", orderWeight: 4.3, actualWeight: 3736, trimmedWeight: 274, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "93%", gift: "₩612,000", total: "₩12,000", unitPrice: "₩12,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩612,000", netProfit: "₩12,000", netProfitRate: "35%", avgNetProfit: "₩12,000" },
        { id: 214019318, year: 2021, part: "부위2", orderWeight: 4.3, actualWeight: 4301, trimmedWeight: 360, trimmingWeight: 5, remainingWeight: 5, grill: "₩30,000", stew: "90%", gift: "₩567,000", total: "₩27,000", unitPrice: "₩27,000", amount: "30%", productYield: "30%", lossRate: "30%", sales: "₩567,000", netProfit: "₩27,000", netProfitRate: "30%", avgNetProfit: "₩27,000" },
        { id: 213937694, year: 2021, part: "부위3", orderWeight: 4.4, actualWeight: 3880, trimmedWeight: 320, trimmingWeight: 10, remainingWeight: 10, grill: "₩39,000", stew: "95%", gift: "₩621,000", total: "₩22,000", unitPrice: "₩22,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩621,000", netProfit: "₩22,000", netProfitRate: "35%", avgNetProfit: "₩22,000" },
        { id: 214073865, year: 2021, part: "부위4", orderWeight: 4.4, actualWeight: 3630, trimmedWeight: 350, trimmingWeight: 7, remainingWeight: 7, grill: "₩40,000", stew: "93%", gift: "₩639,000", total: "₩29,000", unitPrice: "₩29,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩639,000", netProfit: "₩29,000", netProfitRate: "32%", avgNetProfit: "₩29,000" },
        { id: 214129171, year: 2022, part: "부위5", orderWeight: 4.5, actualWeight: 4088, trimmedWeight: 288, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "90%", gift: "₩630,000", total: "₩30,000", unitPrice: "₩30,000", amount: "30%", productYield: "30%", lossRate: "30%", sales: "₩630,000", netProfit: "₩30,000", netProfitRate: "30%", avgNetProfit: "₩30,000" },
        { id: 213827235, year: 2022, part: "부위6", orderWeight: 4.5, actualWeight: 4321, trimmedWeight: 274, trimmingWeight: 7, remainingWeight: 7, grill: "₩40,000", stew: "95%", gift: "₩639,000", total: "₩29,000", unitPrice: "₩29,000", amount: "31%", productYield: "31%", lossRate: "31%", sales: "₩639,000", netProfit: "₩29,000", netProfitRate: "31%", avgNetProfit: "₩29,000" },
        { id: 213914916, year: 2022, part: "부위7", orderWeight: 4.6, actualWeight: 4599, trimmedWeight: 348, trimmingWeight: 10, remainingWeight: 10, grill: "₩92,000", stew: "94%", gift: "₩711,000", total: "₩49,000", unitPrice: "₩49,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩711,000", netProfit: "₩49,000", netProfitRate: "35%", avgNetProfit: "₩49,000" },
        { id: 214752268, year: 2022, part: "부위8", orderWeight: 4.7, actualWeight: 5046, trimmedWeight: 375, trimmingWeight: 8, remainingWeight: 8, grill: "₩56,000", stew: "92%", gift: "₩712,000", total: "₩12,000", unitPrice: "₩12,000", amount: "25%", productYield: "25%", lossRate: "25%", sales: "₩712,000", netProfit: "₩12,000", netProfitRate: "25%", avgNetProfit: "₩12,000" },
        { id: 213836016, year: 2022, part: "부위9", orderWeight: 5.2, actualWeight: 4490, trimmedWeight: 710, trimmingWeight: 15, remainingWeight: 15, grill: "₩73,000", stew: "90%", gift: "₩767,000", total: "₩27,000", unitPrice: "₩27,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩767,000", netProfit: "₩27,000", netProfitRate: "32%", avgNetProfit: "₩27,000" },
        { id: 213994453, year: 2023, part: "부위10", orderWeight: 5.3, actualWeight: 4567, trimmedWeight: 625, trimmingWeight: 10, remainingWeight: 10, grill: "₩105,000", stew: "98%", gift: "₩884,000", total: "₩54,000", unitPrice: "₩54,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩884,000", netProfit: "₩54,000", netProfitRate: "35%", avgNetProfit: "₩54,000" },
        { id: 213849449, year: 2023, part: "부위11", orderWeight: 4.6, actualWeight: 4375, trimmedWeight: 285, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "92%", gift: "₩614,000", total: "₩24,000", unitPrice: "₩24,000", amount: "28%", productYield: "28%", lossRate: "28%", sales: "₩614,000", netProfit: "₩24,000", netProfitRate: "28%", avgNetProfit: "₩24,000" },
        { id: 213889762, year: 2023, part: "부위12", orderWeight: 5.0, actualWeight: 4210, trimmedWeight: 400, trimmingWeight: 14, remainingWeight: 14, grill: "₩50,000", stew: "94%", gift: "₩760,000", total: "₩30,000", unitPrice: "₩30,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩760,000", netProfit: "₩30,000", netProfitRate: "35%", avgNetProfit: "₩30,000" },
        { id: 214027458, year: 2023, part: "부위13", orderWeight: 4.3, actualWeight: 4310, trimmedWeight: 248, trimmingWeight: 16, remainingWeight: 16, grill: "₩45,000", stew: "96%", gift: "₩666,000", total: "₩32,000", unitPrice: "₩32,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩666,000", netProfit: "₩32,000", netProfitRate: "32%", avgNetProfit: "₩32,000" },
        { id: 214080186, year: 2023, part: "부위14", orderWeight: 4.1, actualWeight: 4156, trimmedWeight: 308, trimmingWeight: 9, remainingWeight: 9, grill: "₩47,000", stew: "91%", gift: "₩624,000", total: "₩25,000", unitPrice: "₩25,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩624,000", netProfit: "₩25,000", netProfitRate: "35%", avgNetProfit: "₩25,000" },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage] = useState(10);
    const [yearFilter, setYearFilter] = useState("전체");

    const handleYearFilterChange = (event) => {
        setYearFilter(event.target.value);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    // Filter data based on year filter
    const filteredData = yearFilter === "전체" ? data : data.filter(item => item.year === parseInt(yearFilter));

    // Logic for displaying data
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredData.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="settlement-sales-page">
            <h1>매출명세</h1>
            <div className="filter-section">
                <label htmlFor="yearFilter">연도 필터: </label>
                <select id="yearFilter" value={yearFilter} onChange={handleYearFilterChange}>
                    <option value="전체">전체</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>연도</th>
                        <th>부위</th>
                        <th>주문중량</th>
                        <th>실중량</th>
                        <th>정산중량</th>
                        <th>트리밍중량</th>
                        <th>잔여중량</th>
                        <th>구이</th>
                        <th>전골</th>
                        <th>선물</th>
                        <th>합계</th>
                        <th>단가</th>
                        <th>금액</th>
                        <th>제품수율</th>
                        <th>손실율</th>
                        <th>매출</th>
                        <th>순이익</th>
                        <th>순이익율</th>
                        <th>평균순이익</th>
                    </tr>
                </thead>
                <tbody>
                    {currentResults.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.year}</td>
                            <td>{item.part}</td>
                            <td>{item.orderWeight}</td>
                            <td>{item.actualWeight}</td>
                            <td>{item.trimmedWeight}</td>
                            <td>{item.trimmingWeight}</td>
                            <td>{item.remainingWeight}</td>
                            <td>{item.grill}</td>
                            <td>{item.stew}</td>
                            <td>{item.gift}</td>
                            <td>{item.total}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.amount}</td>
                            <td>{item.productYield}</td>
                            <td>{item.lossRate}</td>
                            <td>{item.sales}</td>
                            <td>{item.netProfit}</td>
                            <td>{item.netProfitRate}</td>
                            <td>{item.avgNetProfit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                resultsPerPage={resultsPerPage}
                totalResults={filteredData.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default SettlementSalesPage;
