//결산 > 금액 페이지
import React, { useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';

const OthersProductPage = () => {
    const [searchResults] = useState([
        {
            no: 1,
            orderNumber: "2138836992",
            part: "삼겹",
            score: 4.3,
            orderQuantity: 3736,
            plannedQuantity: 274,
            sumQuantity: 10,
            totalQuantity: 4,
            sector1: {
                gui: 2,
                bulgogi: 3,
                standalone: 1,
                gukgueri: 2,
                sagol: 2,
                total: 10
            },
            unitPrice: "₩40,000",
            amount: "₩40,000",
            retentionRate: "93%",
            totalSales: "₩612,000",
            profit: "₩212,000",
            profitRate: "35%",
        },
        // Add more sample data as needed...
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10); // Default value is 10

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className="others-product-page-container">
            <div className="input-header">
                <input type="text" placeholder="월별조회" />
                <button>조회</button>
            </div>
            <label htmlFor="resultsPerPage">Results Per Page: </label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
            <div className="procurement-page-container">
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>이력번호</th>
                            <th>부위</th>
                            <th>발주량</th>
                            <th>실송량</th>
                            <th>합계량</th>
                            <th>생산수</th>
                            <th>구이</th>
                            <th>불고기</th>
                            <th>단독</th>
                            <th>국거리</th>
                            <th>사골</th>
                            <th>합계</th>
                            <th>단가</th>
                            <th>금액</th>
                            <th>지속률</th>
                            <th>총수량</th>
                            <th>판매이익</th>
                            <th>손이익</th>
                            <th>손이익률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.orderNumber}</td>
                                <td>{result.part}</td>
                                <td>{result.orderQuantity}</td>
                                <td>{result.plannedQuantity}</td>
                                <td>{result.sumQuantity}</td>
                                <td>{result.totalQuantity}</td>
                                <td>{result.sector1.gui}</td>
                                <td>{result.sector1.bulgogi}</td>
                                <td>{result.sector1.standalone}</td>
                                <td>{result.sector1.gukgueri}</td>
                                <td>{result.sector1.sagol}</td>
                                <td>{result.sector1.total}</td>
                                <td>{result.unitPrice}</td>
                                <td>{result.amount}</td>
                                <td>{result.retentionRate}</td>
                                <td>{result.totalSales}</td>
                                <td>{result.profit}</td>
                                <td>{result.profitRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(searchResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
                <div>
                </div>
            </div>
        </div>
    );
};

export default OthersProductPage;
