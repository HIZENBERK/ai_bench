import React, { useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct

const IncomingPage = () => {
    const [incomingResults] = useState([
        {
            no: 1,
            orderDateTime: "2023-06-01 10:30",
            expectedDeliveryDate: "2023-06-05",
            customerNumber: "Customer A (001)",
            orderWeight: 150.5,
            part: "Part A",
            orderAmount: 2000,
            receiver: "Receiver A",
            item: "Item A",
            actualWeight: 148.5,
            actualPurchasePrice: 1980,
            historyNumber: "HIST123456",
            slaughterDate: "2023-06-01",
            unitPrice: 13.33,
            arrivalNumber: "ARR123456",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 2,
            orderDateTime: "2023-06-02 11:00",
            expectedDeliveryDate: "2023-06-06",
            customerNumber: "Customer B (002)",
            orderWeight: 75.0,
            part: "Part B",
            orderAmount: 1000,
            receiver: "Receiver B",
            item: "Item B",
            actualWeight: 74.5,
            actualPurchasePrice: 990,
            historyNumber: "HIST123457",
            slaughterDate: "2023-06-02",
            unitPrice: 13.27,
            arrivalNumber: "ARR123457",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 3,
            orderDateTime: "2023-06-03 12:00",
            expectedDeliveryDate: "2023-06-07",
            customerNumber: "Customer C (003)",
            orderWeight: 120.0,
            part: "Part C",
            orderAmount: 1800,
            receiver: "Receiver C",
            item: "Item C",
            actualWeight: 119.0,
            actualPurchasePrice: 1785,
            historyNumber: "HIST123458",
            slaughterDate: "2023-06-03",
            unitPrice: 15.00,
            arrivalNumber: "ARR123458",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 4,
            orderDateTime: "2023-06-04 14:00",
            expectedDeliveryDate: "2023-06-08",
            customerNumber: "Customer D (004)",
            orderWeight: 90.0,
            part: "Part D",
            orderAmount: 1500,
            receiver: "Receiver D",
            item: "Item D",
            actualWeight: 89.0,
            actualPurchasePrice: 1485,
            historyNumber: "HIST123459",
            slaughterDate: "2023-06-04",
            unitPrice: 16.67,
            arrivalNumber: "ARR123459",
            status: "Cancelled",
            edit: "Edit"
        },
        {
            no: 5,
            orderDateTime: "2023-06-05 15:00",
            expectedDeliveryDate: "2023-06-09",
            customerNumber: "Customer E (005)",
            orderWeight: 200.0,
            part: "Part E",
            orderAmount: 2500,
            receiver: "Receiver E",
            item: "Item E",
            actualWeight: 198.0,
            actualPurchasePrice: 2475,
            historyNumber: "HIST123460",
            slaughterDate: "2023-06-05",
            unitPrice: 12.50,
            arrivalNumber: "ARR123460",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 6,
            orderDateTime: "2023-06-06 09:00",
            expectedDeliveryDate: "2023-06-10",
            customerNumber: "Customer F (006)",
            orderWeight: 110.0,
            part: "Part F",
            orderAmount: 1500,
            receiver: "Receiver F",
            item: "Item F",
            actualWeight: 109.0,
            actualPurchasePrice: 1485,
            historyNumber: "HIST123461",
            slaughterDate: "2023-06-06",
            unitPrice: 13.64,
            arrivalNumber: "ARR123461",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 7,
            orderDateTime: "2023-06-07 10:30",
            expectedDeliveryDate: "2023-06-11",
            customerNumber: "Customer G (007)",
            orderWeight: 130.0,
            part: "Part G",
            orderAmount: 1900,
            receiver: "Receiver G",
            item: "Item G",
            actualWeight: 128.0,
            actualPurchasePrice: 1872,
            historyNumber: "HIST123462",
            slaughterDate: "2023-06-07",
            unitPrice: 14.77,
            arrivalNumber: "ARR123462",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 8,
            orderDateTime: "2023-06-08 11:00",
            expectedDeliveryDate: "2023-06-12",
            customerNumber: "Customer H (008)",
            orderWeight: 140.0,
            part: "Part H",
            orderAmount: 2100,
            receiver: "Receiver H",
            item: "Item H",
            actualWeight: 138.0,
            actualPurchasePrice: 2070,
            historyNumber: "HIST123463",
            slaughterDate: "2023-06-08",
            unitPrice: 15.00,
            arrivalNumber: "ARR123463",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 9,
            orderDateTime: "2023-06-09 12:30",
            expectedDeliveryDate: "2023-06-13",
            customerNumber: "Customer I (009)",
            orderWeight: 100.0,
            part: "Part I",
            orderAmount: 1300,
            receiver: "Receiver I",
            item: "Item I",
            actualWeight: 98.0,
            actualPurchasePrice: 1274,
            historyNumber: "HIST123464",
            slaughterDate: "2023-06-09",
            unitPrice: 13.27,
            arrivalNumber: "ARR123464",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 10,
            orderDateTime: "2023-06-10 14:00",
            expectedDeliveryDate: "2023-06-14",
            customerNumber: "Customer J (010)",
            orderWeight: 180.0,
            part: "Part J",
            orderAmount: 2400,
            receiver: "Receiver J",
            item: "Item J",
            actualWeight: 178.0,
            actualPurchasePrice: 2370,
            historyNumber: "HIST123465",
            slaughterDate: "2023-06-10",
            unitPrice: 13.33,
            arrivalNumber: "ARR123465",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 11,
            orderDateTime: "2023-06-11 09:30",
            expectedDeliveryDate: "2023-06-15",
            customerNumber: "Customer K (011)",
            orderWeight: 115.0,
            part: "Part K",
            orderAmount: 1600,
            receiver: "Receiver K",
            item: "Item K",
            actualWeight: 114.0,
            actualPurchasePrice: 1584,
            historyNumber: "HIST123466",
            slaughterDate: "2023-06-11",
            unitPrice: 13.91,
            arrivalNumber: "ARR123466",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 12,
            orderDateTime: "2023-06-12 10:00",
            expectedDeliveryDate: "2023-06-16",
            customerNumber: "Customer L (012)",
            orderWeight: 95.0,
            part: "Part L",
            orderAmount: 1300,
            receiver: "Receiver L",
            item: "Item L",
            actualWeight: 94.0,
            actualPurchasePrice: 1287,
            historyNumber: "HIST123467",
            slaughterDate: "2023-06-12",
            unitPrice: 13.68,
            arrivalNumber: "ARR123467",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 13,
            orderDateTime: "2023-06-13 11:30",
            expectedDeliveryDate: "2023-06-17",
            customerNumber: "Customer M (013)",
            orderWeight: 145.0,
            part: "Part M",
            orderAmount: 2100,
            receiver: "Receiver M",
            item: "Item M",
            actualWeight: 143.0,
            actualPurchasePrice: 2070,
            historyNumber: "HIST123468",
            slaughterDate: "2023-06-13",
            unitPrice: 14.48,
            arrivalNumber: "ARR123468",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 14,
            orderDateTime: "2023-06-14 12:00",
            expectedDeliveryDate: "2023-06-18",
            customerNumber: "Customer N (014)",
            orderWeight: 125.0,
            part: "Part N",
            orderAmount: 1800,
            receiver: "Receiver N",
            item: "Item N",
            actualWeight: 124.0,
            actualPurchasePrice: 1782,
            historyNumber: "HIST123469",
            slaughterDate: "2023-06-14",
            unitPrice: 14.40,
            arrivalNumber: "ARR123469",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 15,
            orderDateTime: "2023-06-15 09:00",
            expectedDeliveryDate: "2023-06-19",
            customerNumber: "Customer O (015)",
            orderWeight: 80.0,
            part: "Part O",
            orderAmount: 1100,
            receiver: "Receiver O",
            item: "Item O",
            actualWeight: 79.0,
            actualPurchasePrice: 1089,
            historyNumber: "HIST123470",
            slaughterDate: "2023-06-15",
            unitPrice: 13.75,
            arrivalNumber: "ARR123470",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 16,
            orderDateTime: "2023-06-16 14:30",
            expectedDeliveryDate: "2023-06-20",
            customerNumber: "Customer P (016)",
            orderWeight: 105.0,
            part: "Part P",
            orderAmount: 1500,
            receiver: "Receiver P",
            item: "Item P",
            actualWeight: 104.0,
            actualPurchasePrice: 1488,
            historyNumber: "HIST123471",
            slaughterDate: "2023-06-16",
            unitPrice: 14.31,
            arrivalNumber: "ARR123471",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 17,
            orderDateTime: "2023-06-17 13:00",
            expectedDeliveryDate: "2023-06-21",
            customerNumber: "Customer Q (017)",
            orderWeight: 160.0,
            part: "Part Q",
            orderAmount: 2200,
            receiver: "Receiver Q",
            item: "Item Q",
            actualWeight: 158.0,
            actualPurchasePrice: 2178,
            historyNumber: "HIST123472",
            slaughterDate: "2023-06-17",
            unitPrice: 13.80,
            arrivalNumber: "ARR123472",
            status: "Pending",
            edit: "Edit"
        },
        {
            no: 18,
            orderDateTime: "2023-06-18 12:30",
            expectedDeliveryDate: "2023-06-22",
            customerNumber: "Customer R (018)",
            orderWeight: 135.0,
            part: "Part R",
            orderAmount: 1900,
            receiver: "Receiver R",
            item: "Item R",
            actualWeight: 133.0,
            actualPurchasePrice: 1875,
            historyNumber: "HIST123473",
            slaughterDate: "2023-06-18",
            unitPrice: 14.10,
            arrivalNumber: "ARR123473",
            status: "Shipped",
            edit: "Edit"
        },
        {
            no: 19,
            orderDateTime: "2023-06-19 09:30",
            expectedDeliveryDate: "2023-06-23",
            customerNumber: "Customer S (019)",
            orderWeight: 90.0,
            part: "Part S",
            orderAmount: 1200,
            receiver: "Receiver S",
            item: "Item S",
            actualWeight: 89.0,
            actualPurchasePrice: 1185,
            historyNumber: "HIST123474",
            slaughterDate: "2023-06-19",
            unitPrice: 13.33,
            arrivalNumber: "ARR123474",
            status: "Delivered",
            edit: "Edit"
        },
        {
            no: 20,
            orderDateTime: "2023-06-20 11:00",
            expectedDeliveryDate: "2023-06-24",
            customerNumber: "Customer T (020)",
            orderWeight: 85.0,
            part: "Part T",
            orderAmount: 1200,
            receiver: "Receiver T",
            item: "Item T",
            actualWeight: 84.0,
            actualPurchasePrice: 1188,
            historyNumber: "HIST123475",
            slaughterDate: "2023-06-20",
            unitPrice: 14.00,
            arrivalNumber: "ARR123475",
            status: "Pending",
            edit: "Edit"
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = incomingResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleRegisterNavigation = () => {
        // Add functionality here if needed
        console.log('Register button clicked');
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>입고 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="purchaseOrderNumber">발주번호</label>
                    <input type="text" id="purchaseOrderNumber"/>
                    <button>조회</button>
                    <label htmlFor="item" className="item-label">입고품목</label>
                    <input type="text" id="item"/>
                </div>
                <div className="input-container">
                    <label htmlFor="arrivalDateTime">입고일시</label>
                    <input type="text" id="arrivalDateTime"/>
                    <label htmlFor="historyNumber">이력번호</label>
                    <input type="text" id="historyNumber"/>
                </div>
                <div className="input-container">
                    <label htmlFor="receiver">입고자 명</label>
                    <input type="text" id="receiver"/>
                    <label htmlFor="unitPrice">입고단가</label>
                    <input type="text" id="unitPrice"/>
                </div>
                <div className="input-container">
                    <label htmlFor="actualWeight">실 중량</label>
                    <input type="text" id="actualWeight"/>
                </div>
                <div className="input-container">
                    <label htmlFor="actualPurchasePrice">실 매입가</label>
                    <input type="text" id="actualPurchasePrice"/>
                    <button>등록</button>
                </div>
                <button onClick={handleRegisterNavigation} className="register-button">등록</button>
            </div>
            <div className="procurement-page-container">
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>
                    <input type="text" id="orderDateTimeSearch"/>
                    <button>조회</button>
                </div>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>발주일시</th>
                            <th>입고 예정일</th>
                            <th>거래처(번호)</th>
                            <th>발주중량(KG)</th>
                            <th>부위</th>
                            <th>발주금액</th>
                            <th>입고자명</th>
                            <th>입고품목</th>
                            <th>실 중량</th>
                            <th>실 매입가</th>
                            <th>이력번호</th>
                            <th>도축일</th>
                            <th>입고단가</th>
                            <th>입고번호</th>
                            <th>상태</th>
                            <th>수정</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.no}</td>
                            <td>{result.orderDateTime}</td>
                            <td>{result.expectedDeliveryDate}</td>
                            <td>{result.customerNumber}</td>
                            <td>{result.orderWeight}</td>
                            <td>{result.part}</td>
                            <td>{result.orderAmount}</td>
                            <td>{result.receiver}</td>
                            <td>{result.item}</td>
                            <td>{result.actualWeight}</td>
                            <td>{result.actualPurchasePrice}</td>
                            <td>{result.historyNumber}</td>
                            <td>{result.slaughterDate}</td>
                            <td>{result.unitPrice}</td>
                            <td>{result.arrivalNumber}</td>
                            <td>{result.status}</td>
                            <td>{result.edit}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(incomingResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default IncomingPage;
