import React, { useState } from 'react';
import Pagination from '../component/Pagination'; // Make sure the path is correct
import '../css/Pagination.css'; // Ensure this path is correct

const SettlementSalesPage = () => {
    const [data] = useState([
        { id: 213885962, part: "부위1", orderWeight: 4.3, actualWeight: 3736, trimmedWeight: 274, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "93%", gift: "₩612,000", total: "₩12,000", unitPrice: "₩12,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩612,000", netProfit: "₩12,000", netProfitRate: "35%", avgNetProfit: "₩12,000" },
        { id: 214019318, part: "부위2", orderWeight: 4.3, actualWeight: 4301, trimmedWeight: 360, trimmingWeight: 5, remainingWeight: 5, grill: "₩30,000", stew: "90%", gift: "₩567,000", total: "₩27,000", unitPrice: "₩27,000", amount: "30%", productYield: "30%", lossRate: "30%", sales: "₩567,000", netProfit: "₩27,000", netProfitRate: "30%", avgNetProfit: "₩27,000" },
        { id: 213937694, part: "부위3", orderWeight: 4.4, actualWeight: 3880, trimmedWeight: 320, trimmingWeight: 10, remainingWeight: 10, grill: "₩39,000", stew: "95%", gift: "₩621,000", total: "₩22,000", unitPrice: "₩22,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩621,000", netProfit: "₩22,000", netProfitRate: "35%", avgNetProfit: "₩22,000" },
        { id: 214073865, part: "부위4", orderWeight: 4.4, actualWeight: 3630, trimmedWeight: 350, trimmingWeight: 7, remainingWeight: 7, grill: "₩40,000", stew: "93%", gift: "₩639,000", total: "₩29,000", unitPrice: "₩29,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩639,000", netProfit: "₩29,000", netProfitRate: "32%", avgNetProfit: "₩29,000" },
        { id: 214129171, part: "부위5", orderWeight: 4.5, actualWeight: 4088, trimmedWeight: 288, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "90%", gift: "₩630,000", total: "₩30,000", unitPrice: "₩30,000", amount: "30%", productYield: "30%", lossRate: "30%", sales: "₩630,000", netProfit: "₩30,000", netProfitRate: "30%", avgNetProfit: "₩30,000" },
        { id: 213827235, part: "부위6", orderWeight: 4.5, actualWeight: 4321, trimmedWeight: 274, trimmingWeight: 7, remainingWeight: 7, grill: "₩40,000", stew: "95%", gift: "₩639,000", total: "₩29,000", unitPrice: "₩29,000", amount: "31%", productYield: "31%", lossRate: "31%", sales: "₩639,000", netProfit: "₩29,000", netProfitRate: "31%", avgNetProfit: "₩29,000" },
        { id: 213914916, part: "부위7", orderWeight: 4.6, actualWeight: 4599, trimmedWeight: 348, trimmingWeight: 10, remainingWeight: 10, grill: "₩92,000", stew: "94%", gift: "₩711,000", total: "₩49,000", unitPrice: "₩49,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩711,000", netProfit: "₩49,000", netProfitRate: "35%", avgNetProfit: "₩49,000" },
        { id: 214752268, part: "부위8", orderWeight: 4.7, actualWeight: 5046, trimmedWeight: 375, trimmingWeight: 8, remainingWeight: 8, grill: "₩56,000", stew: "92%", gift: "₩712,000", total: "₩12,000", unitPrice: "₩12,000", amount: "25%", productYield: "25%", lossRate: "25%", sales: "₩712,000", netProfit: "₩12,000", netProfitRate: "25%", avgNetProfit: "₩12,000" },
        { id: 213836016, part: "부위9", orderWeight: 5.2, actualWeight: 4490, trimmedWeight: 710, trimmingWeight: 15, remainingWeight: 15, grill: "₩73,000", stew: "90%", gift: "₩767,000", total: "₩27,000", unitPrice: "₩27,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩767,000", netProfit: "₩27,000", netProfitRate: "32%", avgNetProfit: "₩27,000" },
        { id: 213994453, part: "부위10", orderWeight: 5.3, actualWeight: 4567, trimmedWeight: 625, trimmingWeight: 10, remainingWeight: 10, grill: "₩105,000", stew: "98%", gift: "₩884,000", total: "₩54,000", unitPrice: "₩54,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩884,000", netProfit: "₩54,000", netProfitRate: "35%", avgNetProfit: "₩54,000" },
        { id: 213849449, part: "부위11", orderWeight: 4.6, actualWeight: 4375, trimmedWeight: 285, trimmingWeight: 10, remainingWeight: 10, grill: "₩40,000", stew: "92%", gift: "₩614,000", total: "₩24,000", unitPrice: "₩24,000", amount: "28%", productYield: "28%", lossRate: "28%", sales: "₩614,000", netProfit: "₩24,000", netProfitRate: "28%", avgNetProfit: "₩24,000" },
        { id: 213889762, part: "부위12", orderWeight: 5.0, actualWeight: 4210, trimmedWeight: 400, trimmingWeight: 14, remainingWeight: 14, grill: "₩50,000", stew: "94%", gift: "₩760,000", total: "₩30,000", unitPrice: "₩30,000", amount: "35%", productYield: "35%", lossRate: "35%", sales: "₩760,000", netProfit: "₩30,000", netProfitRate: "35%", avgNetProfit: "₩30,000" },
        { id: 214027458, part: "부위13", orderWeight: 4.3, actualWeight: 4310, trimmedWeight: 248, trimmingWeight: 16, remainingWeight: 16, grill: "₩45,000", stew: "96%", gift: "₩666,000", total: "₩32,000", unitPrice: "₩32,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩666,000", netProfit: "₩32,000", netProfitRate: "32%", avgNetProfit: "₩32,000" },
        { id: 214146839, part: "부위14", orderWeight: 5.1, actualWeight: 4000, trimmedWeight: 350, trimmingWeight: 15, remainingWeight: 15, grill: "₩60,000", stew: "93%", gift: "₩800,000", total: "₩36,000", unitPrice: "₩36,000", amount: "30%", productYield: "30%", lossRate: "30%", sales: "₩800,000", netProfit: "₩36,000", netProfitRate: "30%", avgNetProfit: "₩36,000" },
        { id: 213945610, part: "부위15", orderWeight: 4.8, actualWeight: 4120, trimmedWeight: 315, trimmingWeight: 12, remainingWeight: 12, grill: "₩48,000", stew: "94%", gift: "₩690,000", total: "₩28,000", unitPrice: "₩28,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩690,000", netProfit: "₩28,000", netProfitRate: "32%", avgNetProfit: "₩28,000" },
        { id: 214057623, part: "부위16", orderWeight: 4.9, actualWeight: 4400, trimmedWeight: 300, trimmingWeight: 11, remainingWeight: 11, grill: "₩55,000", stew: "92%", gift: "₩720,000", total: "₩26,000", unitPrice: "₩26,000", amount: "33%", productYield: "33%", lossRate: "33%", sales: "₩720,000", netProfit: "₩26,000", netProfitRate: "33%", avgNetProfit: "₩26,000" },
        { id: 214135492, part: "부위17", orderWeight: 5.0, actualWeight: 4500, trimmedWeight: 380, trimmingWeight: 14, remainingWeight: 14, grill: "₩58,000", stew: "91%", gift: "₩750,000", total: "₩29,000", unitPrice: "₩29,000", amount: "34%", productYield: "34%", lossRate: "34%", sales: "₩750,000", netProfit: "₩29,000", netProfitRate: "34%", avgNetProfit: "₩29,000" },
        { id: 213843719, part: "부위18", orderWeight: 4.6, actualWeight: 4280, trimmedWeight: 295, trimmingWeight: 10, remainingWeight: 10, grill: "₩43,000", stew: "93%", gift: "₩670,000", total: "₩25,000", unitPrice: "₩25,000", amount: "31%", productYield: "31%", lossRate: "31%", sales: "₩670,000", netProfit: "₩25,000", netProfitRate: "31%", avgNetProfit: "₩25,000" },
        { id: 214099328, part: "부위19", orderWeight: 4.9, actualWeight: 4700, trimmedWeight: 370, trimmingWeight: 13, remainingWeight: 13, grill: "₩53,000", stew: "92%", gift: "₩710,000", total: "₩27,000", unitPrice: "₩27,000", amount: "33%", productYield: "33%", lossRate: "33%", sales: "₩710,000", netProfit: "₩27,000", netProfitRate: "33%", avgNetProfit: "₩27,000" },
        { id: 213976812, part: "부위20", orderWeight: 5.1, actualWeight: 4800, trimmedWeight: 385, trimmingWeight: 15, remainingWeight: 15, grill: "₩62,000", stew: "94%", gift: "₩790,000", total: "₩35,000", unitPrice: "₩35,000", amount: "32%", productYield: "32%", lossRate: "32%", sales: "₩790,000", netProfit: "₩35,000", netProfitRate: "32%", avgNetProfit: "₩35,000" },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const filteredData = data.filter(item => 
        item.id.toString().includes(searchQuery) || 
        item.part.includes(searchQuery)
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredData.slice(indexOfFirstResult, indexOfLastResult);

    return (
        <div>
            <div className="processing-page-container">
                <h2>매입명세 페이지</h2>
                {/* Search field */}
                <div className="input-container">
                    <label htmlFor="searchQuery">검색</label>
                    <input
                        type="text"
                        id="searchQuery"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="월별조회"
                    />
                    <button>조회</button>
                </div>
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>이력번호</th>
                            <th>부위</th>
                            <th>발주중량(kg)</th>
                            <th>실중량(g)</th>
                            <th>손질후 중량</th>
                            <th>손질 중량</th>
                            <th>잔여량</th>
                            <th>구이</th>
                            <th>국거리</th>
                            <th>사은품</th>
                            <th>합계</th>
                            <th>단가</th>
                            <th>금액</th>
                            <th>제품수율</th>
                            <th>로스율</th>
                            <th>판매액</th>
                            <th>순이익</th>
                            <th>순이익률</th>
                            <th>순이익 평균</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
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
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredData.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default SettlementSalesPage;
