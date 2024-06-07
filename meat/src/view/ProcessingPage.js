import React, { useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct

const ProcessingPage = () => {
    const [processingResults] = useState([
        { no: 1, orderDateTime: "2023-06-01 10:30", customerNumber: "Customer A (001)", orderWeight: 150.5, part: "Part A", orderAmount: 2000, arrivalDateTime: "2023-06-05 14:00", receiver: "Receiver A", item: "Item A", actualWeight: 148.5, actualPurchasePrice: 1980, historyNumber: "HIST123456", slaughterDate: "2023-06-01", unitPrice: 13.33, workingDay: "Monday", worker: "Worker A", finalWeight: 145.0, loss: 3.5, discountRate: 0.1, productNumber: "PROD123456", status: "Pending", edit: "Edit" },
        { no: 2, orderDateTime: "2023-06-02 11:00", customerNumber: "Customer B (002)", orderWeight: 75.0, part: "Part B", orderAmount: 1000, arrivalDateTime: "2023-06-06 15:00", receiver: "Receiver B", item: "Item B", actualWeight: 74.5, actualPurchasePrice: 990, historyNumber: "HIST123457", slaughterDate: "2023-06-02", unitPrice: 13.27, workingDay: "Tuesday", worker: "Worker B", finalWeight: 73.0, loss: 1.5, discountRate: 0.2, productNumber: "PROD123457", status: "Shipped", edit: "Edit" },
        { no: 3, orderDateTime: "2023-06-03 12:00", customerNumber: "Customer C (003)", orderWeight: 120.0, part: "Part C", orderAmount: 1800, arrivalDateTime: "2023-06-07 13:00", receiver: "Receiver C", item: "Item C", actualWeight: 119.0, actualPurchasePrice: 1785, historyNumber: "HIST123458", slaughterDate: "2023-06-03", unitPrice: 15.00, workingDay: "Wednesday", worker: "Worker C", finalWeight: 117.0, loss: 2.0, discountRate: 0.15, productNumber: "PROD123458", status: "Delivered", edit: "Edit" },
        { no: 4, orderDateTime: "2023-06-04 14:00", customerNumber: "Customer D (004)", orderWeight: 90.0, part: "Part D", orderAmount: 1500, arrivalDateTime: "2023-06-08 16:00", receiver: "Receiver D", item: "Item D", actualWeight: 89.0, actualPurchasePrice: 1485, historyNumber: "HIST123459", slaughterDate: "2023-06-04", unitPrice: 16.67, workingDay: "Thursday", worker: "Worker D", finalWeight: 87.0, loss: 3.0, discountRate: 0.1, productNumber: "PROD123459", status: "Cancelled", edit: "Edit" },
        { no: 5, orderDateTime: "2023-06-05 15:00", customerNumber: "Customer E (005)", orderWeight: 110.0, part: "Part E", orderAmount: 1700, arrivalDateTime: "2023-06-09 17:00", receiver: "Receiver E", item: "Item E", actualWeight: 108.0, actualPurchasePrice: 1665, historyNumber: "HIST123460", slaughterDate: "2023-06-05", unitPrice: 15.45, workingDay: "Friday", worker: "Worker E", finalWeight: 106.0, loss: 2.0, discountRate: 0.12, productNumber: "PROD123460", status: "In Process", edit: "Edit" },
        { no: 6, orderDateTime: "2023-06-06 16:00", customerNumber: "Customer F (006)", orderWeight: 130.0, part: "Part F", orderAmount: 1950, arrivalDateTime: "2023-06-10 18:00", receiver: "Receiver F", item: "Item F", actualWeight: 129.0, actualPurchasePrice: 1925, historyNumber: "HIST123461", slaughterDate: "2023-06-06", unitPrice: 15.00, workingDay: "Saturday", worker: "Worker F", finalWeight: 127.0, loss: 2.0, discountRate: 0.1, productNumber: "PROD123461", status: "Completed", edit: "Edit" },
        { no: 7, orderDateTime: "2023-06-07 17:00", customerNumber: "Customer G (007)", orderWeight: 100.0, part: "Part G", orderAmount: 1400, arrivalDateTime: "2023-06-11 19:00", receiver: "Receiver G", item: "Item G", actualWeight: 99.0, actualPurchasePrice: 1386, historyNumber: "HIST123462", slaughterDate: "2023-06-07", unitPrice: 14.00, workingDay: "Sunday", worker: "Worker G", finalWeight: 97.0, loss: 2.0, discountRate: 0.1, productNumber: "PROD123462", status: "Pending", edit: "Edit" },
        { no: 8, orderDateTime: "2023-06-08 18:00", customerNumber: "Customer H (008)", orderWeight: 105.0, part: "Part H", orderAmount: 1500, arrivalDateTime: "2023-06-12 20:00", receiver: "Receiver H", item: "Item H", actualWeight: 104.0, actualPurchasePrice: 1485, historyNumber: "HIST123463", slaughterDate: "2023-06-08", unitPrice: 14.28, workingDay: "Monday", worker: "Worker H", finalWeight: 102.0, loss: 2.0, discountRate: 0.15, productNumber: "PROD123463", status: "Shipped", edit: "Edit" },
        { no: 9, orderDateTime: "2023-06-09 19:00", customerNumber: "Customer I (009)", orderWeight: 95.0, part: "Part I", orderAmount: 1400, arrivalDateTime: "2023-06-13 21:00", receiver: "Receiver I", item: "Item I", actualWeight: 94.0, actualPurchasePrice: 1386, historyNumber: "HIST123464", slaughterDate: "2023-06-09", unitPrice: 14.74, workingDay: "Tuesday", worker: "Worker I", finalWeight: 92.0, loss: 2.0, discountRate: 0.2, productNumber: "PROD123464", status: "Delivered", edit: "Edit" },
        { no: 10, orderDateTime: "2023-06-10 20:00", customerNumber: "Customer J (010)", orderWeight: 85.0, part: "Part J", orderAmount: 1200, arrivalDateTime: "2023-06-14 22:00", receiver: "Receiver J", item: "Item J", actualWeight: 84.0, actualPurchasePrice: 1188, historyNumber: "HIST123465", slaughterDate: "2023-06-10", unitPrice: 14.12, workingDay: "Wednesday", worker: "Worker J", finalWeight: 82.0, loss: 2.0, discountRate: 0.1, productNumber: "PROD123465", status: "Cancelled", edit: "Edit" },
        { no: 11, orderDateTime: "2023-06-11 21:00", customerNumber: "Customer K (011)", orderWeight: 90.0, part: "Part K", orderAmount: 1300, arrivalDateTime: "2023-06-15 23:00", receiver: "Receiver K", item: "Item K", actualWeight: 89.0, actualPurchasePrice: 1287, historyNumber: "HIST123466", slaughterDate: "2023-06-11", unitPrice: 14.33, workingDay: "Thursday", worker: "Worker K", finalWeight: 87.0, loss: 2.0, discountRate: 0.12, productNumber: "PROD123466", status: "In Process", edit: "Edit" },
        { no: 12, orderDateTime: "2023-06-12 22:00", customerNumber: "Customer L (012)", orderWeight: 115.0, part: "Part L", orderAmount: 1700, arrivalDateTime: "2023-06-16 00:00", receiver: "Receiver L", item: "Item L", actualWeight: 114.0, actualPurchasePrice: 1683, historyNumber: "HIST123467", slaughterDate: "2023-06-12", unitPrice: 14.78, workingDay: "Friday", worker: "Worker L", finalWeight: 112.0, loss: 2.0, discountRate: 0.15, productNumber: "PROD123467", status: "Completed", edit: "Edit" },
        { no: 13, orderDateTime: "2023-06-13 23:00", customerNumber: "Customer M (013)", orderWeight: 125.0, part: "Part M", orderAmount: 1900, arrivalDateTime: "2023-06-17 01:00", receiver: "Receiver M", item: "Item M", actualWeight: 124.0, actualPurchasePrice: 1881, historyNumber: "HIST123468", slaughterDate: "2023-06-13", unitPrice: 15.20, workingDay: "Saturday", worker: "Worker M", finalWeight: 122.0, loss: 2.0, discountRate: 0.2, productNumber: "PROD123468", status: "Pending", edit: "Edit" },
        { no: 14, orderDateTime: "2023-06-14 00:00", customerNumber: "Customer N (014)", orderWeight: 135.0, part: "Part N", orderAmount: 2000, arrivalDateTime: "2023-06-18 02:00", receiver: "Receiver N", item: "Item N", actualWeight: 134.0, actualPurchasePrice: 1980, historyNumber: "HIST123469", slaughterDate: "2023-06-14", unitPrice: 14.81, workingDay: "Sunday", worker: "Worker N", finalWeight: 132.0, loss: 2.0, discountRate: 0.18, productNumber: "PROD123469", status: "Shipped", edit: "Edit" },
        { no: 15, orderDateTime: "2023-06-15 01:00", customerNumber: "Customer O (015)", orderWeight: 140.0, part: "Part O", orderAmount: 2100, arrivalDateTime: "2023-06-19 03:00", receiver: "Receiver O", item: "Item O", actualWeight: 139.0, actualPurchasePrice: 2079, historyNumber: "HIST123470", slaughterDate: "2023-06-15", unitPrice: 15.00, workingDay: "Monday", worker: "Worker O", finalWeight: 137.0, loss: 2.0, discountRate: 0.1, productNumber: "PROD123470", status: "Delivered", edit: "Edit" },
        { no: 16, orderDateTime: "2023-06-16 02:00", customerNumber: "Customer P (016)", orderWeight: 145.0, part: "Part P", orderAmount: 2200, arrivalDateTime: "2023-06-20 04:00", receiver: "Receiver P", item: "Item P", actualWeight: 144.0, actualPurchasePrice: 2178, historyNumber: "HIST123471", slaughterDate: "2023-06-16", unitPrice: 15.17, workingDay: "Tuesday", worker: "Worker P", finalWeight: 142.0, loss: 2.0, discountRate: 0.15, productNumber: "PROD123471", status: "Cancelled", edit: "Edit" },
        { no: 17, orderDateTime: "2023-06-17 03:00", customerNumber: "Customer Q (017)", orderWeight: 150.0, part: "Part Q", orderAmount: 2300, arrivalDateTime: "2023-06-21 05:00", receiver: "Receiver Q", item: "Item Q", actualWeight: 149.0, actualPurchasePrice: 2277, historyNumber: "HIST123472", slaughterDate: "2023-06-17", unitPrice: 15.33, workingDay: "Wednesday", worker: "Worker Q", finalWeight: 147.0, loss: 2.0, discountRate: 0.2, productNumber: "PROD123472", status: "In Process", edit: "Edit" },
        { no: 18, orderDateTime: "2023-06-18 04:00", customerNumber: "Customer R (018)", orderWeight: 155.0, part: "Part R", orderAmount: 2400, arrivalDateTime: "2023-06-22 06:00", receiver: "Receiver R", item: "Item R", actualWeight: 154.0, actualPurchasePrice: 2376, historyNumber: "HIST123473", slaughterDate: "2023-06-18", unitPrice: 15.48, workingDay: "Thursday", worker: "Worker R", finalWeight: 152.0, loss: 2.0, discountRate: 0.12, productNumber: "PROD123473", status: "Completed", edit: "Edit" },
        { no: 19, orderDateTime: "2023-06-19 05:00", customerNumber: "Customer S (019)", orderWeight: 160.0, part: "Part S", orderAmount: 2500, arrivalDateTime: "2023-06-23 07:00", receiver: "Receiver S", item: "Item S", actualWeight: 159.0, actualPurchasePrice: 2475, historyNumber: "HIST123474", slaughterDate: "2023-06-19", unitPrice: 15.63, workingDay: "Friday", worker: "Worker S", finalWeight: 157.0, loss: 2.0, discountRate: 0.1, productNumber: "PROD123474", status: "Pending", edit: "Edit" },
        { no: 20, orderDateTime: "2023-06-20 06:00", customerNumber: "Customer T (020)", orderWeight: 165.0, part: "Part T", orderAmount: 2600, arrivalDateTime: "2023-06-24 08:00", receiver: "Receiver T", item: "Item T", actualWeight: 164.0, actualPurchasePrice: 2574, historyNumber: "HIST123475", slaughterDate: "2023-06-20", unitPrice: 15.76, workingDay: "Saturday", worker: "Worker T", finalWeight: 162.0, loss: 2.0, discountRate: 0.18, productNumber: "PROD123475", status: "Shipped", edit: "Edit" },
        // Add more data as required (up to 20 items)
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = processingResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div>
            <div className="processing-page-container">
                <h2>2차가공 페이지</h2>
                <div className="input-container">
                    <label htmlFor="rawMaterialNumber">원료 번호</label>
                    <input type="text" id="rawMaterialNumber"/>
                    <button>조회</button>
                </div>
                <div className="input-container">
                    <label htmlFor="workingDay">작업일(요일)</label>
                    <input type="text" id="workingDay"/>
                    <label htmlFor="loss">로스</label>
                    <input type="text" id="loss"/>
                </div>
                <div className="input-container">
                    <label htmlFor="worker">작업자</label>
                    <input type="text" id="worker"/>
                    <label htmlFor="unitPrice">단가</label>
                    <input type="text" id="unitPrice"/>
                </div>
                <div className="input-container">
                    <label htmlFor="finalWeight">작업 후 중량</label>
                    <input type="text" id="finalWeight"/>
                    <label htmlFor="discountRate">할인율</label>
                    <input type="text" id="discountRate"/>
                </div>
            </div>
            <div className="processing-page-container">
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>
                    <input type="text" id="orderDateTimeSearch"/>
                    <button>조회</button>
                </div>
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>발주일시</th>
                            <th>거래처(번호)</th>
                            <th>발주중량(KG)</th>
                            <th>부위</th>
                            <th>발주금액</th>
                            <th>입고일시</th>
                            <th>입고자명</th>
                            <th>입고품목</th>
                            <th>실중량</th>
                            <th>실 매입가</th>
                            <th>이력번호</th>
                            <th>도축일</th>
                            <th>입고단가</th>
                            <th>작업일</th>
                            <th>작업자</th>
                            <th>작업 후 중량</th>
                            <th>로스</th>
                            <th>단가</th>
                            <th>할인율</th>
                            <th>제품번호</th>
                            <th>상태</th>
                            <th>수정</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.no}</td>
                                <td>{result.orderDateTime}</td>
                                <td>{result.customerNumber}</td>
                                <td>{result.orderWeight}</td>
                                <td>{result.part}</td>
                                <td>{result.orderAmount}</td>
                                <td>{result.arrivalDateTime}</td>
                                <td>{result.receiver}</td>
                                <td>{result.item}</td>
                                <td>{result.actualWeight}</td>
                                <td>{result.actualPurchasePrice}</td>
                                <td>{result.historyNumber}</td>
                                <td>{result.slaughterDate}</td>
                                <td>{result.unitPrice}</td>
                                <td>{result.workingDay}</td>
                                <td>{result.worker}</td>
                                <td>{result.finalWeight}</td>
                                <td>{result.loss}</td>
                                <td>{result.unitPrice}</td>
                                <td>{result.discountRate}</td>
                                <td>{result.productNumber}</td>
                                <td>{result.status}</td>
                                <td>{result.edit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(processingResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProcessingPage;
